import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GlassCard } from '@/components/ui/GlassCard'

export const metadata: Metadata = {
  title: 'La Pola Cafe Brisbane — Cafe Website Design Case Study',
  description:
    'How we designed and built a fast, custom website for La Pola Cafe Brisbane — sub-second loads, integrated bookings, and first-page Google in 3 weeks. See the full results.',
  openGraph: {
    title: 'La Pola Cafe Brisbane — Cafe Website Design Case Study',
    description:
      'How we designed and built a fast, custom website for La Pola Cafe Brisbane — sub-second loads, integrated bookings, and first-page Google in 3 weeks. See the full results.',
    url: 'https://sites.systems/work/la-pola-cafe',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'La Pola Cafe — Web Design Case Study',
  description:
    'Custom website build for a Brisbane cafe. Sub-second loads, integrated bookings, first-page Google in 3 weeks.',
  author: { '@type': 'Organization', name: 'Sites Systems', url: 'https://sites.systems' },
  publisher: { '@type': 'Organization', name: 'Sites Systems', url: 'https://sites.systems' },
  about: {
    '@type': 'LocalBusiness',
    name: 'La Pola Cafe',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
  },
}

export default function LaPolaCafePage() {
  return (
    <main id="main-content" className="gradient-mesh min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="px-6 md:px-12 pt-8 pb-4">
        <Link
          href="/"
          className="font-mono text-[10px] tracking-[3px] uppercase text-[rgba(0,0,0,0.55)] hover:text-[#0D0D10] transition-colors"
        >
          ← Sites Systems
        </Link>
      </nav>

      <article className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
        <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-4">
          Case Study
        </p>
        <h1 className="font-mono text-3xl md:text-5xl font-bold text-[#0D0D10] mb-8 leading-tight">
          La Pola Cafe
        </h1>

        <GlassCard className="overflow-hidden mb-12">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/la-pola-preview.jpg"
              alt="La Pola Cafe website"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-2">
              The Brief
            </p>
            <p className="font-mono text-[13px] leading-[1.75] text-[rgba(0,0,0,0.55)]">
              A Brisbane cafe needing a fast, beautiful site that could handle bookings, showcase their
              menu, and perform on Google — without a monthly platform bill.
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-2">
              What We Built
            </p>
            <p className="font-mono text-[13px] leading-[1.75] text-[rgba(0,0,0,0.55)]">
              A custom static site with a warm, editorial aesthetic. Cloudflare-hosted. Sub-second
              loads. Integrated booking flow. Fully owned by the client.
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-2">
              Outcome
            </p>
            <p className="font-mono text-[13px] leading-[1.75] text-[rgba(0,0,0,0.55)]">
              First page Google for &ldquo;La Pola Cafe Brisbane&rdquo; within 3 weeks. 40% increase
              in booking enquiries in the first month.
            </p>
          </div>
        </div>

        <a
          href="https://lapolacafe.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-[2px] uppercase text-[#0D0D10] border-b border-[rgba(13,13,16,0.3)] hover:border-[#0D0D10] pb-0.5 transition-colors"
        >
          Visit live site ↗
        </a>
      </article>
    </main>
  )
}
