# Font Overhaul & Middle-Section Finalisation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Switch body text and section headings from Space Mono to Inter, redesign WhySitesSystems with glass stat cards, redesign AiAutomation with an asymmetric split layout, and remove the ABN placeholder from the footer.

**Architecture:** Inter is loaded via `next/font/google` and exposed as CSS variable `--font-inter`; Tailwind's `--font-sans` theme token is overridden to point to it so `font-sans` maps to Inter throughout. Section components are edited in-place — no new files needed.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, Playwright

---

### Task 1: Add Inter font and CSS token

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Import Inter in layout.tsx**

In `app/layout.tsx`, add Inter import alongside the existing imports:

```tsx
import { Inter } from 'next/font/google'
```

Add the font instantiation after the existing `spaceMono` const:

```tsx
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
```

Add `inter.variable` to the `<html>` className:

```tsx
<html
  lang="en-AU"
  className={`${cabinetGrotesk.variable} ${spaceMono.variable} ${inter.variable}`}
>
```

- [ ] **Step 2: Add --font-sans token and update body in globals.css**

In `app/globals.css`, inside the existing `@theme` block add one line:

```css
--font-sans: var(--font-inter), sans-serif;
```

Update the `body` rule's `font-family` line only:

```css
font-family: var(--font-inter), sans-serif;
```

- [ ] **Step 3: Start dev server and verify Inter loads**

```bash
pnpm dev
```

Open http://localhost:3000. Open DevTools → Elements → `<body>` → Computed → font-family. It should show `Inter`. Nav labels and pill buttons should still look monospaced (Space Mono).

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: add Inter font and --font-sans CSS token"
```

---

### Task 2: Write failing tests for section content

**Files:**
- Create: `tests/sections.spec.ts`

- [ ] **Step 1: Write the tests**

Create `tests/sections.spec.ts`:

```ts
import { test, expect } from '@playwright/test'

test.describe('WhySitesSystems section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders glass stat cards with anchor values', async ({ page }) => {
    await expect(page.getByText('100%')).toBeVisible()
    await expect(page.getByText('Own Everything')).toBeVisible()
    await expect(page.getByText('Long-term')).toBeVisible()
  })
})

test.describe('AiAutomation section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders asymmetric split with large headline', async ({ page }) => {
    const headline = page.locator('#automation h2')
    await expect(headline).toBeVisible()
    await expect(headline).toContainText('Your website works while you sleep')
  })

  test('renders all four automation items', async ({ page }) => {
    await expect(page.getByText('Smart booking flows')).toBeVisible()
    await expect(page.getByText('CRM integration')).toBeVisible()
  })
})

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('does not show ABN placeholder', async ({ page }) => {
    await expect(page.getByText('ABN: TBD')).not.toBeVisible()
  })
})
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
pnpm exec playwright test tests/sections.spec.ts --project=chromium
```

Expected: The `WhySitesSystems` test fails — "100%" and "Own Everything" not found in current markup. The `AiAutomation` h2 test may or may not fail. That's fine — these are the targets.

- [ ] **Step 3: Commit the failing tests**

```bash
git add tests/sections.spec.ts
git commit -m "test: add failing tests for section redesigns"
```

---

### Task 3: Swap font classes in Hero, WhatWeDo, Process, Showcase, ContactForm

**Files:**
- Modify: `components/sections/Hero.tsx`
- Modify: `components/sections/WhatWeDo.tsx`
- Modify: `components/sections/Process.tsx`
- Modify: `components/sections/Showcase.tsx`
- Modify: `components/sections/ContactForm.tsx`

Rule: `font-mono` stays on nav labels, section eyebrows, numbered labels (01 02 etc), pill/CTA text, and link text. Everything else — h2, h3, body paragraphs, card copy, inputs, error messages — switches to `font-sans`.

- [ ] **Step 1: Update Hero.tsx**

Change the subtitle paragraph from `font-mono` to `font-sans`:

```tsx
<p className="font-sans text-[13px] leading-[1.75] text-[#0D0D10] max-w-[380px] mb-6">
  <strong>The last agency you&apos;ll ever need.</strong>
  <br />
  No templates. No lock-ins. Just craft.
</p>
```

All other text in Hero (nav labels, `font-mono text-[9px]` location line) stays `font-mono`.

- [ ] **Step 2: Update WhatWeDo.tsx**

Change the h2:

```tsx
<h2
  id="what-we-do-heading"
  className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#0D0D10] mb-16"
>
  <RevealText>Four ways we grow Brisbane businesses.</RevealText>
</h2>
```

Change h3 inside each card:

```tsx
<h3 className="font-sans text-lg font-bold tracking-tight text-[#0D0D10]">{s.title}</h3>
```

Change body paragraph inside each card:

```tsx
<p className="font-sans text-[13px] leading-[1.75] text-[rgba(0,0,0,0.55)]">
  {s.body}
</p>
```

The number span (`font-mono text-[9px] tracking-[4px]`) and anchor link (`font-mono text-[10px] tracking-[2px]`) stay unchanged.

- [ ] **Step 3: Update Process.tsx**

Change the section h2:

```tsx
<h2 id="process-heading" className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#0D0D10] mb-16">
  <RevealText>From idea to live site.</RevealText>
</h2>
```

In the desktop `HorizontalScroll` component, change h3 and body:

```tsx
<h3 className="font-sans text-3xl font-bold tracking-tight text-[#0D0D10] mb-4">{step.title}</h3>
<p className="font-sans text-[14px] leading-[1.75] text-[rgba(0,0,0,0.55)]">
  {step.body}
</p>
```

In the mobile stack, change h3 and body:

```tsx
<h3 className="font-sans text-xl font-bold tracking-tight text-[#0D0D10] mb-3">{step.title}</h3>
<p className="font-sans text-[13px] leading-[1.75] text-[rgba(0,0,0,0.55)]">
  {step.body}
</p>
```

Step number spans (`font-mono`) stay unchanged.

- [ ] **Step 4: Update Showcase.tsx**

Change the h2:

```tsx
<h2 id="showcase-heading" className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#0D0D10] mb-16">
  <RevealText>What we build.</RevealText>
</h2>
```

Change the client name value:

```tsx
<p className="font-sans text-[14px] font-medium text-[#0D0D10]">La Pola Cafe</p>
```

Change the brief body:

```tsx
<p className="font-sans text-[13px] leading-[1.75] text-[rgba(0,0,0,0.55)]">
  A Brisbane cafe needing a fast, beautiful site that could handle bookings and showcase their menu — without a monthly Squarespace bill.
</p>
```

The "Client" / "Brief" eyebrow labels and the `→` / `↗` link text stay `font-mono`.

- [ ] **Step 5: Update ContactForm.tsx**

Change the h2:

```tsx
<h2 id="contact-heading" className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#0D0D10] mb-12">
  <RevealText>{"Let's build something Brisbane will notice."}</RevealText>
</h2>
```

Change `inputClass` constant:

```tsx
const inputClass =
  'w-full bg-transparent border border-[rgba(13,13,16,0.2)] rounded-lg px-4 py-3 font-sans text-[14px] text-[#0D0D10] placeholder:text-[rgba(0,0,0,0.4)] focus:outline-none focus:border-[#0D0D10] transition-colors min-h-[44px]'
```

Change `errorClass` constant:

```tsx
const errorClass = 'font-sans text-[11px] text-red-600 mt-1'
```

Change the success state messages:

```tsx
<p className="font-sans text-[14px] text-[#0D0D10] mb-1">
  We&apos;ll be in touch soon.
</p>
<p className="font-sans text-[12px] text-[rgba(0,0,0,0.55)]">
  Usually within 24 hours.
</p>
```

`labelClass` stays `font-mono` — it's an uppercase form label, which should keep the accent look.

- [ ] **Step 6: Check in browser**

With dev server still running, scroll through the full page. Section headings and body text should now render in Inter (clean, readable sans-serif). Eyebrows, numbers, nav labels, and pill buttons should still be Space Mono (monospaced).

- [ ] **Step 7: Commit**

```bash
git add components/sections/Hero.tsx components/sections/WhatWeDo.tsx components/sections/Process.tsx components/sections/Showcase.tsx components/sections/ContactForm.tsx
git commit -m "feat: swap font-mono to font-sans on headings and body text"
```

---

### Task 4: Redesign WhySitesSystems

**Files:**
- Modify: `components/sections/WhySitesSystems.tsx`

- [ ] **Step 1: Replace the component**

Overwrite `components/sections/WhySitesSystems.tsx` with:

```tsx
'use client'

import { RevealText } from '@/components/motion/RevealText'

const REASONS = [
  {
    anchor: '100%',
    label: 'Local',
    body: "We're in Brisbane. You can call us. We know your market.",
  },
  {
    anchor: '0%',
    label: 'Templates',
    body: 'Every site built from scratch. No Wix. No Squarespace. No templates.',
  },
  {
    anchor: 'You',
    label: 'Own Everything',
    body: 'You own your code, your domain, your data. Always.',
  },
  {
    anchor: 'Long-term',
    label: 'Partnership',
    body: "We're not here for the launch. We're here for the growth after it.",
  },
]

export function WhySitesSystems() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-4">
          Why Us
        </p>
        <h2
          id="why-heading"
          className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[#0D0D10] mb-16"
        >
          <RevealText>Not just another web studio.</RevealText>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {REASONS.map((r) => (
            <div key={r.label} className="glass-panel p-8 flex flex-col gap-3">
              <p className="font-sans text-[42px] font-extrabold tracking-tight leading-none text-[#0D0D10]">
                {r.anchor}
              </p>
              <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)]">
                {r.label}
              </p>
              <p className="font-sans text-[14px] leading-[1.7] text-[rgba(0,0,0,0.55)]">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Run the WhySitesSystems test**

```bash
pnpm exec playwright test tests/sections.spec.ts --project=chromium --grep "WhySitesSystems"
```

Expected: PASS — "100%", "Own Everything", and "Long-term" are now visible.

- [ ] **Step 3: Commit**

```bash
git add components/sections/WhySitesSystems.tsx
git commit -m "feat: redesign WhySitesSystems with glass stat cards"
```

---

### Task 5: Redesign AiAutomation

**Files:**
- Modify: `components/sections/AiAutomation.tsx`

- [ ] **Step 1: Replace the component**

Overwrite `components/sections/AiAutomation.tsx` with:

```tsx
'use client'

import { RevealText } from '@/components/motion/RevealText'
import { MagneticButton } from '@/components/motion/MagneticButton'
import { Pill } from '@/components/ui/Pill'

const AUTOMATIONS = [
  {
    title: 'Smart booking flows',
    body: 'Customers book, reschedule, and get reminders — without you lifting a finger.',
  },
  {
    title: 'Email responders',
    body: 'Instant, intelligent replies to enquiries. Followed up. Converted.',
  },
  {
    title: 'Lead capture',
    body: 'Qualify leads automatically. Only the right people reach your inbox.',
  },
  {
    title: 'CRM integration',
    body: 'Every new contact flows straight into your CRM. No manual data entry.',
  },
]

export function AiAutomation() {
  return (
    <section
      id="automation"
      className="py-24 md:py-32 px-6 md:px-12 gradient-mesh"
      aria-labelledby="automation-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <div className="md:w-[38%] flex-shrink-0">
            <p className="font-mono text-[9px] tracking-[4px] uppercase text-[rgba(0,0,0,0.55)] mb-4">
              AI Automation
            </p>
            <h2
              id="automation-heading"
              className="font-sans text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#0D0D10] mb-6"
            >
              <RevealText>Your website works while you sleep.</RevealText>
            </h2>
            <p className="font-sans text-[14px] leading-[1.7] text-[rgba(0,0,0,0.55)] mb-8">
              AI-powered workflows built in from day one. Not add-ons. Not bolt-ons. Built in.
            </p>
            <MagneticButton>
              <Pill href="#contact">Ask us what we can automate</Pill>
            </MagneticButton>
          </div>

          <div className="flex-1 flex flex-col gap-3">
            {AUTOMATIONS.map((a) => (
              <div key={a.title} className="glass-panel p-5">
                <h3 className="font-sans text-[15px] font-bold text-[#0D0D10] mb-1">{a.title}</h3>
                <p className="font-sans text-[13px] leading-[1.65] text-[rgba(0,0,0,0.55)]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Run the AiAutomation tests**

```bash
pnpm exec playwright test tests/sections.spec.ts --project=chromium --grep "AiAutomation"
```

Expected: PASS — big headline visible in `#automation h2`, all four automation item titles visible.

- [ ] **Step 3: Commit**

```bash
git add components/sections/AiAutomation.tsx
git commit -m "feat: redesign AiAutomation with asymmetric split layout"
```

---

### Task 6: Footer cleanup and full test run

**Files:**
- Modify: `components/sections/Footer.tsx`

- [ ] **Step 1: Remove ABN placeholder**

In `components/sections/Footer.tsx`, remove the `<span>ABN: TBD</span>` element. The middle `<div>` should become:

```tsx
<div className="flex flex-col md:flex-row gap-4 md:gap-8">
  <a
    href="mailto:hello@sites.systems"
    className="font-mono text-[10px] tracking-[2px] text-[rgba(0,0,0,0.55)] hover:text-[#0D0D10] transition-colors"
  >
    hello@sites.systems
  </a>
</div>
```

- [ ] **Step 2: Run the full test suite on Chromium**

```bash
pnpm exec playwright test --project=chromium
```

Expected: All tests pass — contact form tests still green, all sections tests green, footer ABN test passes.

- [ ] **Step 3: Run on mobile**

```bash
pnpm exec playwright test --project=mobile
```

Expected: All tests pass.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Footer.tsx
git commit -m "feat: remove ABN placeholder from footer"
```
