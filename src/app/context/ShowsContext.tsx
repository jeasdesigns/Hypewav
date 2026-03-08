import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Show, Artist, Venue, Track } from '../data/mockData';
import { fetchSeattleShows, TMEvent } from '../services/ticketmasterService';
import { fetchArtistByName, SpotifyArtist } from '../services/spotifyService';

// ─── Module-level cache ────────────────────────────────────────────────────────
// Lives outside React — survives component remounts and navigation.
// First load populates it; every subsequent render reads from it instantly.
let _shows: Show[] = [];
let _loading = true;
let _error: string | null = null;
let _fetchStarted = false;
const _listeners = new Set<() => void>();

function notify() {
  _listeners.forEach(fn => fn());
}
// ──────────────────────────────────────────────────────────────────────────────

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
  const artistName = attraction?.name ?? event.name;
  const tmImage = tmImageUrl(event);

  const artist: Artist = {
    id: spotify?.id ?? attraction?.id ?? artistName,
    spotifyId: spotify?.id,
    name: artistName,
    image: tmImage,
    genres: spotify?.genres ?? [],
    followers: spotify?.followers.total ?? 0,
    popularity: spotify?.popularity ?? 50,
    bio: '',
    topTracks: [] as Track[],
    spotifyUrl: spotify?.external_urls.spotify ?? attraction?.externalLinks?.spotify?.[0]?.url,
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
  const localTime = event.dates.start.localTime;

  return {
    id: event.id,
    artist,
    venue,
    date: event.dates.start.localDate,
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

async function fetchInBatches(
  names: string[],
  batchSize = 10
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

// Single fetch — called once, results shared across all consumers
async function loadShows() {
  if (_fetchStarted) return;
  _fetchStarted = true;

  try {
    const events = await fetchSeattleShows();

    // Phase 1: render TM data immediately
    _shows = events.map(e => buildShow(e, null));
    _loading = false;
    notify();

    // Phase 2: enrich with Spotify in background
    const names = [...new Set(events.map(e => e._embedded?.attractions?.[0]?.name ?? e.name))];
    const spotifyMap = await fetchInBatches(names, 10);

    _shows = events.map(e => {
      const name = e._embedded?.attractions?.[0]?.name ?? e.name;
      return buildShow(e, spotifyMap.get(name) ?? null);
    });
    notify();
  } catch {
    _error = 'Failed to load shows. Please try again.';
    _loading = false;
    notify();
  }
}

// ─── Context ───────────────────────────────────────────────────────────────────

interface ShowsContextValue {
  shows: Show[];
  loading: boolean;
  error: string | null;
}

const ShowsContext = createContext<ShowsContextValue>({
  shows: _shows,
  loading: _loading,
  error: _error,
});

export function ShowsProvider({ children }: { children: ReactNode }) {
  const [, forceRender] = useState(0);

  useEffect(() => {
    // Subscribe to cache updates
    const update = () => forceRender(n => n + 1);
    _listeners.add(update);

    // Kick off fetch if not already started
    loadShows();

    return () => {
      _listeners.delete(update);
    };
  }, []);

  return (
    <ShowsContext.Provider value={{ shows: _shows, loading: _loading, error: _error }}>
      {children}
    </ShowsContext.Provider>
  );
}

export function useShows() {
  return useContext(ShowsContext);
}
