import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'; // Placeholder for icons

// Note: To use icons like Mail, Phone, etc., you would need to install a library like lucide-react:
// npm install lucide-react

// src/components/Contact.jsx

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12 border-b-2 border-indigo-500 pb-2">
          Get In Touch
        </h2>

        {/* 1. Use max-w-lg and mx-auto to center the entire contact block */}
        <div className="max-w-lg mx-auto">
          
          {/* Contact Info and Social Links Column - Now centered on the page */}
          <div className="p-8 bg-indigo-700 text-white rounded-xl shadow-lg space-y-8">
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={24} />
                <span>olaideakindele81@gmail.com</span> 
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={24} />
                <span>+1 (403) 399-3896</span> 
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={24} />
                <span>Calgary, Alberta, Canada</span> 
              </div>
            </div>

            <h3 className="text-2xl font-semibold pt-4 border-t border-indigo-500">Connect</h3>
            
            {/* 2. Add 'justify-center' to horizontally center the social icons */}
            <div className="flex space-x-6 justify-center">
              <a href="https://www.linkedin.com/in/olaide-akindele-37856b106" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200 transition duration-300">
                <Linkedin size={32} />
              </a>
              <a href="https://github.com/thatkindel" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200 transition duration-300">
                <Github size={32} />
              </a>
            </div>
          </div>

        </div> 
        {/* End of centered container */}
      </div>
    </section>
  );
};

export default Contact;