import React from 'react';
import ProjectCard from './ProjectCard';

// ----------------------------------------------------
// STEP 5: ADD MY PROJECTS HERE
// ----------------------------------------------------
const projects = [
  {
    title: "WildherWays - Small Business Website",
    description: "A responsive website built to showcase the small business, services offered, event management, reviews, and payment gateway for easy product shopping. modern component architecture in React.",
    stack: ["React", "Next.js", "Tailwind CSS", "Typescript"],
    liveLink: "#", // Replace with live demo URL
    githubLink: "https://github.com/wild-her-ways/wild-her-ways-FE", 
  },
  {
    title: "Professional Portfolio Website",
    description: "A responsive, modern portfolio demonstrating strong competency in Frontend Development and structured data presentation. Built using React and Tailwind CSS to ensure a fast, mobile-friendly user experience. This project also showcases expertise in integrating development and Business Process Automation (BPA) specializations.",
    stack: ["React", "Vite", "Tailwind CSS", "JSX", "Responsive Design"],
    liveLink: "#", 
    githubLink: "https://github.com/thatkindel/olaide-akindele-portfolio", 
    },
  {
    title: "Food.ca - Full-Service Restaurant Platform (Ongoing)",
    description: "Developed a responsive, feature-rich website for a conceptual Canadian food business, focusing on seamless user experience (UX). Features include an interactive menu with dietary filters, integrated reservation system, and a robust architecture ready for future online ordering integration.",
    stack: ["React", "Tailwind CSS", "Node.js (Express)", "MongoDB", "REST APIs", "Mobile-First Design"],
    liveLink: "http://food.ca-demo.com", 
    githubLink: "https://github.com/YourUsername/Food.ca-platform", 
    },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12 border-b-2 border-indigo-500 pb-2">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;