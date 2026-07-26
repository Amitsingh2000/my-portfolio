import React from 'react';
import { Briefcase, Zap, Globe, Shield, Clock, Database } from 'lucide-react';

const services = [
  { icon: <Briefcase size={20} aria-hidden="true" />, title: 'Full Stack Development', desc: 'End-to-end web apps with Java backend & React frontend' },
  { icon: <Zap size={20} aria-hidden="true" />, title: 'REST API Design', desc: 'Clean, documented APIs with Swagger & Spring Boot' },
  { icon: <Globe size={20} aria-hidden="true" />, title: 'Frontend Engineering', desc: 'Responsive UIs with React.js, Tailwind & modern tooling' },
  { icon: <Shield size={20} aria-hidden="true" />, title: 'Auth & Security', desc: 'JWT authentication, role-based access control' },
  { icon: <Clock size={20} aria-hidden="true" />, title: 'Payment Integration', desc: 'Razorpay, payment gateway setup and webhooks' },
  { icon: <Database size={20} aria-hidden="true" />, title: 'Database Design', desc: 'MySQL, MongoDB, PostgreSQL schema & query optimization' },
];

const whyMe = [
  { label: 'Clean code', value: 'Readable, well-structured, maintainable codebase' },
  { label: 'On-time', value: 'Consistent delivery within agreed timelines' },
  { label: 'Communication', value: 'Clear updates, responsive, async-friendly' },
  { label: 'Post-delivery', value: 'Long-term support & bug fixes after handover' },
];

const stats = [
  { num: '5+', label: 'Projects Shipped' },
  { num: '2', label: 'Internships' },
  { num: 'MCA', label: 'CGPA 7.91' },
  { num: '∞', label: 'Coffee Cups' },
];

const About = () => (
  <section id="about" className="section-wrap" style={{ background: '#0d0d14' }}>
    <div className="inner">

      {/* Intro grid */}
      <div className="about__grid">
        {/* Text */}
        <div>
          <p className="sec-label">About</p>
          <h2 className="sec-title" style={{ marginBottom: '20px' }}>
            Building software that<br />
            <span className="gradient-text">actually works</span>
          </h2>
          <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.97rem', marginBottom: '18px' }}>
            I'm a passionate Full Stack Java Developer with hands-on experience building enterprise apps,
            REST APIs, and modern web platforms. Currently working as an{' '}
            <span style={{ color: '#a5b4fc' }}>Implementation Intern at Netwin Systems</span>,
            deploying enterprise banking software used by financial institutions.
          </p>
          <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.97rem' }}>
            Alongside my professional work, I've shipped several real-world products including a project
            marketplace, crowdfunding platform, gym management system, food ordering platform, and CRM
            tools — all production-grade.
          </p>
        </div>

        {/* Stats grid */}
        <div className="about__stats">
          {stats.map(s => (
            <div key={s.label} className="about__stat card">
              <div className="about__stat-num">{s.num}</div>
              <div className="about__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
        <p className="sec-label" style={{ marginBottom: '28px' }}>What I Do</p>
        <div className="about__services">
          {services.map((sv, i) => (
            <div key={i} className="about__service-card card">
              <div className="about__service-icon">{sv.icon}</div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '4px' }}>{sv.title}</div>
                <div style={{ fontSize: '0.79rem', color: '#475569', lineHeight: 1.6 }}>{sv.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why hire me */}
      <div className="about__why-grid">
        {whyMe.map((w, i) => (
          <div key={i}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem', color: '#6366f1',
              marginBottom: '6px', letterSpacing: '0.05em',
            }}>
              {String(i + 1).padStart(2, '0')} / {w.label}
            </div>
            <div style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.6 }}>{w.value}</div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default About;