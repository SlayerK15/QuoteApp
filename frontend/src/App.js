import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RandomQuote from './pages/RandomQuote';
import SearchQuotes from './pages/SearchQuotes';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/random" element={<RandomQuote />} />
            <Route path="/search" element={<SearchQuotes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;