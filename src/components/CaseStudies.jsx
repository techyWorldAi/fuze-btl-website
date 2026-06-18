import React from 'react'
import { motion } from 'framer-motion'
import { I } from './Icons'

function CaseStudies() {
  const cases = [
    { tag: 'Corporate Events', client: 'Africa Re', objective: 'Design and execute a seamless executive transition experience — a farewell and welcome ceremony for 300 high-value stakeholders at JW Marriott Nairobi.', results: [['300+', 'Attendees'], ['Flawless', 'Execution'], ['Premium', 'Brand Reinforcement']], img: 'images/Kulture-29.jpg' },
    { tag: 'OOH + BTL', client: 'Sprite', objective: 'Transform a traditional OOH placement into a high-impact experiential installation — capturing attention and amplifying brand recall in Nairobi CBD.', results: [['High', 'Visibility'], ['Organic', 'Social Spread'], ['Creative', 'Disruption']], img: 'images/KCB-Puts-KShs-150M-into-2023-WRC-Safari-Rally-scaled.jpg' },
    { tag: 'Sponsorship Experience', client: 'KCB Safari Rally', objective: "Transform KCB's WRC Safari Rally presence into a dual-experience ecosystem: mass market engagement via the KCB Den and VIP hospitality through KCB Platinum.", results: [['5,000+', 'Mass Engagements'], ['300', 'VIP Guests'], ['Full-Spectrum', 'Brand Presence']], img: 'images/KCB-Puts-KShs-150M-into-2023-WRC-Safari-Rally-scaled.jpg' },
    { tag: 'Client Engagement', client: 'Nellions', objective: 'Design a strategic 10th anniversary engagement event for 300 existing clients and prospects — balancing professionalism with relationship-building.', results: [['300+', 'Attendees'], ['Elevated', 'Brand Perception'], ['New Biz', 'Opportunities']], img: 'images/MNO_7112.JPG' },
    { tag: 'Landmark Fabrication', client: 'Mastercard', objective: 'Build a bold physical expression of the "Priceless" campaign at a high-traffic scenic viewpoint — turning a brand word into a lasting landmark destination.', results: [['Iconic', 'Landmark'], ['Organic', 'Social UGC'], ['Long-Term', 'Brand Presence']], img: 'images/Hero.png' },
    { tag: 'Brand Activation', client: 'New Campaign', objective: 'Your next campaign could be here. We engineer brand experiences that convert awareness into action — across every sector, at any scale.', results: [['Your', 'Results'], ['Your', 'Metrics'], ['Your', 'Growth']], img: 'images/Placeholder.png', placeholder: true },
  ]

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
  const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  return (
    <section className="cases-section" id="cases">
      <div className="container">
        <div className="cases-intro">
          <div><p className="eyebrow">Proof of Performance</p><h2 className="section-title">Case <span className="accent">Studies</span></h2></div>
          <p>Built from the combined BTL experience of our directors — more than 15 years in the field — these case studies reflect integrated brand experiences designed to deliver measurable results.</p>
        </div>
        <motion.div className="cases-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}>
          {cases.map(c => (
            <motion.div key={c.client} className="case-card" style={c.placeholder ? { border: '2px dashed var(--border)', opacity: 0.7 } : {}} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
              <div className="case-img"><div className="case-tag">{c.tag}</div><img src={c.img} alt={c.client} /></div>
              <div className="case-body">
                <div className="case-client">{c.client}</div>
                <div className="case-objective">{c.objective}</div>
                <div className="case-results">{c.results.map(([v, l]) => <div key={l}><div className="case-result-num">{v}</div><div className="case-result-label">{l}</div></div>)}</div>
                <a href="#contact" className="case-link">{c.placeholder ? 'Start Your Campaign' : 'View Full Story'} <I.Arrow /></a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies
