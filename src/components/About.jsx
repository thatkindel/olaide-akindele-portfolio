import React from 'react';
import profileImage from '../assets/profile.png'; 

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-extrabold text-center mb-12 border-b-2 border-indigo-500 pb-2">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          <img 
              src={profileImage} 
              alt="Olaide Akindele Profile" 
              className="w-64 h-64 object-cover rounded-full shadow-lg"
          />

          <div className="md:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I’m Olaide Akindele, a dedicated Frontend Developer with a passion for building clean, efficient, and scalable user interfaces. My journey is driven by a commitment to transforming complex ideas into intuitive, user-friendly applications using the latest JavaScript and React best practices.
            </p>
            
            {/* NEW PARAGRAPH */}
            <p className="text-lg leading-relaxed ">
              Beyond traditional development, I am an experienced Business Process and Automation Developer. I leverage tools and techniques to analyze workflows, identify bottlenecks, and implement automated solutions that reduce manual effort, increase organizational efficiency, and free up critical human resources.
            </p>
            
            <p className="text-lg leading-relaxed">
              I specialize in the modern JavaScript ecosystem, focusing on React, hooks, state management (e.g., Redux/Context API), and responsive design frameworks like Tailwind CSS. I am currently seeking opportunities where I can apply both my development and automation expertise to deliver high-impact results.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
            <a 
                href="/resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-lg text-lg font-bold hover:bg-indigo-700 transition duration-300 shadow-lg"
            >
                Download Resume
            </a>
        </div>

      </div>
    </section>
  );
};

export default About;