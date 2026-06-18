import React from 'react'

function TrustBar() {
  const brands = ['Safaricom', 'Coca-Cola', 'KCB Bank', 'Africa Re', 'Mastercard', 'Sprite', 'Nellions', 'ICEA Lion', 'Wrigleys', 'Oppo', 'Equity Bank', 'Samsung']
  const repeated = [...brands, ...brands]

  return (
    <div className="trust-bar">
      <div className="trust-label">Trusted By Growth-Focused Brands</div>
      <div style={{ overflow: 'hidden' }}>
        <div className="logos-track">
          {repeated.map((brand, index) => <span key={index} className="logo-item">{brand}</span>)}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
