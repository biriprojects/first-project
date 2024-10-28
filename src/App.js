// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Shopping from './pages/Shopping';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/game" className="nav-link">Game</Link>
          <Link to="/shopping" className="nav-link">Shopping</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
