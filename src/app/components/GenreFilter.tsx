interface GenreFilterProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  genres: string[];
}

export function GenreFilter({ selectedGenre, onGenreChange, genres }: GenreFilterProps) {
  const btnClass = (genre: string) =>
    `px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200 flex-shrink-0 ${
      selectedGenre === genre
        ? 'bg-hype-violet text-hype-bg-primary shadow-sm shadow-hype-violet/30'
        : 'bg-hype-bg-secondary text-hype-text-secondary hover:bg-hype-bg-hover hover:text-hype-text-primary'
    }`;

  return (
    <div className="relative">
      <div className="flex gap-1.5 overflow-x-scroll scrollbar-hide">
        {genres.map(genre => (
          <button key={genre} onClick={() => onGenreChange(genre)} className={btnClass(genre)}>
            {genre}
          </button>
        ))}
        <div className="w-4 flex-shrink-0" aria-hidden="true" />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-hype-bg-primary/95 to-transparent pointer-events-none" />
    </div>
  );
}
