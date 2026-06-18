import React from 'react'
import { motion } from 'framer-motion'

function Gallery() {
  const images = [
    { img: 'images/MNO_7112.JPG', title: 'Outdoor Activation', subtitle: 'Engaging audiences in high-footfall spaces with memorable field experiences.' },
    { img: 'images/KCB-Puts-KShs-150M-into-2023-WRC-Safari-Rally-scaled.jpg', title: 'Safari Rally Sponsorship', subtitle: 'Premium activation with dual brand journeys and VIP hospitality.' },
    { img: 'images/Kulture-29.jpg', title: 'Retail Activation', subtitle: 'Retail environments built to drive conversion through direct engagement.' },
    { img: 'images/Hero.png', title: 'Executive Experience', subtitle: 'Premium event design for stakeholder-facing brand moments.' },
    { img: 'images/Fuze-Tusker-Activation.jpeg', title: 'Tusker Campaign', subtitle: 'Bold on-ground brand storytelling for beverage activations.' },
    { img: 'images/KCB-Puts-KShs-150M-into-2023-WRC-Safari-Rally-scaled.jpg', title: 'Event Momentum', subtitle: 'High-energy environments created to capture attention and amplify presence.' },
  ]

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
  const cardVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <div><p className="eyebrow">Visual Portfolio</p><h2 className="section-title">Modern <span className="accent">Gallery</span></h2></div>
          <p>A curated display of our experiential projects, showing how brand storytelling is brought to life through vivid, high-impact activations across East Africa. Scroll through our most memorable campaign moments.</p>
        </div>
        <motion.div className="gallery-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {images.map(item => (
            <motion.div key={item.title} className="gallery-card" variants={cardVariants} whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.2 } }}>
              <img src={item.img} alt={item.title} />
              <div className="gallery-card-overlay" />
              <div className="gallery-card-text">
                <div className="gallery-card-title">{item.title}</div>
                <div className="gallery-card-sub">{item.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
