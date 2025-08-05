// src/components/ProjectCard.jsx
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, delay = 0, isLoaded }) => {
  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:-translate-y-3 group ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        animation: isLoaded ? `fadeInUp 0.6s ease-out ${delay}ms forwards` : 'none'
      }}
    >
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <div className="text-white">{project.icon}</div> {/* ✅ renders icon correctly */}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded-lg text-xs border border-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors duration-300 font-medium"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
