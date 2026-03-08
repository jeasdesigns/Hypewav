import { Filter, MapPin } from "lucide-react";
import { Link } from "react-router";

interface HypeHeaderProps {
  onFilterClick?: () => void;
}

export function HypeHeader({ onFilterClick }: HypeHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#13121E] bg-[#09090F]/95 backdrop-blur-md">
      <div className="px-6 pt-4 pb-3 max-w-6xl mx-auto lg:max-w-none">
        <div className="flex items-center justify-between mb-3">
          <Link to="/" className="flex-1">
            <div className="text-xs text-[#9CA3AF] tracking-wide font-medium mb-0.5">
              Hype.Wav
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#67E8F9]" />
              <h1 className="text-2xl font-bold text-[#F1F0FB]">Seattle</h1>
            </div>
          </Link>
          <button 
            onClick={onFilterClick}
            className="w-11 h-11 rounded-full bg-[#13121E] flex items-center justify-center hover:bg-[#1A1927] transition-colors active:scale-95"
            aria-label="Filter shows"
          >
            <Filter className="w-5 h-5 text-[#9CA3AF]" />
          </button>
        </div>
      </div>
    </header>
  );
}