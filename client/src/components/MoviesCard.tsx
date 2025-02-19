import React from "react";

// Interface for MovieCardProps
interface MovieCardProps {
  title?: string;
  director?: string;
  releaseDate?: string;
  rating?: string;
  poster?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  director,
  releaseDate,
  rating,
  poster,
}) => {
  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        {/* Movie Details */}
        <div
          className="col p-4 d-flex flex-column justify-content-between"
          style={{ minHeight: "300px" }}
        >
          <div>
            <strong className="d-inline-block mb-2 text-primary-emphasis">
              Movie
            </strong>
            <h3 className="mb-0">{title || "N/A"}</h3>
            <div className="mb-1 text-body-secondary">
              {releaseDate || "N/A"}
            </div>
            <p className="card-text mb-3">
              <strong>Director:</strong> {director || "N/A"} <br />
              <strong>Rating:</strong> {rating || "N/A"}
            </p>
          </div>

          {/* Add to Library Button */}
          <button className="btn btn-outline-primary">Add to Library</button>
        </div>

        {/* Poster */}
        <div className="col-auto d-none d-lg-block">
          <img
            src={poster || "N/A"}
            alt={title || "N/A"}
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

export default MovieCard;
