import { ChevronLeft, Mail } from "lucide-react";
import { Link } from "react-router";
import { AppLayout } from "../components/AppLayout";

export function HelpPage() {
  return (
    <AppLayout>
      <div className="sticky top-0 z-10 bg-hype-bg-primary/95 backdrop-blur-xl border-b border-hype-bg-secondary px-4 py-4 flex items-center gap-3">
        <Link
          to="/profile"
          className="w-9 h-9 rounded-full bg-hype-bg-secondary flex items-center justify-center hover:bg-hype-bg-hover transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-lg font-bold text-hype-text-primary">Help</h1>
      </div>

      <main className="px-4 pt-6 pb-24 space-y-4">
        <div className="bg-hype-bg-secondary rounded-xl p-4 space-y-3">
          <div className="text-xs text-hype-text-secondary uppercase tracking-wide font-medium">About Hype.Wav</div>
          <p className="text-sm text-hype-text-secondary leading-relaxed">
            Hype.Wav surfaces upcoming live shows in Seattle, enriched with artist data from Spotify — so you can browse, listen to previews, and decide all in one place.
          </p>
        </div>

        <div className="bg-hype-bg-secondary rounded-xl p-4 space-y-3">
          <div className="text-xs text-hype-text-secondary uppercase tracking-wide font-medium">FAQ</div>
          <div className="space-y-4">
            {[
              { q: 'Where does show data come from?', a: 'Concert listings are sourced from Ticketmaster for the Greater Seattle area.' },
              { q: 'Where does artist data come from?', a: 'Artist images, genres, and audio previews are sourced from Spotify.' },
              { q: 'Why are some previews missing?', a: 'Spotify only provides 30-second previews for tracks where the rights holder has enabled them.' },
              { q: 'Why can\'t I buy tickets in the app?', a: 'Hype.Wav is a discovery tool — tapping "Get Tickets" links you to the official Ticketmaster listing.' },
            ].map(({ q, a }) => (
              <div key={q}>
                <div className="text-sm font-medium text-hype-text-primary mb-1">{q}</div>
                <div className="text-sm text-hype-text-secondary">{a}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-hype-bg-secondary rounded-xl p-4">
          <div className="text-xs text-hype-text-secondary uppercase tracking-wide font-medium mb-3">Contact</div>
          <a
            href="mailto:support@hypewav.app"
            className="flex items-center gap-3 text-hype-violet hover:text-hype-violet/80 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">support@hypewav.app</span>
          </a>
        </div>
      </main>
    </AppLayout>
  );
}
