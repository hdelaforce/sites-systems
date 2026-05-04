'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RevealText } from '@/components/motion/RevealText'
import { staggerContainer, scaleIn } from '@/lib/motion'

const REASONS = [
  {
    anchor: '100%',
    label: 'Local',
    body: "We're in Brisbane. You can call us. We know your market.",
  },
  {
    anchor: '0%',
    label: 'Templates',
    body: 'Every site built from scratch. No Wix. No Squarespace. No templates.',
  },
  {
    anchor: 'You',
    label: 'Own Everything',
    body: 'You own your code, your domain, your data. Always.',
  },
  {
    anchor: 'Long-term',
    label: 'Partnership',
    body: "We're not here for the launch. We're here for the growth after it.",
  },
]

export function WhySitesSystems() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      ref={ref}
      id="why"
      className="py-24 md:py-32 px-6 md:px-12"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-4">
          Why Us
        </p>
        <h2
          id="why-heading"
          className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#0D0D10] mb-16"
        >
          <RevealText>Not just another web studio.</RevealText>
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {REASONS.map((r) => (
            <motion.div
              key={r.label}
              variants={scaleIn}
              className="glass-panel p-8 flex flex-col gap-3"
            >
              <p className="font-sans text-[42px] font-extrabold tracking-tight leading-none text-[#0D0D10]">
                {r.anchor}
              </p>
              <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)]">
                {r.label}
              </p>
              <p className="font-sans text-[14px] leading-[1.7] text-[rgba(0,0,0,0.55)]">
                {r.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
