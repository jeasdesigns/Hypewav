import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";
import { AppLayout } from "../components/AppLayout";

export function SettingsPage() {
  return (
    <AppLayout>
      <div className="sticky top-0 z-10 bg-hype-bg-primary/95 backdrop-blur-xl border-b border-hype-bg-secondary px-4 py-4 flex items-center gap-3">
        <Link
          to="/profile"
          className="w-9 h-9 rounded-full bg-hype-bg-secondary flex items-center justify-center hover:bg-hype-bg-hover transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-bold text-hype-text-primary">Settings</h1>
      </div>

      <main className="px-4 pt-6 pb-24">
        <div className="space-y-2">
          <div className="bg-hype-bg-secondary rounded-xl p-4">
            <div className="text-xs text-hype-text-secondary uppercase tracking-wide font-medium mb-3">App</div>
            <div className="space-y-1">
              <div className="flex items-center justify-between py-2">
                <span className="text-hype-text-primary">City</span>
                <span className="text-hype-text-secondary text-sm">Seattle, WA</span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-hype-bg-primary">
                <span className="text-hype-text-primary">Version</span>
                <span className="text-hype-text-secondary text-sm">1.0.0</span>
              </div>
            </div>
          </div>

          <div className="bg-hype-bg-secondary rounded-xl p-4">
            <div className="text-xs text-hype-text-secondary uppercase tracking-wide font-medium mb-3">Data</div>
            <button
              onClick={() => {
                if (confirm('Clear all saved shows?')) {
                  localStorage.removeItem('hype-saved-shows');
                  window.location.href = '/profile';
                }
              }}
              className="w-full text-left py-2 text-hype-warning hover:text-hype-warning/80 transition-colors text-sm"
            >
              Clear Saved Shows
            </button>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
