// M5 — Favorites / Saved page
import { Heart } from "lucide-react";
import Link from "next/link";

export default function SavedPage() {
  return (
    <div className="px-4 pt-5">
      <h1 className="text-2xl font-bold mb-6" style={{ color: "#F1F0FB" }}>
        Saved
      </h1>

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center mt-20 gap-4">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#13121E" }}
        >
          <Heart size={36} style={{ color: "#A78BFA" }} />
        </div>
        <div className="text-center space-y-1">
          <p className="font-semibold" style={{ color: "#F1F0FB" }}>
            No saved shows yet
          </p>
          <p className="text-sm" style={{ color: "#9CA3AF" }}>
            Tap the heart on any show to save it here
          </p>
        </div>
        <Link
          href="/discover"
          className="mt-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-opacity active:opacity-70"
          style={{ backgroundColor: "#A78BFA", color: "#09090F" }}
        >
          Browse Shows
        </Link>
      </div>
    </div>
  );
}
