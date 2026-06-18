import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { I } from './Icons'

const heroBrands = {
  africaRe: {
    label: 'Africa Re',
    bgImage: 'images/MNO_7112.JPG',
    bgAlt: 'Africa Re campaign background',
    heroTag: 'Africa Re · CEO Farewell & Welcome Ceremony',
    tickerItems: [
      'Africa Re · CEO Breakfast',
      '300+ C-Suite Guests',
      'Board-level engagement',
      '95% campaign satisfaction',
    ],
    eventBadge: {
      label: 'Featured Campaign',
      title: 'Africa Re CEO Breakfast',
      sub: '300+ C-Suite & Executive Guests · JW Marriott Nairobi',
    },
    trustLogos: ['Safaricom', 'KCB Bank', 'Mastercard', 'Coca-Cola'],
    heroStats: [
      ['500', '+', 'Activations'],
      ['5', 'M+', 'Interactions'],
      ['15', '+', 'Years'],
      ['95', '%', 'Success Rate'],
    ],
    floatCards: [
      { label: 'Live Campaign ROI', value: '4.8x', change: '↑ 23% above target', bars: [55, 70, 45, 85, 65, 95, 72, 100] },
      { label: 'Audience Reached', value: '84.2K', change: '↑ This campaign' },
    ],
  },
  kcbBank: {
    label: 'KCB Bank',
    bgImage: 'images/KCB-Puts-KShs-150M-into-2023-WRC-Safari-Rally-scaled.jpg',
    bgAlt: 'KCB Safari Rally campaign background',
    heroTag: 'KCB Bank · WRC Safari Rally Dual Experience',
    tickerItems: [
      'KCB Den · VIP Hospitality',
      'Mass market rally activation',
      'Live analytics on the ground',
      '98% partner satisfaction',
    ],
    eventBadge: {
      label: 'Live Activation',
      title: 'KCB Safari Rally',
      sub: 'VIP lounge + mass engagement zones · Nairobi & Naivasha',
    },
    trustLogos: ['Mastercard', 'Africa Re', 'Safaricom', 'Oppo'],
    heroStats: [
      ['520', '+', 'Activations'],
      ['6', 'M+', 'Interactions'],
      ['12', '+', 'Years'],
      ['98', '%', 'Success Rate'],
    ],
    floatCards: [
      { label: 'Live Campaign ROI', value: '5.2x', change: '↑ 31% above target', bars: [45, 60, 55, 80, 70, 88, 85, 100] },
      { label: 'Audience Reached', value: '101.8K', change: '↑ This campaign' },
    ],
  },
  mastercard: {
    label: 'Mastercard',
    bgImage: 'images/Hero.png',
    bgAlt: 'Mastercard campaign background',
    heroTag: 'Mastercard · Priceless Landmark',
    tickerItems: [
      'Mastercard Priceless Landmark',
      'High-visibility urban activation',
      'Social-native campaign energy',
      '30+ days of momentum',
    ],
    eventBadge: {
      label: 'Featured Campaign',
      title: 'Mastercard Landmark Experience',
      sub: 'High-traffic activation in Nairobi CBD',
    },
    trustLogos: ['Safaricom', 'KCB Bank', 'Coca-Cola', 'Sprite'],
    heroStats: [
      ['480', '+', 'Activations'],
      ['4.2', 'M+', 'Interactions'],
      ['15', '+', 'Years'],
      ['95', '%', 'Success Rate'],
    ],
    floatCards: [
      { label: 'Live Campaign ROI', value: '4.6x', change: '↑ 19% above target', bars: [50, 65, 48, 78, 68, 90, 76, 100] },
      { label: 'Audience Reached', value: '78.4K', change: '↑ This campaign' },
    ],
  },
}

const Hero = ({ openModal }) => {
  const brandKeys = Object.keys(heroBrands)
  const [activeBrand, setActiveBrand] = useState(brandKeys[0])
  const current = heroBrands[activeBrand]
  const doubledTicker = [...current.tickerItems, ...current.tickerItems]
  
  // Auto-cycle through brands every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBrand(prev => {
        const currentIdx = brandKeys.indexOf(prev)
        const nextIdx = (currentIdx + 1) % brandKeys.length
        return brandKeys[nextIdx]
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [brandKeys])
  
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

  return (
    <section className="hero" id="home">
      <div className="hero-bg-img"><img src={current.bgImage} alt={current.bgAlt} aria-hidden="true" /></div>
      <div className="hero-overlay-l" />
      <div className="hero-overlay-glow" />
      <div className="hero-grid-tex" />
      <div className="hero-accent-bar" />
      <div className="hero-ticker">
        <div className="hero-ticker-inner">
          {doubledTicker.map((item, i) => <div key={i} className="hero-ticker-item">{item}</div>)}
        </div>
      </div>
      <div className="container">
        <motion.div className="hero-inner" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="hero-tag" variants={itemVariants}><span className="dot" />{current.heroTag}</motion.div>
          <motion.div className="hero-brand-switcher" style={{ display: 'none' }} variants={itemVariants}>
            {brandKeys.map(key => (
              <button
                key={key}
                type="button"
                className={`hero-brand-pill${activeBrand === key ? ' active' : ''}`}
                onClick={() => setActiveBrand(key)}
              >
                {heroBrands[key].label}
              </button>
            ))}
          </motion.div>
          <motion.h1 className="hero-h1" variants={itemVariants}>We Turn<br /><span className="accent">Brands</span> Into<br /><span className="stroke">Experiences</span></motion.h1>
          <motion.div className="hero-value-prop" variants={itemVariants}>
            <span>For Fortune 500s &amp; High-Growth Brands</span>
            <span className="hero-value-sep" />
            <span>Measurable ROI, Every Campaign</span>
            <span className="hero-value-sep" />
            <span>East Africa's #1 BTL Partner</span>
          </motion.div>
          <motion.div className="hero-divider" variants={itemVariants} />
          <motion.p className="hero-sub" variants={itemVariants}>We engineer high-impact activations that convert boardroom strategy into measurable market results — using data intelligence, real-time analytics, and precision field execution at scale.</motion.p>
          <motion.div className="hero-ctas" variants={itemVariants}>
            <button onClick={() => openModal('Book A Strategy Session')} className="btn-primary" style={{ padding: '16px 36px', fontSize: '14px' }}>Book Strategy Session <I.Arrow /></button>
            <a href="#cases" className="btn-outline-white" style={{ padding: '15px 28px' }}>View Case Studies</a>
          </motion.div>
          <motion.div className="hero-reassure" variants={itemVariants}>
            {[[<I.Shield />, 'ISO-compliant execution'], [<I.Clock />, 'Response under 4 hours'], [<I.Star />, 'Trusted by top brands in East Africa']].map(([icon, txt], i) => (
              <div key={i} className="hero-reassure-item">
                <span style={{ color: 'rgba(232,113,26,0.9)', display: 'flex' }}>{icon}</span>
                <span>{txt}</span>
              </div>
            ))}
          </motion.div>
          <motion.div className="hero-trust" variants={itemVariants}>
            <span className="hero-trust-label">Trusted by</span>
            <div className="hero-trust-logos">
              {current.trustLogos.map(b => <span key={b} className="hero-trust-logo">{b}</span>)}
            </div>
          </motion.div>
          <motion.div className="hero-stats" variants={itemVariants}>
            {current.heroStats.map(([n, s, l]) => (
              <div key={l} className="hero-stat">
                <div className="hero-stat-num">{n}<span className="s-accent">{s}</span></div>
                <div className="hero-stat-label">{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="hero-event-badge" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
        <div className="heb-label">{current.eventBadge.label}</div>
        <div className="heb-title">{current.eventBadge.title}</div>
        <div className="heb-sub">{current.eventBadge.sub}</div>
      </motion.div>
      <motion.div className="hero-float-card hero-float-card-1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <div className="fc-label">{current.floatCards[0].label}</div>
        <div className="fc-val">{current.floatCards[0].value}</div>
        <div className="fc-change">{current.floatCards[0].change}</div>
        <div className="fc-bar">
          {current.floatCards[0].bars.map((h, i) => (
            <div key={i} className={`fc-b${i === current.floatCards[0].bars.length - 1 ? ' active' : ''}`} style={{ height: `${h * 0.28}px` }} />
          ))}
        </div>
      </motion.div>
      <motion.div className="hero-float-card hero-float-card-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
        <div className="fc-label">{current.floatCards[1].label}</div>
        <div className="fc-val">{current.floatCards[1].value}</div>
        <div className="fc-change">{current.floatCards[1].change}</div>
      </motion.div>
      <motion.div className="hero-scroll" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}><span>Scroll</span><div className="hero-scroll-line" /></motion.div>
    </section>
  )
}

export default Hero
