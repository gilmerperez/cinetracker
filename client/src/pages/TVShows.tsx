import { useState, useEffect } from "react";
import TVShowsCard from "../components/TVShowsCard";
import YearDropdown from "../components/YearDropdown";
import GenreDropdown from "../components/GenreDropdown";

// Interface for the TV Show objects
interface TVShow {
  Title?: string;
  Year?: string;
  imdbID?: string;
  Type?: string;
  Poster?: string;
  Director?: string;
  imdbRating?: string;
}

const TVShows = () => {
  const [tvShows, setTvShows] = useState<TVShow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  // Define the API URL with your OMDb API key
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=movie&type=series`;

  // Fetch TV Shows from OMDb API when the component mounts
  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const url = `${apiUrl}${selectedYear ? `&y=${selectedYear}` : ""}${selectedGenre ? `&genre=${selectedGenre}` : ""}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === "True") {
          setTvShows(data.Search); // Store TV Show results in state variable
        } else {
          setError("No TV shows found");
        }
      } catch (error) {
        setError("Error fetching data from OMDb API");
      } finally {
        setLoading(false); // Hide Loading indicator after data successfully loads
      }
    };
    fetchTVShows();
  }, [selectedYear, selectedGenre, apiUrl]); // Empty dependency array makes this run once when the component mounts

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
        <h1 className="text-center mb-4">TV Shows</h1>
        {/* Show Loading icon as API fetches data */}
        {loading && <p className="text-center">Loading...</p>}
        {/* Set Error message if no data is found */}
        {error && <p className="text-center text-danger">{error}</p>}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* For each TV Show in API call, map over them and render data in TVShowsCard */}
          {tvShows.length > 0 ? (
            tvShows.map((show: TVShow) => <TVShowsCard key={show.imdbID || "N/A"} show={show} />)
          ) : (
            <p className="text-center">No tv shows found for the selected year or genre.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TVShows;
