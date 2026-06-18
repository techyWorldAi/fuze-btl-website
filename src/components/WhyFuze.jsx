import React from 'react'

function WhyFuze() {
  const values = [
    { t: 'Impact First', d: "Every campaign must drive engagement, conversion, or insight. If it doesn't move the needle, it doesn't make the cut." },
    { t: 'Build To Experience', d: "We don't just design ideas — we bring them to life. Strong emphasis on fabrication and execution." },
    { t: 'Seamless Execution', d: 'Great ideas mean nothing without flawless delivery. Precision in logistics. Zero room for sloppy execution.' },
    { t: 'Human Connection', d: 'People are at the center of everything we create. Experiences must feel real, not forced.' },
    { t: 'Integrated Thinking', d: 'We connect OOH + BTL + Digital channels to create stronger, unified impact.' },
    { t: 'Bold Creativity', d: "Safe doesn't get noticed. We push ideas that stand out and create moments people talk about." },
  ]

  return (
    <section className="about-section" id="about-why">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-stack">
            <div className="about-img-main"><img src="images/MNO_7112.JPG" alt="Brand activation event" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '8px' }} /></div>
            <div className="about-img-accent" style={{ height: '220px', width: '220px' }}><img src="images/Hero.png" alt="Brand activation" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '8px' }} /></div>
            <div className="about-orange-bar" />
          </div>
          <div className="about-content">
            <p className="eyebrow">Who We Are</p>
            <h2 className="section-title">A Brand Experience Division Built For One Thing: <span className="accent">Results.</span></h2>
            <p style={{ marginTop: '20px' }}>We engineer high-impact activations by combining data intelligence, real-time analytics, and precision-led field execution. Every move is deliberate. Every deployment is measured. Every outcome is optimized.</p>
            <p>We don't rely on assumptions or outdated playbooks. We operate on live insights — identifying where your audience is, engaging them with intent, and continuously refining performance in motion.</p>
            <div className="value-cards">{values.map(item => <div key={item.t} className="value-card"><div className="vc-title">{item.t}</div><div className="vc-desc">{item.d}</div></div>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyFuze
