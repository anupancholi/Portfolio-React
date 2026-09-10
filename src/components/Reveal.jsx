import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal wrapper. Fades + lifts its children into view once they
 * enter the viewport. Renders a plain wrapper element so the child keeps
 * its own hover transforms (Tailwind's transform utilities would otherwise
 * fight the reveal transform on the same node).
 *
 * <Reveal delay={120} as="li">…</Reveal>
 */
const Reveal = ({
  children,
  delay = 0,
  y = 28,
  as: Tag = 'div',
  className = '',
}) => {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Honour the OS "reduce motion" setting — show immediately, no animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, '--reveal-y': `${y}px` }}
    >
      {children}
    </Tag>
  )
}

export default Reveal
