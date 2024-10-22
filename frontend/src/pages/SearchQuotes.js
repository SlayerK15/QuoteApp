import React, { useState } from 'react';
import axios from 'axios';
import QuoteCard from '../components/QuoteCard';
import '../styles/SearchQuotes.css';

const SearchQuotes = () => {
  const [author, setAuthor] = useState('');
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchByAuthor = async (e) => {
    e.preventDefault();
    if (!author.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`http://localhost:5000/api/quotes/search?author=${author}`);
      setQuotes(response.data);
      if (response.data.length === 0) {
        setError('No quotes found for this author');
      }
    } catch (error) {
      setError('Error searching for quotes. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-quotes">
      <h1>Search Quotes by Author</h1>
      <form onSubmit={searchByAuthor} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author's name..."
            className="search-input"
          />
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && <div className="error-message">{error}</div>}

      <div className="quotes-grid">
        {quotes.map((quote, index) => (
          <QuoteCard
            key={index}
            quote={quote.quote}
            author={quote.author}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchQuotes;