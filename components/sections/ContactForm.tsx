'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { Pill } from '@/components/ui/Pill'
import { RevealText } from '@/components/motion/RevealText'

export function ContactForm() {
  const inputClass =
    'w-full bg-transparent border border-[rgba(13,13,16,0.2)] rounded-lg px-4 py-3 font-sans text-[14px] text-[#0D0D10] placeholder:text-[rgba(0,0,0,0.4)] focus:outline-none focus:border-[#0D0D10] transition-colors min-h-[44px]'

  const labelClass =
    'block font-mono text-[10px] tracking-[3px] uppercase text-[rgba(0,0,0,0.55)] mb-2'

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-4">
          Get in touch
        </p>
        <h2 id="contact-heading" className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#0D0D10] mb-12">
          <RevealText>{"Let's build something Brisbane will notice."}</RevealText>
        </h2>

        <GlassCard className="p-8 md:p-12">
          <form
            action="https://send.pageclip.co/Ph9Rz1zy6qCJqcwCPhUkRextPgPvtUwt/contact-form"
            className="pageclip-form flex flex-col gap-6"
            method="post"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Tell us about your business <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="What do you do? What does your ideal website look like?"
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            <Pill
              id="contact-submit"
              type="submit"
              className="pageclip-form__submit self-start"
            >
              <span>Send</span>
            </Pill>
          </form>
        </GlassCard>
      </div>
    </section>
  )
}
