import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../hooks/useInView'
import useCount from '../hooks/useCount'

function Metrics() {
  const [ref, vis] = useInView(0.3)
  const nums = [
    { target: 500, suffix: '+', label: 'Activations Executed' },
    { target: 5, suffix: 'M+', label: 'Consumer Interactions' },
    { target: 95, suffix: '%', label: 'Campaign Success Rate' },
    { target: 50, suffix: '+', label: 'Brand Partners' },
  ]
  const counts = nums.map(n => useCount(n.target, 1800, vis))

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }

  return (
    <section className="metrics-section" ref={ref}>
      <div className="metrics-bg" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', justifyContent: 'center' }}>Our Track Record</p>
          <h2 className="section-title" style={{ color: '#fff' }}>Numbers That <span style={{ color: '#fff', borderBottom: '4px solid #fff', paddingBottom: '2px' }}>Speak</span></h2>
        </div>
        <motion.div className="metrics-grid" variants={containerVariants} initial="hidden" animate={vis ? 'visible' : 'hidden'}>
          {nums.map((m, i) => (
            <motion.div key={m.label} className="metric-item" variants={itemVariants}>
              <div className="metric-num">{counts[i].toLocaleString()}{m.suffix}</div>
              <div className="metric-label">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Metrics
