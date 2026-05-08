# Competitive Landscape: Wattwise vs. Existing Platforms

**Date:** April 2026
**Purpose:** Map the platforms that exist in or adjacent to Wattwise's space, understand what each does, and articulate how Wattwise is differentiated. Useful for sharpening product positioning.

---

## TL;DR

The market breaks into a few categories. At the top end you have hardware-based monitoring platforms like Envisij and Hark, and enterprise energy management software like Stark and SystemsLink — these serve commercial and industrial organisations with dedicated energy teams, not SMEs. Then you have comparison sites like Love Energy Savings and Bionic, which help businesses switch suppliers at contract renewal — but their quotes are based on Estimated Annual Consumption, which says nothing about when energy is used. Two businesses with the same annual usage can have completely different profiles, but they get the same quotes. On the consumer side, apps like Loop and Hugo give households smart meter visibility, but they don't address business-specific needs like bespoke contract modelling or standing charge validation. And suppliers like Octopus and Yü offer basic dashboards to their own customers, but these are locked to one supplier and don't compare alternatives.

What doesn't exist is a free, supplier-agnostic tool that takes a small business's half-hourly data and turns it into actionable cost intelligence — tariff simulation, anomaly detection, benchmarking, and quote verification. Wattwise is designed to complement those comparison sites, not replace them: it gives the business owner a detailed consumption profile to take into a switching conversation, and then lets them test any quote against their real half-hourly data before signing. With MHHS making half-hourly data universally available for the first time, the timing is right for it.

---

## How to Read This Document

The platforms are grouped into five categories based on their primary function. Some platforms span multiple categories, but each is listed under its dominant one. For each platform, the analysis covers what it does, who it serves, and a clear differentiation statement explaining how Wattwise occupies a different position.

Wattwise's positioning in one sentence: **a free, self-serve, zero-hardware web app that helps UK SMEs understand their energy costs using half-hourly smart meter data — with tariff comparison, anomaly detection, and an Energy Score — requiring nothing more than a CSV upload to get started.**

---

## Category 1: Hardware-Based Energy Monitoring Platforms

These platforms require physical devices to be installed in a building. They provide granular, real-time, circuit-level monitoring. They are the "install sensors on your fuseboard" end of the market.

---

### 1. Envisij

**What it does:** Envisij provides IoT monitoring hardware (4G/WiFi "Auditors" with CT clamps) and cloud-based dashboards (UtilitySMART, EnergyAnalytics) for commercial buildings. The hardware clips onto individual circuits to monitor energy use at the asset level. Their SWITCH Auditors include relay controls that can turn circuits on/off remotely through the cloud — active demand management, not just monitoring. They also offer CarbonSMART for SECR compliance reporting and energy consultancy services.

**Who it serves:** Commercial and industrial building operators — facilities managers, energy managers, multi-site estates. Organisations with the budget and expertise to commission a monitoring system.

**Pricing:** Not published. Sales-led, custom quoting — typical of enterprise/B2B energy services.

**How Wattwise is different:** Wattwise requires zero hardware. It works with data that already exists (smart meter readings via CSV or API), not data from devices you have to buy and install. The target user is a small business owner without an energy manager, facilities team, or capital budget for monitoring equipment. Envisij solves "which circuit in my building is wasting energy?" — Wattwise solves "am I on the right tariff and is my bill correct?" These are fundamentally different problems for fundamentally different users.

**Source:** [Envisij Energy Monitoring](https://www.envisij.com/energy-monitoring)

---

### 2. Hark

**What it does:** Hark provides a cloud platform for real-time energy and asset monitoring with custom dashboards, automations, and machine learning analytics. Like Envisij, it connects to physical sensors and meters across a building estate. Its differentiator is automated control — peak shaving programmes that automatically reduce consumption at peak times, and interconnectivity between generation assets (solar PV), storage (batteries), and measurement devices.

**Who it serves:** Commercial and industrial organisations with complex energy infrastructure — factories, data centres, large retail estates. Companies that have generation and storage assets to optimise, not just consumption to monitor.

**Pricing:** Not published. Enterprise sales model.

**How Wattwise is different:** Hark is for organisations that have solar panels, batteries, and industrial assets to orchestrate. Wattwise is for a restaurant owner who wants to know if their standing charge is reasonable. The complexity gap is enormous. Hark's value proposition is automated energy optimisation across a portfolio of physical assets; Wattwise's is cost transparency and tariff comparison for a single small business using data they already have. No sensors, no asset orchestration, no capital expenditure.

**Source:** [Hark Energy Management](https://harksys.com/)

---

### 3. GridBeyond

**What it does:** GridBeyond provides an AI-powered Virtual Power Plant (VPP) platform that integrates battery storage, solar panels, generators, and other on-site assets into a single system. It uses machine learning to decide how energy should be generated, stored, consumed, or traded to maximise revenue. It also provides access to electricity markets (demand-side response, frequency response, capacity market) so businesses can earn revenue from their flexibility.

**Who it serves:** Large energy-intensive businesses with distributed energy resources — manufacturers, cold storage, water utilities. Companies that can shift or curtail load and want to monetise that flexibility.

**Pricing:** Not published. Enterprise.

**How Wattwise is different:** GridBeyond operates in the energy trading and grid services space — it helps large businesses make money from their energy flexibility. Wattwise doesn't touch demand-side response, energy trading, or asset orchestration. The target users are at completely opposite ends of the market. A 10-person café is never going to participate in the capacity market. Wattwise helps them understand their bill; GridBeyond helps industrial consumers trade their energy assets.

**Source:** [GridBeyond](https://gridbeyond.com/)

---

## Category 2: Enterprise Energy Management Software

These are cloud-based platforms for organisations with dedicated energy or sustainability teams. They handle large meter estates, compliance reporting, and multi-site portfolio management. No hardware required, but they assume professional energy management expertise.

---

### 4. Stark

**What it does:** Stark is a full-service energy data, metering, analytics, and infrastructure company. Their Stark ID platform is a multi-utility energy management dashboard that aggregates data from electricity, gas, and water meters across an estate. Features include league tables comparing site performance, live data feeds, tailored alerts, and EV charger data integration. They also provide metering installation services and invoice validation.

**Who it serves:** Stark manages over 33% of the UK Industrial & Commercial energy market. Their clients are large organisations with hundreds or thousands of meter points — supermarket chains, NHS trusts, university estates. Over 70 energy consultancies use their platform to manage 350,000+ meter points.

**Pricing:** Not published. Enterprise.

**How Wattwise is different:** Stark is infrastructure for professional energy managers. It manages hundreds of thousands of meter points for multi-site estates. Wattwise manages one business's data for one business owner. The overlap is that both present energy consumption data on a dashboard — but the user, the scale, the complexity, and the price point are entirely different. A small business owner would never encounter Stark, and Stark would never target them.

**Source:** [Stark](https://www.stark.co.uk/)

---

### 5. SystemsLink

**What it does:** SystemsLink is energy management software used primarily by energy consultancies, local authorities, and large organisations. It handles data collection from meters (AMR, EDI, CSV, supplier invoices), monitoring and targeting, invoice validation, carbon reporting, recharging (allocating costs to tenants/departments), and compliance (ISO 50001, SECR, ESOS). It has been operating since 1993 and manages over £1.5 billion of annual electricity spend.

**Who it serves:** Energy consultancies (70+ use it to manage client portfolios), local government, NHS, universities, and large private-sector organisations. Over 10,000 users. It is fundamentally a tool for energy professionals, not end-users.

**Pricing:** Not published. Enterprise licensing.

**How Wattwise is different:** SystemsLink is the energy equivalent of enterprise accounting software — powerful, comprehensive, and designed for specialists. Wattwise is the equivalent of a personal finance app. SystemsLink users are energy consultants managing thousands of meters across dozens of clients. Wattwise users are business owners managing one electricity bill. The technical depth is different (SystemsLink handles multi-utility, recharging, compliance frameworks), but so is the accessibility. A shop owner would never buy or use SystemsLink.

**Source:** [SystemsLink](https://systems-link.com/)

---

### 6. EnergyElephant

**What it does:** EnergyElephant is a cloud-based energy and sustainability management platform. It aggregates data from utility bills (PDF, CSV, Excel, EDI, XML uploads), real-time sensors, and automated imports into a central dashboard. Features include cost tracking, carbon reporting (Scope 1, 2, 3), project tracking (measure energy savings before/after interventions), ISO 50001 compliance automation, and executive dashboards.

**Who it serves:** SMEs through to enterprise, but in practice targets organisations with a sustainability or energy management function — those who need to report on emissions, track projects, and manage multi-site utility data. Commonly used in education, local government, and mid-sized businesses with ESG obligations.

**Pricing:** Listed on Capterra; appears to be subscription-based with tiered pricing. Not free.

**How Wattwise is different:** EnergyElephant is the closest platform to Wattwise in the enterprise management category, because it does serve some SMEs and it accepts bill uploads rather than requiring hardware. However, its focus is compliance and sustainability reporting (ISO 50001, carbon scopes, project tracking) rather than cost transparency and tariff comparison. It doesn't offer tariff simulation, anomaly detection focused on billing errors, or an Energy Score. And it's a paid product targeting organisations that have reporting obligations. Wattwise targets the much larger population of small businesses that have no energy policy at all (68%, per Carbon Trust) and just want to know "am I paying too much?"

**Source:** [EnergyElephant](https://energyelephant.com/)

---

## Category 3: Business Energy Comparison / Switching Sites

These are the platforms that SMEs actually encounter today when trying to deal with their energy costs. They help businesses compare supplier quotes and switch contracts. They are brokers or broker-adjacent.

---

### 7. Love Energy Savings

**What it does:** Love Energy Savings is one of the UK's largest business energy comparison platforms. Businesses enter their postcode and current usage, and the platform returns quotes from 30+ suppliers. The switching process can be completed online in minutes. They also cover business water and broadband. No personal details required to see a comparison.

**Who it serves:** Micro-businesses and SMEs looking to switch energy supplier. The experience is modelled on domestic comparison sites (Uswitch, Compare the Market) but for business energy.

**Pricing:** Free to the user. Revenue comes from supplier commissions on completed switches.

**How Wattwise is different:** Love Energy Savings helps you find a cheaper deal at the point of contract renewal. Wattwise helps you understand your energy consumption year-round and make ongoing, data-informed decisions. Love Energy Savings doesn't analyse your half-hourly usage, detect anomalies, calculate an Energy Score, or show you what you'd save on a time-of-use tariff based on your actual consumption pattern. It's a transactional tool (compare quotes → switch) rather than an analytical one (understand usage → optimise costs → verify bills). Critically, Love Energy Savings quotes are based on Estimated Annual Consumption (EAC) — a single annual number that says nothing about when energy is used. Two businesses with the same EAC can have very different consumption profiles, but they receive the same quotes. The two products are complementary rather than competitive: a Wattwise user goes to Love Energy Savings armed with their consumption profile summary and knows which tariff structures suit their usage pattern, then uses Wattwise's quote verification feature to test any offer against their actual half-hourly data before signing.

**Source:** [Love Energy Savings](https://www.loveenergysavings.com/)

---

### 8. Bionic

**What it does:** Bionic is a comparison and switching service for small businesses covering energy, broadband, insurance, and phone. It combines an online comparison interface with a team of 500+ advisors who guide businesses through the switching process by phone. It positions itself as a "comparison site plus broker" — more hand-holding than a pure self-serve platform.

**Who it serves:** Over 200,000 small business customers. Targets businesses that want help navigating energy contracts, not just a list of quotes.

**Pricing:** Free to the user. Commission-based, like Love Energy Savings.

**How Wattwise is different:** The same fundamental distinction as Love Energy Savings — Bionic is about switching supplier at contract renewal; Wattwise is about ongoing consumption intelligence. Bionic also represents the broker model that our research identified as a pain point: commission-funded, opaque about how much the broker earns, and incentivised to push contracts that maximise commission rather than minimise cost. Wattwise has no supplier relationships and takes no commissions. It gives the business owner independent data to negotiate from — and crucially, lets them verify a Bionic advisor's recommendation by modelling the proposed tariff against their actual half-hourly consumption before signing anything.

**Source:** [Bionic](https://bionic.co.uk/)

---

### 9. British Business Energy / BusinessEnergyUK / GoCompare Business

**What they do:** A cluster of smaller comparison sites that operate similarly to Love Energy Savings — enter your details, get quotes, switch online. Some are white-label versions of the same underlying comparison engines. British Business Energy was acquired by Love Energy Savings. BusinessEnergyUK and GoCompare Business offer similar self-serve comparison journeys.

**Who they serve:** SMEs at the point of contract renewal.

**How Wattwise is different:** Same distinction as above. These are transactional switching tools. They don't touch consumption data, can't tell you if your current bill has anomalies, and don't model what you'd pay on a different tariff structure based on your actual half-hourly usage pattern. Their quotes are based on EAC, not on when you actually use energy. Wattwise provides the analytical foundation that makes switching decisions informed — a user takes their consumption profile summary to these sites, gets quotes, then verifies those quotes against their real data in Wattwise before committing.

**Sources:** [British Business Energy](https://britishbusinessenergy.co.uk/), [BusinessEnergyUK](https://www.businessenergyuk.com/), [GoCompare Business](https://www.gocompare.com/gas-and-electricity/business-energy/)

---

## Category 4: Consumer Smart Meter Apps

These apps let individuals (and sometimes small businesses) view their smart meter data. They're the closest thing to what Wattwise does, but they target domestic households, not businesses.

---

### 10. Loop (by Trustpower)

**What it does:** Loop is a free app that connects to your smart meter via the DCC (Data Communications Company) and displays your electricity and gas usage by hour, day, month, and year in kWh and £. It includes appliance cost estimation, energy-saving tips, a solar panel simulator, and Alexa integration. It also runs "Turn Down and Save" demand response schemes where users earn rewards for reducing consumption at peak times.

**Who it serves:** UK households with smart meters. Loop claims its average user cuts energy use by 15% (saving ~£250/year for a typical household).

**Pricing:** Free. Funded by partnerships and demand response programmes.

**How Wattwise is different:** Loop is domestic-only and doesn't address business energy at all. Business energy has different tariff structures (no price cap, bespoke contracts, standing charge variation, broker intermediaries), different usage patterns (operating hours, seasonal business cycles), and different comparison needs (time-of-use modelling, custom contract terms). Loop also doesn't offer tariff comparison against your actual half-hourly pattern, anomaly detection for billing errors, or an Energy Score. It's a household energy awareness tool; Wattwise is a business cost intelligence tool.

**Source:** [Loop](https://loop.homes/)

---

### 11. Bright App (by Hildebrand / Glow)

**What it does:** The Bright App connects to SMETS2 smart meters via the DCC and displays real-time and historical energy consumption. Hildebrand also sells a physical Glow IHD (In-Home Display) and CAD (Consumer Access Device) that provides real-time data and exposes it via API and MQTT — making it popular with home automation enthusiasts (especially Home Assistant users). The API provides 30-minute, hourly, or daily data.

**Who it serves:** Primarily domestic consumers and smart home / home automation hobbyists. The API and MQTT integration makes it a favourite for technically inclined users who want to build custom energy dashboards.

**Pricing:** The app is free. The Glow IHD/CAD hardware is a one-time purchase (~£50–80). API access is free with a Bright App account.

**How Wattwise is different:** Hildebrand/Bright is fundamentally a data access layer, not an analytics product. It gets meter data out of the DCC and into your hands (or your Home Assistant setup). It doesn't interpret that data for business purposes — no tariff comparison, no anomaly detection, no Energy Score, no business-type benchmarking. It's a great data source (and the n3rgy integration in Wattwise's stretch goals serves a similar purpose), but it's not a competitor — it's potentially an upstream data provider. Also entirely domestic-focused.

**Source:** [Hildebrand Glow](https://shop.glowmarkt.com/)

---

### 12. Hugo Energy

**What it does:** Hugo is a free smart meter app that displays gas and electricity usage in kWh or £, with daily/weekly/monthly/yearly views. Features include budget targets with alerts, tariff comparison and in-app switching, carbon footprint tracking, and community energy-saving tips. Hugo Pro is a premium offering adding solar, EV, and battery integration.

**Who it serves:** UK households. Hugo has planned (but not yet launched) a multi-property feature for landlords, but the core product is domestic.

**Pricing:** Free (standard app). Hugo Pro is a paid upgrade.

**How Wattwise is different:** Hugo is domestic and doesn't address any of the business-specific pain points: bespoke contract terms, broker intermediaries, standing charge validation, business-type benchmarking, or time-of-use modelling for commercial consumption patterns. Its tariff comparison is a switching service (finding a cheaper domestic deal) rather than a simulation engine (modelling what you'd pay on different structures against your actual half-hourly data). Hugo also doesn't offer anomaly detection or an Energy Score.

**Source:** [Hugo Energy App](https://hugoenergyapp.co.uk/)

---

## Category 5: Supplier-Provided Analytics

Some energy suppliers offer their own analytics dashboards as a value-add for customers.

---

### 13. Yü Analytics (Yü Energy)

**What it does:** Yü Energy (a UK business energy supplier) offers Yü Analytics as a free dashboard for its business customers. It shows half-hourly consumption data, highlights patterns and anomalies, identifies highest/lowest consuming sites, and presents data in kWh, cost, or carbon equivalent. Users can request their half-hourly data for SMETS or AMR meters free of charge.

**Who it serves:** Yü Energy's own business customers only. Not available to businesses on other suppliers.

**Pricing:** Free to Yü Energy customers.

**How Wattwise is different:** Yü Analytics is supplier-locked — it only works if you're a Yü Energy customer. Wattwise is supplier-agnostic; it works with any business's consumption data regardless of who supplies their energy. Yü Analytics also has no tariff comparison engine (it's not going to show you that you'd be cheaper with a competitor), no Energy Score, and no anomaly detection focused on billing errors or standing charge validation. It's a customer retention tool for one supplier, not an independent analytics platform.

**Source:** [Yü Analytics](https://www.yuenergy.co.uk/energy-solutions/yu-analytics/)

---

### 14. Octopus Energy Business Dashboard

**What it does:** Octopus Energy provides its business customers with an online dashboard showing monthly, daily, and half-hourly consumption data, with the ability to export data as CSV. The Octopus API (well-documented and publicly accessible) allows programmatic access to consumption and tariff data. A thriving community of developers has built third-party dashboards on top of this API (Grafana, Home Assistant, custom React apps).

**Who it serves:** Octopus Energy business customers. The API ecosystem extends to hobbyist developers.

**Pricing:** Free to Octopus customers. API is free.

**How Wattwise is different:** Like Yü Analytics, the native Octopus dashboard is supplier-locked. It shows your consumption but doesn't model what you'd pay on a competitor's tariff, doesn't detect billing anomalies, and doesn't benchmark you against similar businesses. The Octopus API is actually an opportunity for Wattwise, not a competitor — it's one of the data ingestion paths in the PRD's stretch goals. Wattwise adds the analytical layer (tariff simulation, anomaly detection, Energy Score) on top of data that Octopus makes available but doesn't itself interpret.

**Source:** [Octopus Energy API Guide](https://www.guylipman.com/octopus/api_guide.html)

---

## Category 6: Smart Meter Data Access Services

Not analytics platforms, but infrastructure that enables data access. Included because they are part of the ecosystem Wattwise depends on.

---

### 15. n3rgy

**What it does:** n3rgy provides consumers (domestic and business) with free API access to their own smart meter data, regardless of their energy supplier. Users register their MPAN and IHD MAC address, and the API returns half-hourly consumption and tariff data. n3rgy also offers a B2B SaaS platform that enables any organisation to collect smart meter data (with consent) for analytics, lending, or ESG products.

**Who it serves:** Consumers who want programmatic access to their own data; and businesses building products on top of smart meter data (energy apps, green mortgage lenders, carbon reporting tools).

**Pricing:** Free for consumers. B2B platform is commercial.

**How Wattwise is different:** n3rgy is a data pipe, not an analytics product. It doesn't visualise consumption, compare tariffs, detect anomalies, or calculate an Energy Score. It's a potential integration partner — the PRD lists n3rgy as a stretch goal for supplier-agnostic data ingestion. The relationship is complementary: n3rgy solves "how do I get my smart meter data out?", Wattwise solves "what do I do with it once I have it?"

**Source:** [n3rgy](https://www.n3rgy.com/consumer/)

---

## Summary: Where Wattwise Sits

| Category | Platforms | Serves SMEs? | Requires hardware? | Tariff comparison? | Quote verification? | Anomaly detection? | Free? |
|----------|-----------|-------------|-------------------|-------------------|-------------------|-------------------|-------|
| Hardware monitoring | Envisij, Hark, GridBeyond | No (C&I) | Yes | No | No | Some | No |
| Enterprise software | Stark, SystemsLink, EnergyElephant | Rarely | No | No | No | Some | No |
| Comparison/switching | Love Energy, Bionic, GoCompare | Yes | No | Quotes (EAC-based) | No | No | Yes* |
| Consumer apps | Loop, Bright, Hugo | Domestic only | No (or optional) | Basic | No | No | Yes |
| Supplier dashboards | Yü Analytics, Octopus | Own customers | No | No | No | Limited | Yes** |
| Data access | n3rgy | Yes | No | No | No | No | Yes |
| **Wattwise** | — | **Yes (primary)** | **No** | **Yes (simulation)** | **Yes** | **Yes** | **Yes** |

\* Free to user; funded by supplier commissions
\** Free to supplier's own customers only

The gap Wattwise fills: there is no free, supplier-agnostic, self-serve tool that combines half-hourly consumption analytics, tariff simulation against actual usage patterns, billing anomaly detection, business-type benchmarking, and quote verification — specifically for UK SMEs. The hardware platforms serve larger organisations. The enterprise software assumes professional energy management. The comparison sites help at the point of switching but base quotes on annual consumption estimates, not actual usage profiles — and they don't provide ongoing intelligence. The consumer apps are domestic-only. The supplier dashboards are locked to one supplier and don't compare competitors. Wattwise sits in the white space between all of these, and is specifically designed to complement comparison sites and brokers: the user understands their profile in Wattwise, takes that knowledge to a comparison site or broker, then returns to Wattwise to verify any offer against their real half-hourly data before signing.
