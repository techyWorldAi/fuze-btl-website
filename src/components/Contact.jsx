import React from 'react'
import { I } from './Icons'
import ImgPlaceholder from './ImgPlaceholder'

function Contact({ openModal }) {
  const details = [
    { icon: <I.Phone />, label: 'Phone', value: '+254 700 000 000' },
    { icon: <I.Mail />, label: 'Email', value: 'info@fuze.co.ke' },
    { icon: <I.Pin />, label: 'Office', value: 'Westlands Business Park, Nairobi, Kenya' },
  ]

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Get In Touch</p>
          <h2 className="section-title">Start a <span className="accent">Conversation</span></h2>
          <p style={{ color: 'var(--mid)', fontSize: '15px', marginTop: '16px', lineHeight: 1.75 }}>Tell us about your brand, your campaign objectives, and your audience. We'll come back with a tailored strategy proposal.</p>
        </div>
        <div className="contact-grid">
          <div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '32px' }}>Contact Details</h3>
            <div className="contact-info-blocks">
              {details.map(item => (
                <div key={item.label} className="contact-block">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <div className="contact-block-label">{item.label}</div>
                    <div className="contact-block-val">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-badge" style={{ marginTop: '32px' }}>
              <div className="contact-badge-label">Average Response Time</div>
              <div className="contact-badge-val">Under 4 Hours</div>
              <div className="contact-badge-sub">During business hours, Mon–Fri</div>
            </div>
            <div style={{ marginTop: '24px', borderRadius: '4px', overflow: 'hidden' }}>
              <ImgPlaceholder height={160} label="Office / Team Photo" hint="Optional" spec="700x320px" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '28px' }}>
            <div style={{ padding: '40px', background: 'var(--bg2)', borderRadius: '8px', border: '1px solid var(--border)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(232,113,26,0.1)', border: '2px solid rgba(232,113,26,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)' }}><I.Mail /></div>
              <div>
                <h4 style={{ fontFamily: 'var(--display)', fontSize: '22px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px' }}>Send Us A Brief</h4>
                <p style={{ color: 'var(--mid)', fontSize: '14px', lineHeight: 1.7, maxWidth: '280px' }}>Fill out a quick form and our strategy team will respond with a tailored proposal within 4 hours.</p>
              </div>
              <button onClick={() => openModal('Request A Proposal')} className="btn-primary" style={{ justifyContent: 'center', width: '100%', maxWidth: '260px' }}>Request Proposal <I.Arrow /></button>
            </div>
            <div style={{ padding: '32px', background: 'var(--dark)', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><I.Phone /></div>
              <div>
                <h4 style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 900, textTransform: 'uppercase', color: '#fff', marginBottom: '6px' }}>Prefer To Talk?</h4>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', lineHeight: 1.6 }}>Call us directly — we're available Mon–Fri, 8am–6pm EAT</p>
              </div>
              <a href="tel:+254700000000" className="btn-outline-white" style={{ justifyContent: 'center', width: '100%', maxWidth: '220px' }}>Call Now <I.Arrow /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
