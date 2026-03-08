import { useState, useMemo } from "react";
import { HypeHeader } from "../components/HypeHeader";
import { GenreFilter } from "../components/GenreFilter";
import { ShowCard } from "../components/ShowCard";
import { FeaturedCarousel } from "../components/FeaturedCarousel";
import { AppLayout } from "../components/AppLayout";
import { useShows } from "../context/ShowsContext";
import { ChevronRight, Zap } from "lucide-react";

function ShowCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden h-48 bg-[#13121E] animate-pulse">
      <div className="w-full h-full bg-gradient-to-b from-[#1A1927] to-[#13121E]" />
    </div>
  );
}

export function DiscoverPage() {
  const { shows, loading, error } = useShows();
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Build genre list dynamically from real data
  const genres = useMemo(() => {
    const all = new Set<string>();
    shows.forEach(show =>
      show.artist.genres.forEach(g => {
        // Capitalize first letter of each word for display
        const formatted = g
          .split(' ')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        all.add(formatted);
      })
    );
    return ['All', ...Array.from(all).sort()];
  }, [shows]);

  // Filter shows by selected genre
  const filteredShows = selectedGenre === 'All'
    ? shows
    : shows.filter(show =>
        show.artist.genres.some(g =>
          g.toLowerCase().includes(selectedGenre.toLowerCase())
        )
      );

  // Group by time period relative to today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const weekEnd = new Date(today);
  weekEnd.setDate(today.getDate() + 7);

  const trendingShows = filteredShows
    .filter(show => show.heatScore >= 75)
    .slice(0, 3);

  const thisWeekShows = filteredShows.filter(show => {
    const d = new Date(show.date + 'T00:00:00');
    return d >= today && d < weekEnd;
  });

  const laterShows = filteredShows.filter(show => {
    const d = new Date(show.date + 'T00:00:00');
    return d >= weekEnd;
  });

  // Catch-all: shows that didn't fall into any date bucket (past or unparseable dates)
  // Ensures content is ALWAYS visible when shows are loaded
  const hasSections = trendingShows.length > 0 || thisWeekShows.length > 0 || laterShows.length > 0;
  const fallbackShows = !hasSections ? filteredShows : [];

  return (
    <AppLayout>
      <HypeHeader />

      {/* Genre Filter — always visible, even while loading */}
      <div className="py-4 border-b border-[#13121E]">
        <div className="px-4">
          <GenreFilter
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
            genres={genres}
          />
        </div>
      </div>

      {error && (
        <div className="flex flex-col items-center justify-center h-[60vh] gap-3 px-8 text-center">
          <p className="text-xl font-bold text-[#F1F0FB]">Something went wrong</p>
          <p className="text-[#9CA3AF] text-sm">{error}</p>
        </div>
      )}

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
        {/* Featured Carousel — desktop only */}
        <FeaturedCarousel shows={filteredShows} />

        {/* Trending Now */}
        {trendingShows.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#A78BFA]" />
                <h2 className="text-xl font-bold text-[#F1F0FB]">TRENDING NOW</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {trendingShows.map(show => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </section>
        )}

        {/* This Week */}
        {thisWeekShows.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#F1F0FB]">THIS WEEK</h2>
              <button className="text-sm text-[#A78BFA] flex items-center gap-1 hover:gap-2 transition-[gap] duration-200">
                See all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {thisWeekShows.map(show => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </section>
        )}

        {/* Coming Up */}
        {laterShows.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#F1F0FB]">COMING UP</h2>
              <button className="text-sm text-[#A78BFA] flex items-center gap-1 hover:gap-2 transition-[gap] duration-200">
                See all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {laterShows.map(show => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </section>
        )}

        {/* Fallback: shows loaded but date sections all empty */}
        {!loading && fallbackShows.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#A78BFA]" />
              <h2 className="text-xl font-bold text-[#F1F0FB]">UPCOMING SHOWS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {fallbackShows.map(show => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </section>
        )}

        {/* Empty State — only after load completes */}
        {!loading && filteredShows.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-bold mb-2">No shows found</h3>
            <p className="text-[#9CA3AF]">Try selecting a different genre</p>
          </div>
        )}
      </main>
    </AppLayout>
  );
}
