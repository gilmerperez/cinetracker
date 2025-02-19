// Props for passing the selected genre to the parent component
interface GenreDropdownProps {
  onGenreChange: (genre: string) => void;
}

const GenreDropdown: React.FC<GenreDropdownProps> = ({ onGenreChange }) => {
  const handleGenreSelect = (event: React.MouseEvent, genre: string) => {
    event.preventDefault(); // Prevent page reload
    onGenreChange(genre); // Notify parent component about the selected genre
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Genre
      </button>
      <ul className="dropdown-menu">
        {[
          "Action",
          "Comedy",
          "Thriller",
          "Drama",
          "Romance",
          "Fantasy",
          "Horror",
          "Sci-Fi",
        ].map((genre) => (
          <li key={genre}>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => handleGenreSelect(e, genre)}
            >
              {genre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreDropdown;
