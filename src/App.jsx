// src/App.jsx (Fixed for React 19)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Layout from './components/Layout/Layout';
// import Contact from './pages/Contact/Contact';
// import NotFound from './pages/NotFound/NotFound';

import './styles/variables.css';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Future routes can be added here
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />*/}
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;