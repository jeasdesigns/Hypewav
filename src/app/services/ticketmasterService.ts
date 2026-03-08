const TM_BASE = 'https://app.ticketmaster.com/discovery/v2';

export interface TMEvent {
  id: string;
  name: string;
  url: string;
  dates: {
    start: {
      localDate: string;
      localTime?: string;
    };
  };
  priceRanges?: Array<{
    min: number;
    max: number;
    currency: string;
  }>;
  images: Array<{
    url: string;
    ratio: string;
    width: number;
    height: number;
  }>;
  _embedded?: {
    venues?: Array<{
      id: string;
      name: string;
      address?: { line1: string };
      city?: { name: string };
      state?: { stateCode: string };
      postalCode?: string;
      location?: { longitude: string; latitude: string };
    }>;
    attractions?: Array<{
      id: string;
      name: string;
      url?: string;
      externalLinks?: {
        spotify?: Array<{ url: string }>;
        instagram?: Array<{ url: string }>;
        twitter?: Array<{ url: string }>;
        youtube?: Array<{ url: string }>;
        facebook?: Array<{ url: string }>;
      };
    }>;
  };
}

export async function fetchSeattleShows(): Promise<TMEvent[]> {
  const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
  const now = new Date();
  const threeWeeksOut = new Date(now.getTime() + 21 * 24 * 60 * 60 * 1000);

  const params = new URLSearchParams({
    apikey: apiKey,
    city: 'Seattle',
    stateCode: 'WA',
    classificationName: 'music',
    size: '50',
    sort: 'date,asc',
    startDateTime: now.toISOString().split('.')[0] + 'Z',
    endDateTime: threeWeeksOut.toISOString().split('.')[0] + 'Z',
  });

  const res = await fetch(`${TM_BASE}/events.json?${params}`);
  if (!res.ok) throw new Error(`Ticketmaster error: ${res.status}`);
  const data = await res.json();
  return data._embedded?.events ?? [];
}

export async function fetchEventById(id: string): Promise<TMEvent | null> {
  const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
  const res = await fetch(`${TM_BASE}/events/${id}.json?apikey=${apiKey}`);
  if (!res.ok) return null;
  return res.json();
}
