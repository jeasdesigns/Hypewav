// M1 — Ticketmaster API utilities
// Docs: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/

const BASE_URL = "https://app.ticketmaster.com/discovery/v2";
const API_KEY = process.env.TICKETMASTER_API_KEY ?? "";

export interface TMEvent {
  id: string;
  name: string;
  url: string;
  dates: {
    start: { localDate: string; localTime?: string };
  };
  images: Array<{ url: string; ratio?: string; width: number; height: number }>;
  _embedded?: {
    venues?: Array<{
      name: string;
      city: { name: string };
      state?: { name: string };
      location?: { longitude: string; latitude: string };
    }>;
    attractions?: Array<{ id: string; name: string }>;
  };
  priceRanges?: Array<{ min: number; max: number; currency: string }>;
  classifications?: Array<{
    genre?: { name: string };
    subGenre?: { name: string };
  }>;
}

export interface TMEventsResponse {
  _embedded?: { events: TMEvent[] };
  page: { totalElements: number; totalPages: number; number: number };
}

interface DiscoverEventsParams {
  city?: string;
  latlong?: string; // "lat,long"
  radius?: number;
  unit?: "miles" | "km";
  classificationName?: string;
  keyword?: string;
  page?: number;
  size?: number;
}

export async function discoverEvents(
  params: DiscoverEventsParams
): Promise<TMEventsResponse> {
  const query = new URLSearchParams({
    apikey: API_KEY,
    size: String(params.size ?? 20),
    page: String(params.page ?? 0),
    sort: "date,asc",
    ...(params.city && { city: params.city }),
    ...(params.latlong && { latlong: params.latlong }),
    ...(params.radius && { radius: String(params.radius) }),
    ...(params.unit && { unit: params.unit }),
    ...(params.classificationName && {
      classificationName: params.classificationName,
    }),
    ...(params.keyword && { keyword: params.keyword }),
  });

  const res = await fetch(`${BASE_URL}/events.json?${query}`, {
    next: { revalidate: 300 }, // 5-min cache
  });

  if (!res.ok) {
    throw new Error(`Ticketmaster error: ${res.status}`);
  }

  return res.json();
}

export async function getEventById(id: string): Promise<TMEvent> {
  const res = await fetch(
    `${BASE_URL}/events/${id}.json?apikey=${API_KEY}`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) {
    throw new Error(`Ticketmaster error: ${res.status}`);
  }

  return res.json();
}
