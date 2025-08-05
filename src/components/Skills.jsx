import React from 'react';
import { Code, Server, Cloud, Settings } from 'lucide-react';
import SkillCard from './SkillCard';

const Skills = ({ isLoaded }) => {
  const skills = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'Django', 'Python', 'RESTful APIs', 'JWT'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose'],
    tools: ['Git', 'VS Code', 'Postman', 'npm', 'Webpack', 'Figma']
  };

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <SkillCard
            title="Frontend"
            skills={skills.frontend}
            icon={<Code className="text-blue-400" size={24} />}
            delay={0}
            isLoaded={isLoaded}
          />
          <SkillCard
            title="Backend"
            skills={skills.backend}
            icon={<Server className="text-green-400" size={24} />}
            delay={200}
            isLoaded={isLoaded}
          />
          <SkillCard
            title="Database"
            skills={skills.database}
            icon={<Cloud className="text-purple-400" size={24} />}
            delay={400}
            isLoaded={isLoaded}
          />
          <SkillCard
            title="Tools & Others"
            skills={skills.tools}
            icon={<Settings className="text-orange-400" size={24} />}
            delay={600}
            isLoaded={isLoaded}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;