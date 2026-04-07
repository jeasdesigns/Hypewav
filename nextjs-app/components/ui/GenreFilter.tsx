"use client";

import { useState } from "react";

interface GenreFilterProps {
  genres: string[];
  onChange?: (genre: string) => void;
}

export default function GenreFilter({ genres, onChange }: GenreFilterProps) {
  const [selected, setSelected] = useState(genres[0] ?? "All");

  function select(genre: string) {
    setSelected(genre);
    onChange?.(genre);
  }

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4">
      {genres.map((genre) => {
        const active = genre === selected;
        return (
          <button
            key={genre}
            onClick={() => select(genre)}
            className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
            style={{
              backgroundColor: active ? "#A78BFA" : "#13121E",
              color: active ? "#09090F" : "#9CA3AF",
              boxShadow: active ? "0 0 12px rgba(167,139,250,0.3)" : undefined,
            }}
          >
            {genre}
          </button>
        );
      })}
      <div className="w-4 flex-shrink-0" aria-hidden />
    </div>
  );
}
