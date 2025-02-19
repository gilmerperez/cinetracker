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

export const addMovieToLibrary = (movie: Movie) => {
  const storedMovies: Movie[] = JSON.parse(localStorage.getItem("library") || "[]");
  const updatedMovies = [...storedMovies, movie]; // Add movie to storedMovies array
  localStorage.setItem("library", JSON.stringify(updatedMovies)); // Save updated array to localStorage
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
