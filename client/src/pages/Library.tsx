import Auth from "../utils/auth"; // For user validation
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

// Function to add Movie to Library
export const addMovieToLibrary = (movie: Movie) => {
  const storedMovies: Movie[] = JSON.parse(localStorage.getItem("library") || "[]");
  const updatedMovies = [...storedMovies, movie]; // Add Movie to storedMovies array
  localStorage.setItem("library", JSON.stringify(updatedMovies)); // Save updated array to localStorage
};

// Function to add TV Show to Library
export const addTVShowToLibrary = (show: TVShow) => {
  const storedTVShows: TVShow[] = JSON.parse(localStorage.getItem("library") || "[]");
  const updatedTVShows = [...storedTVShows, show]; // Add TV Show to storedTVShows array
  localStorage.setItem("library", JSON.stringify(updatedTVShows)); // Save updated array to localStorage
};

const Library = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in. If not, redirect to login page
    if (!Auth.loggedIn()) {
      alert("You must be logged in to access your library!");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Your Library</h1>
      {/* The rest of your Library component UI */}
    </div>
  );
};

export default Library;
