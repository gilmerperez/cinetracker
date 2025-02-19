import React from "react";
import { addTVShowToLibrary } from "../pages/Library";

// Interface for TVShowsCardProps
interface TVShow {
  Title?: string;
  Year?: string;
  imdbID?: string;
  Type?: string;
  Poster?: string;
  Director?: string;
  imdbRating?: string;
}

interface TVShowsCardProps {
  show: TVShow; // Ensure show is a TVShow object
}

const TVShowsCard: React.FC<TVShowsCardProps> = ({ show }) => {
  // Add to Library Function
    const handleAddToLibrary = () => {
      addTVShowToLibrary(show);
      alert(`${show.Title} added to your library!`);
    };

  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        {/* TV Show Details */}
        <div
          className="col p-4 d-flex flex-column justify-content-between"
          style={{ minHeight: "300px" }}
        >
          <div>
            <strong className="d-inline-block mb-2 text-primary-emphasis">
              TV Show
            </strong>
            <h3 className="mb-0">{show.Title || "N/A"}</h3>
            <div className="mb-1 text-body-secondary">
              {show.Year || "N/A"}
            </div>
            <p className="card-text mb-3">
              <strong>Director:</strong> {show.Director || "N/A"} <br />
              <strong>Rating:</strong> {show.imdbRating || "N/A"}
            </p>
          </div>

          {/* Add to Library Button */}
          <button onClick={handleAddToLibrary} className="btn btn-outline-primary">
            Add to Library
          </button>
        </div>

        {/* Poster */}
        <div className="col-auto d-none d-lg-block">
          <img
            src={show.Poster || "N/A"}
            alt={show.Title || "N/A"}
            width="200"
            height="250"
            className="bd-placeholder-img"
            style={{ objectFit: "cover", borderRadius: "5px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TVShowsCard;
