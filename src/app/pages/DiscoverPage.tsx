import { useState, useMemo } from "react";
import { HypeHeader } from "../components/HypeHeader";
import { GenreFilter } from "../components/GenreFilter";
import { ShowCard } from "../components/ShowCard";
import { FeaturedCarousel } from "../components/FeaturedCarousel";
import { AppLayout } from "../components/AppLayout";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { useShows, refreshShows } from "../context/ShowsContext";
import { ChevronRight, Zap, RefreshCw } from "lucide-react";

function ShowCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden h-48 bg-[#13121E] animate-pulse">
      <div className="w-full h-full bg-gradient-to-b from-[#1A1927] to-[#13121E]" />
    </div>
  );
}

function EmptyState({ message, sub }: { message: string; sub: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-5 text-center px-8">
      <div className="w-16 h-16 rounded-full bg-[#13121E] flex items-center justify-center mb-2">
        <span className="text-3xl">🎵</span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#F1F0FB] mb-2">{message}</h3>
        <p className="text-[#9CA3AF] text-sm max-w-xs">{sub}</p>
      </div>
      <button
        onClick={refreshShows}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#A78BFA]/20 hover:bg-[#A78BFA]/30 text-[#A78BFA] rounded-full text-sm font-medium transition-colors active:scale-95 border border-[#A78BFA]/30"
      >
        <RefreshCw className="w-4 h-4" />
        Refresh
      </button>
    </div>
  );
}

function ShowsContent({ shows, filteredShows }: { shows: ReturnType<typeof useShows>['shows']; filteredShows: ReturnType<typeof useShows>['shows'] }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const weekEnd = new Date(today);
  weekEnd.setDate(today.getDate() + 7);

  const trendingIds = new Set(
    filteredShows.filter(s => (s.heatScore ?? 0) >= 75).slice(0, 3).map(s => s.id)
  );
  const thisWeekIds = new Set(
    filteredShows.filter(s => {
      try {
        const d = new Date(s.date + 'T00:00:00');
        return !isNaN(d.getTime()) && d >= today && d < weekEnd;
      } catch { return false; }
    }).map(s => s.id)
  );
  const laterIds = new Set(
    filteredShows.filter(s => {
      try {
        const d = new Date(s.date + 'T00:00:00');
        return !isNaN(d.getTime()) && d >= weekEnd;
      } catch { return false; }
    }).map(s => s.id)
  );

  const trending = filteredShows.filter(s => trendingIds.has(s.id));
  const thisWeek = filteredShows.filter(s => !trendingIds.has(s.id) && thisWeekIds.has(s.id));
  const later = filteredShows.filter(s => !trendingIds.has(s.id) && !thisWeekIds.has(s.id) && laterIds.has(s.id));
  const other = filteredShows.filter(s => !trendingIds.has(s.id) && !thisWeekIds.has(s.id) && !laterIds.has(s.id));

  // If everything ends up in 'other' (e.g. all shows have past/invalid dates),
  // just show them as upcoming — never blank
  const allOther = trending.length === 0 && thisWeek.length === 0 && later.length === 0;

  return (
    <>
      <FeaturedCarousel shows={filteredShows} />

      {trending.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-[#A78BFA]" />
            <h2 className="text-xl font-bold text-[#F1F0FB]">TRENDING NOW</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {trending.map(show => <ShowCard key={show.id} show={show} />)}
          </div>
        </section>
      )}

      {thisWeek.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#F1F0FB]">THIS WEEK</h2>
            <button className="text-sm text-[#A78BFA] flex items-center gap-1 hover:gap-2 transition-[gap] duration-200">
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
            <h2 className="text-xl font-bold text-[#F1F0FB]">COMING UP</h2>
            <button className="text-sm text-[#A78BFA] flex items-center gap-1 hover:gap-2 transition-[gap] duration-200">
              See all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {later.map(show => <ShowCard key={show.id} show={show} />)}
          </div>
        </section>
      )}

      {(allOther || other.length > 0) && (
        <section className="mb-8">
          {allOther && (
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#A78BFA]" />
              <h2 className="text-xl font-bold text-[#F1F0FB]">UPCOMING SHOWS</h2>
            </div>
          )}
          {!allOther && other.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-bold text-[#F1F0FB]">MORE SHOWS</h2>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {(allOther ? filteredShows : other).map(show => <ShowCard key={show.id} show={show} />)}
          </div>
        </section>
      )}
    </>
  );
}

export function DiscoverPage() {
  const { shows, loading, error } = useShows();
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = useMemo(() => {
    const all = new Set<string>();
    shows.forEach(show =>
      show.artist.genres?.forEach(g => {
        const formatted = g.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        all.add(formatted);
      })
    );
    return ['All', ...Array.from(all).sort()];
  }, [shows]);

  const filteredShows = useMemo(() => {
    if (selectedGenre === 'All') return shows;
    return shows.filter(show =>
      show.artist.genres?.some(g =>
        g.toLowerCase().includes(selectedGenre.toLowerCase())
      )
    );
  }, [shows, selectedGenre]);

  return (
    <AppLayout>
      <div className="lg:hidden">
        <HypeHeader />
      </div>

      <div className="py-4 border-b border-[#13121E]">
        <div className="px-4">
          <GenreFilter
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
            genres={genres}
          />
        </div>
      </div>

      <main className="px-4 lg:px-8 pt-6 pb-24 lg:pb-8 max-w-7xl mx-auto w-full">

        {loading && (
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#A78BFA]" />
              <h2 className="text-xl font-bold text-[#F1F0FB]">TRENDING NOW</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {[0, 1, 2].map(i => <ShowCardSkeleton key={i} />)}
            </div>
          </section>
        )}

        {!loading && error && (
          <EmptyState
            message="Couldn't load shows"
            sub="We hit a snag fetching Seattle shows. Tap refresh to try again."
          />
        )}

        {!loading && !error && filteredShows.length > 0 && (
          <ErrorBoundary
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredShows.map(show => <ShowCard key={show.id} show={show} />)}
              </div>
            }
          >
            <ShowsContent shows={shows} filteredShows={filteredShows} />
          </ErrorBoundary>
        )}

        {!loading && !error && shows.length > 0 && filteredShows.length === 0 && (
          <EmptyState
            message={`No ${selectedGenre} shows right now`}
            sub="Nothing's playing in that genre at the moment. Try a different one or check back soon."
          />
        )}

        {!loading && !error && shows.length === 0 && (
          <EmptyState
            message="Nothing on the lineup right now"
            sub="Looks like Seattle's taking a breather. Check back soon or hit refresh to try again."
          />
        )}

      </main>
    </AppLayout>
  );
}
