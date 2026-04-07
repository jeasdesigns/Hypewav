// M2 — Discover page (scaffold with real design, no live data yet)
import HypeHeader from "@/components/layout/HypeHeader";
import GenreFilter from "@/components/ui/GenreFilter";
import ShowCardSkeleton from "@/components/ui/ShowCardSkeleton";

const GENRES = ["All", "Rock", "Hip-Hop", "Electronic", "Pop", "Indie", "R&B", "Jazz", "Metal"];

export default function DiscoverPage() {
  return (
    <>
      <HypeHeader />

      {/* Genre filter strip */}
      <div className="px-4 pt-4">
        <GenreFilter genres={GENRES} />
      </div>

      {/* Trending Now */}
      <section className="mt-6 px-4">
        <h2 className="text-lg font-semibold mb-3" style={{ color: "#F1F0FB" }}>
          Trending Now
        </h2>
        <div className="flex flex-col gap-3">
          <ShowCardSkeleton featured />
          <ShowCardSkeleton featured />
        </div>
      </section>

      {/* This Week */}
      <section className="mt-6 px-4 pb-6">
        <h2 className="text-lg font-semibold mb-3" style={{ color: "#F1F0FB" }}>
          This Week
        </h2>
        <div className="flex flex-col gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <ShowCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
