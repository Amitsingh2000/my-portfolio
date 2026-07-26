import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand info */}
        <div>
          <div className="footer__logo-name">Amit Pardeshi</div>
          <div className="footer__copy">
            © {new Date().getFullYear()} · Full Stack Java Developer
          </div>
        </div>

        {/* Social buttons */}
        <div className="footer__socials">
          {[
            { icon: <Github size={16} aria-hidden="true" />, href: 'https://github.com/Amitsingh2000', label: 'GitHub' },
            { icon: <Linkedin size={16} aria-hidden="true" />, href: 'https://www.linkedin.com/in/amit-pardeshi26/', label: 'LinkedIn' },
            { icon: <Mail size={16} aria-hidden="true" />, href: 'mailto:amit.pardeshi2000@gmail.com', label: 'Email' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label={s.label}
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollTop}
          className="footer__top-btn"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp size={14} aria-hidden="true" /> Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
