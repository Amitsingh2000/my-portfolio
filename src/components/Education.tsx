import React from 'react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'D.Y. Patil Centre for Management and Research, Pune',
    grade: '7.91 CGPA',
    period: '2023 – 2025',
    color: '#6366f1',
    highlight: true,
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'M.S.G. Arts, Science & Commerce College, Malegaon',
    grade: '8.55 CGPA',
    period: '2019 – 2022',
    color: '#8b5cf6',
    highlight: false,
  },
  {
    degree: 'Higher Secondary Certificate',
    short: 'HSC',
    institution: 'M.S.G. College, Malegaon',
    grade: '61.08%',
    period: '2018 – 2019',
    color: '#a78bfa',
    highlight: false,
  },
  {
    degree: 'Secondary School Certificate',
    short: 'SSC',
    institution: 'K.B.H. Vidyalaya, Malegaon',
    grade: '78.20%',
    period: '2016 – 2017',
    color: '#c4b5fd',
    highlight: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="section-wrap" style={{ background: '#0d0d14' }}>
      <div className="inner inner--narrow">

        {/* Header */}
        <div style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
          <p className="sec-label">Education</p>
          <h2 className="sec-title">Academic Background</h2>
        </div>

        {/* Timeline */}
        <div className="education__timeline">
          <div className="education__line" aria-hidden="true" />

          <div className="education__items">
            {educationData.map((edu, i) => (
              <div key={i} className="education__item">
                <div
                  className="education__dot"
                  style={{ borderColor: edu.color, boxShadow: `0 0 10px ${edu.color}50` }}
                  aria-hidden="true"
                />

                <div className="card education__card">
                  <div className="education__card-inner">
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <span style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.65rem', fontWeight: 700,
                          padding: '2px 8px', borderRadius: '4px',
                          background: `${edu.color}15`,
                          color: edu.color,
                          border: `1px solid ${edu.color}30`,
                        }}>
                          {edu.short}
                        </span>
                        <span style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.68rem', color: '#475569',
                        }}>
                          {edu.period}
                        </span>
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>
                        {edu.degree}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                        {edu.institution}
                      </div>
                    </div>

                    <div
                      className="education__grade"
                      style={{
                        background: `${edu.color}12`,
                        border: `1px solid ${edu.color}25`,
                      }}
                    >
                      <GraduationCap size={14} color={edu.color} aria-hidden="true" />
                      <span style={{ fontWeight: 700, fontSize: '0.82rem', color: edu.color, fontFamily: 'JetBrains Mono, monospace' }}>
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;