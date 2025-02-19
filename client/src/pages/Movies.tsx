import { useState, useEffect } from "react";
import MoviesCard from "../components/MoviesCard";
import YearDropdown from "../components/YearDropdown";
import GenreDropdown from "../components/GenreDropdown";
// import CardSection from "../components/Cards";

// Interface for the Movie objects
interface Movie {
  Title?: string;
  Year?: string;
  imdbID?: string;
  Type?: string;
  Poster?: string;
  Director?: string;
  imdbRating?: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  // Define API URL with OMDb API key
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=movie&type=movie`;

  // Fetch Movies from OMDb API when component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `${apiUrl}${selectedYear ? `&y=${selectedYear}` : ""}${selectedGenre ? `&genre=${selectedGenre}` : ""}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search); // Store Movie results in state variable
        } else {
          setError("No Movies found");
        }
      } catch (error) {
        setError("Error fetching data from OMDb API");
      } finally {
        setLoading(false); // Hide Loading indicator after data successfully loads
      }
    };
    fetchMovies();
  }, [selectedYear, selectedGenre, apiUrl]);

  // Handler to update selected year
  const handleYearChange = (year: string) => {
    setSelectedYear(year); // Update the selected year in state variable
  };
  
  // Handler to update selected genre
  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre); // Update selected genre in state variable
  };

  return (
    <>
      <YearDropdown onYearChange={handleYearChange} /> 
      <GenreDropdown onGenreChange={handleGenreChange} />
      <div className="container py-5">
        <h1 className="text-center mb-4">Movies</h1>
        {/* Show Loading icon as API fetches data */}
        {loading && <p className="text-center">Loading...</p>}
        {/* Set Error message if no data is found */}
        {error && <p className="text-center text-danger">{error}</p>}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* For each TV Show in API call, map over them and render data in TVShowsCard */}
          {movies.length > 0 ? (
            movies.map((movie: Movie) => <MoviesCard key={movie.imdbID || "N/A"} movie={movie} />)
          ) : (
            <p className="text-center">No Movies found for the selected year or genre.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Movies;
