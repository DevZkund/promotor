import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigate = useNavigate();
  const location = useLocation(); // To get the current route
  const currentPath = location.pathname; // Current path to match with links

  const handleNavigate = () => {
    navigate("/contact");
  };

  const isActive = (path) => currentPath === path;

  return (
    <header className="flex items-center justify-between p-4 sticky top-0 z-50 bg-black">
      <Link className="flex items-center space-x-4 h-8 w-44" to="/">
        <img src="./images/promotrw.png" alt="logo"  />
      </Link>
      <nav className="hidden md:flex space-x-4 lg:space-x-8">
        <Link
          className={`text-base md:text-sm lg:text-md ${
            isActive("/") ? "text-amber-500 font-bold" : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`text-base md:text-sm lg:text-md ${
            isActive("/services") ? "text-amber-500 font-bold" : ""
          }`}
          to="/services"
        >
          Services
        </Link>
        <Link
          className={`text-base md:text-sm lg:text-md ${
            isActive("/about") ? "text-amber-500 font-bold" : ""
          }`}
          to="/about"
        >
          About Us
        </Link>
        <Link
          className={`text-base md:text-sm lg:text-md ${
            isActive("/contact") ? "text-amber-500 font-bold" : ""
          }`}
          to="/contact"
        >
          Contact Us
        </Link>
      </nav>
      <button
        onClick={handleNavigate}
        className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm md:text-base lg:text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 lg:h-8 md:h-6 md:px-2 lg:px-4 py-2 bg-white text-gray-800"
      >
        Say Hi!
      </button>
      <button
        id="menuButton"
        className="md:hidden p-2 border rounded"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        <span className="sr-only">Toggle navigation menu</span>
      </button>
      <div
        className={`absolute top-16 left-0 text-center space-y-4 w-full bg-black p-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className={`block text-md font-medium text-white hover:text-yellow-500 ${
            isActive("/") ? "text-amber-500 font-bold" : ""
          }`}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/services"
          className={`block text-md font-medium text-white hover:text-yellow-500 ${
            isActive("/services") ? "text-amber-500 font-bold" : ""
          }`}
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link
          to="/about"
          className={`block text-md font-medium text-white hover:text-yellow-500 ${
            isActive("/about") ? "text-amber-500 font-bold" : ""
          }`}
          onClick={closeMenu}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className={`block text-md font-medium text-white hover:text-yellow-500 ${
            isActive("/contact") ? "text-amber-500 font-bold" : ""
          }`}
          onClick={closeMenu}
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
