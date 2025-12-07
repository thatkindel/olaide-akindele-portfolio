import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // <-- IMPORT ADDED HERE
import Skills from './components/Skills';
import Projects from './components/Projects'; // <-- Imported, will be used below
import Contact from './components/Contact';

function App() {
  return (
    // min-h-screen ensures we have scroll space to test navigation
    <div className="min-h-screen bg-white"> 
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Correctly using the functional component */}
        <About /> 
        
        <Skills />
        
        {/* Projects component goes here */}
        <Projects /> 

        {/*  CONTACT SECTION */}
        <Contact />

        
      </main>
    </div>
  );
}

export default App;