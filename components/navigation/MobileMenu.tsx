'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { Pill } from '@/components/ui/Pill'
import { fadeUp, timing } from '@/lib/motion'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && isOpen) {
        closeMenu()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: '-100%',
      transition: { duration: timing.fast, ease: timing.ease },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: timing.fast, ease: timing.ease },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: timing.standard, ease: timing.ease },
    },
  }

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#process', label: 'Process' },
  ]

  return (
    <>
      <div className="sticky top-0 z-50 bg-[#EAE8E2]/80 backdrop-blur-md border-b border-[rgba(0,0,0,0.08)]">
        <nav
          className="flex items-center justify-between px-6 py-4 md:px-12"
          aria-label="Main navigation"
        >
          <span className="font-mono text-[10px] tracking-[3px] uppercase text-[rgba(0,0,0,0.55)]">
            Sites Systems
          </span>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="font-mono text-[10px] tracking-[3px] uppercase text-[rgba(0,0,0,0.55)] hover:text-[#0D0D10] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <MagneticButton>
                <Pill href="#contact">Start a project</Pill>
              </MagneticButton>
            </div>

            <motion.button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 bg-transparent border-none cursor-pointer p-0"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="w-6 h-0.5 bg-[#0D0D10] block"
                animate={
                  isOpen
                    ? { rotate: 45, y: 6 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: timing.fast }}
              />
              <motion.span
                className="w-6 h-0.5 bg-[#0D0D10] block"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: timing.fast }}
              />
              <motion.span
                className="w-6 h-0.5 bg-[#0D0D10] block"
                animate={
                  isOpen
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: timing.fast }}
              />
            </motion.button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="fixed inset-0 z-40 bg-[#EAE8E2] md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              <motion.div
                className="flex flex-col items-center gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="font-mono text-[14px] tracking-[3px] uppercase text-[#0D0D10] hover:text-[rgba(0,0,0,0.55)] transition-colors duration-200 min-h-[44px] flex items-center"
                    variants={itemVariants}
                    custom={index}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} custom={navLinks.length}>
                <MagneticButton>
                  <Pill href="#contact" onClick={closeMenu}>
                    Start a project
                  </Pill>
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}
