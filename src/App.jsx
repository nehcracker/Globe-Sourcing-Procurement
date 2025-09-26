// src/App.jsx (Fixed for React 19)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Layout from './components/Layout/Layout';
import Financing from './pages/Financing/Financing';
import VendorRegistrationPage from './pages/VendorRegistration';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import Contact from './pages/Contact/Contact';

import './styles/variables.css';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/vendor-registration-page" element={<VendorRegistrationPage />} />
            {/* Future routes can be added here
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;