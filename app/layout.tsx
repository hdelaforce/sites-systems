import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { ScrollProvider } from '@/components/motion/ScrollProvider'
import { Cursor } from '@/components/motion/Cursor'
import { GradientCanvas } from '@/components/motion/GradientCanvas'

const cabinetGrotesk = localFont({
  src: '../public/fonts/CabinetGrotesk-Black.woff2',
  variable: '--font-cabinet',
  weight: '900',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sites.systems'),
  title: {
    default: 'Sites Systems — Web Design Brisbane',
    template: '%s — Sites Systems',
  },
  description:
    'Custom websites for Brisbane small business. No templates, no lock-ins. Book a discovery call.',
  keywords: [
    'website design Brisbane',
    'web design small business Brisbane',
    'Brisbane web agency',
    'custom website Brisbane',
    'AI automation Brisbane',
  ],
  authors: [{ name: 'Sites Systems', url: 'https://sites.systems' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://sites.systems',
    siteName: 'Sites Systems',
    title: 'Sites Systems — Web Design Brisbane',
    description:
      'Custom websites for Brisbane small business. No templates, no lock-ins. Book a discovery call.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sites Systems — Web Design Brisbane',
    description:
      'Custom websites for Brisbane small business. No templates, no lock-ins. Book a discovery call.',
  },
  other: {
    'geo.region': 'AU-QLD',
    'geo.placename': 'Brisbane',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-AU"
      className={`${cabinetGrotesk.variable} ${spaceMono.variable} ${inter.variable}`}
    >
      <body>
        <GradientCanvas />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollProvider>
          <Cursor />
          {children}
        </ScrollProvider>
      </body>
    </html>
  )
}
