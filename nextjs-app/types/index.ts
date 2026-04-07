// Shared app-level types

export interface Event {
  id: string;
  name: string;
  date: string;       // ISO date string
  time?: string;
  venue: string;
  city: string;
  imageUrl?: string;
  ticketUrl?: string;
  minPrice?: number;
  maxPrice?: number;
  currency?: string;
  genre?: string;
  artistIds?: string[]; // Ticketmaster attraction IDs
}

export interface Artist {
  id: string;
  name: string;
  imageUrl?: string;
  genres: string[];
  followers?: number;
  popularity?: number;
  spotifyUrl?: string;
  spotifyId?: string;
}

export type TabRoute = "/discover" | "/search" | "/saved" | "/me";
