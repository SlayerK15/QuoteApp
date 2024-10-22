import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          QuoteVerse
        </Link>
        <div className="nav-links">
          <Link 
            to="/random" 
            className={`nav-link ${location.pathname === '/random' ? 'active' : ''}`}
          >
            Random Quote
          </Link>
          <Link 
            to="/search" 
            className={`nav-link ${location.pathname === '/search' ? 'active' : ''}`}
          >
            Search Quotes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;