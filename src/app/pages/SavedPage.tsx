import { useState } from "react";
import { useShowSheet } from "../hooks/useShowSheet";
import { AppLayout } from "../components/AppLayout";
import { HypeHeader } from "../components/HypeHeader";
import { ShowCard } from "../components/ShowCard";
import { ShowModal } from "../components/ShowModal";
import { Heart } from "lucide-react";
import { Link } from "react-router";
import { useSaved } from "../context/SavedContext";

function getCountdown(dateStr: string): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const show = new Date(dateStr + 'T00:00:00');
  const days = Math.round((show.getTime() - today.getTime()) / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Tomorrow';
  if (days <= 7) return `In ${days} days`;
  if (days <= 14) return 'Next week';
  const weeks = Math.round(days / 7);
  if (weeks < 9) return `In ${weeks} weeks`;
  return `In ${Math.round(days / 30)} months`;
}

export function SavedPage() {
  const { savedShows } = useSaved();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const { selectedShowId, displayedShowId, openShow, closeShow } = useShowSheet();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingShows = savedShows
    .filter(show => new Date(show.date + 'T00:00:00') >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastShows = savedShows
    .filter(show => new Date(show.date + 'T00:00:00') < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const currentShows = activeTab === 'upcoming' ? upcomingShows : pastShows;
  const hasShows = currentShows.length > 0;

  return (
    <AppLayout>
      <div className="lg:hidden">
        <HypeHeader />
      </div>

      {/* Tab Bar */}
      <div className="border-b border-hype-bg-secondary bg-hype-bg-primary">
        <div className="flex gap-2 px-4 py-3">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'upcoming'
                ? 'bg-hype-violet text-hype-bg-primary'
                : 'bg-transparent text-hype-text-secondary hover:bg-hype-bg-secondary hover:text-hype-text-primary'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'past'
                ? 'bg-hype-violet text-hype-bg-primary'
                : 'bg-transparent text-hype-text-secondary hover:bg-hype-bg-secondary hover:text-hype-text-primary'
            }`}
          >
            Past
          </button>
        </div>
      </div>

      <main className="px-4 pt-4 pb-24">
        {hasShows ? (
          <div className="space-y-4">
            {currentShows.map(show => {
              const countdown = activeTab === 'upcoming' ? getCountdown(show.date) : null;
              const isUrgent = countdown === 'Today' || countdown === 'Tomorrow';
              return (
              <div key={show.id} className="space-y-1.5">
                {countdown && (
                  <div className="flex items-center gap-2 px-1">
                    <span className={`text-xs font-semibold ${isUrgent ? 'text-hype-violet' : 'text-hype-cyan'}`}>
                      {countdown}
                    </span>
                    {isUrgent && (
                      <span className="text-xs text-hype-text-secondary">· Don't miss it</span>
                    )}
                  </div>
                )}
                <ShowCard show={show} onSelect={s => openShow(s.id)} />
              </div>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[calc(100vh-300px)]">
            <div className="text-center px-6">
              <Heart className="w-16 h-16 mx-auto mb-4 text-hype-violet opacity-50" />
              <h2 className="text-2xl font-bold mb-2">
                {activeTab === 'upcoming' ? 'No Saved Shows' : 'No Past Shows'}
              </h2>
              <p className="text-hype-text-secondary max-w-sm mb-6">
                {activeTab === 'upcoming'
                  ? "Save shows you want to attend and they'll appear here"
                  : "Shows you've attended will appear here"}
              </p>
              {activeTab === 'upcoming' && (
                <Link
                  to="/"
                  className="px-6 py-3 bg-hype-violet text-hype-bg-primary rounded-full font-semibold text-sm hover:bg-hype-violet-hover transition-colors"
                >
                  Discover Shows
                </Link>
              )}
            </div>
          </div>
        )}
      </main>

      <ShowModal showId={displayedShowId} onClose={closeShow} onSelect={openShow} />
    </AppLayout>
  );
}
