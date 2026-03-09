import { createContext, useContext, useState, useEffect, useCallback, ReactNode, useRef } from 'react';
import { Show, Artist, Venue, Track } from '../data/mockData';
import { fetchSeattleShows, TMEvent } from '../services/ticketmasterService';
import { fetchArtistByName, SpotifyArtist } from '../services/spotifyService';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ShowsState {
  shows: Show[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ShowsContext = createContext<ShowsState>({
  shows: [],
  loading: true,
  error: null,
  refresh: () => {},
});

export function useShows() {
  return useContext(ShowsContext);
}

// ─── Module-level cache (persists across re-renders, cleared on refresh) ──────

let _cachedShows: Show[] | null = null;
let _cachedAt = 0;
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
  const tmImage = tmImageUrl(event);

  const artist: Artist = {
    id: spotify?.id ?? attraction?.id ?? artistName,
    spotifyId: spotify?.id,
    name: artistName,
    image: tmImage,
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
    image: tmImage,
    ticketUrl: event.url,
  };
}

async function fetchInBatches(names: string[], batchSize = 10): Promise<Map<string, SpotifyArtist | null>> {
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

export function ShowsProvider({ children }: { children: ReactNode }) {
  const hasCachedData = _cachedShows !== null && Date.now() - _cachedAt < STALE_MS;

  const [shows, setShows] = useState<Show[]>(hasCachedData ? _cachedShows! : []);
  const [loading, setLoading] = useState(!hasCachedData);
  const [error, setError] = useState<string | null>(null);
  const [fetchKey, setFetchKey] = useState(0);

  const fetchKeyRef = useRef(fetchKey);
  useEffect(() => { fetchKeyRef.current = fetchKey; }, [fetchKey]);

  useEffect(() => {
    const thisFetch = fetchKey;

    // If fresh cached data exists and this isn't a manual refresh, skip
    if (_cachedShows !== null && Date.now() - _cachedAt < STALE_MS && fetchKey === 0) {
      setShows(_cachedShows);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const events = await fetchSeattleShows();
        if (cancelled || fetchKeyRef.current !== thisFetch) return;

        // Phase 1: TM data — render immediately
        const tmShows = events.map(e => buildShow(e, null));
        setShows(tmShows);
        setLoading(false);

        // Phase 2: Spotify enrichment — update in background
        const names = [...new Set(events.map(e =>
          e._embedded?.attractions?.[0]?.name ?? e.name ?? ''
        ))].filter(Boolean);

        const spotifyMap = await fetchInBatches(names, 30);
        if (cancelled || fetchKeyRef.current !== thisFetch) return;

        const enrichedShows = events.map(e => {
          const name = e._embedded?.attractions?.[0]?.name ?? e.name ?? '';
          return buildShow(e, spotifyMap.get(name) ?? null);
        });

        _cachedShows = enrichedShows;
        _cachedAt = Date.now();
        setShows(enrichedShows);
      } catch {
        if (cancelled || fetchKeyRef.current !== thisFetch) return;
        setLoading(false);
        setError('Failed to load shows. Please try again.');
      }
    }

    load();
    return () => { cancelled = true; };
  }, [fetchKey]);

  const refresh = useCallback(() => {
    _cachedShows = null;
    _cachedAt = 0;
    setFetchKey(k => k + 1);
  }, []);

  return (
    <ShowsContext.Provider value={{ shows, loading, error, refresh }}>
      {children}
    </ShowsContext.Provider>
  );
}
