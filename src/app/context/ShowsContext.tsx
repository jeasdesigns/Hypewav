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

  const spotifyImage = spotify?.images?.[0]?.url;
  const fallbackImage = tmImageUrl(event);

  const artist: Artist = {
    id: spotify?.id ?? attraction?.id ?? artistName,
    spotifyId: spotify?.id,
    name: artistName,
    image: spotifyImage ?? fallbackImage,
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
    image: spotifyImage ?? fallbackImage,
    ticketUrl: event.url,
  };
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

        const events = await fetchSeattleShows();
        if (cancelled) return;

        // Collect unique artist names
        const names = [
          ...new Set(
            events.map(e => e._embedded?.attractions?.[0]?.name ?? e.name)
          ),
        ];

        // Fetch Spotify data for each unique artist
        const spotifyMap = new Map<string, SpotifyArtist | null>();
        for (const name of names) {
          if (cancelled) return;
          const artist = await fetchArtistByName(name);
          spotifyMap.set(name, artist);
          // Small delay to avoid hammering the Worker
          await new Promise(r => setTimeout(r, 60));
        }

        if (cancelled) return;

        const enriched = events.map(event => {
          const name = event._embedded?.attractions?.[0]?.name ?? event.name;
          return buildShow(event, spotifyMap.get(name) ?? null);
        });

        setShows(enriched);
      } catch (err) {
        if (!cancelled) setError('Failed to load shows. Please try again.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
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
