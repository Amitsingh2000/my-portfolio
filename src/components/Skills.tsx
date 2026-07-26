import React from 'react';

const skillGroups = [
  { label: 'Languages',        color: '#6366f1', skills: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'] },
  { label: 'Backend',          color: '#8b5cf6', skills: ['Spring Boot', 'Spring MVC', 'Hibernate', 'JPA', 'REST APIs', 'JWT Auth'] },
  { label: 'Frontend',         color: '#a78bfa', skills: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'] },
  { label: 'Databases',        color: '#10b981', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'] },
  { label: 'Tools & DevOps',   color: '#f59e0b', skills: ['Git', 'GitHub', 'Maven', 'Postman', 'Swagger', 'GitHub Actions', 'Linux'] },
  { label: 'Domain Experience',color: '#ec4899', skills: ['Banking Software', 'Marketplace', 'Crowdfunding', 'CRM', 'Gym Mgmt', 'Food Tech'] },
];

const coreSkills = [
  { name: 'Java & Spring Boot', pct: 88 },
  { name: 'REST API Design',    pct: 85 },
  { name: 'React.js',           pct: 75 },
  { name: 'MySQL / PostgreSQL', pct: 82 },
  { name: 'MongoDB',            pct: 70 },
  { name: 'Git & Deployment',   pct: 80 },
];

const Skills = () => (
  <section id="skills" className="section-wrap" style={{ background: '#0d0d14' }}>
    <div className="inner">

      {/* Header */}
      <div style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
        <p className="sec-label">Skills</p>
        <h2 className="sec-title">Technical Toolkit</h2>
      </div>

      <div className="skills__grid">

        {/* Proficiency bars */}
        <div>
          <div style={{
            fontSize: '0.72rem', fontWeight: 600, color: '#475569',
            letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '22px',
          }}>
            Core Proficiency
          </div>
          <div className="skills__bar-row">
            {coreSkills.map((sk, i) => (
              <div key={i} className="skills__bar-item">
                <div className="skills__bar-header">
                  <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#94a3b8' }}>{sk.name}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#6366f1', fontWeight: 500 }}>
                    {sk.pct}%
                  </span>
                </div>
                <div className="skills__bar-track" role="progressbar" aria-valuenow={sk.pct} aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="skills__bar-fill"
                    style={{ width: `${sk.pct}%`, animationDelay: `${i * 0.12}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill tag groups */}
        <div className="skills__tags">
          {skillGroups.map((group, gi) => (
            <div key={gi}>
              <div className="skills__tag-group-header">
                <div
                  className="skills__dot"
                  style={{ background: group.color, boxShadow: `0 0 6px ${group.color}60` }}
                  aria-hidden="true"
                />
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.66rem', fontWeight: 500,
                  color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>
                  {group.label}
                </span>
              </div>
              <div className="skills__pills">
                {group.skills.map(sk => (
                  <span key={sk} className="skill-pill">{sk}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default Skills;