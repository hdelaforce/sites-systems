import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { Process } from '@/components/sections/Process'
import { AiAutomation } from '@/components/sections/AiAutomation'
import { WhySitesSystems } from '@/components/sections/WhySitesSystems'
import { Showcase } from '@/components/sections/Showcase'
import { ContactForm } from '@/components/sections/ContactForm'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TrustStrip />
      <WhatWeDo />
      <Process />
      <AiAutomation />
      <WhySitesSystems />
      <Showcase />
      <ContactForm />
      <Footer />
    </main>
  )
}
