import { useState, useEffect } from "react";
import MovieCard from "../components/MoviesCard";
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

  // Define API URL with OMDb API key
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=movie&type=movie`;

  // Fetch Movies from OMDb API when component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(apiUrl);
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
  }, [apiUrl]);

  return (
    <>
      <YearDropdown />
      <GenreDropdown />
      <div className="container py-5">
        <h1 className="text-center mb-4">Movies</h1>
        {/* Show Loading icon as API fetches data */}
        {loading && <p className="text-center">Loading...</p>}
        {/* Set Error message if no data is found */}
        {error && <p className="text-center text-danger">{error}</p>}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* For each Movie in API call, map over them and render data in MovieCard */}
          {movies.map((movie: Movie) => (
            <MovieCard key={movie.imdbID || "N/A"} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
