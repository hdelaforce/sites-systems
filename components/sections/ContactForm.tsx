'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { contactSchema, type ContactFormData } from '@/lib/schemas'
import { GlassCard } from '@/components/ui/GlassCard'
import { Pill } from '@/components/ui/Pill'
import { RevealText } from '@/components/motion/RevealText'
import { timing } from '@/lib/motion'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: ContactFormData) => {
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setState('success')
      reset()
    } catch {
      setState('error')
    }
  }

  const inputClass =
    'w-full bg-transparent border border-[rgba(13,13,16,0.2)] rounded-lg px-4 py-3 font-sans text-[14px] text-[#0D0D10] placeholder:text-[rgba(0,0,0,0.4)] focus:outline-none focus:border-[#0D0D10] transition-colors min-h-[44px]'

  const labelClass =
    'block font-mono text-[10px] tracking-[3px] uppercase text-[rgba(0,0,0,0.55)] mb-2'

  const errorClass = 'font-sans text-[11px] text-red-600 mt-1'

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 gradient-mesh"
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
          <AnimatePresence mode="wait">
            {state === 'success' ? (
              <motion.div
                key="success"
                id="contact-success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: timing.standard }}
                className="text-center py-8"
                role="status"
                aria-live="polite"
              >
                <p className="font-mono text-xl font-bold text-[#0D0D10] mb-2">✓</p>
                <p className="font-sans text-[14px] text-[#0D0D10] mb-1">
                  We&apos;ll be in touch soon.
                </p>
                <p className="font-sans text-[12px] text-[rgba(0,0,0,0.55)]">
                  Usually within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
                aria-label="Contact form"
                noValidate
              >
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    className={inputClass}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p id="name-error" className={errorClass} role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    className={inputClass}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p id="email-error" className={errorClass} role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Tell us about your business <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="What do you do? What does your ideal website look like?"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    className={`${inputClass} resize-none`}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p id="message-error" className={errorClass} role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {state === 'error' && (
                  <p className={errorClass} role="alert">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <Pill
                  id="contact-submit"
                  onClick={handleSubmit(onSubmit)}
                  className="self-start"
                >
                  {state === 'loading' ? 'Sending…' : 'Send message'}
                </Pill>
              </motion.form>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </section>
  )
}
