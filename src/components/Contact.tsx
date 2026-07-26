import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, Copy, Check } from 'lucide-react';

const contactLinks = [
  { icon: <Mail size={18} aria-hidden="true" />, label: 'Email', value: 'amit.pardeshi2000@gmail.com', href: 'mailto:amit.pardeshi2000@gmail.com' },
  { icon: <Phone size={18} aria-hidden="true" />, label: 'Phone', value: '+91 7249379579', href: 'tel:+917249379579' },
  { icon: <Linkedin size={18} aria-hidden="true" />, label: 'LinkedIn', value: 'amit-pardeshi26', href: 'https://www.linkedin.com/in/amit-pardeshi26/' },
  { icon: <Github size={18} aria-hidden="true" />, label: 'GitHub', value: 'Amitsingh2000', href: 'https://github.com/Amitsingh2000' },
  { icon: <MapPin size={18} aria-hidden="true" />, label: 'Location', value: 'Pune, Maharashtra, India', href: '#' },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('amit.pardeshi2000@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-wrap" style={{ background: '#0d0d14', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} aria-hidden="true" />

      <div className="inner inner--tight" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(36px, 5vw, 56px)', textAlign: 'center' }}>
          <p className="sec-label sec-label--center">Contact</p>
          <h2 className="sec-title" style={{ marginBottom: '14px' }}>Let's Work Together</h2>
          <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
            Have a project idea or looking for a developer? I'm currently available for freelance work and open to new opportunities.
          </p>
        </div>

        {/* Primary CTA card */}
        <div className="contact__cta-card">
          <p style={{ fontSize: '0.78rem', color: '#475569', marginBottom: '10px', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.05em' }}>
            Best way to reach me
          </p>
          <div style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            fontWeight: 700, color: '#a5b4fc',
            marginBottom: '20px', fontFamily: 'JetBrains Mono, monospace',
            wordBreak: 'break-all',
          }}>
            amit.pardeshi2000@gmail.com
          </div>
          <div className="contact__cta-btns">
            <a href="mailto:amit.pardeshi2000@gmail.com" className="contact__btn-primary">
              <Send size={15} aria-hidden="true" /> Send Email
            </a>
            <button onClick={copyEmail} className="contact__btn-secondary" aria-label="Copy email address to clipboard">
              {copied ? <><Check size={15} aria-hidden="true" /> Copied!</> : <><Copy size={15} aria-hidden="true" /> Copy Email</>}
            </button>
          </div>
        </div>

        {/* Contact links grid */}
        <div className="contact__links">
          {contactLinks.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact__link-item"
              aria-label={`${c.label}: ${c.value}`}
            >
              <div style={{ color: '#6366f1', flexShrink: 0 }}>{c.icon}</div>
              <div style={{ minWidth: 0 }}>
                <div className="contact__link-label">{c.label}</div>
                <div className="contact__link-value" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
