import React from 'react';
import { Code, Server } from 'lucide-react';
import claireImg from '../assets/claire.jpg'; // adjust path if needed

const About = ({ isLoaded }) => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur" />
              <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                <img
                  src={claireImg}
                  alt="Claire Mutindi"
                  className="w-full h-full object-cover object-center rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate full-stack developer specializing in the MERN stack with additional expertise in Django.
              I love creating seamless user experiences and robust backend systems that solve real-world problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Based in Nairobi, I've been building web applications that combine beautiful frontend interfaces
              with powerful backend functionality. My approach focuses on clean code, scalable architecture,
              and user-centered design.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open source projects,
              and sharing knowledge with the developer community in Kenya and beyond.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-blue-400">
                <Code size={20} />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Server size={20} />
                <span>15+ Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
