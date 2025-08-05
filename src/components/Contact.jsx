import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-lg text-slate-300 mb-12 leading-relaxed">
          I'm always excited about new opportunities and challenging projects. Whether you need a full-stack 
          developer for your team or want to discuss a project idea, I'd love to hear from you!
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="mailto:clairemutindi324@gmail.com"
            className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 text-lg"
          >
            <Mail size={24} />
            clairemutindi324@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/claire-mutindi-0b5469252/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 text-lg"
          >
            <Linkedin size={24} />
            LinkedIn
          </a>
          <a
            href="https://github.com/claire-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 text-lg"
          >
            <Github size={24} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;