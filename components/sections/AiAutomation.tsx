'use client'

import { RevealText } from '@/components/motion/RevealText'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { Pill } from '@/components/ui/Pill'

const AUTOMATIONS = [
  {
    title: 'Smart booking flows',
    body: 'Customers book, reschedule, and get reminders — without you lifting a finger.',
  },
  {
    title: 'Email responders',
    body: 'Instant, intelligent replies to enquiries. Followed up. Converted.',
  },
  {
    title: 'Lead capture',
    body: 'Qualify leads automatically. Only the right people reach your inbox.',
  },
  {
    title: 'CRM integration',
    body: 'Every new contact flows straight into your CRM. No manual data entry.',
  },
]

export function AiAutomation() {
  return (
    <section
      id="automation"
      className="py-24 md:py-32 px-6 md:px-12 gradient-mesh"
      aria-labelledby="automation-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="md:w-[38%] flex-shrink-0">
            <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-4">
              AI Automation
            </p>
            <h2
              id="automation-heading"
              className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#0D0D10] mb-6"
            >
              <RevealText>Your website works while you sleep.</RevealText>
            </h2>
            <p className="font-sans text-[14px] leading-[1.7] text-[rgba(0,0,0,0.55)] mb-8">
              AI-powered workflows built in from day one. Not add-ons. Not bolt-ons. Built in.
            </p>
            <MagneticButton>
              <Pill href="#contact">Ask us what we can automate</Pill>
            </MagneticButton>
          </div>

          <div className="flex-1 flex flex-col gap-3">
            {AUTOMATIONS.map((a) => (
              <div key={a.title} className="glass-panel p-5">
                <h3 className="font-sans text-[15px] font-bold text-[#0D0D10] mb-1">{a.title}</h3>
                <p className="font-sans text-[13px] leading-[1.65] text-[rgba(0,0,0,0.55)]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
