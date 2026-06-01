import { Link } from "react-router";
import { motion } from "motion/react";
import { Flame, MapPin, Clock, Heart } from "lucide-react";
import { Show } from "../data/mockData";
import { normalizeGenre } from "../utils/genres";
import { useSaved } from "../context/SavedContext";

interface ShowCardProps {
  show: Show;
  onSelect?: (show: Show) => void;
}

export function ShowCard({ show, onSelect }: ShowCardProps) {
  const { isSaved, toggleSaved } = useSaved();
  const saved = isSaved(show.id);

  const displayDate = new Date(show.date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric',
  });

  const cardContent = (
    <div className="relative rounded-2xl overflow-hidden h-48 bg-gradient-to-b from-transparent to-hype-bg-primary">
      {/* Background image */}
      <div className="absolute inset-0 bg-gradient-to-br from-hype-violet/20 to-hype-bg-secondary">
        {show.image && (
          <img
            src={show.image}
            alt={show.artist.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
      </div>

      {/* Genre badge — top left */}
      {(() => {
        const label = show.artist?.genres?.map(normalizeGenre).find(Boolean);
        return label ? (
          <div className="absolute top-3 left-3 bg-hype-violet/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-white shadow-lg">
            {label}
          </div>
        ) : null;
      })()}

      {/* Ticket status — top right */}
      {show.ticketStatus === 'selling-fast' && (
        <div className="absolute top-3 right-3 w-8 h-8 bg-hype-bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30" aria-label="Selling Fast">
          <Flame className="w-4 h-4 text-red-500 fill-orange-500" />
        </div>
      )}
      {show.ticketStatus === 'sold-out' && (
        <div className="absolute top-3 right-3 bg-hype-warning/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-hype-bg-primary shadow-lg">
          Sold Out
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="text-xs text-hype-text-secondary/80 mb-0.5">{displayDate}</div>
        <h3 className="text-xl font-bold text-hype-text-primary mb-1.5 line-clamp-1">
          {show.artist.name}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-hype-text-secondary min-w-0">
            <div className="flex items-center gap-1 min-w-0">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{show.venue.name}</span>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Clock className="w-3 h-3" />
              <span>{show.time}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs font-semibold text-hype-cyan">{show.ticketPrice}</span>
            <button
              onClick={e => { e.stopPropagation(); toggleSaved(show); }}
              className="w-7 h-7 rounded-full bg-hype-bg-primary/70 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-hype-bg-primary/90"
              aria-label={saved ? 'Remove from saved' : 'Save show'}
            >
              <Heart className={`w-3.5 h-3.5 transition-colors ${saved ? 'fill-hype-violet text-hype-violet' : 'text-hype-text-secondary'}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (onSelect) {
    return (
      <motion.button
        onClick={() => onSelect(show)}
        className="block w-full text-left group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.05 }}
        transition={{ type: 'spring', damping: 20, stiffness: 400 }}
      >
        {cardContent}
      </motion.button>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.05 }}
      transition={{ type: 'spring', damping: 20, stiffness: 400 }}
    >
      <Link to={`/show/${show.id}`} className="block group">
        {cardContent}
      </Link>
    </motion.div>
  );
}
