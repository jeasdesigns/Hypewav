interface GenreFilterProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  genres: string[];
}

export function GenreFilter({ selectedGenre, onGenreChange, genres }: GenreFilterProps) {
  const btnClass = (genre: string) =>
    `px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 flex-shrink-0 ${
      selectedGenre === genre
        ? 'bg-hype-violet text-hype-bg-primary shadow-lg shadow-hype-violet/20'
        : 'bg-hype-bg-secondary text-hype-text-secondary hover:bg-hype-bg-hover hover:text-hype-text-primary'
    }`;

  return (
    <>
      {/* Desktop: wrap so all genres are always visible */}
      <div className="hidden lg:flex flex-wrap gap-2">
        {genres.map(genre => (
          <button key={genre} onClick={() => onGenreChange(genre)} className={btnClass(genre)}>
            {genre}
          </button>
        ))}
      </div>

      {/* Mobile: horizontal scroll with fade edge hinting at overflow */}
      <div className="lg:hidden relative">
        <div className="flex gap-2 overflow-x-scroll pb-2 scrollbar-hide">
          {genres.map(genre => (
            <button key={genre} onClick={() => onGenreChange(genre)} className={btnClass(genre)}>
              {genre}
            </button>
          ))}
          <div className="w-4 flex-shrink-0" aria-hidden="true" />
        </div>
        <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-hype-bg-primary to-transparent pointer-events-none" />
      </div>
    </>
  );
}
