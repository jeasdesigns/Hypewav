import { useState, useEffect, useRef } from "react";
import { useShowSheet } from "../hooks/useShowSheet";
import { Search, X, MapPin, ChevronRight } from "lucide-react";
import { AppLayout } from "../components/AppLayout";
import { ShowDetailContent } from "../components/ShowDetailContent";
import { useShows } from "../context/ShowsContext";
import { normalizeGenre } from "../utils/genres";
import {
  Sheet,
  SheetContent,
} from "../components/ui/sheet";

export function SearchPage() {
  const { shows, loading } = useShows();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const { selectedShowId, displayedShowId, openShow, closeShow } = useShowSheet();
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus on arrival
  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 100);
    return () => clearTimeout(t);
  }, []);

  // 300ms debounce
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(searchQuery), 300);
    return () => clearTimeout(t);
  }, [searchQuery]);

  const q = debouncedQuery.toLowerCase().trim();

  const searchShows = q
    ? shows.filter(show =>
        show.artist.name.toLowerCase().includes(q) ||
        show.venue.name.toLowerCase().includes(q) ||
        (Array.isArray(show.artist.genres) && show.artist.genres.some(g =>
          g.toLowerCase().includes(q) || (normalizeGenre(g) ?? '').toLowerCase().includes(q)
        ))
      )
    : [];

  const allVenues = Array.from(
    new Map(shows.map(show => [show.venue.id, show.venue])).values()
  );

  const searchVenues = q
    ? allVenues.filter(venue =>
        venue.name.toLowerCase().includes(q) ||
        venue.address.toLowerCase().includes(q)
      )
    : [];

  const hasResults = searchShows.length > 0 || searchVenues.length > 0;

  return (
    <AppLayout>
      {/* Sticky Search Header */}
      <div className="sticky top-0 z-10 bg-hype-bg-primary/95 backdrop-blur-xl border-b border-hype-bg-secondary">
        <div className="px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-hype-text-secondary" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search artists, venues..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-hype-bg-secondary text-hype-text-primary placeholder:text-hype-text-secondary pl-11 pr-10 py-3 rounded-xl border border-transparent focus:border-hype-violet focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-hype-text-secondary hover:text-hype-text-primary"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      <main className="flex-1 px-4 pb-24">
        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center h-[calc(100vh-200px)]">
            <div className="text-center gap-3 flex flex-col items-center">
              <div className="w-8 h-8 border-2 border-hype-violet border-t-transparent rounded-full animate-spin" />
              <p className="text-hype-text-secondary text-sm">Loading shows…</p>
            </div>
          </div>
        )}

        {/* Empty search prompt */}
        {!loading && !searchQuery && (
          <div className="flex items-center justify-center h-[calc(100vh-200px)]">
            <div className="text-center px-6 max-w-sm">
              <Search className="w-16 h-16 mx-auto mb-4 text-hype-text-secondary opacity-50" />
              <h2 className="text-2xl font-bold mb-2">Search Hype.Wav</h2>
              <p className="text-hype-text-secondary">
                Find upcoming shows, discover artists, and explore venues across Greater Seattle
              </p>
            </div>
          </div>
        )}

        {/* No results */}
        {!loading && searchQuery && !hasResults && (
          <div className="flex items-center justify-center h-[calc(100vh-280px)]">
            <div className="text-center px-6">
              <Search className="w-16 h-16 mx-auto mb-4 text-hype-text-secondary opacity-50" />
              <h2 className="text-2xl font-bold mb-2">No Results Found</h2>
              <p className="text-hype-text-secondary">
                Try searching for a different artist, genre, or venue
              </p>
            </div>
          </div>
        )}

        {/* Show Results — compact row format */}
        {!loading && searchShows.length > 0 && (
          <section className="mb-8 pt-4">
            <h3 className="text-sm font-semibold text-hype-text-secondary uppercase tracking-wide mb-3">
              Shows ({searchShows.length})
            </h3>
            <div className="space-y-2">
              {searchShows.map(show => (
                <button
                  key={show.id}
                  onClick={() => openShow(show.id)}
                  className="w-full flex items-center gap-3 p-3 bg-hype-bg-secondary rounded-xl hover:bg-hype-bg-hover transition-colors active:scale-[0.98] text-left"
                >
                  <img
                    src={show.image}
                    alt={show.artist.name}
                    loading="lazy"
                    className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-hype-text-primary truncate">{show.artist.name}</div>
                    <div className="text-sm text-hype-text-secondary truncate">{show.venue.name}</div>
                    <div className="text-xs text-hype-cyan mt-0.5">
                      {new Date(show.date + 'T00:00:00').toLocaleDateString('en-US', {
                        weekday: 'short', month: 'short', day: 'numeric',
                      })}
                      {' · '}{show.ticketPrice}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-hype-text-secondary flex-shrink-0" />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Venue Results */}
        {!loading && searchVenues.length > 0 && (
          <section className="mb-8 pt-4">
            <h3 className="text-sm font-semibold text-hype-text-secondary uppercase tracking-wide mb-3">
              Venues ({searchVenues.length})
            </h3>
            <div className="space-y-2">
              {searchVenues.map(venue => (
                <div
                  key={venue.id}
                  className="flex items-center gap-3 p-3 bg-hype-bg-secondary rounded-xl"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-hype-violet/20 to-hype-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-hype-cyan" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-hype-text-primary truncate">{venue.name}</h4>
                    <p className="text-sm text-hype-text-secondary truncate">{venue.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Show Detail Sheet */}
      <Sheet open={!!selectedShowId} onOpenChange={open => { if (!open) closeShow(); }}>
        <SheetContent
          side="bottom"
          className="h-[92vh] bg-hype-bg-primary border-hype-bg-secondary p-0 overflow-y-auto [&>button]:hidden"
        >
          {displayedShowId && (
            <ShowDetailContent
              showId={displayedShowId}
              onClose={closeShow}
              onSelect={openShow}
            />
          )}
        </SheetContent>
      </Sheet>
    </AppLayout>
  );
}
