import { genres as defaultGenres } from "../data/mockData";

interface GenreFilterProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  genres?: string[];
}

export function GenreFilter({ selectedGenre, onGenreChange, genres = defaultGenres }: GenreFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-scroll pb-2 scrollbar-hide">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onGenreChange(genre)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
            transition-colors duration-200 flex-shrink-0
            ${selectedGenre === genre 
              ? 'bg-[#A78BFA] text-[#09090F] shadow-lg shadow-[#A78BFA]/20' 
              : 'bg-[#13121E] text-[#9CA3AF] hover:bg-[#1A1927] hover:text-[#F1F0FB]'
            }
          `}
        >
          {genre}
        </button>
      ))}
      {/* Padding spacer to ensure last item has space */}
      <div className="w-4 flex-shrink-0" aria-hidden="true" />
    </div>
  );
}