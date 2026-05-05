'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { wordReveal, staggerContainer } from '@/lib/motion'

export function RevealText({
  children,
  as: Tag = 'p',
  className = '',
}: {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const words = children.split(' ')

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      aria-label={children}
    >
      <Tag className={`flex flex-wrap gap-x-[0.3em] overflow-hidden ${className}`}>
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span variants={wordReveal} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  )
}
