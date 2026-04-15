import { Settings, HelpCircle, LogOut, Music } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { HypeHeader } from "../components/HypeHeader";

export function ProfilePage() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (confirm('Clear your saved shows and log out?')) {
      localStorage.removeItem('hype-saved-shows');
      navigate('/');
    }
  };

  return (
    <AppLayout>
      <HypeHeader />

      <main className="px-4 pt-6 pb-24">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-hype-violet to-hype-cyan flex items-center justify-center">
            <div className="w-[88px] h-[88px] rounded-full bg-hype-bg-secondary flex items-center justify-center text-3xl font-bold">
              ME
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-1">Music Lover</h2>
          <p className="text-hype-text-secondary">Seattle, WA</p>
        </div>

        <div className="space-y-2">
          <Link
            to="/saved"
            className="w-full flex items-center gap-3 bg-hype-bg-secondary rounded-xl p-4 hover:bg-hype-bg-hover transition-colors"
          >
            <Music className="w-5 h-5 text-hype-violet" />
            <span className="flex-1 text-left">Saved Shows</span>
          </Link>

          <Link to="/settings" className="w-full flex items-center gap-3 bg-hype-bg-secondary rounded-xl p-4 hover:bg-hype-bg-hover transition-colors">
            <Settings className="w-5 h-5 text-hype-text-secondary" />
            <span className="flex-1 text-left">Settings</span>
          </Link>

          <Link to="/help" className="w-full flex items-center gap-3 bg-hype-bg-secondary rounded-xl p-4 hover:bg-hype-bg-hover transition-colors">
            <HelpCircle className="w-5 h-5 text-hype-text-secondary" />
            <span className="flex-1 text-left">Help</span>
          </Link>

          <button
            onClick={handleLogOut}
            className="w-full flex items-center gap-3 bg-hype-bg-secondary rounded-xl p-4 hover:bg-hype-bg-hover transition-colors"
          >
            <LogOut className="w-5 h-5 text-hype-text-secondary" />
            <span className="flex-1 text-left">Log Out</span>
          </button>
        </div>

        <div className="mt-8 p-6 bg-hype-bg-secondary rounded-2xl border border-hype-violet/30">
          <h3 className="font-semibold mb-2 text-hype-violet">About Hype.Wav</h3>
          <p className="text-sm text-hype-text-secondary leading-relaxed mb-3">
            Discover the best live music in Greater Seattle. We surface upcoming shows enriched with deep artist data from Spotify.
          </p>
          <p className="text-xs text-hype-text-secondary">Version 1.0.0</p>
        </div>
      </main>
    </AppLayout>
  );
}
