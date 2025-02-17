import '../styles/header.css';

// Import needed for link navigation functionality
import { useLocation } from "react-router-dom";

// Imports needed for Login/Logout button
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Header = () => {
    // useState/useEffect for Login/Logout button
    const [loginCheck, setLoginCheck] = useState(false);
    const checkLogin = () => {
      if (auth.loggedIn()) {
        setLoginCheck(true);
      }
    };
    useEffect(() => {
      checkLogin();
    }, [loginCheck]);

    const currentPage = useLocation().pathname;

    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4 logo">CineTracker</span>
            </a>

            <ul className="nav nav-pills custom-nav">
                {/* Link to Movies Page */}
                <li className="nav-item">
                    <Link to="/movies" className={currentPage === "/movies" ? "nav-link active" : "nav-link"}>Movies</Link>
                </li>
                {/* Link to TV Shows Page */}
                <li className="nav-item">
                    <Link to="/tvshows" className={currentPage === "/tvshows" ? "nav-link active" : "nav-link"}>TV Shows</Link>
                </li>
                {/* Link to Library Page */}
                <li className="nav-item">
                    <Link to="/library" className={currentPage === "/library" ? "nav-link active" : "nav-link"}>Library</Link>
                </li>
                {/* Link to Contact Us */}
                <li className="nav-item">
                    <Link to="/contact" className={currentPage === "/contact" ? "nav-link active" : "nav-link"}>Contact Us</Link>
                </li>
                {/* Login/Logout Button */}
                <li className="nav-item">
                    {!loginCheck ? (<Link to='/login' className="nav-link">Login</Link>)
                    : (<button className="nav-link btn-link" onClick={() => {auth.logout();}}>Logout</button>)}
                </li>
            </ul>
        </header>
    );
};

export default Header;

