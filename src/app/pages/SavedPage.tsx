import { useState } from "react";
import { AppLayout } from "../components/AppLayout";
import { HypeHeader } from "../components/HypeHeader";
import { ShowCard } from "../components/ShowCard";
import { ShowDetailContent } from "../components/ShowDetailContent";
import { Heart, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { useSaved } from "../context/SavedContext";
import {
  Sheet,
  SheetContent,
} from "../components/ui/sheet";

export function SavedPage() {
  const { savedShows, toggleSaved } = useSaved();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedShowId, setSelectedShowId] = useState<string | null>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingShows = savedShows.filter(show => new Date(show.date + 'T00:00:00') >= today);
  const pastShows = savedShows.filter(show => new Date(show.date + 'T00:00:00') < today);

  const currentShows = activeTab === 'upcoming' ? upcomingShows : pastShows;
  const hasShows = currentShows.length > 0;

  return (
    <AppLayout>
      <HypeHeader />

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
            {currentShows.map(show => (
              <div key={show.id} className="relative group">
                <ShowCard show={show} onSelect={s => setSelectedShowId(s.id)} />
                <button
                  onClick={() => toggleSaved(show)}
                  className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 bg-hype-warning rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Remove from saved"
                >
                  <Trash2 className="w-5 h-5 text-hype-bg-primary" />
                </button>
              </div>
            ))}
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

      {/* Show Detail Sheet */}
      <Sheet open={!!selectedShowId} onOpenChange={open => { if (!open) setSelectedShowId(null); }}>
        <SheetContent
          side="bottom"
          className="h-[92vh] bg-hype-bg-primary border-hype-bg-secondary p-0 overflow-y-auto [&>button]:hidden"
        >
          {selectedShowId && (
            <ShowDetailContent
              showId={selectedShowId}
              onClose={() => setSelectedShowId(null)}
            />
          )}
        </SheetContent>
      </Sheet>
    </AppLayout>
  );
}
