import React from "react";

export default function Navbar() {
  return (
    <header class="flex items-center justify-between p-4 sticky top-0 z-50 px-8">
      <div class="flex items-center space-x-4 h-8 w-44">
        <img src="./images/promotrw.png" alt="logo" />
      </div>
      <nav class="flex space-x-4">
        <a class="text-lg" href="#home">
          Home
        </a>
        <a class="text-lg" href="#a">
          Services
        </a>
        <a class="text-lg" href="#a">
          About Us
        </a>
        <a class="text-lg" href="#a">
          Contact Us
        </a>
        <a class="text-lg" href="#a">
          Blogs
        </a>
      </nav>
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-yellow-500 text-gray-800">
        Say Hi!
      </button>
    </header>
  );
}
