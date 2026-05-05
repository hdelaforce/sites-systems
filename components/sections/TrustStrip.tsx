import { Marquee } from '@/components/ui/Marquee'

const ITEMS = [
  'Brisbane-based',
  'Custom-built',
  'No templates',
  'No lock-ins',
  'Craft over volume',
  'Fast delivery',
  'SEO-ready',
]

export function TrustStrip() {
  return (
    <section className="py-6 border-y border-[rgba(13,13,16,0.1)]" aria-label="Trust indicators">
      <Marquee items={ITEMS} />
    </section>
  )
}
