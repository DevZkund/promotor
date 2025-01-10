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

          </div>
        </div>
        <div className="text-sm text-right  md:text-left">
          <p>Phone: +91-6283910290</p>
          <p>Phone: +61-0416927444</p>
          <p>Email: promotrworld01@gmail.com</p>
          {/* <p>Contact Us: info@planthaven.com</p> */}
          <p>Head quaters: <u>7/5 Scanlon Dr, Epping<br></br> VIC, Melbourne, Victoria, Australia</u></p>
        </div>
      </div>
      <div className="flex justify-center md:justify-end space-x-4 pt-2  border-t-[0.1px] border-t-white/5">
        <Link
          to="https://www.instagram.com/promotrworld/"
          target="_blank"
          className="hover:text-muted-foreground underline"
        >
          Insta
        </Link>

        <Link
          to="https://www.linkedin.com/company/promotr-marketing-agency/people/?viewAsMember=true"
          target="_blank"
          className="hover:text-muted-foreground underline"
        >
          LinkedIn
        </Link>

      </div>
    </footer>
  );
};

export default Footer;
