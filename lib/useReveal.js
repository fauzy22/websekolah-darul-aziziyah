import { useEffect, useRef, useState } from "react"

// Hook: element masuk viewport → reveal (fade-up + slide)
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.15, ...options }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, shown]
}
