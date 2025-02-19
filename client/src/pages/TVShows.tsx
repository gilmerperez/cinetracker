import { useState, useEffect } from "react";
import TVShowCard from "../components/TVShowsCard";
import GenreDropdown from "../components/GenreDropdown";
import YearDropdown from "../components/YearDropdown";

// Define an interface for the TV show objects
interface TVShow {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Director?: string;
  imdbRating?: string;
}

const TVShows = () => {
  const [tvShows, setTvShows] = useState<TVShow[]>([]); // State to store movie data
  const [loading, setLoading] = useState<boolean>(true); // Loading state for UI
  const [error, setError] = useState<string | null>(null); // Error state

  // Define the API URL with your OMDb API key
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=movie&type=series`;

  // Fetch movies from OMDb API when the component mounts
  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.Response === "True") {
          setTvShows(data.Search); // Store the TV show results in state
        } else {
          setError("No TV shows found");
        }
      } catch (error) {
        setError("Error fetching data from OMDb API");
      } finally {
        setLoading(false); // Hide loading indicator
      }
    };

    fetchTVShows();
  }, []); // Empty dependency array makes this run once when the component mounts

  return (
    <>
      <GenreDropdown />
      <YearDropdown />
      <div className="container py-5">
        <h1 className="text-center mb-4">TV Shows</h1>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-danger">{error}</p>}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {tvShows.map((show: TVShow) => (
            <TVShowCard
              key={show.imdbID}
              title={show.Title}
              director={show.Director || "N/A"}
              releaseDate={show.Year || "Unknown"}
              rating={show.imdbRating || "N/A"}
              poster={show.Poster}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TVShows;
