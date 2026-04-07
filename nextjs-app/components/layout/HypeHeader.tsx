"use client";

import { MapPin, SlidersHorizontal } from "lucide-react";

interface HypeHeaderProps {
  city?: string;
  onFilterClick?: () => void;
}

export default function HypeHeader({
  city = "Seattle",
  onFilterClick,
}: HypeHeaderProps) {
  return (
    <header
      className="sticky top-0 z-40 px-5 pt-4 pb-3"
      style={{
        backgroundColor: "rgba(9,9,15,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid #1E1D2A",
      }}
    >
      <div className="flex items-center justify-between">
        {/* Logo / location */}
        <div>
          <p
            className="text-[11px] font-medium tracking-widest uppercase mb-0.5"
            style={{ color: "#9CA3AF" }}
          >
            Hype.Wav
          </p>
          <div className="flex items-center gap-1.5">
            <MapPin size={18} style={{ color: "#67E8F9" }} />
            <h1 className="text-2xl font-bold" style={{ color: "#F1F0FB" }}>
              {city}
            </h1>
          </div>
        </div>

        {/* Filter button */}
        <button
          onClick={onFilterClick}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-colors active:scale-95"
          style={{ backgroundColor: "#13121E" }}
          aria-label="Filter shows"
        >
          <SlidersHorizontal size={18} style={{ color: "#9CA3AF" }} />
        </button>
      </div>
    </header>
  );
}
