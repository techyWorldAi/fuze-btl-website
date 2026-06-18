import React from 'react'
import { I } from './Icons'

function ImgPlaceholder({ height = 240, label = 'Add Image', hint = 'Click to upload', spec = '' }) {
  return (
    <div className="img-placeholder" style={{ height, width: '100%' }}>
      <I.Upload />
      <span style={{ fontWeight: 600, fontSize: '12px', color: 'var(--dark)' }}>{label}</span>
      {spec && <span style={{ fontSize: '11px', color: 'var(--orange)', fontWeight: 700, letterSpacing: '0.5px', background: 'rgba(232,113,26,0.08)', padding: '3px 8px', borderRadius: '2px' }}>{spec}</span>}
      <span className="upload-hint">{hint}</span>
    </div>
  )
}

export default ImgPlaceholder
