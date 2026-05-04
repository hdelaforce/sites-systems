---
name: Font overhaul and middle-section finalisation
description: Switch body/heading font from Space Mono to Inter; redesign WhySitesSystems and AiAutomation sections; remove footer placeholder
type: project
---

# Font Overhaul & Middle-Section Finalisation

## Goal

The site currently uses Space Mono for everything — headings, body text, inputs, cards. This makes reading feel like a terminal and the middle sections feel dry and unfinished. This spec defines the font change and two section redesigns needed to ship the page.

---

## 1. Typography

### What changes

Add **Inter** via `next/font/google` in `app/layout.tsx` alongside the existing Cabinet Grotesk and Space Mono.

- All `h2` and `h3` headings across every section → Inter, 700–800 weight, negative letter-spacing (`-0.02em` to `-0.03em`)
- All body paragraphs and card copy → Inter, 400–500 weight
- All form inputs and labels → Inter
- All `font-mono` class usage on prose/headings → replaced with `font-sans` (Inter)

### What stays Space Mono

Space Mono is kept exactly where it provides accent/technical texture:
- Nav labels ("Sites Systems", "Work", "Process")
- Section eyebrows ("What We Do", "Why Us", "AI Automation", etc.)
- Numbered labels ("01", "02", "03", "04")
- Pill/CTA button text ("Book a discovery call", "Start a project")
- Footer metadata (email, location, copyright)
- Marquee items in TrustStrip

### CSS/Tailwind token changes

In `globals.css`, the `@theme` block:
- `--font-sans` added, pointing to `var(--font-inter)`
- `body` font-family updated to `var(--font-inter)`

In `layout.tsx`:
- Import `Inter` from `next/font/google` with subsets `['latin']`, weights `['400','500','600','700','800']`, variable `--font-inter`
- Add `interFont.variable` to the `<html>` className

---

## 2. WhySitesSystems — Glass Stat Cards

### Current state

Four plain text blocks separated by a `border-t` divider. No visual weight. Feels like a placeholder.

### New design

Replace the `grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12` div with a **2×2 grid of `glass-panel` cards**, matching the existing glass language from WhatWeDo and AiAutomation.

Each card:
- **Bold anchor value** — large Inter font (40–48px, weight 800, `tracking-tight`): `100%`, `0%`, `You`, `Long-term`
- **Space Mono label** below anchor — 8px, tracking 4px, uppercase
- **Inter body line** — 13px, muted, same copy as current

Card data:
| Anchor | Label | Body |
|--------|-------|------|
| `100%` | `Local` | We're in Brisbane. You can call us. We know your market. |
| `0%` | `Templates` | Every site built from scratch. No Wix. No Squarespace. |
| `You` | `Own Everything` | Your code, your domain, your data. Always. |
| `Long-term` | `Partnership` | We're not here for the launch. We're here for the growth after it. |

Grid: `grid-cols-1 sm:grid-cols-2 gap-6`

---

## 3. AiAutomation — Asymmetric Split Layout

### Current state

2×2 grid of `GlassCard` components — identical layout to WhatWeDo. The two sections blur together.

### New design

Remove the uniform grid. Replace with a **two-column asymmetric layout** (on desktop):

**Left column** (roughly 40% width):
- Section eyebrow ("AI Automation") — Space Mono
- Large Inter headline (`text-4xl md:text-5xl font-extrabold tracking-tight`): "Your website works while you sleep."
- Short Inter subline: "AI-powered workflows built in from day one. Not bolt-ons. Built in."
- `MagneticButton` + `Pill` CTA: "Ask us what we can automate"

**Right column** (roughly 60% width):
- 4 compact stacked `glass-panel` items (not 2×2 grid), each with:
  - Inter title, 14px, bold
  - Inter body, 13px, muted
  - Generous internal padding (`p-5`), small gap between items (`gap-3`)

Mobile: stack left col above right col, full width.

---

## 4. Footer Cleanup

Remove the `<span>` containing `ABN: TBD` — it's a visible placeholder. No replacement needed until the ABN is registered.

---

## 5. Out of Scope

- Hero, TrustStrip, WhatWeDo, Process, Showcase, ContactForm — no changes
- Color palette, spacing tokens, animation — no changes
- New pages or routes — no changes
