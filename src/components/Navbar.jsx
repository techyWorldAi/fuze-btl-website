import React, { useEffect, useState } from 'react'
import { I } from './Icons'
import FuzeLogoPng from '../../images/Fuze Logo png.png'

function Navbar({ openModal }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    ['Home', '#home'],
    ['Solutions', '#solutions'],
    ['Gallery', '#gallery'],
    ['Industries', '#industries'],
    ['Case Studies', '#cases'],
    ['About', '#about'],
    ['Contact', '#contact'],
  ]

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <a href="#home" className="logo"><img src={FuzeLogoPng} alt="FUZE logo" style={{ height: '34px', width: 'auto' }} /></a>
            <ul className="nav-links">{links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
            <button onClick={() => openModal('Book a Consultation')} className="btn-primary" style={{ fontSize: '12px', padding: '10px 20px' }}>Book a Consultation</button>
            <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}><I.Menu /></button>
          </div>
        </div>
      </nav>
      <div className={`drawer-overlay${open ? ' open' : ''}`} onClick={close} />
      <div className={`drawer${open ? ' open' : ''}`} role="dialog" aria-modal="true">
        <div className="drawer-head">
          <img src={FuzeLogoPng} alt="FUZE logo" style={{ height: '28px', width: 'auto' }} />
          <button className="drawer-close" onClick={close} aria-label="Close menu"><I.Close /></button>
        </div>
        <ul className="drawer-nav">
          {links.map(([label, href]) => (
            <li key={label}><a href={href} onClick={close}>{label}<I.Arrow /></a></li>
          ))}
        </ul>
        <div className="drawer-footer">
          <button onClick={() => { close(); openModal('Book a Consultation') }} className="btn-primary">Book a Consultation <I.Arrow /></button>
          <div className="drawer-contact">Call us: <a href="tel:+254700000000">+254 700 000 000</a></div>
        </div>
      </div>
    </>
  )
}

export default Navbar
