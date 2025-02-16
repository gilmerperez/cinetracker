import '../styles/header.css';

const Header = () => {
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4 logo">Simple header</span>
            </a>

            <ul className="nav nav-pills custom-nav">
                <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Movies</a></li>
                <li className="nav-item"><a href="#" className="nav-link active">TV Shows</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Library</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
            </ul>
        </header>
    );
};

export default Header;
