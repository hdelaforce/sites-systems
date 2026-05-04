const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Sites Systems',
  url: 'https://sites.systems',
  areaServed: {
    '@type': 'City',
    name: 'Brisbane',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brisbane',
    addressRegion: 'QLD',
    addressCountry: 'AU',
  },
  description:
    'Custom websites for Brisbane small business. No templates, no lock-ins.',
}

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-[rgba(13,13,16,0.1)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] tracking-[3px] uppercase text-[#0D0D10] mb-1">
            Sites Systems
          </p>
          <p className="font-mono text-[10px] tracking-[2px] text-[rgba(0,0,0,0.55)]">
            Brisbane, QLD, Australia
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <a
            href="mailto:hello@sites.systems"
            className="font-mono text-[10px] tracking-[2px] text-[rgba(0,0,0,0.55)] hover:text-[#0D0D10] transition-colors"
          >
            hello@sites.systems
          </a>
        </div>
        <p className="font-mono text-[9px] tracking-[2px] uppercase text-[rgba(0,0,0,0.55)]">
          © {new Date().getFullYear()} Sites Systems
        </p>
      </div>
    </footer>
  )
}
