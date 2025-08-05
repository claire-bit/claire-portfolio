import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import TwitterX from './icons/TwitterX'; // or wherever you save it



const Footer = () => (
  <footer className="py-8 border-t border-slate-700 bg-slate-900/30">
    <div className="max-w-6xl mx-auto px-6 text-center text-slate-400 space-y-4">
      <div className="flex justify-center gap-6">
        <SocialLink href="https://github.com/claire-bit" label="GitHub" Icon={Github} />
        <SocialLink href="https://linkedin.com/in/claire-mutindi-0b5469252" label="LinkedIn" Icon={Linkedin} />
        <SocialLink href="https://x.com/clairemutindi" label="TwitterX" Icon={TwitterX} />
        <SocialLink href="https://instagram.com/__clairem" label="Instagram" Icon={Instagram} />
        <SocialLink href="mailto:clairemutindi324@gmail.com" label="Email" Icon={Mail} />
      </div>

      <div className="border-t border-slate-700/50 pt-4">
        <p className="text-sm">&copy; 2025 Claire Mutindi. All rights reserved.</p>
        <p className="text-xs text-slate-500 mt-2">Built with React, Tailwind CSS, and lots of ☕</p>
      </div>
    </div>
  </footer>
);

const SocialLink = ({ href, label, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50"
  >
    <Icon size={20} />
  </a>
);

export default Footer;
