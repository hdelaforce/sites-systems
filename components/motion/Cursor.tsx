'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (cursorRef.current) cursorRef.current.style.display = 'block'

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 8)
      mouseY.set(e.clientY - 8)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        x: springX,
        y: springY,
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: 16,
        height: 16,
        borderRadius: '50%',
        backgroundColor: '#0D0D10',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}
