'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export function GradientCanvas() {
  const { scrollYProgress } = useScroll()

  const x = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], ['0%', '-6%', '-10%', '-7%'])
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], ['0%', '6%', '4%', '11%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.06, 1.03])
  const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '10deg'])
  const filter = useTransform(scrollYProgress, [0, 1], ['hue-rotate(0deg)', 'hue-rotate(40deg)'])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <motion.div className="gradient-canvas" style={{ x, y, scale, rotate, filter }} />
    </div>
  )
}
