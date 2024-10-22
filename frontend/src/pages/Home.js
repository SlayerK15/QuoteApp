import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to QuoteVerse</h1>
        <p>Discover and explore inspiring quotes from great minds</p>
        <div className="cta-buttons">
          <Link to="/random" className="cta-button">
            Get Random Quote
          </Link>
          <Link to="/search" className="cta-button secondary">
            Search by Author
          </Link>
        </div>
      </div>
      <div className="features">
        <div className="feature-card">
          <h3>Random Quotes</h3>
          <p>Get inspired by random quotes from our collection</p>
        </div>
        <div className="feature-card">
          <h3>Author Search</h3>
          <p>Find quotes from your favorite authors</p>
        </div>
      </div>
    </div>
  );
};

export default Home;