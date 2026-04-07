// M1 — Spotify API utilities (Client Credentials flow — server-side only)
// Docs: https://developer.spotify.com/documentation/web-api

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID ?? "";
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET ?? "";
const TOKEN_URL = "https://accounts.spotify.com/api/token";
const BASE_URL = "https://api.spotify.com/v1";

// ── Token cache (module-level, server-side only) ─────────────
let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 10_000) {
    return cachedToken.value;
  }

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Spotify token error: ${res.status}`);

  const data = await res.json();
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };
  return cachedToken.value;
}

// ── Types ────────────────────────────────────────────────────
export interface SpotifyArtist {
  id: string;
  name: string;
  images: Array<{ url: string; width: number; height: number }>;
  genres: string[];
  followers: { total: number };
  popularity: number;
  external_urls: { spotify: string };
}

export interface SpotifyTrack {
  id: string;
  name: string;
  preview_url: string | null;
  duration_ms: number;
  album: {
    id: string;
    name: string;
    images: Array<{ url: string; width: number; height: number }>;
  };
  external_urls: { spotify: string };
}

// ── API calls ────────────────────────────────────────────────
export async function searchArtists(
  query: string,
  limit = 5
): Promise<SpotifyArtist[]> {
  const token = await getAccessToken();
  const params = new URLSearchParams({ q: query, type: "artist", limit: String(limit) });
  const res = await fetch(`${BASE_URL}/search?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Spotify search error: ${res.status}`);
  const data = await res.json();
  return data.artists.items as SpotifyArtist[];
}

export async function getArtistById(id: string): Promise<SpotifyArtist> {
  const token = await getAccessToken();
  const res = await fetch(`${BASE_URL}/artists/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Spotify artist error: ${res.status}`);
  return res.json();
}

export async function getArtistTopTracks(
  id: string,
  market = "US"
): Promise<SpotifyTrack[]> {
  const token = await getAccessToken();
  const res = await fetch(
    `${BASE_URL}/artists/${id}/top-tracks?market=${market}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) throw new Error(`Spotify top-tracks error: ${res.status}`);
  const data = await res.json();
  return data.tracks as SpotifyTrack[];
}
