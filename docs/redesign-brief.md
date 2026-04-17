# Marketing Site Redesign Brief — v2

**Owner:** Ankit
**Status:** In flight, scaffolded 2026-04-17
**Scope:** Marketing homepage first (then pricing, solutions, product pages if homepage lands)
**Mechanism:** Parallel `/v2` route. Live site at `/` stays untouched during iteration.

---

## Diagnosis (what's actually stale)

The current marketing site at `enorve.com` has **strong copy** and **weak visual treatment**. This brief is not a content rewrite — it's a visual-system overhaul.

### Keep
- Hero line: **"Your AI says exactly what you'd say. Every time."**
- WITHOUT/WITH refund comparison (already present, doing real work)
- Named patterns: *Protocol Engine, Auto-QA, Proactive Campaigns, Shopify Actions, Generative UI, Customer Memory*
- Voice-y lines like *"Your AI remembers that Sarah prefers email and hates hold music"* and *"The stuff that actually blocks the deal"*
- Dual-CTA pattern (Join Early Access + Watch demo)
- Pre-launch framing ("47 support teams already waiting", "Early access opening soon")
- `/pricing`, `/ai-simulator`, `/labor-replacement-calculator`, product pages — structurally fine
- Forest-green accent color (already in use on auth + marketing, just not in tokens)

### Rework
- **One-note palette.** Every section is dark green/black. Add warm cream relief sections for rhythm (see Intercom's cream sections).
- **No product UI shown.** 12 sections talking about the Protocol Builder, inbox, widget, audit trail — not a single actual screenshot. Biggest miss for a product-led SMB funnel.
- **Hero has no visual anchor.** Just text on black. Needs a cinematic loop OR a live product UI preview floating on the right.
- **Too many sections (12).** Collapse overlapping ones. Target 7–8 sections.
- **Scroll reveals are aggressive to the point of invisibility.** Big black gaps between sections kill flow.
- **Token system is a lie.** `tailwind.config.js` declares `primary: #6366f1` (indigo); live site uses forest green via hardcoded hex in section files. v2 fixes this with scoped CSS vars.

---

## Reference inspirations

Audited live via Chrome on 2026-04-17.

### Intercom (`intercom.com`) — editorial magazine
- Heavy custom sans, two-tone headlines (black → warm grey mid-sentence for emphasis)
- Pure white + warm cream section alternation
- Eclectic imagery: lifestyle photos + hand-drawn ink + high-fidelity product UI in warm frames
- Print-design "registration marks" at section corners
- Dense product UI shown without abstraction
- Black/white pill CTAs
- Transparent pricing ($29/seat + $0.99/outcome)

### Capably (`capably.ai`) — luxury documentary
- Thin editorial serif-adjacent typography, large, spacious
- Cream/peach/ivory dominant, deep navy/amber cinematic hero
- Burnt orange/rust accent, used sparingly
- Full-bleed lifestyle photo cards with orange overlay gradient
- "Watch the documentary" secondary CTA
- Hamburger-only nav on desktop
- One concept per scroll-height

### The blend for enorve

| Dimension | Lift from |
|---|---|
| **Information architecture** | Intercom (self-serve funnel, feature tabs, real product UI, transparent pricing) |
| **Visual restraint & spacing** | Capably (editorial display type, generous margins, one idea per screen-height) |
| **Palette** | enorve's own forest green — the *one* accent, used like Capably uses rust |
| **Imagery discipline** | Intercom's UI-first approach — real screenshots, not stock photos |
| **Signature pattern** | WITHOUT/WITH comparison cards (enorve's, already better than either reference) |
| **Hero treatment** | Dark forest-green radial gradient (lifted directly from `app.enorve.com/auth`) |
| **Nav** | Intercom's exposed nav (because we're self-serve, not RFP-mode) |

---

## Design tokens (v2)

All tokens live in `src/styles/v2-brand.css`, scoped behind `[data-brand="v2"]` so the live site is untouched.

### Color

```
--brand-primary:        #0E5A3E  /* deep forest emerald, hero panel, primary CTA */
--brand-primary-hover:  #0A4432  /* CTA hover */
--brand-primary-soft:   #1FA86F  /* lighter variant for icons, chips */
--brand-primary-tint:   rgba(14, 90, 62, 0.08)  /* subtle backgrounds */

--brand-ink:            #0B1812  /* near-black with green tint — dark sections */
--brand-ink-soft:       #15231C  /* slightly lighter for cards on dark */
--brand-surface:        #FAF7F0  /* warm cream, main light bg */
--brand-surface-soft:   #F4EFE3  /* slightly warmer cream, alt sections */
--brand-text:           #11201A  /* body text on light */
--brand-text-muted:     #5C6B65  /* secondary text on light */
--brand-text-on-dark:   #EEF2EE  /* primary text on dark */
--brand-text-on-dark-muted: #9CB2A3  /* secondary text on dark */
--brand-line:           rgba(17, 32, 26, 0.08)  /* dividers on light */
--brand-line-on-dark:   rgba(238, 242, 238, 0.12)  /* dividers on dark */
```

**Exact hex will be tuned from eyedropper against `app.enorve.com/auth` once we have one. Values above are well-considered placeholders.**

### Typography

Fonts are already loaded in `src/index.css`:
- **Display (H1, H2)**: `Bricolage Grotesque` — 500/600 weight, tight tracking. Editorial feel.
- **Body + UI**: `Inter` — 400/500/600. Same as live site.

Scale:
```
--font-display: 'Bricolage Grotesque', 'Inter', system-ui, sans-serif
--font-body:    'Inter', system-ui, sans-serif

--type-hero:    clamp(48px, 7vw, 96px)   /* hero H1 */
--type-display: clamp(36px, 5vw, 64px)   /* section H1 */
--type-h2:      clamp(28px, 3.5vw, 44px) /* section H2 */
--type-h3:      20px
--type-body:    16px
--type-small:   14px
--type-micro:   12px  /* eyebrow labels */

--leading-tight: 1.05
--leading-display: 1.1
--leading-body: 1.5
```

### Spacing & rhythm

```
--section-pad-y:  clamp(80px, 10vw, 160px)  /* top/bottom padding per section */
--container-max:  1280px
--container-pad:  clamp(16px, 4vw, 48px)
--radius-sm:      8px
--radius-md:      16px
--radius-lg:      24px
--radius-xl:      32px  /* hero panel, large cards */
```

---

## Homepage composition (target)

Collapsed from 12 → 8 sections:

1. **Nav** — Logo + Product/Solutions/Pricing/Resources + "Design Partners" (green) + Login + Get Early Access
2. **Hero** — Split layout: headline left + dark forest panel right with live demo/product UI visual. Dual CTA. Social proof chip below.
3. **WITHOUT/WITH demo** — Same content as current, restyled. The signature pattern.
4. **Pipeline** — "From conversation to resolution" + flow diagram with real channel logos. Merge with current "Works Across" strip.
5. **Capability grid** — Merge current "Platform" (8 cards) + "AI that never goes off-script" (4 cards) + "Why Enorve" (4 cards). Target 6 cards on one restrained grid, each anchored to a real product UI screenshot.
6. **Global/multilingual** — Keep current language list but in a cream section for visual rhythm.
7. **Enterprise ready** — Keep current copy ("The stuff that actually blocks the deal"). Move to near-footer.
8. **Final CTA** — "Your competitors are already adding AI to support." Dark forest panel, full-width.

### Section background rhythm
```
1. Nav            — transparent over hero
2. Hero           — dark forest (#0B1812 with radial glow)
3. Without/With   — cream (#FAF7F0)
4. Pipeline       — dark ink (#0B1812)
5. Capability     — cream alternate (#F4EFE3)
6. Global         — cream (#FAF7F0)
7. Enterprise     — dark ink
8. Final CTA      — dark forest with radial glow
Footer            — dark ink, reduced
```

Alternating dark/cream creates the rhythm the current monolithic-dark site lacks.

---

## Component inventory (v2)

To be created under `src/components/v2/`:

- `Nav.tsx` — sticky nav
- `Hero.tsx` — split layout hero with forest panel
- `DemoCompare.tsx` — WITHOUT/WITH side-by-side
- `Pipeline.tsx` — flow diagram + channel strip
- `CapabilityGrid.tsx` — 6-card feature grid with screenshot anchors
- `LanguageSection.tsx` — multilingual showcase
- `EnterpriseReady.tsx` — security/trust block
- `FinalCTA.tsx` — closing conversion section
- `Footer.tsx` — minimal footer
- `ui/Button.tsx`, `ui/Eyebrow.tsx`, `ui/Card.tsx` — v2-scoped primitives

Centralized copy lives in `src/content/home.v2.ts`.

---

## Build & rollout plan

1. **Scaffold** — `/v2` route, V2Layout with `data-brand="v2"` attribute, empty Home shell. **(Done in this commit.)**
2. **Hero + DemoCompare** — first visual fidelity. **(Done in this commit.)**
3. **Pipeline + CapabilityGrid** — needs 6 real product screenshots from `app.enorve.com` (placeholder cards meanwhile).
4. **Language + Enterprise + FinalCTA** — finish remaining sections.
5. **Footer** — minimal.
6. **Other pages (optional)** — Pricing, Solutions, Product deep-dives if homepage lands. Each page follows the same token layer.
7. **Cutover** — when approved, swap `/v2` → `/`. `/v1` snapshot held for a week, then removed.

### What's NOT in scope for v2 initial build
- New copy beyond minor tightening
- Rebuilding `/roi-calculator`, `/ai-simulator`, `/design-partners`, `/security`, `/pricing` — those get the v2 shell but keep their internals
- Mobile app launch, video production (separate workstream)
- CMS migration (copy stays in TS file)

---

## Open questions (non-blocking)

1. **Exact hex for forest green** — placeholders used until eyedropper off live site.
2. **Hero visual asset** — live product UI preview vs cinematic loop vs both. Placeholder shape in first cut.
3. **Named AI character** — Intercom has Fin, Capably has none. Does enorve want a named AI (e.g. "Orb") or stay abstract? Staying abstract for v2 unless you direct otherwise.
4. **Pricing presentation** — Intercom uses transparent pricing on homepage. Current site sends to `/pricing`. Worth inlining a compact pricing card on homepage.
