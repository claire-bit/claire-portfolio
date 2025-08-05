import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects, isLoaded }) => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 200}
              isLoaded={isLoaded}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
