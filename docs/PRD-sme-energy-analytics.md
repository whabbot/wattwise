# Product Requirements Document: Wattwise

**An SME Energy Analytics Platform**

**Version:** 1.0
**Author:** Wail
**Date:** April 2026
**Status:** Draft

---

## 1. Overview

### 1.1 What Is This?

Wattwise is a full-stack web application that helps UK small and medium-sized enterprises (SMEs) understand their energy consumption, detect billing anomalies, and identify cost-saving opportunities — using half-hourly smart meter data made available through the Market-Wide Half-Hourly Settlement (MHHS) reform.

### 1.2 Why Does This Exist?

The UK's MHHS programme went live in September 2025, requiring all electricity usage to be settled using half-hourly data. For the first time, every business with a smart meter generates granular consumption data every 30 minutes. But no self-serve tool exists to help SMEs actually use this data.

The research evidence is stark:

- **27% of UK businesses** find it difficult to pay their energy bills (BCC, February 2026)
- **68% of SMEs** have no documented energy policy (Carbon Trust)
- **Only 8% of SMEs** fully understand what Net Zero means for them (Energy Saving Trust / BCC)
- **£2 billion** in accumulated SME energy debt (BFY Group, 2025)
- **Zero self-serve comparison tools** exist for business energy — SMEs rely on brokers, who are widely distrusted (£290m paid back due to commission non-disclosure over the past decade)
- **MHHS awareness among SMEs is effectively zero** — no forum posts, Reddit threads, or community discussions from business owners mention it

There is a clear gap: SMEs are in energy cost pain, they have no tools, and a new data source (half-hourly settlement data) has just become available that could power those tools.

### 1.3 Portfolio Context

This project is designed to showcase: real-time data pipeline architecture, time-series analytics, a clean React dashboard, RESTful API design, and working knowledge of the UK energy market — including MHHS, settlement classes, tariff structures, and the regulatory landscape.

---

## 2. Problem Statement

UK SMEs face a structurally hostile energy market:

1. **No price cap.** Unlike households, businesses have no Ofgem price cap protection. They negotiate bespoke contracts, often through brokers.
2. **No comparison tools.** Domestic consumers have Uswitch, Compare the Market, etc. Business energy has no equivalent self-serve platform.
3. **Opaque billing.** Business energy bills include wholesale costs, standing charges, government levies (Renewables Obligation, Contracts for Difference, Feed-in Tariffs), supplier margins, and broker commissions — most of which are invisible to the business owner.
4. **Broker dependence.** SMEs default to energy brokers because the market is too complex. But brokers have widespread trust issues (verbal contract manipulation, hidden commissions, LOA abuse).
5. **New data, no tools.** MHHS now generates half-hourly consumption data for every metered business, but no product translates this into actionable insight for SMEs.

### The Opportunity

Half-hourly data enables five things that were previously impossible for SMEs:

- **Waste detection:** The businesses hardest hit by energy costs — hospitality (72% citing utilities as cost pressure), manufacturing (60%), retail — largely operate on fixed schedules. They can't shift when they use energy. But half-hourly data reveals energy being consumed when the business is closed: overnight baseload creep, equipment left on, HVAC running out of hours. For fixed-schedule businesses, this is where half-hourly granularity delivers the most immediate, actionable value
- **Billing validation:** Flag standing charge anomalies, detect discrepancies between billed and actual consumption, and catch the kinds of broker mis-selling documented in forum research (businesses charged £9–£32/day standing charges through inflated consumption estimates)
- **Benchmarking:** Compare consumption and effective rates against similar businesses. "Your restaurant uses 40% more per square foot than comparable businesses" is actionable even for businesses that can't shift their usage pattern
- **Informed switching:** When a business goes to a comparison site or broker, quotes are based on Estimated Annual Consumption (EAC) — a single annual number that says nothing about when energy is used. Two businesses with identical EACs can have completely different consumption profiles, yet they receive the same quotes. Wattwise gives the business owner a detailed understanding of their usage profile (peak vs. off-peak split, baseload, seasonal shape) so they can ask for tariffs that actually suit their pattern. It also lets them verify a broker's recommendation against their real half-hourly data before signing — directly addressing the broker trust problem
- **Tariff structure comparison:** For businesses with some demand flexibility (offices with EV charging, warehouses that can schedule processing, businesses with battery storage), model what they would pay on different tariff structures — with exact figures for Octopus Agile and directional estimates for other structures. This also works in reverse: it can reveal that a business on a time-of-use tariff is actually losing money because their usage is peak-concentrated, and they'd be better off on a flat rate

---

## 3. Target Users

### Primary: UK SME Owner/Operators

- Businesses with 1–50 employees and physical premises (shops, restaurants, offices, workshops, small factories)
- Annual energy spend of £2,000–£50,000
- Have a smart meter installed (52% of non-domestic premises as of 2023, growing under MHHS)
- Currently manage energy by "just paying the bill" or through a broker
- Technically capable enough to use a web dashboard but not energy-market specialists

### Secondary: Accountants and Bookkeepers

- Manage energy costs on behalf of SME clients
- Need standardised reporting for carbon/emissions disclosure (per Project Perseus framework)
- AccountingWeb research confirms accountants are increasingly asked to advise on energy costs

### Sectors Most Affected (from research)

| Sector | Utilities as cost pressure | Notes |
|--------|---------------------------|-------|
| Hospitality | 72% | Highest — energy-intensive operations (kitchens, heating, lighting) |
| Manufacturing / Production | 60% | Second highest — machinery, compressed air, process heat |
| Retail | ~52% | Premises-based, lighting and HVAC heavy |
| Professional services | Lower | Often in shared/serviced offices, less direct control |

### Feature Value by Business Type

Not all features are equally valuable to all business types. The majority of target users — hospitality, retail, manufacturing — operate on fixed schedules and have limited ability to shift when they use energy. The feature emphasis should reflect this:

| Feature | Fixed-schedule businesses (restaurant, shop, factory) | Flexible-demand businesses (office with EV, warehouse, storage) |
|---------|-------------------------------------------------------|---------------------------------------------------------------|
| **Waste detection** (out-of-hours, baseload creep) | **Primary value.** Can't change when they operate, but can eliminate energy consumed when closed | Valuable, but less differentiated — these businesses may already have some monitoring |
| **Billing validation** (standing charge flags, consumption verification) | **High value.** Most vulnerable to broker mis-selling and opaque billing | High value |
| **Benchmarking** (Energy Score, peer comparison) | **High value.** "Your restaurant uses 40% more than similar businesses" is actionable regardless of schedule flexibility | High value |
| **Informed switching** (profile summary, quote verification) | **High value.** Helps negotiate from data, not ignorance | High value |
| **Tariff structure comparison** (Agile, ToU modelling) | **Moderate/reverse value.** May reveal they're *losing* money on a ToU tariff because usage is peak-concentrated | **Primary value.** Can actively shift load to exploit off-peak rates |
| **Load-shifting guidance** ("what if you charged EVs overnight?") | Low relevance — operating hours are fixed | **High value** — directly actionable |

This mapping should inform the dashboard's contextual insights (FR-10): a restaurant should see "you used £X of energy outside your operating hours last month" before "you'd save £X on Octopus Agile."

---

## 4. Product Requirements

### 4.1 Data Ingestion & Pipeline

**FR-1: Half-Hourly Data Import**
The system must support multiple ways for a business to get their consumption data into the application. In practice, UK SMEs have limited options for accessing their own half-hourly smart meter data:

- **Manual CSV upload (MVP):** The user downloads their half-hourly consumption data from their energy supplier's online portal (most suppliers offer this — Octopus, EDF, British Gas, etc.) and uploads the CSV file to Wattwise. The system must accept common export formats and handle variations between suppliers (column naming, date formats, units). This is the most universally available option and requires no third-party integrations.

- **In-browser demo data (MVP):** For users who want to explore the platform before uploading real data, the system generates realistic simulated consumption data in the browser based on the user's selected business type. This is also the default experience for guest users.

- **Octopus Energy API integration (stretch goal):** Octopus Energy provides a well-documented public API that lets customers authenticate with their account credentials and API key to pull their own half-hourly consumption data programmatically. This would allow Octopus customers to connect their account and have data flow in automatically, without manual CSV downloads.

- **n3rgy Consumer Data API (stretch goal):** n3rgy is a free service that gives consumers API access to their own smart meter data regardless of their energy supplier. The user registers their MPAN (Meter Point Administration Number) with n3rgy and authorises access. This is the most supplier-agnostic integration option.

Note on the broader data access landscape: the UK's DCC (Data Communications Company) operates the national smart meter communication network and theoretically supports third-party data access, but becoming an authorised user requires security accreditation and significant fees. This is not viable for a portfolio project but is worth mentioning in the README as context for how data access works at production scale.

For the portfolio demo, data will be simulated using realistic consumption profiles based on published BEIS/DESNZ building energy use survey data for different business types.

**FR-2: Data Simulator**
The system must include a configurable data simulator that generates realistic half-hourly consumption profiles for different business types:
- Small retail shop (~15,000 kWh/year)
- Restaurant/cafe (~35,000 kWh/year)
- Small office (~20,000 kWh/year)
- Light manufacturing workshop (~80,000 kWh/year)

Profiles should include realistic features: weekday/weekend patterns, seasonal variation, opening hours effects, and occasional anomalies (equipment left on, heating failures, meter faults).

**FR-3: Tariff Data**
The system must support two categories of tariff:

- **Reference tariffs:** A curated set of publicly known or representative tariff structures that any user can compare against. These are seeded and maintained by the application. The most important reference tariff is **Octopus Shape Shifters: Agile** — the UK's first half-hourly wholesale-tracking tariff for small businesses (launched November 2025), whose prices are published via a free public API and can be used for exact historical cost comparisons (see FR-7, Tier 1). Other reference tariffs include representative benchmarks for common tariff types (e.g. "typical SME two-rate" or "typical SME flat rate Q1 2026"), which use representative rates for structural modelling (see FR-7, Tier 2). Reference tariffs are read-only for users.

- **Custom tariffs:** Tariffs entered by a specific business to represent their actual contract terms. Since business energy contracts are individually negotiated (often through a broker), no two businesses are likely on the same rate. Users must be able to enter their own unit rate, standing charge, and tariff structure to reflect their real contract. Custom tariffs are private to the business that created them.

Both categories must support the following structures:
- Flat-rate (single unit rate + standing charge)
- Two-rate (day/night, e.g. Economy 7-style)
- Time-of-use (multiple rate bands at defined time windows)
- Wholesale-tracking (half-hourly variable rate, e.g. Octopus Agile-style)
- Standing charges (daily fixed cost, modelled separately from unit rates)
- VAT rates (20% standard, 5% reduced rate for qualifying small businesses consuming below the de minimis threshold)

**FR-4: Data Storage**
Half-hourly consumption data must be stored in a time-series optimised format. The system should handle at least 2 years of half-hourly data per business (35,040 data points/year) with query response times under 500ms for any aggregation (daily, weekly, monthly, annual).

**FR-4a: Timezone Handling**
All consumption timestamps must be stored in UTC. Smart meters record in UTC at fixed 30-minute intervals — 48 periods per UTC day, every day, regardless of clock changes. The raw data and the data simulator should reflect this: a flat 48 records per day in UTC.

The timezone complexity is purely an **aggregation and display concern**. The UK observes British Summer Time (BST, UTC+1) from late March to late October. When consumption is grouped by local day (Europe/London) for display to the user, two edge cases arise:

- **Spring clock change:** A local day shows only 46 half-hourly periods (the 1:00–2:00 AM local hour doesn't exist, so two UTC periods fall on the previous local day)
- **Autumn clock change:** A local day shows 50 half-hourly periods (the 1:00–2:00 AM local hour occurs twice, so two extra UTC periods are attributed to that local day)

If aggregation queries group by UTC day instead of local day, consumption near midnight will be attributed to the wrong date from the business owner's perspective. Server-side queries must apply the Europe/London timezone before truncating. Client-side analytics must use timezone-aware date handling for the same reason.

### 4.2 Analytics Engine

**Note on feature priority:** The features below are numbered for reference, not in priority order. For the majority of target users — fixed-schedule businesses like restaurants, shops, and small factories — the highest-value features are **waste detection and anomaly flagging (FR-8)**, **billing validation (FR-6, FR-8)**, **benchmarking (FR-9, FR-7 Tier 3)**, and **informed switching (FR-7a, FR-7b)**. Tariff structure comparison and time-of-use modelling (FR-7 Tiers 1–2) are most relevant to businesses with flexible demand (offices with EV charging, warehouses with schedulable processes, businesses with storage). All features are available to all users, but the messaging and dashboard emphasis should lead with waste detection and cost validation, not load-shifting.

**FR-5: Consumption Dashboard**
The system must display consumption data at multiple granularities:
- Real-time (latest 48 hours, half-hourly bars)
- Daily view (selected day, half-hourly resolution)
- Weekly view (7 days, daily totals with half-hourly drill-down)
- Monthly view (daily totals, with week-over-week comparison)
- Annual view (monthly totals, with year-over-year comparison)

**FR-6: Cost Calculator**
The system must calculate energy costs by applying the business's current tariff to their consumption data. Costs must be broken down into:
- Unit cost (consumption x rate, respecting time-of-use bands if applicable)
- Standing charge (daily fixed cost)
- Government levies (modelled as percentage of unit cost for simplicity)
- VAT
- Total cost

**FR-7: Tariff Comparison Engine**
The system must help businesses understand whether their current tariff is competitive and whether a different tariff structure would suit their consumption pattern. Because business energy pricing is individually quoted and not publicly available, the comparison engine operates at three tiers of confidence, each clearly communicated to the user:

**Tier 1 — Exact historical cost (Octopus Agile):**
Octopus Energy launched Shape Shifters: Agile in November 2025 — the UK's first half-hourly wholesale-tracking tariff for small businesses. The half-hourly prices are published via a free, public API. The system must take the user's actual consumption data and calculate exactly what they would have paid on Agile over any historical period. This is a verifiable, precise figure — not an estimate. Octopus reports that 75% of businesses would save simply by joining Agile without changing their habits. This is the flagship comparison because it uses real prices for a real, available business tariff.

**Tier 2 — Structural modelling (representative tariff types):**
For tariff structures where real pricing is not publicly available (e.g. two-rate day/night, generic time-of-use), the system models costs using representative rate differentials rather than supplier-specific quotes. The output is directional: "a two-rate tariff would likely save you £X–Y based on typical rate spreads for your usage pattern." The system must clearly distinguish these results from Tier 1 by labelling them as estimates based on representative rates, not actual supplier offers. Structural modelling is still valuable — it tells the user whether their tariff type suits their consumption pattern (e.g. "62% of your usage falls in off-peak hours, so a time-of-use structure would likely work in your favour") even though it cannot quote a specific supplier's price.

**Tier 3 — Peer benchmarking:**
The system must compare a user's effective rate (total cost ÷ total consumption) against anonymised, aggregated data from other Wattwise users of a similar business type and size. This does not model alternative tariffs — it provides a market signal: "businesses similar to yours on this platform are paying an average of Xp/kWh; your effective rate is Yp/kWh." This feature becomes more valuable as the user base grows and requires a minimum threshold of comparable businesses before displaying results (to protect anonymity and statistical validity).

**Display across all tiers:**
- Side-by-side cost comparison, with each comparison clearly labelled by tier (exact, estimated, or benchmark)
- Monthly savings/loss breakdown where applicable (Tier 1 and Tier 2)
- Annual projected savings (Tier 1 and Tier 2)
- Percentage of consumption in off-peak vs. peak hours (useful context for all tiers)

**What the system explicitly does not do:** Wattwise does not provide live quotes from energy suppliers, does not act as a broker or switching service, and does not take commissions. Obtaining live supplier-specific business energy quotes would require Third Party Intermediary (TPI) registration and Ofgem regulatory compliance — this is documented as a potential future commercial path, not an MVP feature.

**FR-7a: Quote Verification ("Check a Quote")**
The system must allow a user to enter the terms of a tariff they have been offered (by a broker, comparison site, or supplier) and model what they would pay on that tariff against their actual half-hourly consumption data. This is distinct from the tariff comparison engine (FR-7): the comparison engine works with reference tariffs and peer data that Wattwise curates, while quote verification lets the user test any arbitrary tariff against their real usage.

The user enters: unit rate(s), standing charge, tariff structure (flat, two-rate, time-of-use), and rate band time windows if applicable. The system returns: projected annual cost, monthly breakdown, and a comparison against their current tariff and the Tier 1 Agile benchmark.

This feature directly addresses the broker trust problem identified in the research. A business owner who has been quoted a deal by a broker can verify the savings claim before signing. It also supports the informed switching use case — a user who has obtained quotes from a comparison site like Love Energy Savings can model each option against their actual half-hourly profile rather than relying on an EAC-based estimate.

**FR-7b: Consumption Profile Summary ("Know Your Profile")**
The system must generate a plain-language summary of the user's consumption profile, designed to be useful when approaching a broker or comparison site. This summary should include:
- Total annual consumption (kWh)
- Peak vs. off-peak consumption split (percentage and kWh, using standard peak/off-peak time bands)
- Average baseload (minimum overnight consumption in kW)
- Seasonal variation (highest and lowest consumption months)
- Demand spikiness (how variable half-hourly consumption is relative to the average)

This gives the business owner concrete data to bring to a switching conversation — replacing "I think we use about £X a month" with "our annual consumption is 28,000 kWh, 58% of which is off-peak, with a 1.8kW overnight baseload and a winter peak in January."

**FR-8: Anomaly Detection & Waste Identification**
For fixed-schedule businesses (the majority of the target market), this is the highest-value feature. These businesses cannot shift when they use energy, but they can eliminate energy being wasted when they are closed. Half-hourly data makes waste visible in a way that monthly bills never could.

The system must flag:
- **Out-of-hours consumption:** Flag significant energy use outside declared business operating hours. For a restaurant that closes at 11pm and opens at 7am, any material consumption between those hours is waste — extraction fans left running, ovens not shut down, heating on overnight. This is the single most actionable insight for fixed-schedule businesses
- **Baseload creep:** Track minimum overnight consumption (baseload) over time and flag if it increases unexpectedly. A rising baseload suggests equipment degradation, new always-on devices, or faulty controls — problems that accumulate cost silently
- **Spike detection:** Consumption in any half-hour period exceeding 2 standard deviations above the rolling 4-week average for that time slot. May indicate equipment malfunction, meter fault, or a genuine operational anomaly worth investigating
- **Standing charge validation:** Compare actual standing charge against published rates and flag discrepancies. Directly addresses the forum finding of businesses being charged £9–£32/day standing charges through broker mis-selling with inflated consumption estimates

**FR-9: Energy Score**
The system must generate a simple 0–100 "Energy Score" for each business, modelled on a credit score concept. The score reflects:
- Consumption efficiency relative to benchmarks for their business type and size (using BEIS/DESNZ building energy use data)
- Cost efficiency (how does their effective rate compare to peer benchmarks and to what they would pay on Octopus Agile?)
- Pattern efficiency (what percentage of consumption is during off-peak hours?)
- Anomaly frequency (how often do unusual patterns occur?)

This directly addresses the Project Perseus finding that lenders need standardised SME energy data — an Energy Score is the consumer-facing expression of that concept.

### 4.3 User Interface

**FR-10: Dashboard Layout**
The main dashboard must display on a single screen:
- Energy Score (prominent, top-left)
- Current period cost (top-right)
- Consumption chart (centre, interactive, zoomable) — with business operating hours overlaid so out-of-hours consumption is visually obvious
- Active alerts/anomalies (prominent — sidebar or below chart). For most users, this is the highest-value section: out-of-hours waste, baseload changes, standing charge flags
- Key insights summary: contextual, prioritised by business type. Examples: "You used £X of energy outside your operating hours last month" (fixed-schedule business) or "On Octopus Agile, you'd have paid £X less last month" (flexible-demand business) or "Your effective rate is X% above peer average" (all businesses)

**FR-11: Alerts & Notifications**
The system must support configurable alerts:
- Anomaly detected (spike, baseload shift, out-of-hours)
- Monthly cost exceeds budget threshold
- Tariff comparison finds potential savings above threshold (Tier 1 Agile comparison or Tier 3 peer benchmark)
- Standing charge change detected

For the portfolio project, alerts display in-app. Email/SMS notifications are out of scope but the API should be designed to support them.

**FR-12: Reports**
The system must generate downloadable PDF reports containing:
- Monthly energy summary (consumption, cost, comparison to previous month)
- Annual energy review
- Tariff comparison report (suitable for sharing with a broker or supplier when negotiating)

**FR-13: Business Profile Setup**
The system must capture:
- Business type (from a predefined list mapping to consumption benchmarks)
- Business operating hours (used for out-of-hours anomaly detection)
- Current tariff details (unit rate, standing charge, tariff type) — entered by the user to match their actual contract; this becomes their custom tariff and the baseline for all comparison calculations
- Meter point reference (MPAN) — for display/reference purposes
- Annual energy budget (optional, for budget alerts)

### 4.4 API

**FR-14: RESTful API**
All functionality must be accessible via a documented RESTful API. Key endpoints:

All API endpoints require authentication (JWT). Guest users do not use the API — all guest functionality runs client-side.

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Create account |
| POST | /api/auth/[...nextauth] | NextAuth.js authentication routes |
| POST | /api/migrate | Migrate guest data (Zustand snapshot) to server on account creation |
| POST | /api/businesses | Create a business profile |
| GET | /api/businesses/:id | Get business profile |
| POST | /api/consumption/upload | Upload half-hourly data (CSV) |
| GET | /api/consumption/:businessId | Get consumption data (with date range, granularity params) |
| GET | /api/costs/:businessId | Get calculated costs (with date range) |
| GET | /api/tariffs | List available tariffs |
| POST | /api/tariffs/compare | Run tariff comparison simulation |
| GET | /api/anomalies/:businessId | Get detected anomalies |
| GET | /api/score/:businessId | Get Energy Score |
| GET | /api/reports/:businessId/monthly | Generate monthly report |

**FR-15: API Documentation**
The API must be documented with OpenAPI/Swagger, including example requests and responses.

### 4.5 Authentication & Session Model

**FR-16: Try-Before-You-Sign-Up (Client-Side Guest Sessions)**
The system must be fully usable without creating an account and without hitting the backend. On first visit, the app runs entirely client-side:

- The user selects a business type and the data simulator generates realistic half-hourly consumption data in the browser
- If the user uploads a CSV, it is parsed and stored client-side only
- All analytics (consumption charts, tariff comparison, anomaly detection, Energy Score) run as pure TypeScript functions in the browser
- Business profile settings are stored client-side

**Guest data never touches the server.** This eliminates backend load from casual visitors, protects the Neon free tier from storage bloat, and removes the need for guest session cleanup jobs.

**Client-side storage strategy:**
- **Runtime state:** Zustand store holds all active data in memory (consumption array, tariff selections, business profile, computed analytics results)
- **Persistence across refreshes:** Zustand's `persist` middleware writes to IndexedDB, so a guest's data survives page refreshes and browser restarts
- **Storage budget:** IndexedDB allows ~50MB in most browsers. Two years of half-hourly data for one business is approximately 2MB as JSON, so this is comfortably within limits
- **Limitations:** Data is bound to one browser on one device. Clearing browser data removes it. These limitations are the natural incentive to create an account

**FR-17: Account Creation (Data Migration to Server)**
When a guest user creates an account, the app performs a one-time data migration:

1. Client-side data (consumption records, business profile, tariff selections) is uploaded to the server via a dedicated `/api/migrate` endpoint
2. The server validates and stores the data in Neon Postgres
3. The client-side Zustand store is cleared and the app switches to API-driven mode
4. From this point, all reads and writes go through the server

This gives authenticated users: permanent storage not bound to a browser, access from any device, multi-business support, and server-side scheduled analytics (daily Energy Score recalculation, persistent anomaly history).

The sign-up prompt should be non-intrusive — a persistent but dismissible banner ("Your data is saved in this browser only. Sign up to access it from anywhere."), not a modal or gate.

**FR-18: Authentication Implementation**
For authenticated users:
- NextAuth.js with email/password credentials
- JWT session tokens
- Each user can be associated with one or more businesses
- Data isolation: users can only access data for businesses they own

**FR-19: Shared Analytics Engine (No Code Duplication)**

The analytics functions (anomaly detection, Energy Score calculation, tariff comparison, cost calculation) must be implemented as a **single shared library of pure functions**. There is exactly one copy of each function, imported by both the frontend and backend.

These functions must:
- Accept plain typed data as input (not database models or store objects)
- Return plain typed data as output
- Have zero dependencies on browser APIs, Node APIs, database access, or any runtime environment
- Be independently unit-testable with simple input/output assertions

The calling code — whether a React component (guest mode) or an API route (authenticated mode) — is responsible for fetching data from the appropriate source and passing it into the shared analytics functions. The analytics engine itself has no knowledge of where its data comes from or where it is running.

A data-source abstraction layer in the frontend should handle this transparently, so that UI components do not need to know whether they are operating in guest or authenticated mode.

---

## 5. Non-Functional Requirements

**NFR-1: Performance**
- Dashboard initial load: < 2 seconds
- Chart interactions (zoom, pan, granularity change): < 500ms
- Tariff comparison simulation (1 year of data, 5 tariffs): < 3 seconds
- Anomaly detection on data upload: < 10 seconds for 1 year of data

**NFR-2: Data Volume**
- Support at least 100 businesses with 2 years of half-hourly data each
- Total data volume: ~7 million consumption records

**NFR-3: Responsiveness**
- Dashboard must be usable on desktop (primary) and tablet (secondary)
- Mobile is not a priority for v1

**NFR-4: Accessibility**
- WCAG 2.1 AA compliance for the dashboard
- Chart data must be available in tabular form as an alternative

**NFR-5: Testing**
- Unit tests (Vitest) for all shared analytics functions with input/output assertions
- Integration tests (Vitest + React Testing Library) for key dashboard components
- End-to-end tests (Playwright) covering the critical user journeys: guest landing and exploring the demo dashboard, uploading a CSV and seeing updated analytics, running a tariff comparison, signing up and verifying data migration from client to server
- E2E tests must run in CI via GitHub Actions on every pull request

**NFR-6: Security**
- Guest users never hit the backend — no API authentication needed for the demo experience
- Authenticated API endpoints require a valid JWT
- The `/api/migrate` endpoint (guest-to-account data transfer) requires authentication and is rate-limited to prevent abuse
- Passwords hashed with bcrypt
- HTTPS enforced
- Rate limiting on authentication and data migration endpoints

---

## 6. Technical Architecture

### 6.1 Recommended Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 14+ (App Router) | Combines frontend and API in one deployable unit; free hosting on Vercel |
| Language | TypeScript (throughout) | Type safety across full stack; industry standard at target employers |
| Frontend | React + TypeScript | Industry standard; Recharts or D3 for time-series visualisation |
| State management | React Query (TanStack Query) | Excellent for API-driven dashboards with caching |
| Styling | Tailwind CSS | Fast iteration, consistent design system |
| Backend | Next.js API Routes (Route Handlers) | Serverless-compatible; eliminates need for separate backend server |
| Database | PostgreSQL via Neon | Serverless Postgres; 512MB free tier; scales to zero when idle |
| ORM | Prisma | Type-safe database access, excellent Next.js integration, handles migrations |
| Authentication | NextAuth.js with JWT | Built for Next.js; supports credentials + OAuth providers |
| API docs | Swagger/OpenAPI (via next-swagger-doc) | Auto-generated from route definitions |
| Unit/integration testing | Vitest + React Testing Library (frontend), Vitest (API routes) | Fast, modern test runner with native TypeScript support |
| End-to-end testing | Playwright | Cross-browser E2E tests; validates critical user journeys |
| CI/CD | GitHub Actions | Free for public repos |
| Hosting | Vercel (app) + Neon (database) | Entirely free tier; one-click deploy from GitHub |
| Local dev (default) | `npm run dev` + Neon database branch | Zero-install local development; Prisma connects to Neon over the network |
| Local dev (offline) | Docker Compose (optional) | Runs Postgres locally for offline development or TimescaleDB experimentation |
| Data simulator | TypeScript script (standalone) | Generates realistic half-hourly data and seeds the database |

### 6.2 Hosting Architecture & Trade-offs

> **Key Decision: Free-tier hosting over production-optimal infrastructure**
>
> This project prioritises **zero-cost, always-available hosting** so that a hiring manager can visit a live URL and interact with the dashboard immediately — no local setup required. This drives several architectural choices that differ from what a production system would use. Each trade-off is documented below to demonstrate awareness of the production-grade alternative.

**Why Vercel + Neon (not a traditional server + TimescaleDB):**

In a production environment handling real MHHS data at scale (millions of meter points, billions of half-hourly readings), the correct database choice would be **PostgreSQL with the TimescaleDB extension**. TimescaleDB provides hypertables with automatic time-based partitioning, continuous aggregates (materialised views that update incrementally), native compression achieving 90%+ storage reduction on time-series data, and purpose-built functions like `time_bucket()` for efficient temporal aggregations. At scale, these features are essential — standard Postgres would struggle with multi-billion-row time-series queries.

However, TimescaleDB has no practical free hosted tier. The cheapest Timescale Cloud instance is ~$29/month, and self-hosting requires a persistent server (not serverless). For a portfolio project that needs to be live 24/7 at zero cost, this is a dealbreaker.

**Neon** provides serverless Postgres with a 512MB free tier that scales to zero when idle (no cost when nobody is using it). At portfolio demo scale — a few dozen simulated businesses with 1–2 years of data (~1–2 million rows) — standard Postgres with proper indexing handles time-series queries comfortably. The trade-off is acceptable: we lose TimescaleDB's specialised features but gain a permanently live demo at no cost.

**What changes at production scale:**

| Concern | Portfolio (Neon) | Production (TimescaleDB) |
|---------|-----------------|------------------------|
| Time-series storage | Standard Postgres table with composite index on (business_id, timestamp) | TimescaleDB hypertable with automatic chunking by time |
| Aggregation queries | `GROUP BY date_trunc('day', timestamp)` — works fine under 10M rows | `time_bucket('1 day', timestamp)` — optimised for billions of rows |
| Data compression | None needed at demo scale | Native columnar compression; 90%+ reduction on historical data |
| Continuous aggregates | Computed on-the-fly (acceptable at demo scale) | Materialised views that update incrementally — critical for dashboard performance |
| Cold storage | Not needed | Tiered storage: recent data hot, historical data compressed/archived |
| Connection model | Serverless (HTTP-based, scales to zero) | Connection pooling via PgBouncer; persistent connections |

This trade-off is itself a useful interview talking point: it demonstrates the ability to make pragmatic infrastructure decisions based on constraints, while understanding what the ideal architecture looks like and when the current approach would need to change.

**Why Next.js (not separate frontend + backend):**

A traditional architecture would separate the React frontend from an Express or FastAPI backend, deployed independently. For a portfolio project, this creates unnecessary operational complexity (two deployments, CORS configuration, two hosting services). Next.js API Routes (Route Handlers) allow the entire application — frontend, API, and server-side logic — to deploy as a single unit on Vercel's free tier. The API routes run as serverless functions, which is architecturally sound and demonstrates knowledge of modern deployment patterns.

The Vercel free tier does impose a **10-second function timeout** on serverless functions. The tariff comparison endpoint (which simulates costs across multiple tariffs over a year of half-hourly data) is the most computationally intensive operation. At demo scale this completes well within 10 seconds, but at production scale this would need to move to a background job queue — another good interview discussion point.

### 6.3 Database Schema (Core Tables)

```
users
├── id (UUID, PK)
├── email (VARCHAR, unique)
├── password_hash (VARCHAR)
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)

businesses (server-side — authenticated users only)
├── id (UUID, PK)
├── user_id (UUID, FK, NOT NULL)
├── name (VARCHAR)
├── type (ENUM: retail, hospitality, office, manufacturing, other)
├── operating_hours (JSONB: { mon: { open: "08:00", close: "18:00" }, ... })
├── mpan (VARCHAR, nullable)
├── annual_budget (DECIMAL, nullable)
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)

Note: Guest user data lives entirely client-side (Zustand + IndexedDB).
The database only stores data for authenticated users. See §4.5 for details.

consumption (standard Postgres table — see §6.2 for TimescaleDB production notes)
├── business_id (UUID, FK)
├── timestamp (TIMESTAMPTZ)  ← half-hourly intervals
├── kwh (DECIMAL)
├── created_at (TIMESTAMP)
├── PRIMARY KEY (business_id, timestamp)
├── INDEX idx_consumption_time (timestamp DESC)
└── INDEX idx_consumption_business_time (business_id, timestamp DESC)

tariffs
├── id (UUID, PK)
├── business_id (UUID, FK, nullable)  ← null = reference tariff (shared); non-null = custom (private)
├── name (VARCHAR)
├── supplier (VARCHAR, nullable)
├── type (ENUM: flat, two_rate, time_of_use, agile)
├── standing_charge_pence (DECIMAL)  ← daily
├── rates (JSONB)  ← flexible structure for different tariff types
├── is_current (BOOLEAN, default false)  ← true = this business's active contract
├── valid_from (DATE)
├── valid_to (DATE, nullable)
└── created_at (TIMESTAMP)
    Reference tariffs: business_id IS NULL, seeded by the application
    Custom tariffs: business_id IS NOT NULL, created by the user

anomalies
├── id (UUID, PK)
├── business_id (UUID, FK)
├── type (ENUM: spike, baseload_shift, out_of_hours, standing_charge)
├── severity (ENUM: info, warning, critical)
├── timestamp (TIMESTAMPTZ)
├── description (TEXT)
├── kwh_expected (DECIMAL, nullable)
├── kwh_actual (DECIMAL, nullable)
├── acknowledged (BOOLEAN, default false)
└── created_at (TIMESTAMP)

energy_scores
├── business_id (UUID, FK)
├── calculated_at (TIMESTAMPTZ)
├── overall_score (INTEGER, 0-100)
├── efficiency_score (INTEGER)
├── cost_score (INTEGER)
├── pattern_score (INTEGER)
├── anomaly_score (INTEGER)
└── PRIMARY KEY (business_id, calculated_at)
```

### 6.4 Data Flow

**Guest users (client-side only):**
```
[In-Browser Data Simulator] → generates realistic half-hourly data
        ↓                       (or: user uploads CSV, parsed in browser)
[Zustand Store] → holds consumption, tariff, profile data in memory
        ↓           ↕ persists to IndexedDB via Zustand persist middleware
[Isomorphic Analytics Engine] → runs in browser
   ├── Anomaly detection → stored in Zustand
   ├── Energy Score calculation → stored in Zustand
   └── Cost/tariff comparison → computed on demand
        ↓
[React Dashboard] → charts, alerts, comparisons
        
No API calls. No database writes. Zero backend load.
```

**Authenticated users (server-side):**
```
[CSV Upload API] → validation → [Neon Postgres]
        ↓
[Isomorphic Analytics Engine] ← same functions, running server-side
   ├── Anomaly detection → [anomalies table]
   ├── Energy Score calculation → [energy_scores table]
   └── Cost calculation (on-demand)
        ↓
[Next.js API Routes] → JSON responses
        ↓
[React Dashboard] → charts, alerts, comparisons
```

**Guest → Account migration:**
```
[User clicks "Sign Up"] → account created via NextAuth.js
        ↓
[Client reads Zustand store] → serialises all data to JSON
        ↓
[POST /api/migrate] → server validates + writes to Postgres
        ↓
[Client clears Zustand/IndexedDB] → switches to API-driven mode
```

### 6.5 Deployment Architecture

```
GitHub Repository (monorepo)
        ↓ push to main
   [Vercel] ──── automatic deploy
   ├── Static frontend (CDN-cached)
   ├── API Routes (serverless functions)
   └── Cron jobs (daily Energy Score recalculation)
        ↓ connects via pooled connection string
   [Neon Postgres]
   ├── Serverless (scales to zero when idle)
   ├── 512MB free tier
   └── Connection pooling built-in
```

**Live demo URL** is always available. Neon wakes from cold start in ~500ms, so first request after idle may be slightly slower — acceptable for a portfolio project.

### 6.6 Local Development

**Default path (no containers):**
Developers run `npm run dev` to start the Next.js dev server. Prisma connects to a Neon database branch over the network. Neon supports branching, so local development uses a `dev` branch isolated from production data. Environment setup is: clone the repo, copy `.env.example`, add a Neon connection string, run `npx prisma migrate dev`, seed demo data, and start the dev server. No Docker, no local database install.

**Offline/advanced path (Docker Compose):**
For developers who want fully offline development or want to experiment with TimescaleDB, an optional `docker-compose.yml` provides a local Postgres (or TimescaleDB) instance. Switching between Neon and local Postgres is a single environment variable change (`DATABASE_URL`). This path is documented but not required.

---

## 7. Data Simulator Specification

The simulator is a standalone Python script that generates realistic half-hourly consumption CSVs. It is critical for making the portfolio project demonstrable without requiring access to real smart meter data.

### 7.1 Consumption Profiles

Each business type has a base profile defined by:

- **Baseload (kW):** Minimum power draw (refrigeration, always-on systems, standby)
- **Active load (kW):** Additional draw during operating hours
- **Peak multiplier:** Factor applied during peak hours (e.g. lunch rush for restaurants)
- **Seasonal factor:** Monthly multiplier (higher in winter for heating-dependent businesses)

### 7.2 Realistic Features to Model

- **Weekly pattern:** Different consumption on weekdays vs. weekends (many businesses closed or reduced on Sundays)
- **Seasonal variation:** Higher consumption in winter months (Oct–Mar) for heating, lower in summer; opposite for businesses with significant cooling loads
- **Random variation:** ±10–15% random noise on each half-hourly reading
- **Anomaly injection:** Configurable probability of anomalous events (equipment malfunction, meter fault, heating system failure causing spike)
- **Bank holidays:** Reduced consumption on UK bank holidays
- **Opening hours ramp:** Consumption ramps up over 1–2 half-hour periods at opening, doesn't instantly jump

### 7.3 Output Format

```csv
timestamp,kwh
2025-01-01T00:00:00Z,1.24
2025-01-01T00:30:00Z,1.18
2025-01-01T01:00:00Z,1.21
...
```

---

## 8. Feature Prioritisation (MVP vs. Stretch)

### MVP

| Feature | Rationale |
|---------|-----------|
| Data simulator with 4 business types | Makes the project self-contained and demonstrable |
| Seed script to populate Neon Postgres | Core data pipeline competence |
| Consumption dashboard with interactive charts | Primary visual deliverable |
| Cost calculator with tariff application | Core business logic |
| Octopus Agile tariff API integration (live wholesale prices) | Required for Tier 1 exact comparison; public API, no authentication needed |
| Tariff comparison — Tier 1 (Octopus Agile exact) and Tier 2 (structural modelling) | The "so what" — shows actionable value with honest confidence levels |
| Tariff comparison — Tier 3 (peer benchmarking) | Differentiating feature; grows in value with user base; demonstrates aggregation patterns |
| Quote verification ("Check a Quote") | Lets users test broker/comparison site offers against real data; addresses broker trust problem |
| Consumption profile summary ("Know Your Profile") | Gives users concrete data for switching conversations; complements comparison sites |
| Anomaly detection (spike + baseload) | Demonstrates analytics capability |
| Energy Score | Memorable, differentiating feature |
| Client-side guest mode (Zustand + IndexedDB) | Zero-friction, zero-backend-load demo; showcases isomorphic architecture |
| NextAuth.js authentication (optional upgrade) | Security baseline for persistent accounts |
| Guest-to-account data migration | Demonstrates client-server data handoff pattern |
| OpenAPI documentation | Shows professionalism |
| Vercel + Neon deployment (live URL) | Hiring manager can visit immediately — no local setup |
| Zero-install local dev (`npm run dev` + Neon branch) | Minimal setup friction; clone, configure env, run |
| Optional Docker Compose with TimescaleDB | Shows containerisation competence; enables offline dev and production-grade DB experimentation |
| CI/CD via GitHub Actions | Lint, unit tests, Playwright E2E, and auto-deploy to Vercel on push to main |
| Comprehensive README | Critical for visibility; must document production trade-offs (see §6.2) |

### Stretch Goals (Nice to Have)

| Feature | Rationale |
|---------|-----------|
| PDF report generation (via @react-pdf/renderer) | Demonstrates server-side document generation |
| Octopus Energy account integration (consumption data pull) | OAuth flow + real API consumption; lets Octopus customers auto-import their half-hourly data |
| n3rgy consumer data integration | Supplier-agnostic smart meter data access; demonstrates MPAN-based authentication |
| ~~Octopus Agile tariff API integration~~ | Moved to MVP — required for Tier 1 tariff comparison (see FR-7) |
| Carbon emissions calculation (kWh × grid carbon intensity) | Adds the sustainability/ESG dimension; National Grid Carbon Intensity API is free |
| Multi-business view (portfolio/accountant view) | Demonstrates multi-tenancy patterns |
| Real-time updates via Server-Sent Events | Shows streaming architecture knowledge (simpler than WebSockets, works with serverless) |
| Demand flexibility simulation | Model hypothetical load-shifting scenarios ("what if you ran the dishwashers at 2am?") |
| TimescaleDB local development mode | Docker Compose with TimescaleDB for local dev, demonstrating production-grade time-series queries alongside the Neon deployment (see §6.2) |

---

## 9. Key Domain Concepts to Demonstrate

### Energy Market Knowledge
- **MHHS:** What it is, why it matters, the settlement timeline, profile classes 1–4, MPANs
- **Smart meter data access:** DCC infrastructure, supplier portals, n3rgy, Consumer Access Devices, and why direct meter access is gated behind accreditation
- **Tariff structures:** Flat rate, Economy 7, time-of-use, agile/wholesale-tracking, deemed rates
- **Standing charges:** What they cover, why they vary, the regulatory position
- **Business energy vs. domestic:** No price cap, bespoke contracts, broker intermediaries, VAT differences
- **Government levies:** Renewables Obligation, CfD, FiT, Climate Change Levy — and the BCC's argument for moving these off business bills

### Technical Domain Knowledge
- **Time-series data handling:** Hypertables, continuous aggregates, retention policies
- **Half-hourly intervals:** 48 settlement periods per day (normally), UTC storage vs. Europe/London aggregation, clock change edge cases (46 periods on spring-forward day, 50 on autumn-back day)
- **Statistical anomaly detection:** Z-scores, rolling averages, seasonal decomposition — and why waste detection (out-of-hours, baseload creep) matters more than load-shifting for fixed-schedule businesses
- **Tariff modelling:** Applying multi-rate tariffs to consumption data, handling rate bands and time zones; the distinction between EAC-based quoting and half-hourly-profile-based analysis
- **Peer benchmarking at scale:** Aggregation patterns, anonymisation thresholds, statistical validity with small sample sizes

### Fintech Crossover
- **Energy Score as credit-score analogy:** Standardised risk/efficiency metric, potential use by lenders (Project Perseus)
- **Cost forecasting:** Predicting future energy bills based on consumption trends and forward wholesale prices
- **SME data standardisation:** The challenge of normalising data across different meter types, suppliers, and billing formats

---

## 10. Success Criteria

For the portfolio project, success is measured by:

1. **Demonstrability:** A user can click a live URL and interact with a fully functional dashboard immediately — no sign-up, no login, no local setup. They see real-looking data for a simulated business and can explore every feature as a guest. For those who want to run it locally, `npm run dev` with a Neon connection string is all that's needed — or `docker-compose up` for a fully self-contained local stack with TimescaleDB
2. **Code quality:** Clean, typed, tested code with clear separation of concerns
3. **Domain depth:** The README, API docs, and data models demonstrate genuine understanding of the UK energy market and MHHS
4. **Technical breadth:** The project touches data engineering (pipeline, time-series DB), backend (API, auth, analytics), and frontend (interactive dashboard, charts)
5. **Architectural reasoning:** The README documents conscious trade-offs (Neon vs. TimescaleDB, serverless vs. traditional server, Next.js monorepo vs. separate services) with clear explanations of what changes at production scale
6. **Conversation readiness:** The developer can speak confidently about the problem space, the research behind it, and the technical decisions made — including why they chose free-tier infrastructure for the demo and what they'd change for a production system handling millions of meter points

---

## 11. Appendix: Research Sources

This PRD is grounded in primary desk research and community analysis. Key sources:

| Source | Report/Finding | Date |
|--------|---------------|------|
| BCC | "Powering Growth: Resetting Energy Costs for Businesses" — 27% of businesses struggling to pay bills, 52% citing utilities as cost pressure, 106% price increase since 2018 | February 2026 |
| Carbon Trust | "SMEs and Energy Efficiency" — 68% without energy policy, 46% citing lack of time/money as barrier, 80% taking some action but 51% wanting to do more | 2019 |
| Energy UK | "Small Business, Big Impact" — 52% smart meter penetration in non-domestic, only 28% using renewable tariffs, Project Perseus case study on SME data gaps | 2023 |
| CBI / Energy UK | "Cutting Business Energy Costs" — 90% of businesses saw costs rise, 40% cutting investment, £2bn SME energy debt | May 2025 |
| Ofgem | MHHS Full Business Case — £1.56bn–£4.51bn net benefits estimate, April 2021 decision | April 2021 |
| SME Climate Hub | 3rd Annual Survey — 39% say lack of emissions data hampers action, 52% cite lack of incentives | 2024 |
| FSB | Energy research — 44% of small firms saw costs double or triple | November 2022 |
| FSB | "New Growth: How to support small businesses to cut carbon and costs on the road to Net Zero" — only 26% have appropriate knowledge for net zero, 61% say lower energy bills are the top incentive for low-carbon action, 38% cite lack of capital as barrier, only 15% have measured carbon footprint | May 2025 |
| UKBusinessForums | Multiple threads — standing charge shocks (£9–£32/day), broker mis-selling, no comparison tools, 400%+ price increases | 2022–2024 |
| MoneySavingExpert | Forum threads — business vs. domestic tariff confusion, broker avoidance advice | 2024–2025 |

Full research outputs available in `desk-research-findings.md` and `forum-research-findings.md`.
