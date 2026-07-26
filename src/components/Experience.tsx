import React, { useState } from 'react';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Netwin Systems and Software (I) Pvt. Ltd.',
    role: 'Implementation Intern',
    type: 'Full-time',
    period: 'March 2026 – Present',
    location: 'Pune, Maharashtra',
    color: '#6366f1',
    description:
      'Working with enterprise banking software deployed at financial institutions across India. Responsible for end-to-end implementation from configuration to production go-live.',
    responsibilities: [
      'Configuring and deploying Spring Boot WAR applications on enterprise servers',
      'Managing PostgreSQL databases and writing complex SQL queries',
      'Building workflows using the Pravaah Workflow Engine',
      'Supporting UAT and Production deployments with zero-downtime strategies',
      'Debugging production issues using logs, Postman, and Swagger',
      'Collaborating with development teams to resolve client-reported issues',
      'Preparing implementation and technical documentation',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Swagger', 'Postman', 'Git', 'Linux'],
    current: true,
  },
  {
    company: 'Webteam Pvt. Ltd.',
    role: 'Full Stack Java Developer Intern',
    type: 'Internship',
    period: 'Oct 2024 – Jan 2025',
    location: 'Remote',
    color: '#8b5cf6',
    description:
      'Worked on full-stack web application development using Spring Boot and React.js, contributing to both frontend and backend features.',
    responsibilities: [
      'Developed and documented REST APIs using Spring Boot',
      'Built responsive React.js interfaces integrated with backend APIs',
      'Designed and optimized MySQL database schemas',
      'Implemented JWT-based authentication modules',
      'Fixed bugs and improved application performance',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'Hibernate', 'JPA', 'MySQL', 'Git'],
    current: false,
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState<number>(0);

  return (
    <section id="experience" className="section-wrap" style={{ background: '#0a0a0f' }}>
      <div className="inner inner--narrow">

        {/* Header */}
        <div style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
          <p className="sec-label">Experience</p>
          <h2 className="sec-title">Where I've Worked</h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`exp-card ${expanded === i ? 'exp-card--open' : ''}`}
              role="article"
              aria-expanded={expanded === i}
            >
              {/* Accent line */}
              <div style={{
                height: '2px',
                background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                opacity: expanded === i ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }} aria-hidden="true" />

              {/* Card header (clickable) */}
              <div
                className="exp-card__header"
                onClick={() => setExpanded(expanded === i ? -1 : i)}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Status badge */}
                  <div style={{ marginBottom: '8px' }}>
                    <span
                      className={exp.current ? 'badge badge--green' : 'badge'}
                      style={{ fontSize: '0.65rem' }}
                    >
                      {exp.current ? '● Current' : exp.type}
                    </span>
                  </div>

                  <div style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', fontWeight: 700, color: '#e2e8f0', marginBottom: '3px' }}>
                    {exp.role}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: exp.color, fontWeight: 600, marginBottom: '8px' }}>
                    {exp.company}
                  </div>

                  <div className="exp-card__meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: '#475569' }}>
                      <Calendar size={12} aria-hidden="true" /> {exp.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.76rem', color: '#475569' }}>
                      <MapPin size={12} aria-hidden="true" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ChevronRight
                  size={20}
                  className={`exp-card__chevron ${expanded === i ? 'exp-card__chevron--open' : ''}`}
                  aria-hidden="true"
                />
              </div>

              {/* Expanded body */}
              {expanded === i && (
                <div className="exp-card__body">
                  <div style={{ height: '1px', background: '#1e1e2e', marginBottom: '20px' }} />

                  <p style={{ color: '#64748b', fontSize: '0.86rem', lineHeight: 1.75, marginBottom: '18px' }}>
                    {exp.description}
                  </p>

                  <div style={{ marginBottom: '18px' }}>
                    <div style={{
                      fontSize: '0.72rem', fontWeight: 600, color: '#475569',
                      letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '12px',
                    }}>
                      Key Responsibilities
                    </div>
                    <ul className="exp-card__responsibilities">
                      {exp.responsibilities.map((r, ri) => (
                        <li key={ri} className="exp-card__resp-item">
                          <span style={{ color: exp.color, flexShrink: 0, marginTop: '1px' }} aria-hidden="true">▸</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.tech.map(t => <span key={t} className="badge">{t}</span>)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
