'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RevealText } from '@/components/motion/RevealText'
import { staggerContainer, scaleIn } from '@/lib/motion'

const SERVICES = [
  {
    label: '01',
    title: 'Design',
    body: 'Distinctive, conversion-focused design. Built around your brand — never off a template.',
  },
  {
    label: '02',
    title: 'Build',
    body: 'Fast, accessible, SEO-ready. Custom code that performs on every device.',
  },
  {
    label: '03',
    title: 'Maintain',
    body: 'We stay. Updates, performance monitoring, and improvements — long after launch.',
  },
  {
    label: '04',
    title: 'Automate',
    body: 'AI-powered flows that save your team hours. Bookings, email, lead capture — hands-free.',
    anchor: '#automation',
    anchorLabel: '↓ Learn more',
  },
]

export function WhatWeDo() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section
      ref={ref}
      id="work"
      className="py-24 md:py-32 px-6 md:px-12"
      aria-labelledby="what-we-do-heading"
    >
      <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-4">
        What We Do
      </p>
      <h2
        id="what-we-do-heading"
        className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#0D0D10] mb-16"
      >
        <RevealText>Four ways we grow Brisbane businesses.</RevealText>
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SERVICES.map((s) => (
          <motion.div
            key={s.label}
            variants={scaleIn}
            className="glass-panel p-8 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-200"
          >
            <span className="font-mono text-[9px] tracking-[4px] text-[rgba(0,0,0,0.55)]">
              {s.label}
            </span>
            <h3 className="font-sans text-lg font-bold tracking-tight text-[#0D0D10]">{s.title}</h3>
            <p className="font-sans text-[13px] leading-[1.75] text-[rgba(0,0,0,0.55)]">
              {s.body}
            </p>
            {s.anchor && (
              <a
                href={s.anchor}
                className="font-mono text-[10px] tracking-[2px] uppercase text-[#0D0D10] hover:opacity-60 transition-opacity mt-auto"
              >
                {s.anchorLabel}
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
