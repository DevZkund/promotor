import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 sticky top-0 z-50 bg-black ">
      <div className="flex items-center space-x-4 h-8 w-44">
        <img src="./images/promotrw.png" alt="logo" />
      </div>
      <nav className="hidden md:flex space-x-4 lg:space-x-8">
        <a className="text-base md:text-sm lg:text-md" href="#home">
          Home
        </a>
        <a className="text-base md:text-sm lg:text-md" href="#services">
          Services
        </a>
        <a className="text-base md:text-sm lg:text-md" href="#about">
          About Us
        </a>
        <a className="text-base md:text-sm lg:text-md" href="#contact">
          Contact Us
        </a>
        <a className="text-base md:text-sm lg:text-md" href="#blogs">
          Blogs
        </a>
      </nav>
      <button className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm md:text-base lg:text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 lg:h-10 md:h-8 md:px-2 lg:px-4 py-2 bg-yellow-500 text-gray-800">
        Say Hi!
      </button>
      <button id="menuButton" className="md:hidden p-2 border rounded" onClick={toggleMenu}>
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
      <div className={`absolute top-16 left-0 px-16 text-center space-y-4 w-full bg-black p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#home" className="block mx-32 text-md font-medium text-white border-b shadow-sm shadow-white hover:text-yellow-500" onClick={closeMenu}>
          Home
        </a>
        <a href="#services" className="block mx-28 text-md font-medium text-white border-b shadow-sm shadow-white hover:text-yellow-500" onClick={closeMenu}>
          Services
        </a>
        <a href="#about" className="block mx-24 text-md font-medium text-white border-b shadow-sm shadow-white hover:text-yellow-500" onClick={closeMenu}>
          About Us
        </a>
        <a href="#contact" className="block mx-20 text-md font-medium text-white border-b shadow-sm shadow-white hover:text-yellow-500" onClick={closeMenu}>
          Contact Us
        </a>
        <a href="#blogs" className="block mx-16 text-lg font-medium text-white border-b shadow-sm shadow-white hover:text-yellow-500" onClick={closeMenu}>
          Blogs
        </a>
      </div>
    </header>
  );
}
