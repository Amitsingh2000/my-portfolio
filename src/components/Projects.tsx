import React from 'react';
import { Github, ExternalLink, Layers } from 'lucide-react';

const projects = [
  {
    num: '01',
    title: 'ProjXchange',
    subtitle: 'Project Marketplace',
    description:
      'A student-friendly marketplace where learners can buy ready-to-use academic projects with step-by-step guides, and creators upload projects to earn. Built with full auth, payments, and dashboards.',
    features: [
      'JWT authentication & role-based access',
      'Razorpay payment integration',
      'Creator & Admin dashboards',
      'Shopping cart & wishlist',
      '20+ REST APIs integrated',
    ],
    tech: ['React.js', 'Spring Boot', 'MongoDB', 'JWT', 'Razorpay', 'Swagger'],
    github: 'https://github.com/projXchange/frontend-v1.git',
    demo: 'https://projxchange-frontend-v1.vercel.app/',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    featured: true,
  },
  {
    num: '02',
    title: 'EasyHope',
    subtitle: 'Crowdfunding Platform',
    description:
      'A crowdfunding platform that allows individuals to create, manage, and support social impact campaigns. Includes secure donation workflows and a role-based admin panel.',
    features: [
      'Campaign creation & management',
      'Secure donation workflow',
      'Admin panel for user management',
      'Transaction history & reports',
      'RESTful API architecture',
    ],
    tech: ['Spring Boot', 'Hibernate', 'MySQL', 'JPA', 'REST API'],
    github: 'https://github.com/Amitsingh2000/easyhope-frontend.git',
    demo: 'https://easyhope.netlify.app/',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    featured: true,
  },
  {
    num: '03',
    title: 'FitForge',
    subtitle: 'Gym Management Platform',
    description:
      'A comprehensive gym management system with subscription plans, trainer dashboards, referral system, and workout tracking — built across web and mobile.',
    features: [
      'Subscription & membership plans',
      'Trainer & Gym dashboards',
      'Referral & rewards system',
      'Analytics & usage stats',
      'Workout plans management',
    ],
    tech: ['Spring Boot', 'React.js', 'Flutter', 'Firebase'],
    github: 'https://github.com/Amitsingh2000',
    demo: '#',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
    featured: false,
  },
  {
    num: '04',
    title: 'FoodFire',
    subtitle: 'Food Ordering Platform',
    description:
      'Multi-panel food ordering platform with customer ordering, restaurant management, and delivery tracking. Built with a mobile-first approach using Flutter.',
    features: [
      'Customer ordering flow',
      'Restaurant admin panel',
      'Delivery tracking panel',
      'Order status updates',
      'Admin dashboard',
    ],
    tech: ['Laravel', 'Flutter', 'MySQL'],
    github: 'https://github.com/Amitsingh2000',
    demo: '#',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #db2777 0%, #ec4899 100%)',
    featured: false,
  },
  {
    num: '05',
    title: 'ConvDesk',
    subtitle: 'WhatsApp CRM',
    description:
      'A WhatsApp-based CRM tool with AI auto-reply, CRM pipeline management, broadcast messaging, and multi-agent support — built for small business automation.',
    features: [
      'AI-powered auto reply',
      'CRM pipeline visualization',
      'Broadcast messaging system',
      'Multi-agent support',
      'Analytics dashboard',
    ],
    tech: ['Spring Boot', 'React.js', 'REST APIs'],
    github: 'https://github.com/Amitsingh2000',
    demo: '#',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-wrap" style={{ background: '#0a0a0f' }}>
      <div className="inner">

        {/* Header */}
        <div style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
          <p className="sec-label">Projects</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <h2 className="sec-title">Things I've Built</h2>
            <a
              href="https://github.com/Amitsingh2000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '8px 16px', borderRadius: '7px',
                border: '1px solid #1e1e2e',
                color: '#64748b', fontSize: '0.82rem', fontWeight: 500,
                textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace',
                transition: 'all 0.2s ease',
              }}
            >
              <Github size={14} aria-hidden="true" /> View all on GitHub
            </a>
          </div>
        </div>

        {/* Featured projects */}
        <div className="projects__featured">
          {projects.filter(p => p.featured).map((p, i) => (
            <div key={i} className="card project-card">
              <div className="project-card__bar" style={{ background: p.gradient }} />
              <div className="project-card__body">
                <div className="project-card__title-row">
                  <div>
                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem', color: p.color, letterSpacing: '0.1em',
                      marginBottom: '6px',
                    }}>
                      {p.num} — {p.subtitle}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9' }}>{p.title}</h3>
                  </div>

                  <div className="project-card__actions">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__icon-btn"
                      aria-label={`${p.title} GitHub repository`}
                    >
                      <Github size={15} />
                    </a>
                    {p.demo !== '#' && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__icon-btn"
                        aria-label={`${p.title} live demo`}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.7, marginBottom: '18px' }}>
                  {p.description}
                </p>

                <ul className="project-card__features">
                  {p.features.slice(0, 3).map((f, fi) => (
                    <li key={fi} className="project-card__feat-item">
                      <span style={{ color: p.color, flexShrink: 0 }} aria-hidden="true">▸</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="project-card__tags">
                  {p.tech.map(t => <span key={t} className="badge">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary projects */}
        <div className="projects__others">
          {projects.filter(p => !p.featured).map((p, i) => (
            <div key={i} className="card project-card" style={{ padding: '20px 22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.62rem', color: p.color, letterSpacing: '0.1em', marginBottom: '4px',
                  }}>
                    {p.num} — {p.subtitle}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0' }}>{p.title}</h3>
                </div>
                <div style={{
                  padding: '7px', borderRadius: '7px',
                  background: `${p.color}15`, color: p.color,
                }}>
                  <Layers size={15} aria-hidden="true" />
                </div>
              </div>

              <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.65, marginBottom: '14px' }}>
                {p.description.length > 110 ? p.description.slice(0, 110) + '…' : p.description}
              </p>

              <div className="project-card__tags">
                {p.tech.map(t => <span key={t} className="badge" style={{ fontSize: '0.64rem' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;