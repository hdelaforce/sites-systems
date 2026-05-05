'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export function GradientCanvas() {
  const { scrollYProgress } = useScroll()

  const x = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], ['0%', '-6%', '-10%', '-7%'])
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], ['0%', '6%', '4%', '11%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.06, 1.03])

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
      <motion.div className="gradient-canvas" style={{ x, y, scale }} />
    </div>
  )
}
