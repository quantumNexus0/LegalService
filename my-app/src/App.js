import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import Home from './component/home';
import Contact from './component/Contact';
import AboutComponent from './component/AboutComponent';
import Footer from './component/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/AboutComponent" element={<AboutComponent />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
