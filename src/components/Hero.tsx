import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const roles = [
  'Full Stack Java Developer',
  'Spring Boot Engineer',
  'React.js Developer',
  'REST API Specialist',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const ref = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      ref.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === current.length) {
      ref.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      ref.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(ref.current);
  }, [displayed, deleting, roleIndex]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      {/* Decorative backgrounds */}
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__bg-glow" aria-hidden="true" />
      <div className="hero__orb hero__orb--1 animate-float" aria-hidden="true" />
      <div className="hero__orb hero__orb--2 animate-float delay-300" aria-hidden="true" />

      <div className="hero__content">
        {/* Available badge */}
        <div className="hero__badge animate-fade-up" role="status">
          <span className="hero__badge-dot animate-pulse-ring" />
          <span className="hero__badge-text">Available for freelance projects</span>
        </div>

        {/* Name */}
        <h1 className="hero__name animate-fade-up delay-100">
          Amit Pardeshi
        </h1>

        {/* Typewriter */}
        <div className="hero__role animate-fade-up delay-200" aria-live="polite">
          <span>{displayed}</span>
          <span className="hero__cursor animate-blink">&nbsp;</span>
        </div>

        {/* Bio */}
        <p className="hero__bio animate-fade-up delay-300">
          I build scalable web apps with{' '}
          <span style={{ color: '#a5b4fc' }}>Java, Spring Boot &amp; React.js</span>.
          Currently an Implementation Intern at{' '}
          <span style={{ color: '#a5b4fc' }}>Netwin Systems</span>, deploying enterprise banking software.
        </p>

        {/* CTA buttons */}
        <div className="hero__cta-row animate-fade-up delay-400">
          <button
            className="hero__btn-primary"
            onClick={() => scrollTo('projects')}
            aria-label="View my projects"
          >
            View Projects
          </button>
          <a
            href="https://drive.google.com/file/d/17H_B2-q460szHao0_MNQ4LwUetopYuyd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn-secondary"
            aria-label="Download CV"
          >
            <Download size={15} aria-hidden="true" />
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="hero__socials animate-fade-up delay-500">
          {[
            { icon: <Github size={18} aria-hidden="true" />, href: 'https://github.com/Amitsingh2000', label: 'GitHub' },
            { icon: <Linkedin size={18} aria-hidden="true" />, href: 'https://www.linkedin.com/in/amit-pardeshi26/', label: 'LinkedIn' },
            { icon: <Mail size={18} aria-hidden="true" />, href: 'mailto:amit.pardeshi2000@gmail.com', label: 'Email' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label={s.label}
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <button
        className="hero__scroll-hint animate-float"
        onClick={() => scrollTo('about')}
        aria-label="Scroll down"
      >
        <span>scroll</span>
        <ArrowDown size={16} aria-hidden="true" />
      </button>
    </section>
  );
};

export default Hero;