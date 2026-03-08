const WORKER_BASE = 'https://localmusicapp.jes-design.workers.dev';

export interface SpotifyArtist {
  id: string;
  name: string;
  genres: string[];
  images: Array<{ url: string; height: number; width: number }>;
  followers: { href: null; total: number };
  popularity: number;
  external_urls: { spotify: string };
}

export interface SpotifyTrack {
  id: string;
  name: string;
  duration_ms: number;
  popularity: number;
  preview_url: string | null;
  external_urls: { spotify: string };
  album: {
    name: string;
    images: Array<{ url: string; height: number; width: number }>;
  };
  artists: Array<{ name: string; id: string }>;
}

// Module-level caches — persist for the lifetime of the page session
const artistCache = new Map<string, SpotifyArtist | null>();
const tracksCache = new Map<string, SpotifyTrack[]>();

export async function fetchArtistByName(name: string): Promise<SpotifyArtist | null> {
  const key = name.toLowerCase();
  if (artistCache.has(key)) return artistCache.get(key)!;

  try {
    const res = await fetch(`${WORKER_BASE}/api/artist?name=${encodeURIComponent(name)}`);
    if (!res.ok) {
      artistCache.set(key, null);
      return null;
    }
    const data: SpotifyArtist = await res.json();
    artistCache.set(key, data);
    return data;
  } catch {
    artistCache.set(key, null);
    return null;
  }
}

export async function fetchTopTracks(name: string, spotifyId: string): Promise<SpotifyTrack[]> {
  const key = spotifyId;
  if (tracksCache.has(key)) return tracksCache.get(key)!;

  try {
    const res = await fetch(
      `${WORKER_BASE}/api/top-tracks?name=${encodeURIComponent(name)}&id=${encodeURIComponent(spotifyId)}`
    );
    if (!res.ok) {
      tracksCache.set(key, []);
      return [];
    }
    const data = await res.json();
    // Worker may return array directly or wrapped in { tracks: [] }
    const tracks: SpotifyTrack[] = Array.isArray(data) ? data : data.tracks ?? [];
    tracksCache.set(key, tracks);
    return tracks;
  } catch {
    tracksCache.set(key, []);
    return [];
  }
}

export function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
