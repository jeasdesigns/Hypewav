import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router";
import { useShowSheet } from "../hooks/useShowSheet";
import { GenreFilter } from "../components/GenreFilter";
import { ShowCard } from "../components/ShowCard";
import { FeaturedCarousel } from "../components/FeaturedCarousel";
import { AppLayout } from "../components/AppLayout";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { ShowModal } from "../components/ShowModal";
import { useShows } from "../context/ShowsContext";
import { Show } from "../data/mockData";
import { Zap, RefreshCw, Search, X, MapPin, Filter, RotateCw } from "lucide-react";
import { normalizeGenre } from "../utils/genres";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "../components/ui/drawer";
import { Slider } from "../components/ui/slider";

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

// Keep only the earliest show per artist+venue within a section.
// Multi-night runs are real but showing the same artist/venue twice in one
// section is visually confusing — users can discover other dates in the modal.
function dedupeSection(shows: Show[]): Show[] {
  const seen = new Set<string>();
  return shows.filter(show => {
    const key = `${show.artist.name.toLowerCase()}|||${show.venue.id}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function ShowSections({ shows, onSelect }: { shows: Show[]; onSelect: (show: Show) => void }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const weekEnd = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const thisWeekRange = `${fmt(today)} – ${fmt(new Date(weekEnd.getTime() - 86400000))}`;
  const comingUpStart = fmt(weekEnd);

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

  const dedupedThisWeek = dedupeSection(thisWeek);
  const dedupedLater = dedupeSection(later);
  const dedupedRemaining = dedupeSection(remaining);

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
            {trending.map(show => <ShowCard key={show.id} show={show} onSelect={onSelect} />)}
          </div>
        </section>
      )}

      {thisWeek.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-hype-text-primary">THIS WEEK</h2>
              <p className="text-xs text-hype-text-secondary mt-0.5">{thisWeekRange}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {dedupedThisWeek.map(show => <ShowCard key={show.id} show={show} onSelect={onSelect} />)}
          </div>
        </section>
      )}

      {later.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-hype-text-primary">COMING UP</h2>
              <p className="text-xs text-hype-text-secondary mt-0.5">From {comingUpStart}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {dedupedLater.map(show => <ShowCard key={show.id} show={show} onSelect={onSelect} />)}
          </div>
        </section>
      )}

      {remaining.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold text-hype-text-primary">MORE SHOWS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {dedupedRemaining.map(show => <ShowCard key={show.id} show={show} onSelect={onSelect} />)}
          </div>
        </section>
      )}
    </>
  );
}

// ─── Main content ──────────────────────────────────────────────────────────────

function ShowsContent({ shows, filteredShows, onSelect }: { shows: Show[]; filteredShows: Show[]; onSelect: (show: Show) => void }) {
  const featuredShows = dedupeSection(shows);
  return (
    <>
      <FeaturedCarousel shows={featuredShows} onSelect={onSelect} />
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

  // Pull to refresh
  const [refreshing, setRefreshing] = useState(false);
  const [pullY, setPullY] = useState(0);
  const pullStartY = useRef(0);
  const PULL_THRESHOLD = 72;

  const handleRefresh = useCallback(async () => {
    if (refreshing) return;
    setRefreshing(true);
    await refresh();
    setTimeout(() => setRefreshing(false), 800);
  }, [refresh, refreshing]);

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      if (window.scrollY === 0) pullStartY.current = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (window.scrollY > 2) return;
      const delta = e.touches[0].clientY - pullStartY.current;
      if (delta > 0) setPullY(Math.min(delta, PULL_THRESHOLD * 1.5));
    };
    const onTouchEnd = () => {
      if (pullY >= PULL_THRESHOLD) handleRefresh();
      setPullY(0);
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [pullY, handleRefresh]);

  // Result count label
  const isFiltered = selectedGenre !== 'All' || searchText.trim() !== '';
  const countLabel = isFiltered
    ? `${filteredShows.length} ${selectedGenre !== 'All' ? selectedGenre + ' ' : ''}show${filteredShows.length !== 1 ? 's' : ''}`
    : null;

  return (
    <AppLayout>
      {/* Unified sticky header: brand row (mobile) + search + genre filter */}
      <div className="sticky top-0 lg:top-14 z-30 bg-hype-bg-primary/95 backdrop-blur-xl border-b border-hype-bg-secondary">

        {/* Mobile brand row */}
        <div className="lg:hidden flex items-center justify-between px-4 pt-4 pb-2">
          <Link to="/" className="flex-1">
            <div className="text-xs text-hype-text-secondary tracking-wide font-medium mb-0.5">Hype.Wav</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-hype-cyan" />
              <span className="text-2xl font-bold text-hype-text-primary">Seattle</span>
            </div>
          </Link>
          <button
            onClick={() => setFilterOpen(true)}
            className={`relative w-11 h-11 rounded-full flex items-center justify-center transition-colors active:scale-95 ${
              isFilterActive ? 'bg-hype-violet/20 hover:bg-hype-violet/30' : 'bg-hype-bg-secondary hover:bg-hype-bg-hover'
            }`}
            aria-label="Filter shows"
          >
            <Filter className={`w-5 h-5 ${isFilterActive ? 'text-hype-violet' : 'text-hype-text-secondary'}`} />
            {isFilterActive && <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-hype-violet" />}
          </button>
        </div>

        {/* Search */}
        <div className="px-4 lg:px-8 pt-2 lg:pt-3 pb-2 lg:max-w-7xl lg:mx-auto">
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

        {/* Genre filter */}
        <div className="px-4 lg:px-8 pb-2 lg:max-w-7xl lg:mx-auto">
          <GenreFilter
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
            genres={genres}
          />
        </div>

        {/* Result count */}
        {countLabel && (
          <div className="px-4 lg:px-8 pb-2 lg:max-w-7xl lg:mx-auto">
            <p className="text-xs text-hype-text-secondary">{countLabel}</p>
          </div>
        )}

      </div>

      {/* Pull to refresh indicator (mobile) */}
      {(pullY > 8 || refreshing) && (
        <div
          className="flex items-center justify-center gap-2 py-2 text-xs text-hype-text-secondary transition-all lg:hidden"
          style={{ height: refreshing ? 40 : Math.min(pullY * 0.5, 40) }}
        >
          <RotateCw className={`w-4 h-4 ${refreshing ? 'animate-spin text-hype-violet' : 'text-hype-text-secondary'}`} style={{ rotate: `${(pullY / PULL_THRESHOLD) * 180}deg` }} />
          <span>{refreshing ? 'Refreshing…' : pullY >= PULL_THRESHOLD ? 'Release to refresh' : 'Pull to refresh'}</span>
        </div>
      )}

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
      <ShowModal showId={displayedShowId} onClose={closeShow} onSelect={openShow} />

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
