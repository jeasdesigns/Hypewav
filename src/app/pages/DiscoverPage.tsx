import { useState, useMemo } from "react";
import { useShowSheet } from "../hooks/useShowSheet";
import { HypeHeader } from "../components/HypeHeader";
import { GenreFilter } from "../components/GenreFilter";
import { ShowCard } from "../components/ShowCard";
import { FeaturedCarousel } from "../components/FeaturedCarousel";
import { AppLayout } from "../components/AppLayout";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { ShowDetailContent } from "../components/ShowDetailContent";
import { useShows } from "../context/ShowsContext";
import { Show } from "../data/mockData";
import { ChevronRight, Zap, RefreshCw, Search, X } from "lucide-react";
import { normalizeGenre } from "../utils/genres";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "../components/ui/drawer";
import { Slider } from "../components/ui/slider";
import {
  Sheet,
  SheetContent,
} from "../components/ui/sheet";

type DateRange = 'week' | 'month' | 'all';

function parsePrice(ticketPrice: string): number | null {
  const match = ticketPrice.replace(/,/g, '').match(/\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : null;
}

// ─── Skeletons / helpers ───────────────────────────────────────────────────────

function ShowCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden h-48 bg-hype-bg-secondary animate-pulse">
      <div className="w-full h-full bg-gradient-to-b from-hype-bg-hover to-hype-bg-secondary" />
    </div>
  );
}

function RefreshButton({ onRefresh }: { onRefresh: () => void }) {
  return (
    <button
      onClick={onRefresh}
      className="flex items-center gap-2 px-5 py-2.5 bg-hype-violet/20 hover:bg-hype-violet/30 text-hype-violet rounded-full text-sm font-medium transition-colors active:scale-95 border border-hype-violet/30"
    >
      <RefreshCw className="w-4 h-4" />
      Refresh
    </button>
  );
}

// ─── Section logic ─────────────────────────────────────────────────────────────

function ShowSections({ shows, onSelect }: { shows: Show[]; onSelect: (show: Show) => void }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const weekEnd = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  const trending: Show[] = [];
  const thisWeek: Show[] = [];
  const later: Show[] = [];

  const trendingSet = new Set(
    shows.filter(s => (s.heatScore ?? 0) >= 75).slice(0, 3).map(s => s.id)
  );

  for (const s of shows) {
    if (trendingSet.has(s.id)) {
      trending.push(s);
      continue;
    }
    try {
      const d = new Date(s.date + 'T00:00:00');
      if (!isNaN(d.getTime()) && d >= today && d < weekEnd) {
        thisWeek.push(s);
      } else if (!isNaN(d.getTime()) && d >= weekEnd) {
        later.push(s);
      }
    } catch {
      // skip
    }
  }

  const bucketed = new Set([
    ...trending.map(s => s.id),
    ...thisWeek.map(s => s.id),
    ...later.map(s => s.id),
  ]);
  const remaining = shows.filter(s => !bucketed.has(s.id));

  if (trending.length === 0 && thisWeek.length === 0 && later.length === 0) {
    return (
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-hype-violet" />
          <h2 className="text-xl font-bold text-hype-text-primary">UPCOMING SHOWS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {shows.map(show => <ShowCard key={show.id} show={show} onSelect={onSelect} />)}
        </div>
      </section>
    );
  }

  return (
    <>
      {trending.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-hype-violet" />
            <h2 className="text-xl font-bold text-hype-text-primary">TRENDING NOW</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {trending.map(show => <ShowCard key={show.id} show={show} />)}
          </div>
        </section>
      )}

      {thisWeek.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-hype-text-primary">THIS WEEK</h2>
            <button className="text-sm text-hype-violet flex items-center gap-1 hover:gap-2 transition-[gap] duration-200">
              See all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {thisWeek.map(show => <ShowCard key={show.id} show={show} />)}
          </div>
        </section>
      )}

      {later.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-hype-text-primary">COMING UP</h2>
            <button className="text-sm text-hype-violet flex items-center gap-1 hover:gap-2 transition-[gap] duration-200">
              See all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {later.map(show => <ShowCard key={show.id} show={show} />)}
          </div>
        </section>
      )}

      {remaining.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold text-hype-text-primary">MORE SHOWS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {remaining.map(show => <ShowCard key={show.id} show={show} />)}
          </div>
        </section>
      )}
    </>
  );
}

// ─── Main content ──────────────────────────────────────────────────────────────

function ShowsContent({ shows, filteredShows, onSelect }: { shows: Show[]; filteredShows: Show[]; onSelect: (show: Show) => void }) {
  return (
    <>
      <FeaturedCarousel shows={shows} onSelect={onSelect} />
      <ShowSections shows={filteredShows} onSelect={onSelect} />
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function DiscoverPage() {
  const { shows, loading, error, refresh } = useShows();
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [dateRange, setDateRange] = useState<DateRange>('all');
  const [searchText, setSearchText] = useState('');
  const { selectedShowId, displayedShowId, openShow, closeShow } = useShowSheet();

  const isFilterActive = priceRange[0] > 0 || priceRange[1] < 300 || dateRange !== 'all';

  // Normalize raw Spotify genres → broad categories; deduplicate
  const genres = useMemo(() => {
    const categories = new Set<string>();
    shows.forEach(show => {
      if (!Array.isArray(show?.artist?.genres)) return;
      show.artist.genres.forEach(g => {
        if (typeof g !== 'string') return;
        const label = normalizeGenre(g);
        if (label) categories.add(label);
      });
    });
    return ['All', ...Array.from(categories).sort()];
  }, [shows]);

  // Filter by search text + genre + price range + date range
  const filteredShows = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const cutoff = new Date(today);
    if (dateRange === 'week') cutoff.setDate(today.getDate() + 7);
    else if (dateRange === 'month') cutoff.setDate(today.getDate() + 30);

    const q = searchText.toLowerCase().trim();

    return shows.filter(show => {
      // Text search across artist, venue, genre
      if (q) {
        const matchesText =
          show.artist.name.toLowerCase().includes(q) ||
          show.venue.name.toLowerCase().includes(q) ||
          (Array.isArray(show.artist.genres) && show.artist.genres.some(g => g.toLowerCase().includes(q)));
        if (!matchesText) return false;
      }

      // Genre filter
      if (selectedGenre !== 'All') {
        const matchesGenre = Array.isArray(show?.artist?.genres) &&
          show.artist.genres.some(g => typeof g === 'string' && normalizeGenre(g) === selectedGenre);
        if (!matchesGenre) return false;
      }

      // Price filter — TBD shows pass through always
      const price = parsePrice(show.ticketPrice);
      if (price !== null && (price < priceRange[0] || price > priceRange[1])) return false;

      // Date filter
      if (dateRange !== 'all') {
        const showDate = new Date(show.date + 'T00:00:00');
        if (showDate < today || showDate > cutoff) return false;
      }

      return true;
    });
  }, [shows, searchText, selectedGenre, priceRange, dateRange]);

  const hasShows = shows.length > 0;
  const hasFiltered = filteredShows.length > 0;

  return (
    <AppLayout>
      <div className="lg:hidden">
        <HypeHeader onFilterClick={() => setFilterOpen(true)} filterActive={isFilterActive} />
      </div>

      {/* Search bar */}
      <div className="px-4 pt-3 pb-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hype-text-secondary pointer-events-none" />
          <input
            type="text"
            placeholder="Search artists, venues..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="w-full bg-hype-bg-secondary text-hype-text-primary placeholder:text-hype-text-secondary pl-9 pr-9 py-2.5 rounded-xl text-sm border border-transparent focus:border-hype-violet focus:outline-none transition-colors"
          />
          {searchText && (
            <button
              onClick={() => setSearchText('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-hype-text-secondary hover:text-hype-text-primary"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Genre filter — isolated scroll container, no negative margins */}
      <div className="py-3 border-b border-hype-bg-secondary">
        <div className="px-4">
          <GenreFilter
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
            genres={genres}
          />
        </div>
      </div>

      <main className="px-4 lg:px-8 pt-6 pb-24 lg:pb-8 max-w-7xl mx-auto w-full">

        {!hasShows && loading && (
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-hype-violet" />
              <h2 className="text-xl font-bold text-hype-text-primary">TRENDING NOW</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {[0, 1, 2].map(i => <ShowCardSkeleton key={i} />)}
            </div>
          </section>
        )}

        {!hasShows && !loading && error && (
          <div className="flex flex-col items-center justify-center py-20 gap-5 text-center px-8">
            <h3 className="text-xl font-bold text-hype-text-primary mb-2">Couldn't load shows</h3>
            <p className="text-hype-text-secondary text-sm max-w-xs">We hit a snag fetching Seattle shows.</p>
            <RefreshButton onRefresh={refresh} />
          </div>
        )}

        {!hasShows && !loading && !error && (
          <div className="flex flex-col items-center justify-center py-20 gap-5 text-center px-8">
            <div className="w-16 h-16 rounded-full bg-hype-bg-secondary flex items-center justify-center mb-2">
              <span className="text-3xl">🎵</span>
            </div>
            <h3 className="text-xl font-bold text-hype-text-primary mb-2">Nothing on the lineup right now</h3>
            <p className="text-hype-text-secondary text-sm max-w-xs">Looks like Seattle's taking a breather. Check back soon or hit refresh.</p>
            <RefreshButton onRefresh={refresh} />
          </div>
        )}

        {hasShows && hasFiltered && (
          <ErrorBoundary>
            <ShowsContent shows={shows} filteredShows={filteredShows} onSelect={show => openShow(show.id)} />
          </ErrorBoundary>
        )}

        {hasShows && !hasFiltered && (
          <div className="flex flex-col items-center justify-center py-20 gap-5 text-center px-8">
            <div className="w-16 h-16 rounded-full bg-hype-bg-secondary flex items-center justify-center mb-2">
              <span className="text-3xl">🎵</span>
            </div>
            <h3 className="text-xl font-bold text-hype-text-primary mb-2">No shows found</h3>
            <p className="text-hype-text-secondary text-sm max-w-xs">Try adjusting your search or filters.</p>
            <RefreshButton onRefresh={refresh} />
          </div>
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
            />
          )}
        </SheetContent>
      </Sheet>

      {/* Filter Drawer */}
      <Drawer open={filterOpen} onOpenChange={setFilterOpen}>
        <DrawerContent className="bg-hype-bg-secondary border-hype-bg-hover">
          <DrawerHeader>
            <DrawerTitle className="text-hype-text-primary">Filter Shows</DrawerTitle>
          </DrawerHeader>

          <div className="px-4 pb-2 space-y-6">
            {/* Price Range */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-hype-text-primary">Price Range</span>
                <span className="text-sm text-hype-violet font-medium">
                  {priceRange[0] === 0 && priceRange[1] === 300
                    ? 'Any price'
                    : `$${priceRange[0]} – ${priceRange[1] === 300 ? '$300+' : `$${priceRange[1]}`}`}
                </span>
              </div>
              <Slider
                min={0}
                max={300}
                step={10}
                value={priceRange}
                onValueChange={v => setPriceRange(v as [number, number])}
                className="[&_[data-slot=slider-range]]:bg-hype-violet [&_[data-slot=slider-track]]:bg-hype-bg-primary [&_[data-slot=slider-thumb]]:border-hype-violet [&_[data-slot=slider-thumb]]:bg-hype-violet"
              />
              <div className="flex justify-between mt-1 text-xs text-hype-text-secondary">
                <span>Free</span>
                <span>$300+</span>
              </div>
            </div>

            {/* Date Range */}
            <div>
              <span className="text-sm font-medium text-hype-text-primary block mb-3">Date Range</span>
              <div className="flex gap-2">
                {(['week', 'month', 'all'] as DateRange[]).map(range => (
                  <button
                    key={range}
                    onClick={() => setDateRange(range)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                      dateRange === range
                        ? 'bg-hype-violet text-hype-bg-primary'
                        : 'bg-hype-bg-primary text-hype-text-secondary hover:bg-hype-bg-hover hover:text-hype-text-primary'
                    }`}
                  >
                    {range === 'week' ? 'This Week' : range === 'month' ? 'This Month' : 'All'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <DrawerFooter>
            <button
              onClick={() => { setPriceRange([0, 300]); setDateRange('all'); }}
              className="w-full py-3 rounded-full text-sm font-medium text-hype-text-secondary hover:text-hype-text-primary transition-colors"
            >
              Clear Filters
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </AppLayout>
  );
}
