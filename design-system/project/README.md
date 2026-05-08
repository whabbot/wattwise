# Wattwise Design System

> **Theme: Industrial Calm.** A trust-centered, analytics-first design system for a UK SME energy product. Calm. Exact. Protective.

---

## Product context

**Wattwise** is a web app that helps UK small and medium business owners turn half-hourly smart-meter data into clear insights on energy use, billing anomalies, and cheaper tariff options.

It is **not** an aspirational eco-product or a consumer "savings app." It is a **decision-support tool** for non-specialists who need to:

- Verify their energy bills
- Spot anomalies and billing risk
- Compare their current tariff against alternatives
- Understand half-hourly consumption patterns
- Decide whether to switch tariff or supplier

The product feels like a **serious business tool** — closer to Stripe Dashboard, GOV.UK, or a softened utility-operations console than to a B2C savings app.

### Core users
- SME owners and operations staff (cafés, small manufacturers, offices, retailers)
- Often non-technical, time-poor, and skeptical of energy-industry jargon
- Need to defend a decision (e.g. "should we switch?") with evidence

### Core jobs the UI must do well
1. **Compare** — current vs alternative, expected vs actual, normal vs anomalous
2. **Explain** — plain-English interpretation of every metric and chart
3. **Label confidence** — every number is tagged Exact / Estimated / Benchmark
4. **Protect** — flag risk and anomalies prominently, suggest the next step

---

## Sources

This system was built from a written brief alone. No codebase, Figma, or screenshots were provided. All values, components and copy are derived from the spec and from the visual references it cites: Stripe Dashboard, GOV.UK, and enterprise analytics tooling.

If you have access to existing Wattwise code or Figma, drop it in and re-run the design-system update — it will tighten substantially.

---

## Content fundamentals

Wattwise's voice is **direct, calm, helpful, non-patronizing**. The goal is to make a tired SME owner feel like a serious adult is helping them, not a chatbot.

### Voice attributes
- **Competent** — knows the energy market, but doesn't show off
- **Transparent** — never hides assumptions or confidence levels
- **Calm under pressure** — even alerts read measured, not panicked
- **Analytical** — leads with evidence, not adjectives
- **Protective** — frames risk in terms of the user's interest

### Writing rules
- **Sentence case throughout.** No Title Case, no ALL CAPS (except optional tiny status chips).
- **Address the user as "you."** First-person plural ("we") only for Wattwise system actions.
- **Plain English over jargon.** "You used more energy than usual on Sunday night" beats "Abnormal consumption variance detected."
- **Explain confidence explicitly.** Always one of:
  - **Exact** — historical, from the user's own data
  - **Estimated** — projected using representative rates
  - **Benchmark** — comparison to similar businesses
- **Every alert ends with a next step.** What happened → why it matters → what to do.
- **No emoji.** No exclamation marks except where genuinely warranted (rare).
- **Numbers and units are first-class.** Always show units (`p/kWh`, `£/day`, `kWh`). Use IBM Plex Mono for rates, timestamps, kWh values, tariff codes, and diagnostics.
- **No marketing softness.** Avoid "optimize", "unlock", "supercharge", "journey", "smart" (as adjective).

### Examples

| Avoid | Prefer |
|---|---|
| "Abnormal consumption variance detected" | "You used more energy than usual on Sunday night" |
| "Projected optimization opportunity" | "Estimated savings: £148 / year" |
| "Your energy journey starts here" | "Connect your meter to see your half-hourly use" |
| "Oops! Something went wrong 😅" | "We couldn't read that file. The header row is missing a 'kWh' column." |
| "AMAZING SAVINGS!" | "Switching to Octopus Agile would have cost £92 less last month." |

### Banner copy template

> **What happened.** Standing charge increased above your usual range.
> **Why it matters.** Your daily fixed cost is now £0.61/day, up from £0.48/day.
> **What to do.** Review your latest bill and tariff terms.

---

## Visual foundations

### Overall feel
**Light UI. Structured grid. Strong typography. Quiet surfaces. Dense but breathable.**

The system avoids: dark-mode-as-default, neon fintech accents, eco-marketing softness (curvy organic blobs, leafy greens), hyper-rounded "consumer app" aesthetics, glassmorphism, decorative gradients.

### Color
- **Stone canvas** (`#F5F5F4`) with **white surfaces** — never pure-black-on-white drama. The canvas is warm-neutral; cards float as crisp white rectangles on it.
- **Ink-900** (`#142132`) for primary text and key metrics — a near-black with a hint of cool blue, never true `#000`.
- **Teal-600** (`#0F766E`) is the single brand/action color. Used sparingly: primary buttons, active tabs, key chart series. Never decoratively.
- **Blue-600** is **reserved for "exact" / system-truth**. It is *not* a generic link/info color — it carries semantic meaning (this number came from your own data).
- **Amber-500** = "estimated" / "review needed". Always paired with a plain-English caveat.
- **Red-600** = critical only. Never used for emphasis or decoration.
- **Green-600** = confirmed good outcome. Never generic decoration.
- Pale wash colors (`rose-50`, `amber-50`, `teal-50`) for banner backgrounds — never as full-page backgrounds.

### Typography
- **IBM Plex Sans** for all UI.
- **IBM Plex Mono** for any number that represents a rate, timestamp, kWh, tariff code, or diagnostic. This is a deliberate pattern that tells users "this is data, not prose."
- Tabular figures (`font-feature-settings: "tnum"`) on every metric and table column so columns line up.
- Weight: 400 / 500 / 600. Bold (700) is rare — reserved for display contexts.
- Letter-spacing tightens slightly (`-0.01em`) at display sizes.

### Spacing & rhythm
- Strict **8px base scale**: 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64.
- Card internal padding is 20–24px. Dashboard gutters 24px.
- Generous vertical rhythm between sections (32–48px) so dense data has room to breathe.

### Backgrounds & imagery
- **No background images, photography, gradients or patterns.** The canvas is flat stone-100. This is a deliberate choice: every pixel is information or whitespace.
- The product does not use illustration. If a state needs "art," it gets a small line icon and clear copy instead.

### Borders, shadows, elevation
- **Borders carry most of the structural weight**, not shadows. Cards: 1px `line-200` border on white surface, with a *very* subtle 1–2px y-axis shadow underneath.
- Shadows are restrained — no floating drop-shadows, no blurred glass. Two levels only:
  - `shadow-card` — barely-there, for resting cards
  - `shadow-popover` — a touch stronger, for menus and popovers
- Inner shadows: not used.

### Corner radii
- **12px** cards (slightly soft but still "document-like")
- **10px** inputs and buttons
- **999px** pills/chips only — these are short and capsule-shaped
- Tables and chart panels do **not** round their inner cells.

### Hover & press states
- **Buttons:** hover = darker fill (~10% darker), press = darker still + 1px translate-y. No scale, no bounce.
- **Cards** that are clickable: hover = `border-strong` color shift, no shadow change.
- **Links:** hover = underline appears.
- **Rows in tables:** hover = `stone-100` row background. No row "lift."
- **No hover-only information** — anything important must also be visible at rest.

### Motion
- **Sparse and meaningful.** Motion exists for: panel reveals, chart loading, filter transitions, drawer open/close.
- Timings: 120ms (fast), 180ms (standard), 240ms (emphasis).
- Easing: standard ease-out (`cubic-bezier(0.2, 0, 0, 1)`). **No bounce, no spring, no decorative loops.**
- Respects `prefers-reduced-motion: reduce`.

### Transparency & blur
- Not used. No frosted overlays. Drawers and modals use solid white surfaces with a darkened scrim.

### Layout
- Desktop-first, 12-column grid, max content width 1440px.
- Information hierarchy on every page: **Primary answer → Evidence → Interpretation → Action.**
- Tables are first-class, not secondary. Sticky headers, right-aligned numerics, sortable columns, density toggle.

### Cards
- White surface, 12px radius, 1px `line-200` border, very subtle shadow.
- Internal structure: eyebrow label (uppercase tracking? — no, sentence case slate-600 13px) → metric/title → supporting detail → optional trend chip → footer action.

---

## Iconography

**Approach:** outlined, geometric, single stroke weight (1.5–2px), clear at 16px. Icons are **support, not decoration** — they never carry meaning that isn't also in text.

**Set:** [Lucide](https://lucide.dev) — loaded from CDN. Lucide matches the spec's "outlined / geometric / clear at small sizes" requirement and its stroke metrics are consistent with the rest of the visual system.

> ⚠️ **Substitution flagged.** No icon set was provided in the brief. Lucide is the closest match to the stated style. If you have an in-house Wattwise icon set, swap it in by replacing the `<Icon>` component in `ui_kits/web_app/Icon.jsx` and removing the CDN script.

**Required icon coverage (per the brief):**
- alert (`alert-triangle`, `alert-circle`)
- trend up/down (`trending-up`, `trending-down`)
- pound (`pound-sterling`)
- clock (`clock`)
- meter/data (`gauge`, `activity`)
- upload (`upload`)
- report/export (`file-text`, `download`)
- tariff/lightning (`zap`)
- building/business (`building-2`)
- check/verified (`check-circle-2`, `shield-check`)

**Emoji:** never used. **Unicode glyphs:** allowed only as currency/typographic primitives (`£`, `–`, `→`).

**Logo:** there is no Wattwise logo asset provided. `assets/wattwise-logo.svg` is a wordmark placeholder built from the type system itself (IBM Plex Sans semibold + a small generated mark). Replace with the real asset when available.

---

## File index

```
README.md                — this file
SKILL.md                 — Agent Skill manifest (Claude Code compatible)
colors_and_type.css      — design tokens (CSS variables) + element-level styles

assets/
  wattwise-logo.svg      — placeholder wordmark (replace when real one available)
  favicon.svg

preview/                 — design system showcase cards (Design System tab)
  colors-core.html
  colors-action.html
  colors-semantic.html
  colors-status.html
  type-scale.html
  type-mono.html
  type-metric.html
  spacing.html
  radius-shadow.html
  motion.html
  buttons.html
  inputs.html
  status-chips.html
  banners.html
  cards.html
  tables.html
  charts.html

ui_kits/
  web_app/
    README.md            — UI kit guide
    index.html           — interactive prototype (dashboard → tariff → quote → anomaly)
    *.jsx                — components
```

---

## Caveats and what's missing

- **No real brand assets.** Logo is placeholder. Replace `assets/wattwise-logo.svg` when available.
- **No icon set provided** — using Lucide via CDN as the closest stylistic match.
- **No real product copy or screenshots** — all copy in the UI kit is illustrative but follows the voice rules above.
- **No half-hourly meter data fixtures** — the dashboard charts use plausible synthetic data.
- **No Figma or codebase** — this system is spec-derived. Cross-checking against real product code will tighten component fidelity.
