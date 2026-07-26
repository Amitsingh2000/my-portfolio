import React from 'react';

const certs = [
  {
    title: 'Full Stack Java Developer',
    issuer: 'Adhyayan Training & Placement Institute, Pune',
    description: 'Comprehensive training covering Java full-stack development: Spring Boot, Hibernate, REST APIs, and modern web technologies.',
    skills: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Web Dev'],
    color: '#6366f1',
    icon: '☕',
  },
  {
    title: 'MongoDB Java Developer Path',
    issuer: 'MongoDB University',
    description: 'Specialized learning path covering MongoDB database management, CRUD operations, aggregation pipelines, and Java driver integration.',
    skills: ['MongoDB', 'Java Driver', 'NoSQL', 'Aggregation', 'Atlas'],
    color: '#10b981',
    icon: '🍃',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-wrap" style={{ background: '#0a0a0f' }}>
      <div className="inner inner--narrow">

        {/* Header */}
        <div style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
          <p className="sec-label">Certifications</p>
          <h2 className="sec-title">Credentials &amp; Learning</h2>
        </div>

        <div className="certs__grid">
          {certs.map((cert, i) => (
            <div key={i} className="card project-card">
              <div style={{ height: '3px', background: `linear-gradient(90deg, ${cert.color}, transparent)` }} aria-hidden="true" />
              <div className="cert-card__body">
                <div className="cert-card__header">
                  <div
                    className="cert-card__icon"
                    style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                    aria-hidden="true"
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '3px' }}>
                      {cert.title}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: '#64748b' }}>{cert.issuer}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
                  <div style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: '#10b981', boxShadow: '0 0 6px rgba(16,185,129,0.5)',
                  }} aria-hidden="true" />
                  <span style={{ fontSize: '0.75rem', color: '#6ee7b7', fontFamily: 'JetBrains Mono, monospace' }}>
                    Completed
                  </span>
                </div>

                <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.7, marginBottom: '16px' }}>
                  {cert.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cert.skills.map(sk => <span key={sk} className="badge">{sk}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;