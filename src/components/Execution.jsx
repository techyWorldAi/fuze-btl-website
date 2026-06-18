import React from 'react'
import { motion } from 'framer-motion'
import { I } from './Icons'

function Execution() {
  const steps = [
    { icon: <I.Search />, t: 'Insight', d: 'Data gathering and research to identify audience opportunities and market gaps.' },
    { icon: <I.Bulb />, t: 'Concept', d: 'Transitioning from "what" to "how" — brainstorming and building the strategic activation plan.' },
    { icon: <I.Chart />, t: 'Design', d: 'The discovery phase where creative ideas are digitally developed and refined.' },
    { icon: <I.Store />, t: 'Build', d: 'The execution phase where designs and environments are physically developed and fabricated.' },
    { icon: <I.Play />, t: 'Activate', d: 'The launch phase — the campaign is deployed to the intended audience through all channels.' },
    { icon: <I.Report />, t: 'Report', d: 'Analyzing performance data to measure success and provide final insights for the next cycle.' },
  ]

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
  const stepVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  return (
    <section className="execution-section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Our Methodology</p>
          <h2 className="section-title">The <span className="accent">Execution</span> Model</h2>
          <p style={{ color: 'var(--mid)', fontSize: '15px', marginTop: '16px', lineHeight: 1.75 }}>A six-stage framework that ensures every activation is engineered for outcomes — not just activity.</p>
        </div>
        <motion.div className="execution-steps" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {steps.map(step => (
            <motion.div key={step.t} className="exec-step" variants={stepVariants} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
              <div className="exec-circle">{step.icon}</div>
              <div className="exec-title">{step.t}</div>
              <div className="exec-desc">{step.d}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Execution
