import React from 'react'
import { motion } from 'framer-motion'
import { I } from './Icons'

function Industries() {
  const items = [
    { icon: <I.Cart />, name: 'FMCG' },
    { icon: <I.Signal />, name: 'Telecoms' },
    { icon: <I.Bank />, name: 'Banking & Finance' },
    { icon: <I.Monitor />, name: 'Technology' },
    { icon: <I.ShoppingBag />, name: 'Retail' },
    { icon: <I.Coffee />, name: 'Hospitality' },
    { icon: <I.GraduationCap />, name: 'Education' },
    { icon: <I.Heart />, name: 'Healthcare' },
  ]

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }
  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }

  return (
    <section className="industries-section" id="industries">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '56px' }}>
          <div><p className="eyebrow">Sector Experience</p><h2 className="section-title">Industries We <span className="accent">Serve</span></h2></div>
          <p style={{ color: 'var(--mid)', fontSize: '15px', lineHeight: 1.75 }}>Deep domain expertise across eight high-growth sectors in East Africa, with campaigns ranging from mass-market BTL activations to premium executive experiences.</p>
        </div>
        <motion.div className="industries-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {items.map(it => (
            <motion.div key={it.name} className="industry-card" variants={cardVariants} whileHover={{ y: -6, transition: { duration: 0.2 } }}>
              <div className="industry-icon-box">{it.icon}</div>
              <div className="industry-name">{it.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
