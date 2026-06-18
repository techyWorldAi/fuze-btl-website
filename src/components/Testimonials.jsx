import React from 'react'
import { motion } from 'framer-motion'
import { I } from './Icons'

function Testimonials() {
  const testis = [
    { t: 'FUZE delivered results that exceeded every benchmark we set. The Africa Re CEO Breakfast was seamless from arrival to departure — exactly the elevated experience our stakeholders deserved.', n: 'Head of Corporate Communications', r: 'Africa Re Kenya', i: 'AR' },
    { t: 'The Sprite installation in CBD was unlike anything we\'d seen. People stopped, interacted, took photos. FUZE turned a static OOH site into a live brand encounter that drove real social amplification.', n: 'Brand Manager', r: 'Coca-Cola / Sprite', i: 'CC' },
    { t: 'The dual KCB Den and Platinum experience at Safari Rally was exactly what we needed — one brand, two distinct journeys. FUZE owned the environment and delivered flawless execution under real event pressure.', n: 'Sponsorship Lead', r: 'KCB Bank', i: 'KB' },
  ]

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const cardVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }

  return (
    <section className="testimonials-section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
          <div><p className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>Client Voice</p><h2 className="section-title">What Brands <span className="accent">Say</span></h2></div>
          <a href="#contact" className="btn-primary">Work With Us <I.Arrow /></a>
        </div>
        <motion.div className="testi-wrapper" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {testis.map((t, i) => (
            <motion.div key={i} className="testi-card" variants={cardVariants} whileHover={{ borderColor: 'rgba(232,113,26,0.5)', y: -4, transition: { duration: 0.2 } }}>
              <p className="testi-text">{t.t}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.i}</div>
                <div><div className="testi-name">{t.n}</div><div className="testi-role">{t.r}</div></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
