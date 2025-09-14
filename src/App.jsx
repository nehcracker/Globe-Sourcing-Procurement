// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
/*
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
*/

import './styles/variables.css';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future routes can be added here
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;