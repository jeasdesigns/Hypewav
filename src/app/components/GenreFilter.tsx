interface GenreFilterProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  genres: string[];
}

export function GenreFilter({ selectedGenre, onGenreChange, genres }: GenreFilterProps) {
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
              ? 'bg-hype-violet text-hype-bg-primary shadow-lg shadow-hype-violet/20'
              : 'bg-hype-bg-secondary text-hype-text-secondary hover:bg-hype-bg-hover hover:text-hype-text-primary'
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