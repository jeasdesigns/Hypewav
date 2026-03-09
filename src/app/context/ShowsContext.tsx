import { useState, useEffect, ReactNode } from 'react';
import { Show, Artist, Venue, Track } from '../data/mockData';
import { fetchSeattleShows, TMEvent } from '../services/ticketmasterService';
import { fetchArtistByName, SpotifyArtist } from '../services/spotifyService';

// ─── Module-level store ────────────────────────────────────────────────────────

interface ShowsSnapshot {
  shows: Show[];
  loading: boolean;
  error: string | null;
}

let _shows: Show[] = [];
let _loading = true;
let _error: string | null = null;
let _fetchStarted = false;
let _fetchedAt = 0;
const STALE_MS = 45 * 60 * 1000;

const _listeners = new Set<() => void>();

function notify() {
  _listeners.forEach(fn => fn());
}

function getSnapshot(): ShowsSnapshot {
  return { shows: _shows, loading: _loading, error: _error };
}

// ─────────────────────────────────────────────────────────────────────────────

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

async function loadShows() {
  const isStale = _fetchedAt > 0 && Date.now() - _fetchedAt > STALE_MS;
  if (_fetchStarted && !isStale) return;

  _fetchStarted = true;
  _error = null;

  try {
    const events = await fetchSeattleShows();

    _shows = events.map(e => buildShow(e, null));
    _loading = false;
    _fetchedAt = Date.now();
    notify();

    const names = [...new Set(events.map(e => e._embedded?.attractions?.[0]?.name ?? e.name))];
    const spotifyMap = await fetchInBatches(names, 30);

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

// ─── Hook — subscribes to the module-level store via useState ────────────────
// Using useState + useEffect avoids React 18 concurrent mode edge cases with
// useSyncExternalStore where snapshot reads can silently produce stale renders
// on navigation.

export function useShows() {
  const [snap, setSnap] = useState<ShowsSnapshot>(getSnapshot);

  useEffect(() => {
    // Re-sync immediately: state may have changed between the render and this effect
    setSnap(getSnapshot());

    const unsub = () => setSnap(getSnapshot());
    _listeners.add(unsub);
    return () => { _listeners.delete(unsub); };
  }, []);

  return snap;
}

// ─── Provider — kicks off the fetch, stable at App root ──────────────────────

export function ShowsProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    loadShows();
  }, []);

  return <>{children}</>;
}

// Force a fresh fetch — call this from a "refresh" button
export function refreshShows() {
  _fetchedAt = 0;
  _fetchStarted = false;
  _loading = true;
  _error = null;
  notify();
  loadShows();
}
