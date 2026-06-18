import React from 'react'
import { I } from './Icons'

function CTA({ openModal }) {
  return (
    <section className="cta-section">
      <div className="cta-bg" />
      <div className="container">
        <div className="cta-inner">
          <div>
            <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>Ready to Grow?</p>
            <h2 className="cta-title">Ready To Turn Activations Into <span className="accent">Business Results?</span></h2>
            <p className="cta-sub">Let's build measurable growth through data-driven brand experiences engineered for your market.</p>
          </div>
          <div className="cta-actions">
            <button onClick={() => openModal('Schedule A Consultation')} className="btn-primary" style={{ justifyContent: 'center' }}>Schedule Consultation <I.Arrow /></button>
            <a href="tel:+254700000000" className="btn-outline-white" style={{ justifyContent: 'center' }}>Speak To Our Team</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
