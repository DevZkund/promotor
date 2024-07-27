import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/5 text-foreground px-4 md:px-16 pb-8 mt-36">
      <div className="flex flex-row md:flex-row  justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img className="w-48 h-24" src="./images/promotrw.png" alt="Promotrw Logo" />
          <div className="hidden md:flex space-x-4 py-4">
            <a href="#" className="hover:text-muted-foreground">
              Home
            </a>
            <a href="#" className="hover:text-muted-foreground">
              Services
            </a>
            <a href="#" className="hover:text-muted-foreground">
              About Us
            </a>
            <a href="#" className="hover:text-muted-foreground">
              Contact Us
            </a>
            <a href="#" className="hover:text-muted-foreground">
              Blogs
            </a>
          </div>
        </div>
        <div className="text-sm text-right  md:text-left">
          <p>Phone: +91 99999 99999</p>
          <p>Email: planthaven@gmail.com</p>
          <p>Contact Us: info@planthaven.com</p>
          <p>Address: Chennai, India</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-end space-x-4 pt-3 mt-4 border-t-[0.1px] border-t-white/5">
        <a href="#" className="hover:text-muted-foreground underline">
          insta
        </a>
        <a href="#" className="hover:text-muted-foreground underline">
          Youtube
        </a>
        <a href="#" className="hover:text-muted-foreground underline">
          in
        </a>
      </div>
    </footer>
  );
};

export default Footer;
