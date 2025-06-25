// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Product from './components/Product/Product';
import Contact from './components/ContactUs/ContactUs';
import About from './components/AboutUs/AboutUs';
import Gallery from './components/Gallery/Gallery';
import ResidentialDoors from './components/ResidentialDoors/ResidentialDoors';
import ResidentialWindows from './components/ResidentialWindows/ResidentialWindows';
import CommercialDoors from './components/CommercialDoors/CommercialDoors';
import SchoolFurniture from './components/SchoolFurniture/SchoolFurniture';
import Technical from './components/Technical/Technical';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/residentialdoors" element={<ResidentialDoors />} />
        <Route path="/residentialwindows" element={<ResidentialWindows />} />
        <Route path="/commercialdoors" element={<CommercialDoors />} />
        <Route path="/schoolfurniture" element={<SchoolFurniture />} />
        <Route path="/technical" element={<Technical />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
