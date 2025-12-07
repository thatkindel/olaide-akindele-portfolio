import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 hover:shadow-indigo-300/50 transition duration-500 ease-in-out transform hover:-translate-y-1">
      
      {/* Project Title */}
      <h3 className="text-2xl font-bold text-indigo-700 mb-3">{project.title}</h3>
      
      {/* Project Stack/Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
            {tech}
          </span>
        ))}
      </div>
      
      {/* Project Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {project.description}
      </p>
      
      {/* Project Links */}
      <div className="flex space-x-4">
        <a 
          href={project.liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-lg font-medium transition duration-300"
        >
          View Live 🚀
        </a>
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-600 border border-indigo-600 hover:bg-indigo-50 py-2 px-4 rounded-lg font-medium transition duration-300"
        >
          GitHub 💻
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;