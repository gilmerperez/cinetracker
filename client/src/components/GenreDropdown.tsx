const GenreDropdown = () => {
    return (
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Genre
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Comedy</a></li>
          <li><a className="dropdown-item" href="#">Thriller</a></li>
          <li><a className="dropdown-item" href="#">Drama</a></li>
          <li><a className="dropdown-item" href="#">Romance</a></li>
          <li><a className="dropdown-item" href="#">Fantasy</a></li>
          <li><a className="dropdown-item" href="#">Horror</a></li>
          <li><a className="dropdown-item" href="#">Sci-Fi</a></li>
        </ul>
      </div>
    )
}

export default GenreDropdown;
