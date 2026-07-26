import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const current = navItems
        .map(i => document.getElementById(i.id))
        .findLast(s => s && window.scrollY >= s.offsetTop - 130);
      if (current) setActiveSection(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <button
          className="header__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <span className="header__logo-mark">ap/</span>
          <span className="header__logo-name">Amit Pardeshi</span>
        </button>

        {/* Desktop nav */}
        <nav className="header__nav" aria-label="Main navigation">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`header__nav-btn ${activeSection === item.id ? 'header__nav-btn--active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://drive.google.com/file/d/17H_B2-q460szHao0_MNQ4LwUetopYuyd/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="header__cta"
          aria-label="Download resume"
        >
          Resume ↗
        </a>

        {/* Mobile hamburger */}
        <button
          className="header__mobile-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`header__mobile-menu ${isOpen ? 'header__mobile-menu--open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {navItems.map(item => (
          <button
            key={item.id}
            className="header__mobile-nav-btn"
            onClick={() => scrollTo(item.id)}
          >
            {item.name}
          </button>
        ))}
        <a
          href="https://drive.google.com/file/d/17H_B2-q460szHao0_MNQ4LwUetopYuyd/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            margin: '4px 0 2px',
            padding: '11px 16px',
            borderRadius: '7px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#fff',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '0.88rem',
          }}
        >
          Download Resume ↗
        </a>
      </div>
    </header>
  );
};

export default Header;