import React, { useState, useEffect, useRef } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { Share2, Footprints } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  // Section refs
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = sectionRefs[id]?.current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsLoaded(true);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const skills = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'Django', 'Python', 'RESTful APIs', 'JWT'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose'],
    tools: ['Git', 'VS Code', 'Postman', 'npm', 'Webpack', 'Figma'],
  };

  const projects = [
    {
      id: 1,
      title: 'Affiliate Web App',
      description: 'Affiliate marketing platform built with Django and DRF, supporting vendor and promoter roles, product uploads, commission tracking, and analytics.',
      technologies: ['Django', 'Django REST Framework', 'React', 'PostgreSQL'],
      icon: <Share2 size={48} className="text-white" />,
      demoUrl: '#',
      githubUrl: 'https://github.com/claire-bit/024globalconnect',
    },
    {
      id: 2,
      title: 'Shoe Store E-Commerce Platform',
      description: 'Final year MERN project focused on footwear e-commerce, featuring product categories, newsletter subscription, user contact form, and integrated M-Pesa payment option.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      icon: <Footprints size={48} className="text-white" />,
      demoUrl: '#',
      githubUrl: 'https://github.com/claire-bit/ecommerceapi',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white scroll-smooth">
      <Nav activeSection={activeSection} scrollToSection={scrollToSection} />

      <section id="home" ref={sectionRefs.home}>
        <Hero isLoaded={isLoaded} scrollToSection={scrollToSection} />
      </section>

      <section id="about" ref={sectionRefs.about}>
        <About isLoaded={isLoaded} />
      </section>

      <section id="skills" ref={sectionRefs.skills}>
        <Skills skills={skills} isLoaded={isLoaded} />
      </section>

      <section id="projects" ref={sectionRefs.projects}>
        <Projects projects={projects} isLoaded={isLoaded} />
      </section>

      <section id="contact" ref={sectionRefs.contact}>
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
