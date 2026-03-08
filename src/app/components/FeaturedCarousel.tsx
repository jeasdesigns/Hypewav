import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router';
import { Show } from '../data/mockData';

interface FeaturedCarouselProps {
  shows: Show[];
}

// Get show at a circular offset from the active index
function getShowAt(shows: Show[], center: number, offset: number): Show {
  const idx = ((center + offset) % shows.length + shows.length) % shows.length;
  return shows[idx];
}

const SLOT_CONFIG = [
  { offset: -2, x: -530, scale: 0.58, opacity: 0.25, z: 0 },
  { offset: -1, x: -280, scale: 0.80, opacity: 0.65, z: 1 },
  { offset:  0, x:    0, scale: 1.00, opacity: 1.00, z: 3 },
  { offset:  1, x:  280, scale: 0.80, opacity: 0.65, z: 1 },
  { offset:  2, x:  530, scale: 0.58, opacity: 0.25, z: 0 },
];

function CarouselCard({ show, isCenter }: { show: Show; isCenter: boolean }) {
  const date = new Date(show.date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).toUpperCase();

  return (
    <Link
      to={`/show/${show.id}`}
      className="block w-[280px] h-[400px] rounded-2xl overflow-hidden relative select-none"
      tabIndex={isCenter ? 0 : -1}
      style={{ pointerEvents: isCenter ? 'auto' : 'none' }}
    >
      {/* Background image */}
      <img
        src={show.image}
        alt={show.artist.name}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/85" />

      {/* Price badge */}
      <div className="absolute top-3 right-3 bg-[#09090F]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-[#F1F0FB]">
        {show.ticketPrice !== 'TBD' ? `From ${show.ticketPrice}` : 'TBD'}
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-xs font-medium text-[#A78BFA] mb-1 tracking-wide">
          {date} · {show.time}
        </p>
        <h3 className="text-2xl font-black text-[#F1F0FB] uppercase leading-tight mb-1 line-clamp-2">
          {show.artist.name}
        </h3>
        <p className="text-sm text-[#9CA3AF] uppercase tracking-wide truncate">
          {show.venue.name}
        </p>
      </div>
    </Link>
  );
}

export function FeaturedCarousel({ shows }: FeaturedCarouselProps) {
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

  // Clean up resume timer on unmount
  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); }, []);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (paused || total === 0) return;
    const timer = setInterval(advance, 4000);
    return () => clearInterval(timer);
  }, [advance, paused, total]);

  if (total < 3) return null;

  return (
    <div className="hidden lg:block w-full mb-10">
      {/* Carousel stage */}
      <div
        className="relative h-[440px] flex items-center justify-center overflow-hidden"
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
              <CarouselCard show={show} isCenter={isCenter} />
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {shows.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-5 h-2 bg-[#A78BFA]'
                : 'w-2 h-2 bg-[#9CA3AF]/40 hover:bg-[#9CA3AF]/70'
            }`}
            aria-label={`Go to show ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
