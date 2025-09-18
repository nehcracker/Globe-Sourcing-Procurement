// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
/* Future imports for additional pages
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
*/
import Layout from './components/Layout/Layout';

import './styles/variables.css';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Future routes for additional pages
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />*/}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;