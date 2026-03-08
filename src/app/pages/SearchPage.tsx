import { useState } from "react";
import { Search, X, TrendingUp, Music, MapPin, ChevronRight } from "lucide-react";
import { AppLayout } from "../components/AppLayout";
import { ShowCard } from "../components/ShowCard";
import { mockShows } from "../data/mockData";

export function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<'all' | 'shows' | 'artists' | 'venues'>('all');
  const [isFocused, setIsFocused] = useState(false);

  // Filter results based on search query
  const searchShows = searchQuery 
    ? mockShows.filter(show => 
        show.artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        show.venue.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Unique venues from shows
  const allVenues = Array.from(new Set(mockShows.map(show => JSON.stringify(show.venue))))
    .map(v => JSON.parse(v));
  
  const searchVenues = searchQuery
    ? allVenues.filter(venue =>
        venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        venue.address.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Determine what to show based on active tab
  const getFilteredResults = () => {
    switch (activeTab) {
      case 'shows':
        return { shows: searchShows, artists: [], venues: [] };
      case 'venues':
        return { shows: [], artists: [], venues: searchVenues };
      default:
        return { shows: searchShows, artists: [], venues: searchVenues };
    }
  };

  const { shows, artists, venues } = getFilteredResults();
  const hasResults = shows.length > 0 || artists.length > 0 || venues.length > 0;

  return (
    <AppLayout>
      {/* Search Header - Sticky */}
      <div className="sticky top-0 z-10 bg-[#09090F]/95 backdrop-blur-xl border-b border-[#13121E]">
        <div className="px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Search artists, venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#13121E] text-[#F1F0FB] placeholder:text-[#9CA3AF] pl-11 pr-10 py-3 rounded-xl border border-transparent focus:border-[#A78BFA] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-[#9CA3AF] hover:text-[#F1F0FB]"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-24">
        {!searchQuery ? (
          <div className="flex items-center justify-center h-[calc(100vh-200px)]">
            <div className="text-center px-6 max-w-sm">
              <Search className="w-16 h-16 mx-auto mb-4 text-[#9CA3AF] opacity-50" />
              <h2 className="text-2xl font-bold mb-2">Search Hype.Wav</h2>
              <p className="text-[#9CA3AF]">
                Find upcoming shows, discover artists, and explore venues across Greater Seattle
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* No Results */}
            {!hasResults && (
              <div className="flex items-center justify-center h-[calc(100vh-280px)]">
                <div className="text-center px-6">
                  <Search className="w-16 h-16 mx-auto mb-4 text-[#9CA3AF] opacity-50" />
                  <h2 className="text-2xl font-bold mb-2">No Results Found</h2>
                  <p className="text-[#9CA3AF]">
                    Try searching for a different artist, venue, or show
                  </p>
                </div>
              </div>
            )}

            {/* Show Results */}
            {shows.length > 0 && (
              <section className="mb-8">
                <h3 className="text-lg font-bold mb-4 text-[#F1F0FB]">Shows</h3>
                <div className="space-y-4">
                  {shows.map(show => (
                    <ShowCard key={show.id} show={show} />
                  ))}
                </div>
              </section>
            )}

            {/* Venue Results */}
            {venues.length > 0 && (
              <section className="mb-8">
                <h3 className="text-lg font-bold mb-4 text-[#F1F0FB]">Venues</h3>
                <div className="space-y-3">
                  {venues.map(venue => (
                    <div
                      key={venue.id}
                      className="flex items-center gap-3 p-3 bg-[#13121E] rounded-xl hover:bg-[#1A1927] transition-colors cursor-pointer group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-[#A78BFA]/20 to-[#67E8F9]/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#67E8F9]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-[#F1F0FB] truncate">
                          {venue.name}
                        </h4>
                        <p className="text-sm text-[#9CA3AF] truncate">
                          {venue.address}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#A78BFA] transition-colors" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>
    </AppLayout>
  );
}