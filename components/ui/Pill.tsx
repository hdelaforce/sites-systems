'use client'

import { motion } from 'framer-motion'
import { timing } from '@/lib/motion'

interface PillProps {
  href?: string
  id?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  className?: string
}

export function Pill({
  href,
  id,
  onClick,
  type,
  children,
  className = '',
}: PillProps) {
  const baseStyle =
    'inline-flex items-center gap-2 bg-[#0D0D10] text-[#F0EDE6] font-mono text-[10px] font-bold tracking-[2px] uppercase px-5 py-3 rounded-full min-h-[44px] transition-colors'

  if (href) {
    return (
      <motion.a
        id={id}
        href={href}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: timing.micro }}
        className={`${baseStyle} ${className}`}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      id={id}
      onClick={onClick}
      type={type}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: timing.micro }}
      className={`${baseStyle} ${className}`}
    >
      {children}
    </motion.button>
  )
}
