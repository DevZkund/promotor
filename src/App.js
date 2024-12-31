import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";
import Services from "./components/services/Services";
import ServicesDetails from "./components/serviceDetails/ServicesDetails";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false); // Stop confetti after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);


  return (
    <div className="bg-black text-white w-full  mx-auto">
      {showConfetti && <Confetti />}
      <Router>
      <ScrollToTop /> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service" element={<ServicesDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
