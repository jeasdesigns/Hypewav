// Type definitions for the Hype.Wav data model.
// Mock data arrays have been removed — all data is sourced from live APIs
// via ShowsContext (Ticketmaster + Spotify).

export interface Artist {
  id: string;
  name: string;
  image: string;
  genres: string[];
  followers: number;
  monthlyListeners?: number;
  popularity: number;
  bio?: string;
  topTracks: Track[];
  spotifyUrl?: string;
  spotifyId?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  facebookUrl?: string;
}

export interface Track {
  id: string;
  name: string;
  plays: number;
  duration: string;
}

export interface Show {
  id: string;
  artist: Artist;
  supportingActs?: string[];
  venue: Venue;
  date: string;
  time: string;
  heatScore: number;
  ticketPrice: string;
  ticketStatus: 'available' | 'selling-fast' | 'sold-out' | 'free';
  image: string;
  description?: string;
  ticketUrl?: string;
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  capacity: number;
  distance?: string;
}
