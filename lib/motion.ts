import type { Variants } from 'framer-motion'

export const timing = {
  micro: 0.1,
  fast: 0.2,
  standard: 0.35,
  page: 0.5,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: timing.standard, ease: timing.ease },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

export const wordReveal: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: timing.standard, ease: timing.ease },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: timing.standard, ease: timing.ease },
  },
}
