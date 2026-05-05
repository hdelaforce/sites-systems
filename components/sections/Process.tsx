'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { RevealText } from '@/components/motion/RevealText'

const STEPS = [
  {
    num: '01',
    title: 'Listen',
    body: 'We start by understanding your business, your customers, and your goals. No assumptions.',
  },
  {
    num: '02',
    title: 'Design',
    body: "A custom design direction — presented for your approval before a single line of code is written.",
  },
  {
    num: '03',
    title: 'Build',
    body: "Fast, accessible, SEO-ready code. Regular check-ins so you're never in the dark.",
  },
  {
    num: '04',
    title: 'Launch',
    body: 'We handle the deployment, domain, and handover. Then we stick around.',
  },
]

function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const cardWidth = 420
  const cardGap = 24
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0px', `-${(STEPS.length - 1) * (cardWidth + cardGap)}px`]
  )

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${STEPS.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div className="flex gap-6" style={{ x }}>
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="glass-panel p-12 flex-shrink-0"
              style={{ width: 'min(420px, 80vw)' }}
            >
              <span className="font-mono text-[9px] tracking-[4px] text-[rgba(0,0,0,0.55)] block mb-4">
                {step.num}
              </span>
              <h3 className="font-sans text-3xl font-bold tracking-tight text-[#0D0D10] mb-4">{step.title}</h3>
              <p className="font-sans text-[14px] leading-[1.75] text-[rgba(0,0,0,0.55)]">
                {step.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export function Process() {
  return (
    <section id="process" className="py-24 md:py-0" aria-labelledby="process-heading">
      <div className="py-24 md:py-32 px-6 md:px-12">
        <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-4">
          How It Works
        </p>
        <h2 id="process-heading" className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#0D0D10] mb-6">
          <RevealText>From idea to live site.</RevealText>
        </h2>
        <p className="font-sans text-[14px] leading-[1.75] text-[rgba(0,0,0,0.55)] max-w-[420px] mb-16">
          Four steps. One team. No handoffs, no surprises — just a clear path from brief to browser.
        </p>
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden px-6 pb-24 flex flex-col gap-8">
        {STEPS.map((step) => (
          <div key={step.num} className="glass-panel p-8">
            <span className="font-mono text-[9px] tracking-[4px] text-[rgba(0,0,0,0.55)] block mb-3">
              {step.num}
            </span>
            <h3 className="font-sans text-xl font-bold tracking-tight text-[#0D0D10] mb-3">{step.title}</h3>
            <p className="font-sans text-[13px] leading-[1.75] text-[rgba(0,0,0,0.55)]">
              {step.body}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal scroll-pin */}
      <div className="hidden md:block px-12">
        <HorizontalScroll />
      </div>
    </section>
  )
}
