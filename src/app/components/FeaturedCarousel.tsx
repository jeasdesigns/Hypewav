import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router';
import { Show } from '../data/mockData';

interface FeaturedCarouselProps {
  shows: Show[];
  onSelect?: (show: Show) => void;
}

function getShowAt(shows: Show[], center: number, offset: number): Show {
  const idx = ((center + offset) % shows.length + shows.length) % shows.length;
  return shows[idx];
}

const SLOT_CONFIG = [
  { offset: -2, x: -760, scale: 0.58, opacity: 0.25, z: 0 },
  { offset: -1, x: -435, scale: 0.80, opacity: 0.65, z: 1 },
  { offset:  0, x:    0, scale: 1.00, opacity: 1.00, z: 3 },
  { offset:  1, x:  435, scale: 0.80, opacity: 0.65, z: 1 },
  { offset:  2, x:  760, scale: 0.58, opacity: 0.25, z: 0 },
];

function CarouselCard({ show, isCenter, onSelect }: { show: Show; isCenter: boolean; onSelect?: (show: Show) => void }) {
  const date = new Date(show.date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).toUpperCase();

  const inner = (
    <>
      <img
        src={show.image}
        alt={show.artist.name}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
      <div className="absolute top-3 left-3 bg-hype-bg-primary/80 px-3 py-1.5 rounded-lg text-xs font-semibold text-hype-violet">
        {date}
      </div>
      <div className="absolute top-3 right-3 bg-hype-bg-primary/80 px-3 py-1.5 rounded-lg text-xs font-semibold text-hype-text-primary">
        {show.ticketPrice !== 'TBD' ? `From ${show.ticketPrice}` : 'TBD'}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-2xl font-bold text-hype-text-primary mb-1.5 line-clamp-1">
          {show.artist.name}
        </h3>
        <div className="flex items-center gap-3 text-sm text-hype-text-secondary">
          <span>{show.venue.name}</span>
          <span>·</span>
          <span>{show.time}</span>
        </div>
      </div>
    </>
  );

  const sharedClass = "block w-[460px] h-[200px] rounded-2xl overflow-hidden relative select-none";

  if (onSelect) {
    return (
      <button
        onClick={() => onSelect(show)}
        className={sharedClass}
        tabIndex={isCenter ? 0 : -1}
        style={{ pointerEvents: isCenter ? 'auto' : 'none' }}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link
      to={`/show/${show.id}`}
      className={sharedClass}
      tabIndex={isCenter ? 0 : -1}
      style={{ pointerEvents: isCenter ? 'auto' : 'none' }}
    >
      {inner}
    </Link>
  );
}

export function FeaturedCarousel({ shows, onSelect }: FeaturedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = shows.length;
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = useCallback(() => {
    setActiveIndex(i => (i + 1) % total);
  }, [total]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 6000);
  };

  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); }, []);

  useEffect(() => {
    if (paused || total === 0) return;
    const timer = setInterval(advance, 4000);
    return () => clearInterval(timer);
  }, [advance, paused, total]);

  if (total < 3) return null;

  return (
    <div className="hidden lg:block w-full mb-10">
      <div
        className="relative h-[260px] flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {SLOT_CONFIG.map(({ offset, x, scale, opacity, z }) => {
          const show = getShowAt(shows, activeIndex, offset);
          const isCenter = offset === 0;
          return (
            <div
              key={`slot-${offset}`}
              className="absolute"
              style={{
                transform: `translateX(${x}px) scale(${scale})`,
                opacity,
                zIndex: z,
                transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.55s ease',
                willChange: 'transform, opacity',
              }}
            >
              <CarouselCard show={show} isCenter={isCenter} onSelect={onSelect} />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {shows.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-5 h-2 bg-hype-violet'
                : 'w-2 h-2 bg-hype-text-secondary/40 hover:bg-hype-text-secondary/70'
            }`}
            aria-label={`Go to show ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
