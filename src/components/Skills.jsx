import React from 'react';

const skillsData = {
  frontend: [
    { name: 'React.js', level: 'Intermediate', icon: '⚛️' },
    { name: 'JavaScript (ES6+)', level: 'Advanced', icon: '📜' },
    { name: 'HTML5 & CSS3', level: 'Advanced', icon: '🎨' },
    { name: 'Tailwind CSS', level: 'Intermediate', icon: '💨' },
    { name: 'State Management (Redux/Context API)', level: 'Intermediate', icon: '🔄' },
    { name: 'Responsive Design', level: 'Intermediate', icon: '📱' },
  ],
  automation: [
    { name: 'Business Process Analysis', level: 'Expert', icon: '🔍' },
    { name: 'Workflow Optimization', level: 'Expert', icon: '📈' },
    { name: 'Automation Tools (RPA/BPMN/Low-Code)', level: 'Expert', icon: '🤖' },
    { name: 'Process Documentation', level: 'Expert', icon: '📄' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 'Intermediate', icon: '🌳' },
    { name: 'Visual Studio Code', level: 'Advanced', icon: '💻' },
    { name: 'Vite', level: 'Intermediate', icon: '⚡' },
    { name: 'Deployment (Vercel/Netlify)', level: 'Intermediate', icon: '☁️' },
    { name: 'RPA (Power Automate/UiPath)', level: 'Advanced', icon: '☁️' },
    { name: 'BPMN (Processmaker/Bonita)', level: 'Expert', icon: '☁️' },
  ],
};

// Reusable component for a single skill badge
const SkillBadge = ({ skill }) => (
  <div className="bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="flex items-center space-x-3">
      <span className="text-xl">{skill.icon}</span>
      <div>
        <h4 className="font-semibold text-gray-800">{skill.name}</h4>
        <p className="text-sm text-indigo-600">{skill.level}</p>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12 border-b-2 border-indigo-500 pb-2">
          Technical Skills & Expertise
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Frontend Development */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl font-bold text-indigo-700 mb-6 border-b pb-2">
              Frontend Development
            </h3>
            <div className="space-y-4">
              {skillsData.frontend.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Column 2: Business Process & Automation */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl font-bold text-indigo-700 mb-6 border-b pb-2">
              Automation & Process
            </h3>
            <div className="space-y-4">
              {skillsData.automation.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Column 3: Tools & Ecosystem */}
          <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl font-bold text-indigo-700 mb-6 border-b pb-2">
              Tools & Ecosystem
            </h3>
            <div className="space-y-4">
              {skillsData.tools.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;