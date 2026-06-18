import React from 'react'
import { I, FuzeLogo } from './Icons'
import FuzeLogoPng from '/images/Fuze Logo png.png'

function AboutFuze() {
  const pillars = [
    { icon: <I.Target />, t: 'Precision Targeting', d: 'We identify exactly where your customers are, engage them with precision, and track every interaction as it happens.' },
    { icon: <I.Data />, t: 'Engineered, Not Executed', d: 'We deploy a tightly integrated ecosystem of tools that connect audience data, media intelligence, and on-ground execution in real time.' },
    { icon: <I.Trend />, t: 'Optimize In Motion', d: 'We continuously analyze performance, optimize in real time, and feed live insights back into the field ensuring every deployment improves.' },
    { icon: <I.Flag />, t: 'Built To Outperform', d: 'High-impact experiences that are not only visible, but measurable, attributable, and engineered to deliver results.' },
  ]

  return (
    <section className="fuze-about-section" id="about">
      <div className="container">
        <div className="fuze-about-grid">
          <div className="fuze-about-text">
            <p className="eyebrow">Our Positioning</p>
            <div className="fuze-manifesto" style={{ display: 'grid', placeItems: 'center', gap: '18px', textAlign: 'center' }}>
              {/* <FuzeLogo height={84} /> */}
              <div>Engineered,<br /><span className="accent">Not</span><br />Executed.</div>
            </div>
            <p>FUZE is a brand experience division built for one thing: Results. We are a full-service experiential and activation division designed to convert awareness into action — closing the gap between marketing investment and measurable business return.</p>
            <p>Our vision: to become the leading experiential marketing force transforming how brands connect with people across Africa. Our mission: to design and execute impactful brand experiences that drive engagement, influence behavior, and deliver measurable results.</p>
            <div className="pillars">
              {pillars.map(p => (
                <div key={p.t} className="pillar">
                  <div className="pillar-icon">{p.icon}</div>
                  <div>
                    <div className="pillar-title">{p.t}</div>
                    <div className="pillar-desc">{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="fuze-visual">
            <div className="fuze-badge">Firmbridge<br />Advertising</div>
            <div className="fuze-img-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '320px', background: 'rgba(255,255,255,0.08)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <img src={FuzeLogoPng} alt="FUZE logo" style={{ maxHeight: '140px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <div className="fuze-img-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '180px', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: 'rgba(0, 0, 0, 0.72)', fontSize: '14px', lineHeight: 1.6, textAlign: 'center', padding: '18px', maxWidth: '220px' }}>
                A focused creative showcase for the FUZE brand experience division — built for impact, precision, and measurable results.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutFuze
