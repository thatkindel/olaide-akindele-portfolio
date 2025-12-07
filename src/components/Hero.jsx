import React from 'react';

const Hero = () => {
  return (
    // Full screen height, centered content (flex items-center), padding for fixed navbar
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 bg-gray-50 text-gray-800">
      <div className="text-center max-w-4xl px-4">
        <p className="greeting text-xl font-medium text-indigo-600 mb-2">Hi, I'm</p>
        
        <h1 className="name text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Olaide Akindele
        </h1>
        
        {/* UPDATED TITLE HERE */}
        <h2 className="title text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
          Frontend Developer, Business Process & Automation Specialist
        </h2>
        
        <p className="tagline text-lg text-gray-500 mb-10">
          Building responsive, user-friendly, and efficient web applications through code and process automation.
        </p>
        
        <div className="cta-buttons space-x-4">
          <a href="#projects" className="bg-indigo-600 text-white py-3 px-8 rounded-lg text-lg font-bold hover:bg-indigo-700 transition duration-300 shadow-lg">
            View My Work
          </a>
          <a href="#contact" className="text-indigo-600 border border-indigo-600 py-3 px-8 rounded-lg text-lg font-bold hover:bg-indigo-50 transition duration-300">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;