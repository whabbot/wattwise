---
name: wattwise-design
description: Use this skill to generate well-branded interfaces and assets for Wattwise, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quickstart for an HTML artifact
1. Link `colors_and_type.css` (or copy the tokens you need) at the top of the file.
2. Use IBM Plex Sans for UI, IBM Plex Mono for any rate / kWh / timestamp / tariff code / diagnostic.
3. Every metric carries a confidence chip: **Exact** (blue), **Estimated** (amber), **Benchmark** (slate-grey), **Anomaly** (red), **Healthy** (green).
4. Every banner reads: **what happened → why it matters → what to do.**
5. Information hierarchy on every screen: **primary answer → evidence → interpretation → action.**
6. No emoji, no gradients, no decorative motion, no eco-marketing softness. Sentence case throughout.

## Where to look
- `README.md` — voice, content rules, visual foundations, iconography
- `colors_and_type.css` — design tokens (CSS vars) you can copy
- `preview/` — small examples of every primitive
- `ui_kits/web_app/` — full prototype with reusable JSX components
