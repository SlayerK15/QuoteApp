import React from 'react';
import '../styles/QuoteCard.css';

const QuoteCard = ({ quote, author }) => {
  return (
    <div className="quote-card">
      <div className="quote-content">
        <div className="quote-mark">"</div>
        <p className="quote-text">{quote}</p>
        <div className="quote-mark closing">"</div>
      </div>
      <div className="quote-author">― {author}</div>
    </div>
  );
};

export default QuoteCard;