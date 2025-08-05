import React from 'react';
import { ChevronDown, Download, MapPin, User } from 'lucide-react';
import profileImage from '../assets/claire.jpg';
import cvFile from '../assets/Claire_Mutindi_Developer_CV.pdf'; // ✅ DOCX import

const Hero = ({ scrollToSection, isLoaded }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Profile Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-6">
            <img src={profileImage} alt="Claire Mutindi" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            Claire Mutindi
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 mb-4 font-medium">
            Full-Stack & MERN Developer
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-6">
            <MapPin size={20} />
            <span>Nairobi, Kenya</span>
          </div>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building dynamic web applications using React, Node.js, MongoDB, and Django.
            Passionate about creating scalable solutions and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </button>
            <a
              href={cvFile}
              download="Claire_Mutindi_Developer_CV.pdf"
              className="px-8 py-4 border-2 border-slate-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;
