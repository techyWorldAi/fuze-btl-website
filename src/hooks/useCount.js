import { useEffect, useState } from 'react'

export default function useCount(target, duration = 1800, active = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = null
    const step = timestamp => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setValue(target)
    }

    requestAnimationFrame(step)
    return () => {}
  }, [active, target, duration])

  return value
}
