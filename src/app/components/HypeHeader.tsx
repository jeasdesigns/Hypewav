import { Filter, MapPin } from "lucide-react";
import { Link } from "react-router";

interface HypeHeaderProps {
  onFilterClick?: () => void;
  filterActive?: boolean;
}

export function HypeHeader({ onFilterClick, filterActive = false }: HypeHeaderProps) {
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
            className={`relative w-11 h-11 rounded-full flex items-center justify-center transition-colors active:scale-95 ${
              filterActive
                ? 'bg-hype-violet/20 hover:bg-hype-violet/30'
                : 'bg-hype-bg-secondary hover:bg-hype-bg-hover'
            }`}
            aria-label="Filter shows"
          >
            <Filter className={`w-5 h-5 ${filterActive ? 'text-hype-violet' : 'text-hype-text-secondary'}`} />
            {filterActive && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-hype-violet" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}