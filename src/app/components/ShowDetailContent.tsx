import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router';
import { ChevronLeft, MapPin, Clock, DollarSign, Share2, Heart, Loader2, ExternalLink, Play, Pause, Check } from 'lucide-react';
import { VenueMap } from './VenueMap';
import { useShows } from '../context/ShowsContext';
import { useSaved } from '../context/SavedContext';
import { fetchEventById } from '../services/ticketmasterService';
import { fetchArtistByName, fetchTopTracks, SpotifyTrack } from '../services/spotifyService';
import { Show } from '../data/mockData';

interface ShowDetailContentProps {
  showId: string;
  onClose?: () => void;
  onSelect?: (showId: string) => void;
}

export function ShowDetailContent({ showId, onClose, onSelect }: ShowDetailContentProps) {
  const { shows } = useShows();
  const { isSaved, toggleSaved } = useSaved();

  const [show, setShow] = useState<Show | null>(null);
  const [topTracks, setTopTracks] = useState<SpotifyTrack[]>([]);
  const [showAllTracks, setShowAllTracks] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [shareCopied, setShareCopied] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Stop audio on unmount
  useEffect(() => {
    return () => { audioRef.current?.pause(); };
  }, []);

  const playTrack = useCallback((track: SpotifyTrack) => {
    if (!track.preview_url) return;

    if (playingTrackId === track.id) {
      audioRef.current?.pause();
      setPlayingTrackId(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }

    const audio = new Audio(track.preview_url);
    audioRef.current = audio;

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    });
    audio.addEventListener('ended', () => {
      setPlayingTrackId(null);
      setProgress(0);
    });

    audio.play().catch(() => setPlayingTrackId(null));
    setPlayingTrackId(track.id);
    setProgress(0);
  }, [playingTrackId]);

  const handleShare = useCallback(async (showId: string, artistName: string, venueName: string) => {
    const url = `${window.location.origin}/show/${showId}`;
    const text = `Check out ${artistName} at ${venueName}`;
    if (navigator.share) {
      try { await navigator.share({ title: artistName, text, url }); } catch { /* user cancelled */ }
    } else {
      await navigator.clipboard.writeText(url);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  }, []);

  const showsRef = useRef(shows);
  useEffect(() => { showsRef.current = shows; }, [shows]);

  useEffect(() => {
    if (!showId) return;
    let cancelled = false;

    // Reset state when showId changes
    setShow(null);
    setTopTracks([]);
    setShowAllTracks(false);
    setPlayingTrackId(null);
    setProgress(0);
    audioRef.current?.pause();

    async function load() {
      setLoading(true);

      let found = showsRef.current.find(s => s.id === showId) ?? null;

      if (!found) {
        const event = await fetchEventById(showId);
        if (event && !cancelled) {
          const artistName = event._embedded?.attractions?.[0]?.name ?? event.name;
          const spotify = await fetchArtistByName(artistName);
          const tmImg = event.images?.find((i: any) => i.ratio === '16_9' && i.width >= 1024)?.url
            ?? event.images?.find((i: any) => i.ratio === '16_9')?.url
            ?? event.images?.[0]?.url ?? '';
          found = {
            id: event.id,
            artist: {
              id: spotify?.id ?? artistName,
              spotifyId: spotify?.id,
              name: artistName,
              image: tmImg,
              genres: spotify?.genres ?? [],
              followers: spotify?.followers.total ?? 0,
              popularity: spotify?.popularity ?? 50,
              bio: '',
              topTracks: [],
              spotifyUrl: spotify?.external_urls.spotify,
            },
            venue: {
              id: event._embedded?.venues?.[0]?.id ?? 'unknown',
              name: event._embedded?.venues?.[0]?.name ?? 'Unknown Venue',
              address: [
                event._embedded?.venues?.[0]?.address?.line1,
                event._embedded?.venues?.[0]?.city?.name,
                event._embedded?.venues?.[0]?.state?.stateCode,
              ].filter(Boolean).join(', '),
              capacity: 0,
            },
            date: event.dates.start.localDate,
            time: event.dates.start.localTime
              ? new Date(`2000-01-01T${event.dates.start.localTime}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
              : 'TBA',
            heatScore: spotify?.popularity ?? 50,
            ticketPrice: event.priceRanges?.[0]?.min != null ? `$${Math.round(event.priceRanges[0].min)}` : 'TBD',
            ticketStatus: 'available',
            image: tmImg,
            ticketUrl: event.url,
          };
        }
      }

      if (!cancelled) setShow(found);

      if (found?.artist.name) {
        let spotifyId = found.artist.spotifyId;
        if (!spotifyId) {
          const spotify = await fetchArtistByName(found.artist.name);
          spotifyId = spotify?.id;
          if (spotify && found) {
            found = {
              ...found,
              artist: {
                ...found.artist,
                spotifyId: spotify.id,
                genres: found.artist.genres.length ? found.artist.genres : spotify.genres,
                followers: found.artist.followers || spotify.followers.total,
                spotifyUrl: found.artist.spotifyUrl || spotify.external_urls.spotify,
              },
            };
            if (!cancelled) setShow(found);
          }
        }
        if (spotifyId) {
          const tracks = await fetchTopTracks(found.artist.name, spotifyId);
          if (!cancelled) setTopTracks(tracks);
        }
      }

      if (!cancelled) setLoading(false);
    }

    load();
    return () => { cancelled = true; };
  }, [showId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="w-10 h-10 text-hype-violet animate-spin" />
      </div>
    );
  }

  if (!show) {
    return (
      <div className="flex items-center justify-center py-32 text-center px-8">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-hype-text-primary">Show not found</h2>
          {onClose ? (
            <button onClick={onClose} className="text-hype-violet">Go back</button>
          ) : (
            <Link to="/" className="text-hype-violet">Go back to discover</Link>
          )}
        </div>
      </div>
    );
  }

  const displayDate = new Date(show.date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const similarShows = shows
    .filter(s => s.id !== show.id && s.artist.genres.some(g => show.artist.genres.includes(g)))
    .slice(0, 3);

  const tracksToShow = topTracks.slice(0, showAllTracks ? 10 : 3);

  const artistQuery = encodeURIComponent(show.artist.name);
  const stubhubUrl = `https://www.stubhub.com/search?q=${artistQuery}+Seattle`;
  const seatgeekUrl = `https://seatgeek.com/search?q=${artistQuery}`;

  return (
    <>
      {/* Hero */}
      <div className="relative h-[420px] bg-gradient-to-b from-hype-bg-secondary via-[#13121E] to-hype-bg-primary flex-shrink-0">
        <div className="absolute inset-0">
          {show.image && (
            <img
              src={show.image}
              alt={show.artist.name}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-hype-bg-primary" />
        </div>

        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
          {onClose ? (
            <button
              onClick={onClose}
              className="w-11 h-11 bg-hype-bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-hype-bg-primary transition-colors active:scale-95 border border-hype-bg-secondary"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          ) : (
            <Link
              to="/"
              className="w-11 h-11 bg-hype-bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-hype-bg-primary transition-colors active:scale-95 border border-hype-bg-secondary"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-hype-bg-primary via-hype-bg-primary/95 to-transparent">
          <div className="flex gap-2 mb-3 flex-wrap">
            {show.artist.genres.slice(0, 3).map(genre => (
              <span
                key={genre}
                className="px-3 py-1 bg-hype-violet/20 backdrop-blur-sm text-hype-violet text-xs font-medium rounded-full border border-hype-violet/30"
              >
                {genre}
              </span>
            ))}
          </div>
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold mb-2">{show.artist.name}</h1>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => handleShare(show.id, show.artist.name, show.venue.name)}
                className="w-10 h-10 bg-hype-bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-hype-bg-primary transition-colors active:scale-95 border border-hype-bg-secondary"
                aria-label="Share show"
              >
                {shareCopied
                  ? <Check className="w-5 h-5 text-hype-success" />
                  : <Share2 className="w-5 h-5" />
                }
              </button>
              <button
                onClick={() => show && toggleSaved(show)}
                className="w-10 h-10 bg-hype-bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-hype-bg-primary transition-colors active:scale-95 border border-hype-bg-secondary"
                aria-label={show && isSaved(show.id) ? 'Remove from saved' : 'Save show'}
              >
                <Heart className={`w-5 h-5 transition-colors ${show && isSaved(show.id) ? 'fill-hype-violet text-hype-violet' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 lg:px-8 pb-28 lg:pb-12 max-w-2xl mx-auto w-full">
        {/* Left column on desktop */}
        <div>
          {/* Event Details Card */}
          <div className="bg-hype-bg-secondary rounded-2xl p-5 mb-6 mt-6">
            {/* Date & Time */}
            <div className="mb-5 pb-5 border-b border-hype-bg-primary">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-hype-violet" />
                <div className="text-xs text-hype-text-secondary uppercase tracking-wide font-medium">Date & Time</div>
              </div>
              <div className="pl-6">
                <div className="font-semibold text-hype-text-primary mb-0.5">{displayDate}</div>
                <div className="text-sm text-hype-text-secondary">Doors: {show.time}</div>
              </div>
            </div>

            {/* Price & Ticket Outlets */}
            <div className="mb-5 pb-5 border-b border-hype-bg-primary">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-hype-success" />
                <div className="text-xs text-hype-text-secondary uppercase tracking-wide font-medium">Tickets</div>
              </div>
              <div className="pl-6 mb-4">
                <div className="font-semibold text-hype-text-primary">Starting from {show.ticketPrice}</div>
                <div className="text-sm text-hype-text-secondary">Available now</div>
              </div>

              <div className="pl-6 space-y-2">
                {/* Ticketmaster */}
                <a
                  href={show.ticketUrl ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-hype-bg-primary rounded-lg hover:bg-hype-bg-primary/70 transition-colors group border border-hype-bg-secondary hover:border-[#026CDF]/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#026CDF]/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#026CDF">
                        <path d="M21.7 5.6c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.2 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.3 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.2 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7s.7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.2 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.3 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7zm-3.2 0c-.4 0-.7.3-.7.7v11.3c0 .4.3.7.7.7.4 0 .7-.3.7-.7V6.3c0-.4-.3-.7-.7-.7z"/>
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-hype-text-primary group-hover:text-[#026CDF] transition-colors">Ticketmaster</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-hype-text-secondary group-hover:text-[#026CDF]" />
                </a>

                {/* StubHub */}
                <a
                  href={stubhubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-hype-bg-primary rounded-lg hover:bg-hype-bg-primary/70 transition-colors group border border-hype-bg-secondary hover:border-[#0051BA]/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0051BA]/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0051BA">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-hype-text-primary group-hover:text-[#0051BA] transition-colors">StubHub</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-hype-text-secondary group-hover:text-[#0051BA]" />
                </a>

                {/* SeatGeek */}
                <a
                  href={seatgeekUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-hype-bg-primary rounded-lg hover:bg-hype-bg-primary/70 transition-colors group border border-hype-bg-secondary hover:border-[#7B5BE6]/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#7B5BE6]/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#7B5BE6">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2v5h-2v-5zm0-3h2v2h-2V8z"/>
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-hype-text-primary group-hover:text-[#7B5BE6] transition-colors">SeatGeek</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-hype-text-secondary group-hover:text-[#7B5BE6]" />
                </a>
              </div>
            </div>

            {/* Venue */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-hype-cyan" />
                <div className="text-xs text-hype-text-secondary uppercase tracking-wide font-medium">Venue</div>
              </div>
              <div className="pl-6">
                <div className="font-semibold text-hype-text-primary mb-0.5">{show.venue.name}</div>
                <div className="text-sm text-hype-text-secondary">{show.venue.address}</div>
              </div>
              <div className="mt-3">
                <VenueMap
                  address={show.venue.address}
                  venueName={show.venue.name}
                  googleMapsUrl={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(show.venue.address)}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Artist Spotify Profile */}
        <div className="mb-6 mt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-hype-text-primary">Artist Profile</h3>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1DB954]/20 rounded-full border border-[#1DB954]/30">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#1DB954">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span className="text-xs font-medium text-[#1DB954]">Spotify</span>
            </div>
          </div>

          <div className="bg-hype-bg-secondary rounded-xl overflow-hidden">
            <div className="p-4 border-b border-hype-bg-primary">
              <div className="flex items-center gap-3 mb-4">
                {show.artist.image ? (
                  <img
                    src={show.artist.image}
                    alt={show.artist.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-[#1DB954]/30"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-hype-bg-primary ring-2 ring-[#1DB954]/30 flex items-center justify-center">
                    <span className="text-2xl">🎵</span>
                  </div>
                )}
                <div className="flex-1">
                  <div className="font-semibold text-hype-text-primary mb-1">{show.artist.name}</div>
                  <div className="flex items-center gap-3 text-sm text-hype-text-secondary">
                    {show.artist.followers > 0 && (
                      <span>{show.artist.followers.toLocaleString()} followers</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Genres */}
              {show.artist.genres.length > 0 && (
                <div className="flex gap-2 flex-wrap mb-4">
                  {show.artist.genres.slice(0, 4).map(genre => (
                    <span
                      key={genre}
                      className="px-2.5 py-1 bg-hype-bg-primary text-hype-text-secondary text-xs rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}

              {/* Social links */}
              <div>
                <div className="text-xs text-hype-text-secondary mb-2 uppercase tracking-wide font-medium">Follow Artist</div>
                <div className="flex items-center gap-2">
                  {show.artist.spotifyUrl && (
                    <a
                      href={show.artist.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-hype-bg-primary rounded-lg flex items-center justify-center hover:bg-[#1DB954]/20 transition-colors group"
                      aria-label="Spotify"
                    >
                      <svg className="w-4 h-4 text-hype-text-secondary group-hover:text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </a>
                  )}
                  {show.artist.instagramUrl && (
                    <a href={show.artist.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-hype-bg-primary rounded-lg flex items-center justify-center hover:bg-[#E4405F]/20 transition-colors group" aria-label="Instagram">
                      <svg className="w-4 h-4 text-hype-text-secondary group-hover:text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {show.artist.youtubeUrl && (
                    <a href={show.artist.youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-hype-bg-primary rounded-lg flex items-center justify-center hover:bg-[#FF0000]/20 transition-colors group" aria-label="YouTube">
                      <svg className="w-4 h-4 text-hype-text-secondary group-hover:text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  )}
                  {show.artist.facebookUrl && (
                    <a href={show.artist.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-hype-bg-primary rounded-lg flex items-center justify-center hover:bg-[#1877F2]/20 transition-colors group" aria-label="Facebook">
                      <svg className="w-4 h-4 text-hype-text-secondary group-hover:text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Top Tracks */}
            {topTracks.length > 0 && (
              <div className="p-4">
                <div className="text-xs text-hype-text-secondary mb-3 uppercase tracking-wide font-medium">Top Songs</div>
                <div className="space-y-1">
                  {topTracks.slice(0, showAllTracks ? 10 : 5).map((track, index) => {
                    const isPlaying = playingTrackId === track.id;
                    const hasPreview = !!track.preview_url;
                    return (
                      <div key={track.id} className="group">
                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-hype-bg-primary/50 transition-colors">
                          {hasPreview ? (
                            <button
                              onClick={() => playTrack(track)}
                              className="w-8 h-8 rounded-full bg-hype-bg-primary flex items-center justify-center flex-shrink-0 hover:bg-hype-violet/20 transition-colors"
                              aria-label={isPlaying ? 'Pause' : 'Play preview'}
                            >
                              {isPlaying
                                ? <Pause className="w-4 h-4 text-hype-violet" />
                                : <Play className="w-4 h-4 text-hype-text-secondary group-hover:text-hype-violet transition-colors" />
                              }
                            </button>
                          ) : (
                            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                              <span className="text-xs text-hype-text-secondary">{index + 1}</span>
                            </div>
                          )}

                          <div className="flex-1 min-w-0">
                            <div className={`text-sm font-medium truncate ${isPlaying ? 'text-hype-violet' : 'text-hype-text-primary'}`}>
                              {track.name}
                            </div>
                            {isPlaying && (
                              <div className="mt-1 h-0.5 bg-hype-bg-primary rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-hype-violet transition-all duration-200"
                                  style={{ width: `${progress}%` }}
                                />
                              </div>
                            )}
                          </div>

                          <div className="text-xs text-hype-text-secondary flex-shrink-0">
                            {Math.floor(track.duration_ms / 60000)}:{String(Math.floor((track.duration_ms % 60000) / 1000)).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {topTracks.length > 5 && (
                  <button
                    onClick={() => setShowAllTracks(v => !v)}
                    className="mt-3 text-xs text-hype-violet hover:underline w-full text-center"
                  >
                    {showAllTracks ? 'Show less' : `Show all ${topTracks.length} tracks`}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Similar Shows */}
        {similarShows.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-hype-text-primary">Similar Shows</h3>
              <Link to="/" className="text-sm text-hype-cyan font-medium hover:underline">
                See all
              </Link>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
              {similarShows.map(similarShow => {
                const cardInner = (
                  <>
                    <div className="relative h-24">
                      {similarShow.image && (
                        <img
                          src={similarShow.image}
                          alt={similarShow.artist.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    </div>
                    <div className="p-3">
                      <div className="font-semibold text-sm mb-1 line-clamp-1 text-hype-text-primary">{similarShow.artist.name}</div>
                      <div className="text-xs text-hype-text-secondary flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(similarShow.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                      <div className="text-xs text-hype-cyan mt-1">{similarShow.ticketPrice}</div>
                    </div>
                  </>
                );

                return onSelect ? (
                  <button
                    key={similarShow.id}
                    onClick={() => onSelect(similarShow.id)}
                    className="flex-shrink-0 w-40 bg-hype-bg-secondary rounded-xl overflow-hidden hover:bg-hype-bg-hover transition-colors active:scale-[0.98] text-left"
                  >
                    {cardInner}
                  </button>
                ) : (
                  <Link
                    key={similarShow.id}
                    to={`/show/${similarShow.id}`}
                    className="flex-shrink-0 w-40 bg-hype-bg-secondary rounded-xl overflow-hidden hover:bg-hype-bg-hover transition-colors active:scale-[0.98]"
                  >
                    {cardInner}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
