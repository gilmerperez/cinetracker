import '../styles/header.css';

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

    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4 logo">CineTracker</span>
            </a>

            <ul className="nav nav-pills custom-nav">
                <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Movies</a></li>
                <li className="nav-item"><a href="#" className="nav-link active">TV Shows</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Library</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
                {/* Login/Logout Button */}
                <li className="nav-item">
                    {!loginCheck ? (
                        <Link to='/login' className="nav-link">Login</Link>
                    ) : (
                        <button className="nav-link btn-link" onClick={() => {auth.logout();}}>Logout</button>
                    )}
                </li>
            </ul>
        </header>
    );
};

export default Header;
