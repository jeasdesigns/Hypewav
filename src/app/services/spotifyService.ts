const WORKER_BASE = 'https://localmusicapp.jes-design.workers.dev';
const SPOTIFY_API = 'https://api.spotify.com/v1';

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

// Token cache
let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getToken(): Promise<string | null> {
  if (cachedToken && Date.now() < tokenExpiresAt) return cachedToken;
  try {
    const res = await fetch(`${WORKER_BASE}/api/token`);
    if (!res.ok) return null;
    const data = await res.json();
    cachedToken = data.access_token ?? null;
    // Spotify tokens last 3600s — refresh after 55 minutes
    tokenExpiresAt = Date.now() + 55 * 60 * 1000;
    return cachedToken;
  } catch {
    return null;
  }
}

// Module-level caches
const artistCache = new Map<string, SpotifyArtist | null>();
const tracksCache = new Map<string, SpotifyTrack[]>();

export async function fetchArtistByName(name: string): Promise<SpotifyArtist | null> {
  const key = name.toLowerCase();
  if (artistCache.has(key)) return artistCache.get(key)!;

  const token = await getToken();
  if (!token) {
    artistCache.set(key, null);
    return null;
  }

  try {
    // Search Spotify by artist name
    const searchRes = await fetch(
      `${SPOTIFY_API}/search?q=${encodeURIComponent(name)}&type=artist&limit=5`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!searchRes.ok) {
      artistCache.set(key, null);
      return null;
    }

    const searchData = await searchRes.json();
    const artists: SpotifyArtist[] = searchData.artists?.items ?? [];

    if (artists.length === 0) {
      artistCache.set(key, null);
      return null;
    }

    // Find best match: exact name match first, then closest
    const nameLower = name.toLowerCase();
    const exactMatch = artists.find(a => a.name.toLowerCase() === nameLower);
    const bestMatch = exactMatch ?? artists[0];

    artistCache.set(key, bestMatch);
    return bestMatch;
  } catch {
    artistCache.set(key, null);
    return null;
  }
}

export async function fetchTopTracks(name: string, spotifyId: string): Promise<SpotifyTrack[]> {
  if (tracksCache.has(spotifyId)) return tracksCache.get(spotifyId)!;

  try {
    // Use the worker endpoint which handles market/auth server-side
    const res = await fetch(
      `${WORKER_BASE}/api/top-tracks?name=${encodeURIComponent(name)}&id=${encodeURIComponent(spotifyId)}`
    );
    if (!res.ok) {
      // Fallback: fetch directly from Spotify API
      const token = await getToken();
      if (!token) {
        tracksCache.set(spotifyId, []);
        return [];
      }
      const fallback = await fetch(
        `${SPOTIFY_API}/artists/${spotifyId}/top-tracks?market=US`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (!fallback.ok) {
        tracksCache.set(spotifyId, []);
        return [];
      }
      const data = await fallback.json();
      const tracks: SpotifyTrack[] = data.tracks ?? [];
      tracksCache.set(spotifyId, tracks);
      return tracks;
    }

    const data = await res.json();
    const tracks: SpotifyTrack[] = Array.isArray(data) ? data : data.tracks ?? [];
    tracksCache.set(spotifyId, tracks);
    return tracks;
  } catch {
    tracksCache.set(spotifyId, []);
    return [];
  }
}

export function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
