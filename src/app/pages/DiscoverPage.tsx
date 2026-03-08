import { useState } from "react";
import { HypeHeader } from "../components/HypeHeader";
import { GenreFilter } from "../components/GenreFilter";
import { ShowCard } from "../components/ShowCard";
import { AppLayout } from "../components/AppLayout";
import { mockShows } from "../data/mockData";
import { ChevronRight, Zap } from "lucide-react";

export function DiscoverPage() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Filter shows by genre
  const filteredShows = selectedGenre === "All" 
    ? mockShows 
    : mockShows.filter(show => 
        show.artist.genres.some(genre => 
          genre.toLowerCase().includes(selectedGenre.toLowerCase())
        )
      );

  // Group shows by time period
  const today = new Date('2026-03-06');
  const tomorrow = new Date('2026-03-07');
  const weekEnd = new Date('2026-03-09');

  const thisWeekShows = filteredShows.filter(show => {
    const showDate = new Date(show.date);
    return showDate >= today && showDate <= weekEnd;
  });

  const nextWeekShows = filteredShows.filter(show => {
    const showDate = new Date(show.date);
    return showDate > weekEnd;
  });

  // Get featured shows (selling fast)
  const featuredShows = filteredShows.filter(show => show.ticketStatus === 'selling-fast').slice(0, 3);

  return (
    <AppLayout>
      <HypeHeader />
      
      {/* Genre Filter Section */}
      <div className="py-4 border-b border-[#13121E]">
        <div className="px-4">
          <GenreFilter 
            selectedGenre={selectedGenre} 
            onGenreChange={setSelectedGenre} 
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 pt-6 pb-24">
        {/* Featured Shows Section - Only show if we have featured shows */}
        {featuredShows.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#A78BFA]" />
                <h2 className="text-xl font-bold text-[#F1F0FB]">
                  TRENDING NOW
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              {featuredShows.map(show => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </section>
        )}

        {/* This Week Section */}
        {thisWeekShows.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#F1F0FB]">
                THIS WEEK
              </h2>
              <button className="text-sm text-[#A78BFA] flex items-center gap-1 hover:gap-2 transition-[gap] duration-200">
                See all
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {thisWeekShows.map(show => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </section>
        )}

        {/* Next Week Section */}
        {nextWeekShows.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#F1F0FB]">
                NEXT WEEK
              </h2>
              <button className="text-sm text-[#A78BFA] flex items-center gap-1 hover:gap-2 transition-[gap] duration-200">
                See all
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {nextWeekShows.map(show => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {filteredShows.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-bold mb-2">No shows found</h3>
            <p className="text-[#9CA3AF]">
              Try selecting a different genre
            </p>
          </div>
        )}
      </main>
    </AppLayout>
  );
}