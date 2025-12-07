import React from 'react';

const Navbar = () => {
  return (
    // Fixed navigation bar, white background, shadow, centered content
    <nav className="fixed w-full p-4 bg-white shadow-md z-10 flex justify-center">
      <div className="container flex justify-between items-center max-w-6xl">
        <div className="navbar-logo">
          <a href="#home" className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition duration-300">
            Olaide Akindele
          </a> 
        </div>
        
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 px-3 py-2 transition duration-300">About</a>
          </li>
          <li>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 px-3 py-2 transition duration-300">Skills</a>
          </li>
          <li>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 px-3 py-2 transition duration-300">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 px-3 py-2 transition duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;