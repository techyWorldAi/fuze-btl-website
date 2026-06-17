import React from 'react'
import { FuzeLogo } from './Icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <FuzeLogo height={32} light={true} />
            <p>Africa's leading BTL activation and brand experience division. We engineer brand experiences that convert awareness into measurable business results.</p>
            <div className="footer-social">{[['LI', '#'], ['IG', '#'], ['FB', '#'], ['X', '#']].map(([l, h]) => <a key={l} href={h}>{l}</a>)}</div>
          </div>
          <div className="footer-col"><h4>Company</h4><ul className="footer-links">{['About FUZE', 'Our Team', 'Careers', 'Firmbridge Group', 'Contact'].map(l => <li key={l}><a href="/about">{l}</a></li>)}</ul></div>
          <div className="footer-col"><h4>Solutions</h4><ul className="footer-links">{['Brand Activations', 'Field Marketing', 'Product Launches', 'Retail Activations', 'OOH + BTL', 'Campaign Analytics'].map(l => <li key={l}><a href="/solutions">{l}</a></li>)}</ul></div>
          <div className="footer-col"><h4>Resources</h4><ul className="footer-links">{['Case Studies', 'BTL Division Profile', 'Execution Model', 'Partner Program', 'Campaign Brief Template', 'Request Proposal'].map(l => <li key={l}><a href="#">{l}</a></li>)}</ul></div>
        </div>
        <div className="footer-bottom">
          <p>{new Date().getFullYear()} FUZE BTL Division — A Firmbridge Advertising Company. All rights reserved.</p>
          <div className="footer-bottom-links"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
