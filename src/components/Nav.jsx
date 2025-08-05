import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <button
      onClick={() => {
        scrollToSection(href);
        setIsMenuOpen(false); // Close mobile menu on click
      }}
      className={`relative text-slate-300 hover:text-blue-400 transition-all duration-300 font-medium ${
        activeSection === href ? 'text-blue-400' : ''
      }`}
    >
      {children}
      {activeSection === href && (
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
      )}
    </button>
  );

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            CM
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="home">Home</NavLink>
            <NavLink href="about">About</NavLink>
            <NavLink href="skills">Skills</NavLink>
            <NavLink href="projects">Projects</NavLink>
            <NavLink href="contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <div className="flex flex-col space-y-4">
              <NavLink href="home">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="projects">Projects</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
