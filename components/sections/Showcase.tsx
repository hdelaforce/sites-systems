'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { RevealText } from '@/components/motion/RevealText'

export function Showcase() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" aria-labelledby="showcase-heading">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-4">
          Work
        </p>
        <h2 id="showcase-heading" className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#0D0D10] mb-16">
          <RevealText>What we build.</RevealText>
        </h2>

        <motion.div layoutId="la-pola-card" className="glass-panel overflow-hidden">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/la-pola-preview.jpg"
              alt="La Pola Cafe website — built by Sites Systems"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-2">
                Client
              </p>
              <p className="font-sans text-[14px] font-medium text-[#0D0D10]">La Pola Cafe</p>
            </div>
            <div className="md:col-span-2">
              <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-2">
                Brief
              </p>
              <p className="font-sans text-[13px] leading-[1.75] text-[rgba(0,0,0,0.55)]">
                A Brisbane cafe needing a fast, beautiful site that could handle bookings and showcase their menu — without a monthly Squarespace bill.
              </p>
            </div>
          </div>
          <div className="px-8 md:px-12 pb-8 md:pb-12 flex items-center gap-6">
            <a
              href="/work/la-pola-cafe"
              className="font-mono text-[10px] tracking-[2px] uppercase text-[#0D0D10] border-b border-[rgba(13,13,16,0.3)] hover:border-[#0D0D10] pb-0.5 transition-colors"
            >
              View case study →
            </a>
            <a
              href="https://lapolacafe.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[2px] uppercase text-[rgba(0,0,0,0.55)] hover:text-[#0D0D10] transition-colors"
            >
              Visit live site ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
