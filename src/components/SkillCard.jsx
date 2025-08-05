import React from 'react';

const SkillCard = ({ title, skills, icon, delay = 0, isLoaded }) => {
  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:-translate-y-2 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        animation: isLoaded ? `fadeInUp 0.6s ease-out ${delay}ms forwards` : 'none'
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;