import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Show, Artist, Venue, Track } from '../data/mockData';
import { fetchSeattleShows, TMEvent } from '../services/ticketmasterService';
import { fetchArtistByName, SpotifyArtist } from '../services/spotifyService';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ShowsCtx {
  shows: Show[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ShowsContext = createContext<ShowsCtx>({
  shows: [],
  loading: true,
  error: null,
  refresh: () => {},
});

export function useShows(): ShowsCtx {
  return useContext(ShowsContext);
}

// ─── Module-level data cache (persists across navigation, cleared on refresh) ─

let _cache: Show[] | null = null;
let _cacheTime = 0;
const STALE_MS = 45 * 60 * 1000;

// ─── Data helpers ─────────────────────────────────────────────────────────────

function tmImageUrl(event: TMEvent): string {
  return (
    event.images?.find(i => i.ratio === '16_9' && i.width >= 1024)?.url ??
    event.images?.find(i => i.ratio === '16_9')?.url ??
    event.images?.[0]?.url ??
    ''
  );
}

function buildShow(event: TMEvent, spotify: SpotifyArtist | null): Show {
  const attraction = event._embedded?.attractions?.[0];
  const venueData = event._embedded?.venues?.[0];
  const artistName = attraction?.name ?? event.name ?? 'Unknown Artist';

  const artist: Artist = {
    id: spotify?.id ?? attraction?.id ?? artistName,
    spotifyId: spotify?.id,
    name: artistName,
    image: tmImageUrl(event),
    genres: Array.isArray(spotify?.genres) ? spotify!.genres : [],
    followers: spotify?.followers?.total ?? 0,
    popularity: spotify?.popularity ?? 50,
    bio: '',
    topTracks: [] as Track[],
    spotifyUrl: spotify?.external_urls?.spotify ?? attraction?.externalLinks?.spotify?.[0]?.url,
    instagramUrl: attraction?.externalLinks?.instagram?.[0]?.url,
    youtubeUrl: attraction?.externalLinks?.youtube?.[0]?.url,
    facebookUrl: attraction?.externalLinks?.facebook?.[0]?.url,
  };

  const venue: Venue = {
    id: venueData?.id ?? 'unknown',
    name: venueData?.name ?? 'Unknown Venue',
    address: [
      venueData?.address?.line1,
      venueData?.city?.name,
      venueData?.state?.stateCode,
    ].filter(Boolean).join(', '),
    capacity: 0,
  };

  const priceMin = event.priceRanges?.[0]?.min;
  const localTime = event.dates?.start?.localTime;

  return {
    id: event.id,
    artist,
    venue,
    date: event.dates?.start?.localDate ?? '',
    time: localTime
      ? new Date(`2000-01-01T${localTime}`).toLocaleTimeString('en-US', {
          hour: 'numeric', minute: '2-digit', hour12: true,
        })
      : 'TBA',
    heatScore: spotify?.popularity ?? 50,
    ticketPrice: priceMin != null ? `$${Math.round(priceMin)}` : 'TBD',
    ticketStatus: 'available',
    image: tmImageUrl(event),
    ticketUrl: event.url,
  };
}

async function fetchInBatches(
  names: string[],
  batchSize = 10,
): Promise<Map<string, SpotifyArtist | null>> {
  const results = new Map<string, SpotifyArtist | null>();
  for (let i = 0; i < names.length; i += batchSize) {
    const batch = names.slice(i, i + batchSize);
    const settled = await Promise.allSettled(batch.map(n => fetchArtistByName(n)));
    settled.forEach((r, idx) => {
      results.set(batch[idx], r.status === 'fulfilled' ? r.value : null);
    });
  }
  return results;
}

// ─── Provider ─────────────────────────────────────────────────────────────────
// Place this INSIDE the router (e.g. MobileAppLayout) so context updates never
// cascade through RouterProvider, which destabilises React Router's reconciler.

export function ShowsProvider({ children }: { children: ReactNode }) {
  // Start with cached data if available so returning to Discover is instant
  const [shows, setShows] = useState<Show[]>(_cache ?? []);
  const [loading, setLoading] = useState<boolean>(_cache === null);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    // Use fresh cache on first mount; force re-fetch only after manual refresh
    if (_cache !== null && Date.now() - _cacheTime < STALE_MS && tick === 0) {
      setShows(_cache);
      setLoading(false);
      return;
    }

    let dead = false;

    (async () => {
      setLoading(true);
      setError(null);

      try {
        const events = await fetchSeattleShows();
        if (dead) return;

        // Phase 1 — render TM data immediately
        const tmShows = events.map(e => buildShow(e, null));
        setShows(tmShows);
        setLoading(false);

        // Phase 2 — enrich with Spotify in background
        const names = [
          ...new Set(
            events.map(e => e._embedded?.attractions?.[0]?.name ?? e.name ?? ''),
          ),
        ].filter(Boolean);

        const spotifyMap = await fetchInBatches(names, 30);
        if (dead) return;

        const enriched = events.map(e => {
          const name = e._embedded?.attractions?.[0]?.name ?? e.name ?? '';
          return buildShow(e, spotifyMap.get(name) ?? null);
        });

        _cache = enriched;
        _cacheTime = Date.now();
        // TEST: skip Phase 2 setShows to confirm enrichment causes blank
        // setShows(enriched);
      } catch {
        if (dead) return;
        setLoading(false);
        setError('Failed to load shows. Please try again.');
      }
    })();

    return () => {
      dead = true;
    };
  }, [tick]);

  function refresh() {
    _cache = null;
    _cacheTime = 0;
    setTick(t => t + 1);
  }

  return (
    <ShowsContext.Provider value={{ shows, loading, error, refresh }}>
      {children}
    </ShowsContext.Provider>
  );
}
