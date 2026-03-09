import { Link } from "react-router";
import { Flame, MapPin, Clock } from "lucide-react";
import { Show } from "../data/mockData";

interface ShowCardProps {
  show: Show;
}

export function ShowCard({ show }: ShowCardProps) {
  const displayDate = new Date(show.date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Link to={`/show/${show.id}`} className="block group active:scale-[0.98] transition-transform duration-150">
      <div className="relative rounded-2xl overflow-hidden h-48 bg-gradient-to-b from-transparent to-[#09090F]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={show.image} 
            alt={show.artist.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
        </div>

        {/* Genre Badge - Top Left */}
        {/* Genre badge disabled for diagnosis */}

        {/* Featured Show Indicator - Option B (Top Right) */}
        {show.ticketStatus === 'selling-fast' && (
          <div 
            className="absolute top-3 right-3 w-9 h-9 bg-[#09090F]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30" 
            aria-label="Selling Fast"
          >
            <Flame className="w-5 h-5 text-red-500 fill-orange-500" />
          </div>
        )}

        {/* Sold Out Badge - Top Right (if sold out) */}
        {show.ticketStatus === 'sold-out' && (
          <div className="absolute top-3 right-3 bg-[#F59E0B]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[#09090F] shadow-lg">
            Sold Out
          </div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-2xl font-bold text-[#F1F0FB] mb-1.5 line-clamp-1">
            {show.artist.name}
          </h3>
          <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-[#9CA3AF]">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{show.venue.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{show.time}</span>
            </div>
            <span className="text-[#67E8F9]">{show.ticketPrice}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}