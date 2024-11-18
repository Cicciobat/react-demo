import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim() !== "") {
            navigate(`/search?query=${encodeURIComponent(query)}`);
        }
    };

    return (
        <header className="bg-primary text-white py-3">
            <div className="container d-flex align-items-center justify-content-between">
                {/* Branding Logo */}
                <div className="col-md-3">
                    <h2 className="m-0">
                        <Link to="/" className="text-white text-decoration-none">Site Logo</Link>
                    </h2>
                </div>
                {/* Main Menu */}
                <nav className="col-md-6">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add-content" className="nav-link text-white">Add Content</Link>
                        </li>
                    </ul>
                </nav>
                {/* Search Bar */}
                <div className="col-md-3">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        <button className="btn btn-light" onClick={handleSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
