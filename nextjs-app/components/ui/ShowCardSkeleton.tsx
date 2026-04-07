// Skeleton placeholder — exact dimensions match the real ShowCard
interface ShowCardSkeletonProps {
  featured?: boolean;
}

export default function ShowCardSkeleton({ featured = false }: ShowCardSkeletonProps) {
  const height = featured ? "h-56" : "h-44";

  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${height} animate-pulse`}
      style={{ backgroundColor: "#13121E" }}
    >
      {/* Image placeholder */}
      <div className="absolute inset-0" style={{ backgroundColor: "#1A1927" }} />

      {/* Genre badge skeleton */}
      <div
        className="absolute top-3 left-3 h-6 w-16 rounded-full"
        style={{ backgroundColor: "#252436" }}
      />

      {/* Bottom text */}
      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
        <div className="h-6 w-40 rounded-lg" style={{ backgroundColor: "#252436" }} />
        <div className="h-4 w-56 rounded-lg" style={{ backgroundColor: "#1E1D2A" }} />
      </div>
    </div>
  );
}
