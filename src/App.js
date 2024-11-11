import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";
import Services from "./components/services/Services";
import ServicesDetails from "./components/services/ServicesDetails";

function App() {
  return (
    <div className="bg-black text-white w-full  mx-auto">
      <Router>
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
