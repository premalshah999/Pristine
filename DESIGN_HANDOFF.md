# Pristine Functional Health — Design Handoff

A design brief for a complete UI/UX redesign. Carry over the existing **content architecture, brand voice, and Earthy Harmony palette** — redesign the **visual language, layout, and density**.

---

## 1. The brief in one line

A virtual functional-medicine practice run by one clinician (Megha Shah, PT, CFNC). The site should feel like a **calm, considered editorial** — closer to a wellness magazine or a luxury studio site than a healthcare provider portal.

## 2. Who this is for

- Adults 30–60 who have been to multiple specialists and been told "your labs look fine"
- Tired of corporate, sales-y wellness brands
- Skeptical, intelligent, often educated
- Looking for someone who will actually *listen* before prescribing

**Implication for design:** they don't want loud, they don't want gimmicky, they don't want stock-photo serenity. They want *quiet confidence*.

## 3. The single problem to solve

The current site is **too dense**. Every section has cards, every card has borders and shadows, every block has equal visual weight. There's no breathing room and no hierarchy. The user wants:

- More whitespace, fewer enclosing boxes
- Stronger hierarchy — one thing per screen, not five
- Editorial restraint — type and space do the work, not borders and gradients
- Logo treated as a brand mark, not a hero illustration

**The aesthetic target:** a single thoughtful design choice per section, repeated with discipline. Not a buffet.

---

## 4. Brand voice (for any UI copy)

| Do | Don't |
|---|---|
| "You're not broken." | "Welcome to your wellness journey." |
| "Your labs look fine — but you don't feel fine." | "Discover the power within." |
| Direct, plain, second-person | Corporate, abstract, third-person |
| Lowercase friendly headlines OK | All-caps marketing copy |
| Em-dashes, italic asides | Exclamation points |

The voice is **honest, slightly literary, gently confrontational**. Like a doctor who has time to talk to you.

---

## 5. Color palette — Earthy Harmony (locked)

| Role | Hex | Use |
|---|---|---|
| Bone | `#E2DFDA` | Default page background |
| Bone 2 | `#D6D2CC` | Alternating section background |
| Canvas | `#EDF3F0` | Tertiary background (cards, soft fills) |
| Paper | `#F8F6F3` | Card surfaces |
| Ink | `#2B3830` | Primary text, deep accents |
| Ink soft | `#4A6358` | Body copy |
| Ink muted | `#7A9088` | Meta, labels, captions |
| Mint | `#CBDED3` | Highlight chips, soft accents |
| Sage | `#8BA49A` | Decorative accent |
| Tan | `#D2C49E` | Warm accent, decorative |
| **Forest** `#3B6255` | **Primary brand color — buttons, links, accent** |
| Linen | `#E2DFDA` | Light text on forest |

**Dark mode** is supported but optional — the brand lives in the light palette.

## 6. Typography

- **Display / Serif**: *Instrument Serif* (italic variant is the brand voice — used for emphasized words like *wrong story*, *whole person*)
- **Body / Sans**: Geist
- **Mono / Labels**: Geist Mono — used for tiny eyebrows in tracked uppercase

Typography should do most of the design work. Display sizes can be very large (the current `display-xl` is ~6rem / 96px on desktop). **Keep that scale or push it further.**

## 7. Logo usage

**The logo is the new HD PNG (transparent) attached to this prompt.** Square aspect (1:1).

### Where the logo should appear
1. **Nav bar (top-left)**: small mark only — the "P + leaf" circle, no wordmark. ~32–40px tall. Should not compete with the menu.
2. **Hero**: as a quiet brand presence to the right of the headline — NOT a giant illustration. ~280–360px wide, low contrast, possibly with reduced opacity (~70%) or a slight desaturation to integrate.
3. **Footer**: full logo + wordmark stacked or inline, at modest scale. Bone-2 background.

### What to avoid
- Logo as a giant centerpiece on the hero (current design does this and it dominates)
- Logo with decorative card containers, glow blobs, or backgrounds
- Logo overlapping text or competing with the H1

### Current nav wordmark
The nav currently shows the text "Pristine Functional Health" as a serif wordmark (no mark). Designer should propose: small mark + wordmark, or wordmark alone — but unified.

---

## 8. Information Architecture

### Primary navigation
```
Home   Conditions ▾   Services ▾   About ▾   Blog   New Patient Special   Contact
```
+ persistent **Book an Appointment** CTA (forest pill button, right side)
+ dark/light toggle

### Conditions dropdown (mega menu)
Grouped by category:
- **Metabolic**: Functional Weight Loss, Type 2 Diabetes & Insulin Resistance
- **Hormonal**: Thyroid Issues, Female Hormones, Male Hormones
- **Neurological**: Migraines, Neuropathy
- **Mental Health**: Anxiety, ADHD
- **Gut**: Gut Dysfunction, Food Sensitivities
- **Autoimmune**: Autoimmune Disease

### Services dropdown
5 services, numbered 01–05:
1. Advanced Functional Testing
2. Root-Cause Analysis
3. Nutrition Counseling
4. Personal Coaching
5. Lifestyle Optimization

### About dropdown
- About Megha Shah
- Philosophy
- How We Practice
- Credentials

### Routes that exist
```
/                          Home
/about                     About Megha Shah
/blog                      Blog index
/blog/[slug]               Blog post (2 live posts so far)
/book-appointment          Cal.com booking embed
/conditions                Conditions index
/conditions/[slug]         14 condition pages
/contact                   Contact form
/new-patient-special       Promotional offer page
/privacy                   Privacy policy
/services                  Services index
/services/[slug]           5 service pages
/terms                     Terms & conditions
```

---

## 9. Page-by-page brief

### Home (`/`)
**Current sections (all need redesign, some likely deleted):**
Hero → Manifesto → Conditions List → About Preview → Services List → Process → Testimonials → New Patient Special → AI Chat Feature → Newsletter → CTA Band

**Target:** ~5–6 sections max. Suggested:
1. **Hero** — H1, lede, dual CTA, small logo presence, three stat numbers
2. **The problem we solve** — one large editorial paragraph + 3 "we treat this kind of person" vignettes
3. **Services** — numbered 01–05 list, more typography than cards
4. **About preview** — Megha Shah portrait + 3 lines about philosophy
5. **A single testimonial** at large scale, not a slider
6. **Closing CTA** — "Book your free 20-minute call"

Cut the manifesto, newsletter, and AI chat sections from the home — move to dedicated pages or remove.

### Conditions index (`/conditions`)
Editorial grid grouped by category. No card borders — just type, a thin divider, and a hover state. Should feel like a long quiet menu, not a product grid.

### Condition detail (`/conditions/[slug]`)
Structure currently includes: hero, "what we see", "what's actually going on", testing approach, treatment philosophy, testimonial. Designer should determine whether all of these stay or are restructured for restraint.

### Services index (`/services`)
Same restraint principle as conditions. Five services, numbered, with one-line description and a thin hover affordance.

### Service detail (`/services/[slug]`)
Currently: hero → "what it is" (3 paragraphs) → "what's included" (grid of cards) → "why it matters" (numbered) → "process" (numbered) → pricing note → CTA. Strong content — needs more breathing room and less card density.

### About (`/about`)
Should feel like an editorial profile. Portrait, three "quiet beliefs", "how we practice" list, credentials. Currently sound but cluttered.

### Blog (`/blog` + `/blog/[slug]`)
Editorial article layout. The post template needs: hero (eyebrow, h1, lede, meta strip), generous article body, sticky author/topics sidebar, related posts. Currently mostly works but needs typographic restraint and better whitespace.

### Book appointment (`/book-appointment`)
Single column. Hero, then a Cal.com embed loaded via element-click button (the button triggers a popup). Plus a "what to expect" section (4 steps) and contact fallback. Currently busy — could be 60% simpler.

### Contact (`/contact`)
Simple form, large quiet field labels, no decoration.

### New patient special (`/new-patient-special`)
Promotional landing. Currently uses a colored gradient panel — keep one bold gesture but contain it.

### Privacy / Terms
Standard legal pages, long-form typography. Keep simple and readable.

---

## 10. Design system patterns to define

- **Buttons**: Primary (forest pill), Ghost (outlined bone), Text link with arrow
- **Eyebrow label**: mono caps, `--color-ink-muted`, ~0.78rem, letter-spaced
- **Section divider**: hairline top border using `--color-line` OR no border at all, with whitespace
- **Card**: most cards should disappear in the redesign. Where used, keep them very subtle — no shadows, just paper background and rounded corners
- **Image treatment**: editorial crops, no decorative frames or shadow stacks
- **Animation**: respect existing `Reveal` (fade-up on scroll) — keep subtle, no parallax, no bouncy springs

## 11. Anti-patterns (do not do)

- Hero carousels or video backgrounds
- Floating chat bubbles overlaid on content
- Gradient meshes or noise textures behind hero
- Multiple competing CTAs in the same fold
- Three-column "trust badges" rows
- "As seen in" logo bars
- AI-generated stock imagery
- Equal visual weight on every section (the current problem)

## 12. References for mood (not for copying)

- Editorial: *The Gentlewoman*, *Cabana*, *Cereal Magazine*
- Wellness brands done with restraint: *Maude*, *Lyma*, *Goop's print editorial layout* (not their site)
- Studio sites: *Studio Lin*, *Order Design*
- Healthcare sites done well: *Parsley Health* (but quieter), *Maven* (but more serif-led)

The mood: **a real practitioner's small studio, photographed on film, with a strong typographer involved.**

---

## 13. Out of scope for this redesign

- E-commerce
- Patient portal / EHR login
- Insurance verification UI
- Live chat widget (currently exists as a floating button — remove unless reimagined)
- Newsletter signup (move off home page or delete)
- AI chat feature panel (delete from home; if kept anywhere, treat as a quiet sub-page)

---

## 14. Logo file attached separately

A transparent PNG (1024×1024) of the full Pristine logo (P + leaf mark, "PRISTINE FUNCTIONAL HEALTH" wordmark, "Restore. Balance. Thrive." tagline). The designer should also be able to use **just the circular mark** at small sizes — extract this from the artwork as needed.

---

## 15. What's needed back

1. Full page comps for: **Home**, **Service detail**, **Condition detail**, **Blog post**, **Book appointment**, **About**
2. Design system: type scale, button states, eyebrow treatments, dividers, image treatments
3. Mobile breakpoint comps for at least Home, Service detail, Blog post
4. A short note on the **logo lockup** for the nav and footer

Tone above all else: **quiet, considered, confident.** Less is more — but the less that remains needs to be impeccable.
