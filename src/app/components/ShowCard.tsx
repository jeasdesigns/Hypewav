import { Link } from "react-router";
import { motion } from "motion/react";
import { Flame, MapPin, Clock } from "lucide-react";
import { Show } from "../data/mockData";
import { normalizeGenre } from "../utils/genres";

interface ShowCardProps {
  show: Show;
  onSelect?: (show: Show) => void;
}

export function ShowCard({ show, onSelect }: ShowCardProps) {
  const cardContent = (
    <div className="relative rounded-2xl overflow-hidden h-48 bg-gradient-to-b from-transparent to-hype-bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-hype-violet/20 to-hype-bg-secondary">
        {show.image && (
          <img
            src={show.image}
            alt={show.artist.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
      </div>

      {/* Genre Badge - Top Left */}
      {(() => {
        const label = show.artist?.genres?.map(normalizeGenre).find(Boolean);
        return label ? (
          <div className="absolute top-3 left-3 bg-hype-violet px-3 py-1.5 rounded-full text-xs font-medium text-hype-bg-primary shadow-lg">
            {label}
          </div>
        ) : null;
      })()}

      {/* Selling Fast indicator */}
      {show.ticketStatus === 'selling-fast' && (
        <div
          className="absolute top-3 right-3 w-9 h-9 bg-hype-bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30"
          aria-label="Selling Fast"
        >
          <Flame className="w-5 h-5 text-red-500 fill-orange-500" />
        </div>
      )}

      {/* Sold Out Badge */}
      {show.ticketStatus === 'sold-out' && (
        <div className="absolute top-3 right-3 bg-hype-warning/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-hype-bg-primary shadow-lg">
          Sold Out
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-2xl font-bold text-hype-text-primary mb-1.5 line-clamp-1">
          {show.artist.name}
        </h3>
        <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-hype-text-secondary">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{show.venue.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{show.time}</span>
          </div>
          <span className="text-hype-cyan">{show.ticketPrice}</span>
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
