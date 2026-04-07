// M4 — Search page
import { Search } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="px-4 pt-5">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4" style={{ color: "#F1F0FB" }}>
        Search
      </h1>

      {/* Search input */}
      <div
        className="flex items-center gap-3 rounded-xl px-4 h-12"
        style={{ backgroundColor: "#13121E", border: "1px solid #1E1D2A" }}
      >
        <Search size={18} style={{ color: "#9CA3AF" }} />
        <span className="text-sm" style={{ color: "#9CA3AF" }}>
          Artists, venues, genres…
        </span>
      </div>

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center mt-24 gap-3">
        <Search size={48} style={{ color: "#1E1D2A" }} />
        <p className="text-sm" style={{ color: "#9CA3AF" }}>
          Search for artists, shows, or venues
        </p>
      </div>
    </div>
  );
}
