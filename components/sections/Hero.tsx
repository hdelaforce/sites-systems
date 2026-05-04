'use client'

import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { Pill } from '@/components/ui/Pill'

const HeroMesh = dynamic(
  () => import('@/components/three/HeroMesh').then((m) => m.HeroMesh),
  { ssr: false }
)

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -180])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between gradient-mesh grain overflow-hidden"
      aria-label="Hero"
    >
      <HeroMesh />

      <nav
        className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-8"
        aria-label="Main navigation"
      >
        <span className="font-mono text-[10px] tracking-[3px] uppercase text-[rgba(0,0,0,0.55)]">
          Sites Systems
        </span>
        <div className="flex items-center gap-8">
          <a
            href="#work"
            className="font-mono text-[10px] tracking-[3px] uppercase text-[rgba(0,0,0,0.55)] hover:text-[#0D0D10] transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#process"
            className="font-mono text-[10px] tracking-[3px] uppercase text-[rgba(0,0,0,0.55)] hover:text-[#0D0D10] transition-colors duration-200"
          >
            Process
          </a>
          <MagneticButton>
            <Pill href="#contact">Start a project</Pill>
          </MagneticButton>
        </div>
      </nav>

      <motion.div
        style={{ y }}
        className="relative z-10 px-6 md:px-12 mt-8 select-none"
        aria-hidden="true"
      >
        <div className="display-outline">SITES</div>
        <div className="display-outline">SYSTEMS</div>
      </motion.div>

      <div className="relative z-10 px-6 md:px-12 pb-16">
        <h1 className="sr-only">
          Sites Systems — Web Design Brisbane. The last agency you&apos;ll ever need.
        </h1>
        <p className="font-sans text-[13px] leading-[1.75] text-[#0D0D10] max-w-[380px] mb-6">
          <strong>The last agency you&apos;ll ever need.</strong>
          <br />
          No templates. No lock-ins. Just craft.
        </p>
        <MagneticButton>
          <Pill href="#contact">Book a discovery call</Pill>
        </MagneticButton>
        <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mt-4">
          Brisbane · Est. 2024
        </p>
      </div>
    </section>
  )
}
