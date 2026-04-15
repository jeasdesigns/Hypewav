import { useState, useMemo } from "react";
import { HypeHeader } from "../components/HypeHeader";
import { GenreFilter } from "../components/GenreFilter";
import { ShowCard } from "../components/ShowCard";
import { FeaturedCarousel } from "../components/FeaturedCarousel";
import { AppLayout } from "../components/AppLayout";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { useShows } from "../context/ShowsContext";
import { Show } from "../data/mockData";
import { ChevronRight, Zap, RefreshCw } from "lucide-react";
import { normalizeGenre } from "../utils/genres";

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

function ShowSections({ shows }: { shows: Show[] }) {
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
          {shows.map(show => <ShowCard key={show.id} show={show} />)}
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

function ShowsContent({ shows, filteredShows }: { shows: Show[]; filteredShows: Show[] }) {
  return (
    <>
      <FeaturedCarousel shows={shows} />
      <ShowSections shows={filteredShows} />
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function DiscoverPage() {
  const { shows, loading, error, refresh } = useShows();
  const [selectedGenre, setSelectedGenre] = useState("All");

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

  // Filter by broad category — match any raw genre that normalizes to selectedGenre
  const filteredShows = useMemo(() => {
    if (selectedGenre === 'All') return shows;
    return shows.filter(show =>
      Array.isArray(show?.artist?.genres) &&
      show.artist.genres.some(g =>
        typeof g === 'string' && normalizeGenre(g) === selectedGenre
      )
    );
  }, [shows, selectedGenre]);

  const hasShows = shows.length > 0;
  const hasFiltered = filteredShows.length > 0;

  return (
    <AppLayout>
      <div className="lg:hidden">
        <HypeHeader />
      </div>

      {/* Genre filter — isolated scroll container, no negative margins */}
      <div className="py-4 border-b border-hype-bg-secondary">
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
            <ShowsContent shows={shows} filteredShows={filteredShows} />
          </ErrorBoundary>
        )}

        {hasShows && !hasFiltered && (
          <div className="flex flex-col items-center justify-center py-20 gap-5 text-center px-8">
            <div className="w-16 h-16 rounded-full bg-hype-bg-secondary flex items-center justify-center mb-2">
              <span className="text-3xl">🎵</span>
            </div>
            <h3 className="text-xl font-bold text-hype-text-primary mb-2">No {selectedGenre} shows right now</h3>
            <p className="text-hype-text-secondary text-sm max-w-xs">Nothing's playing in that genre at the moment. Try a different one or check back soon.</p>
            <RefreshButton onRefresh={refresh} />
          </div>
        )}

      </main>
    </AppLayout>
  );
}
