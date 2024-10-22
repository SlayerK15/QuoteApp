import React, { useState } from 'react';
import axios from 'axios';
import QuoteCard from '../components/QuoteCard';
import '../styles/RandomQuote.css';

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRandomQuote = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get('http://localhost:5000/api/quotes/random');
      setQuote(response.data);
    } catch (error) {
      setError('Error fetching quote. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="random-quote">
      <h1>Random Quote Generator</h1>
      <button 
        onClick={fetchRandomQuote} 
        className="generate-button"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Generate Quote'}
      </button>

      {error && <div className="error-message">{error}</div>}

      {quote && (
        <div className="quote-container">
          <QuoteCard
            quote={quote.quote}
            author={quote.author}
          />
        </div>
      )}
    </div>
  );
};

export default RandomQuote;