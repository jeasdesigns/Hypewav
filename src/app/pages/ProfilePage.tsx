import { useMemo } from "react";
import { Settings, HelpCircle, LogOut, Music, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { HypeHeader } from "../components/HypeHeader";
import { useSaved } from "../context/SavedContext";
import { normalizeGenre } from "../utils/genres";

export function ProfilePage() {
  const navigate = useNavigate();
  const { savedShows } = useSaved();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingCount = savedShows.filter(
    s => new Date(s.date + 'T00:00:00') >= today
  ).length;

  const topGenres = useMemo(() => {
    const counts = new Map<string, number>();
    savedShows.forEach(show => {
      show.artist.genres.forEach(g => {
        const label = normalizeGenre(g);
        if (label) counts.set(label, (counts.get(label) ?? 0) + 1);
      });
    });
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([label]) => label);
  }, [savedShows]);

  const handleLogOut = () => {
    if (confirm('Clear your saved shows and log out?')) {
      localStorage.removeItem('hype-saved-shows');
      navigate('/');
    }
  };

  return (
    <AppLayout>
      <div className="lg:hidden">
        <HypeHeader />
      </div>

      <main className="px-4 pt-6 pb-24">
        {/* Avatar + identity */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-hype-violet to-hype-cyan flex items-center justify-center">
            <div className="w-[88px] h-[88px] rounded-full bg-hype-bg-secondary flex items-center justify-center text-3xl font-bold">
              ME
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-1">Music Lover</h2>
          <p className="text-hype-text-secondary text-sm">Seattle, WA</p>
        </div>

        {/* Stats derived from saved shows */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-hype-bg-secondary rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-hype-violet mb-0.5">{upcomingCount}</div>
            <div className="text-xs text-hype-text-secondary">Upcoming Shows</div>
          </div>
          <div className="bg-hype-bg-secondary rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-hype-cyan mb-0.5">{savedShows.length}</div>
            <div className="text-xs text-hype-text-secondary">Total Saved</div>
          </div>
        </div>

        {/* Top genres */}
        {topGenres.length > 0 && (
          <div className="mb-6">
            <div className="text-xs text-hype-text-secondary uppercase tracking-wide font-medium mb-2">Your Top Genres</div>
            <div className="flex gap-2 flex-wrap">
              {topGenres.map(genre => (
                <span
                  key={genre}
                  className="px-3 py-1.5 bg-hype-violet/20 text-hype-violet text-sm font-medium rounded-full border border-hype-violet/30"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Nav links */}
        <div className="space-y-2">
          <Link
            to="/saved"
            className="w-full flex items-center gap-3 bg-hype-bg-secondary rounded-xl p-4 hover:bg-hype-bg-hover transition-colors"
          >
            <Music className="w-5 h-5 text-hype-violet" />
            <span className="flex-1 text-left">Saved Shows</span>
            {upcomingCount > 0 && (
              <span className="px-2 py-0.5 bg-hype-violet text-hype-bg-primary text-xs font-semibold rounded-full">
                {upcomingCount}
              </span>
            )}
            <ChevronRight className="w-4 h-4 text-hype-text-secondary" />
          </Link>

          <Link to="/settings" className="w-full flex items-center gap-3 bg-hype-bg-secondary rounded-xl p-4 hover:bg-hype-bg-hover transition-colors">
            <Settings className="w-5 h-5 text-hype-text-secondary" />
            <span className="flex-1 text-left">Settings</span>
            <ChevronRight className="w-4 h-4 text-hype-text-secondary" />
          </Link>

          <Link to="/help" className="w-full flex items-center gap-3 bg-hype-bg-secondary rounded-xl p-4 hover:bg-hype-bg-hover transition-colors">
            <HelpCircle className="w-5 h-5 text-hype-text-secondary" />
            <span className="flex-1 text-left">Help</span>
            <ChevronRight className="w-4 h-4 text-hype-text-secondary" />
          </Link>

          <button
            onClick={handleLogOut}
            className="w-full flex items-center gap-3 bg-hype-bg-secondary rounded-xl p-4 hover:bg-hype-bg-hover transition-colors"
          >
            <LogOut className="w-5 h-5 text-hype-text-secondary" />
            <span className="flex-1 text-left">Log Out</span>
          </button>
        </div>
      </main>
    </AppLayout>
  );
}
