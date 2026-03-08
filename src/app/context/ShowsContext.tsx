import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Show, Artist, Venue, Track } from '../data/mockData';
import { fetchSeattleShows, TMEvent } from '../services/ticketmasterService';
import { fetchArtistByName, SpotifyArtist } from '../services/spotifyService';

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
    ]
      .filter(Boolean)
      .join(', '),
    capacity: 0,
  };

  const priceMin = event.priceRanges?.[0]?.min;
  const ticketPrice = priceMin != null ? `$${Math.round(priceMin)}` : 'TBD';

  const localTime = event.dates.start.localTime;
  const time = localTime
    ? new Date(`2000-01-01T${localTime}`).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
    : 'TBA';

  return {
    id: event.id,
    artist,
    venue,
    date: event.dates.start.localDate,
    time,
    heatScore: spotify?.popularity ?? 50,
    ticketPrice,
    ticketStatus: 'available',
    image: tmImage,
    ticketUrl: event.url,
  };
}

// Fetch in parallel with a concurrency limit
async function fetchInBatches<T>(
  items: string[],
  fn: (name: string) => Promise<T>,
  batchSize = 10
): Promise<Map<string, T>> {
  const results = new Map<string, T>();
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const settled = await Promise.allSettled(batch.map(name => fn(name)));
    settled.forEach((result, idx) => {
      if (result.status === 'fulfilled') {
        results.set(batch[idx], result.value);
      } else {
        results.set(batch[idx], null as T);
      }
    });
  }
  return results;
}

interface ShowsContextValue {
  shows: Show[];
  loading: boolean;
  error: string | null;
}

const ShowsContext = createContext<ShowsContextValue>({
  shows: [],
  loading: true,
  error: null,
});

export function ShowsProvider({ children }: { children: ReactNode }) {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        // Step 1: Fetch Ticketmaster events — show immediately
        const events = await fetchSeattleShows();
        if (cancelled) return;

        // Render shows right away with TM data (no Spotify yet)
        const initialShows = events.map(event => buildShow(event, null));
        setShows(initialShows);
        setLoading(false); // ← App is visible now

        // Step 2: Fetch Spotify data in parallel batches in the background
        const uniqueNames = [
          ...new Set(events.map(e => e._embedded?.attractions?.[0]?.name ?? e.name)),
        ];

        const spotifyMap = await fetchInBatches(uniqueNames, fetchArtistByName, 10);
        if (cancelled) return;

        // Step 3: Re-render shows enriched with Spotify data
        const enriched = events.map(event => {
          const name = event._embedded?.attractions?.[0]?.name ?? event.name;
          return buildShow(event, spotifyMap.get(name) ?? null);
        });

        setShows(enriched);
      } catch (err) {
        if (!cancelled) {
          setError('Failed to load shows. Please try again.');
          setLoading(false);
        }
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <ShowsContext.Provider value={{ shows, loading, error }}>
      {children}
    </ShowsContext.Provider>
  );
}

export function useShows() {
  return useContext(ShowsContext);
}
