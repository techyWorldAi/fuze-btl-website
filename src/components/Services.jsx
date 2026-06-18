import React from 'react'
import { motion } from 'framer-motion'
import { I } from './Icons'
import ImgPlaceholder from './ImgPlaceholder'

function Services() {
  const svcs = [
    { icon: <I.Bolt />, title: 'Brand Activations', desc: 'High-impact experiential campaigns designed to create lasting audience engagement, drive trial, and build brand affinity.', img: 'Brand activation event photo' },
    { icon: <I.Map />, title: 'Field Marketing', desc: 'Precision-led on-ground execution with trained field teams deployed strategically where your audience lives, works, and shops.', img: 'Field marketing team photo' },
    { icon: <I.Rocket />, title: 'Product Launches', desc: 'Launch campaigns engineered to generate maximum buzz, product trial, and attributable sales velocity from day one.', img: 'Product launch event photo' },
    { icon: <I.Store />, title: 'Retail Activations', desc: 'Drive in-store traffic, conversion rate, and basket size through targeted, high-energy shopper experiences at point of sale.', img: 'Retail activation photo' },
    { icon: <I.Eye />, title: 'OOH + BTL Integration', desc: 'We bridge outdoor advertising with experiential marketing — turning passive visibility into active audience engagement.', img: 'OOH installation photo' },
    { icon: <I.Chart />, title: 'Campaign Analytics', desc: 'Track every consumer interaction, optimize deployments in real time, and report on true, attributable business impact.', img: 'Analytics dashboard screenshot' },
  ]

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  return (
    <section className="services-section" id="solutions">
      <div className="container">
        <div className="services-header">
          <div><p className="eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>What We Deliver</p><h2 className="section-title">Our <span className="accent">Solutions</span></h2></div>
          <p>Six integrated capabilities built around one promise: activations that don't just create visibility, but deliver measurable, attributable impact at scale.</p>
        </div>
        <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {svcs.map((service, index) => (
            <motion.div key={service.title} className="svc-card" variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <div className="svc-num">0{index + 1}</div>
              <div className="svc-icon">{service.icon}</div>
              <div className="svc-title">{service.title}</div>
              <div className="svc-desc">{service.desc}</div>
              <div className="svc-img"><ImgPlaceholder height={120} label={service.img} hint="Campaign photo" spec="600x300px" /></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
