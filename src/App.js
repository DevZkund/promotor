import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
  return (
    <HelmetProvider>
      <div className="bg-black text-white w-full mx-auto font-poppins">
        <Router>
          <ScrollToTop />
          <Navbar />
          
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Home - Promotr</title>
                    <meta
                      name="description"
                      content="Discover Promotr, your go-to digital marketing agency specializing in SEO, branding, and social media campaigns. 🚀"
                    />
                  </Helmet>
                  <Home />
                </>
              }
            />

            {/* About Page */}
            <Route
              path="/about"
              element={
                <>
                  <Helmet>
                    <title>About Us - Promotr</title>
                    <meta
                      name="description"
                      content="Learn more about Promotr’s mission, values, and expertise in digital marketing. We create strategies that work!"
                    />
                  </Helmet>
                  <About />
                </>
              }
            />

            {/* Contact Page */}
            <Route
              path="/contact"
              element={
                <>
                  <Helmet>
                    <title>Contact Us - Promotr</title>
                    <meta
                      name="description"
                      content="Get in touch with Promotr for inquiries, collaborations, or support. Let’s amplify your brand together!"
                    />
                  </Helmet>
                  <Contacts />
                </>
              }
            />

            {/* Services Page */}
            <Route
              path="/services"
              element={
                <>
                  <Helmet>
                    <title>Our Services - Promotr</title>
                    <meta
                      name="description"
                      content="Explore the range of services offered by Promotr, including SEO, branding, content creation, and digital marketing strategies."
                    />
                  </Helmet>
                  <Services />
                </>
              }
            />

            {/* Service Details Page (Dynamic) */}
            <Route
              path="/service/:id"
              element={
                <>
                  <Helmet>
                    <title>Service Details - Promotr</title>
                    <meta
                      name="description"
                      content="Detailed insights into our specialized services. Discover how Promotr can enhance your digital presence."
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
