export const colors = {
  bg: '#EAE8E2',
  fg: '#0D0D10',
  fgMuted: 'rgba(0,0,0,0.55)',
  ctaBg: '#0D0D10',
  ctaText: '#F0EDE6',
  glassBg: 'rgba(255,255,255,0.55)',
  glassBorder: 'rgba(255,255,255,0.85)',
  strokeColor: '#1a1a1a',
  orb1: 'rgba(160,185,155,0.55)',
  orb2: 'rgba(140,175,185,0.45)',
  orb3: 'rgba(210,200,175,0.35)',
} as const

export const spacing = {
  sectionY: 'py-24 md:py-32',
  containerX: 'px-6 md:px-12 lg:px-16',
  maxW: 'max-w-7xl mx-auto',
} as const

export const typography = {
  displaySize: 'clamp(80px, 13vw, 160px)',
  displayStroke: '1.5px #1a1a1a',
  labelTracking: '4px',
  navTracking: '3px',
  pillTracking: '2px',
} as const
