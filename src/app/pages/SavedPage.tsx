import { useState } from "react";
import { AppLayout } from "../components/AppLayout";
import { HypeHeader } from "../components/HypeHeader";
import { ShowCard } from "../components/ShowCard";
import { Heart, Trash2 } from "lucide-react";
import { mockShows } from "../data/mockData";

export function SavedPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  // Mock saved shows - in real app this would come from user's saved state
  const savedShows = mockShows.slice(0, 4);
  
  // Split into upcoming and past
  const today = new Date('2026-03-06');
  const upcomingShows = savedShows.filter(show => new Date(show.date) >= today);
  const pastShows = savedShows.filter(show => new Date(show.date) < today);

  const currentShows = activeTab === 'upcoming' ? upcomingShows : pastShows;
  const hasShows = currentShows.length > 0;

  return (
    <AppLayout>
      <HypeHeader />
      
      {/* Tab Bar */}
      <div className="border-b border-[#13121E] bg-[#09090F]">
        <div className="flex gap-2 px-4 py-3">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'upcoming'
                ? 'bg-[#A78BFA] text-[#09090F]'
                : 'bg-transparent text-[#9CA3AF] hover:bg-[#13121E] hover:text-[#F1F0FB]'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'past'
                ? 'bg-[#A78BFA] text-[#09090F]'
                : 'bg-transparent text-[#9CA3AF] hover:bg-[#13121E] hover:text-[#F1F0FB]'
            }`}
          >
            Past
          </button>
        </div>
      </div>

      <main className="px-4 pt-4 pb-24">
        {/* Show Cards List (Populated State) */}
        {hasShows ? (
          <div className="space-y-4">
            {currentShows.map(show => (
              <div key={show.id} className="relative group">
                <ShowCard show={show} />
                {/* Swipe-to-delete hint on hover */}
                <button 
                  className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 bg-[#F59E0B] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Remove from saved"
                >
                  <Trash2 className="w-5 h-5 text-[#09090F]" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex items-center justify-center h-[calc(100vh-300px)]">
            <div className="text-center px-6">
              <Heart className="w-16 h-16 mx-auto mb-4 text-[#A78BFA] opacity-50" />
              <h2 className="text-2xl font-bold mb-2">
                {activeTab === 'upcoming' ? 'No Saved Shows' : 'No Past Shows'}
              </h2>
              <p className="text-[#9CA3AF] max-w-sm">
                {activeTab === 'upcoming' 
                  ? 'Start saving shows you want to attend and they\'ll appear here'
                  : 'Shows you\'ve attended will appear here'
                }
              </p>
            </div>
          </div>
        )}
      </main>
    </AppLayout>
  );
}