import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white/5 text-foreground px-4 md:px-16 pb-4">
      <div className="flex flex-row md:flex-row  justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img className="w-48 h-24" src="./images/promotrw.png" alt="Promotrw Logo" />
          <div className="hidden md:flex space-x-4 py-3">
            <Link to="/" className="hover:text-muted-foreground">
              Home
            </Link>
            <Link to="/services" className="hover:text-muted-foreground">
              Services
            </Link>
            <Link to="/about" className="hover:text-muted-foreground">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-muted-foreground">
              Contact Us
            </Link>
            <Link to="/blogs" className="hover:text-muted-foreground">
              Blogs
            </Link>
          </div>
        </div>
        <div className="text-sm text-right  md:text-left">
          <p>Phone: +91 99999 99999</p>
          <p>Email: planthaven@gmail.com</p>
          <p>Contact Us: info@planthaven.com</p>
          <p>Address: Chennai, India</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-end space-x-4 pt-2  border-t-[0.1px] border-t-white/5">
        <Link to="#insta" className="hover:text-muted-foreground underline">
          insta
        </Link>
        <Link to="#youtube" className="hover:text-muted-foreground underline">
          Youtube
        </Link>
        <Link to="#linkedin" className="hover:text-muted-foreground underline">
          in
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
