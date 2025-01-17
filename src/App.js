import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Confetti from "react-confetti";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";
import Services from "./components/services/Services";
import ServicesDetails from "./components/serviceDetails/ServicesDetails";

// Scroll to top on route change
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
    <HelmetProvider>
      <div className="bg-black text-white w-full mx-auto font-poppins">
        <Helmet>
          <title>Promotr</title>
          <meta
            name="description"
            content="Promotr Marketing Agency | Amplify your brand’s voice with innovative marketing solutions! 🚀 We specialize in SEO, branding, social media campaigns, and memes that drive results. Based in India and Australia, we’re your trusted digital marketing partner!"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
        http-equiv="Content-Security-Policy"
        content="
          default-src 'self'; 
          script-src 'self'; 
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; 
          font-src 'self' https://fonts.gstatic.com; 
          connect-src 'self' https://api.emailjs.com;"
      />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="Promotr, Promotrworld, promotr, promotrworld, digital marketing, web development, UX design, content creation, strategy consulting, online branding, SEO"
          />
          
          <link rel="canonical" href="https://promotrworld.in" />
        </Helmet>

        {showConfetti && <Confetti />}
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Home - Promotr</title>
                    <meta
                      name="description"
                      content="Discover our homepage and start exploring what we have to offer."
                    />
                  </Helmet>
                  <Home />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Helmet>
                    <title>About Us - Promotr</title>
                    <meta
                      name="description"
                      content="Learn more about our mission, values, and team."
                    />
                  </Helmet>
                  <About />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Helmet>
                    <title>Contact Us - Promotr</title>
                    <meta
                      name="description"
                      content="Get in touch with us for inquiries, feedback, or support."
                    />
                  </Helmet>
                  <Contacts />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Helmet>
                    <title>Our Services - Promotr</title>
                    <meta
                      name="description"
                      content="Explore the wide range of services we offer to meet your needs."
                    />
                  </Helmet>
                  <Services />
                </>
              }
            />
            <Route
              path="/service"
              element={
                <>
                  <Helmet>
                    <title>Service Details - Promotr</title>
                    <meta
                      name="description"
                      content="Detailed information about our individual services."
                    />
                  </Helmet>
                  <ServicesDetails />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
