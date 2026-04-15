import { Filter, MapPin } from "lucide-react";
import { Link } from "react-router";

interface HypeHeaderProps {
  onFilterClick?: () => void;
}

export function HypeHeader({ onFilterClick }: HypeHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-hype-bg-secondary bg-hype-bg-primary/95 backdrop-blur-md">
      <div className="px-6 pt-4 pb-3 max-w-6xl mx-auto lg:max-w-none">
        <div className="flex items-center justify-between mb-3">
          <Link to="/" className="flex-1">
            <div className="text-xs text-hype-text-secondary tracking-wide font-medium mb-0.5">
              Hype.Wav
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-hype-cyan" />
              <h1 className="text-2xl font-bold text-hype-text-primary">Seattle</h1>
            </div>
          </Link>
          <button
            onClick={onFilterClick}
            className="w-11 h-11 rounded-full bg-hype-bg-secondary flex items-center justify-center hover:bg-hype-bg-hover transition-colors active:scale-95"
            aria-label="Filter shows"
          >
            <Filter className="w-5 h-5 text-hype-text-secondary" />
          </button>
        </div>
      </div>
    </header>
  );
}