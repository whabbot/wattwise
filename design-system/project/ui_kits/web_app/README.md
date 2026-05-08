# Wattwise Web App — UI kit

A high-fidelity recreation of the Wattwise web app: dashboard, tariff comparison, check-a-quote, and anomaly review drawer. Open `index.html` to navigate the prototype.

## Components

- `App.jsx` — shell with sidebar nav + topbar; routes between screens
- `Sidebar.jsx`, `Topbar.jsx` — chrome
- `Icon.jsx` — Lucide-style inline SVG icons
- `Primitives.jsx` — `<Button>`, `<Card>`, `<Chip>`, `<Banner>`, `<Field>`, `<Table>` — wire-thin and reusable
- `MetricCard.jsx` — eyebrow / value / delta / interpretation / action
- `ConsumptionChart.jsx` — half-hourly column + comparison line chart (SVG)
- `Dashboard.jsx` — score, cost, savings potential, anomalies, half-hourly chart, alerts
- `TariffComparison.jsx` — summary cards, tariff table, monthly savings chart
- `CheckQuote.jsx` — quote form ↔ projected annual cost + monthly view
- `AnomalyDrawer.jsx` — right-side drawer for anomaly detail

## Conventions used

- All numbers that represent a rate, kWh, timestamp or tariff code use IBM Plex Mono.
- Every metric carries a confidence chip (`Exact` / `Estimated` / `Benchmark`).
- Every banner reads: what happened → why it matters → what to do.
- Information hierarchy on every screen: primary answer → evidence → interpretation → action.

## Caveats

- No real Wattwise codebase or Figma was provided. Components are spec-derived.
- Charts use plausible synthetic half-hourly data.
- Logo is the placeholder from `assets/wattwise-logo.svg`.
