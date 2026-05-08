# Wattwise: What It Is and Why It Exists

## The Problem in One Sentence

UK small businesses are haemorrhaging money on energy because the market is designed against them — and they have no tools to fight back.

---

## Who Is This For?

Wattwise is for UK small and medium-sized business owners who have physical premises — a shop, a restaurant, a workshop, a small office, a factory floor. These are people whose energy bill is a significant and growing line item, but who don't have the time, expertise, or tools to do anything about it other than pay whatever lands in their inbox.

The businesses hit hardest are in hospitality (72% cite utilities as a cost pressure), manufacturing (60%), and retail. They typically employ 1–50 people and spend between £2,000 and £50,000 a year on energy. Most of them manage their energy by doing one of two things: paying the bill without scrutiny, or handing the problem to a broker they don't fully trust.

A secondary audience is accountants and bookkeepers who manage energy costs on behalf of multiple SME clients and need a clearer picture of what those clients are spending and why.

---

## Why Do They Need This?

The UK business energy market has a set of structural problems that don't exist on the domestic side. Understanding these is key to understanding why Wattwise exists.

**There is no price cap for businesses.** Households are protected by Ofgem's energy price cap, which limits what suppliers can charge per unit. Businesses get no such protection. They negotiate individual contracts, often through brokers, and the terms are opaque. Two identical shops on the same street can be paying wildly different rates, and neither would know.

**There are no comparison tools.** Domestic consumers can go to Uswitch or Compare the Market and see what they'd pay with a different supplier in about two minutes. Nothing equivalent exists for business energy. The market is intermediated by brokers, many of whom have been involved in widespread mis-selling — hidden commissions, inflated consumption figures, verbal contract manipulation. Over £290 million has been paid back to businesses over the past decade because of broker non-disclosure.

**Bills are incomprehensible.** A business energy bill bundles together unit costs, standing charges, government levies (Renewables Obligation, Contracts for Difference, Climate Change Levy), supplier margins, and VAT — most of which are invisible or unexplained to the business owner. Forum posts show business owners blindsided by standing charges jumping from 56p/day to £32/day, or being told their consumption was three times what it actually was.

**A new data source just became available — and nobody is using it.** The UK's Market-Wide Half-Hourly Settlement (MHHS) reform went live in September 2025. For the first time, every business with a smart meter generates granular consumption data every 30 minutes. This data could power real insight — waste detection, billing validation, benchmarking, informed switching — but no self-serve tool exists to help SMEs actually use it. MHHS awareness among small business owners is effectively zero.

---

## What Does Wattwise Actually Do?

At the highest level, Wattwise answers five questions. The first three are relevant to every SME; the last two add additional value for businesses with flexible demand or who are actively switching.

### 1. "Where am I wasting energy?"

The businesses hardest hit by energy costs — restaurants, shops, workshops, small factories — mostly operate on fixed schedules. They can't shift when they use energy: a restaurant can't cook lunch at 3am because electricity is cheaper. But what half-hourly data reveals is energy being consumed *when the business is closed*. Extraction fans running overnight. Heating on before anyone arrives. Equipment left on over the weekend. HVAC cycling through the night.

On a monthly bill, this waste is invisible — it's just part of the total. With half-hourly data, it's immediately obvious. Wattwise overlays business operating hours on the consumption chart, so out-of-hours usage jumps out visually. It tracks overnight baseload over time and flags when it creeps up — a sign of equipment degradation, faulty controls, or something simply being left on. For fixed-schedule businesses, this is where half-hourly data delivers the most immediate, actionable savings.

### 2. "Is my bill actually right?"

Wattwise applies the business's actual tariff to their half-hourly consumption data and shows a transparent cost breakdown: unit costs, standing charges, levies, VAT. This makes it possible to verify that what you're being billed matches what you actually used. It flags standing charge anomalies — directly addressing the forum finding of businesses being charged £9–£32/day through broker mis-selling with inflated consumption estimates. It catches discrepancies between billed and actual consumption that would be invisible on a summary bill.

### 3. "How do I compare to similar businesses?"

The Energy Score — a 0–100 rating modelled on a credit score — benchmarks the business against published consumption data for its type and size. It factors in consumption efficiency, cost efficiency, and anomaly frequency. "Your restaurant uses 40% more per square foot than comparable businesses" is actionable even if you can't change when you use energy, because it tells you there's likely an efficiency problem worth investigating. Peer benchmarking also compares the business's effective rate (total cost ÷ total consumption) against anonymised data from other Wattwise users, providing a market signal on whether you're paying more than similar businesses.

### 4. "Is this quote actually good for me?"

When a business goes to a comparison site like Love Energy Savings or gets a recommendation from a broker, the quotes are based on Estimated Annual Consumption (EAC) — a single number that says "you use roughly X kWh per year." The problem is that an EAC says nothing about *when* that energy is used. Two businesses with identical annual consumption can have completely different profiles — one might use 60% of its energy off-peak, the other 80% at peak — but they receive the same quotes.

Wattwise fills this gap in two ways. First, it generates a plain-language **consumption profile summary** — annual total, peak vs. off-peak split, baseload, seasonal shape — that the business owner can bring to a switching conversation. Instead of "I think we spend about £500 a month," they can say "our annual consumption is 28,000 kWh, 58% off-peak, with a 1.8kW overnight baseload." That's a fundamentally different negotiating position. Second, it lets the user **test any quote against their real data**. If a broker offers a two-rate tariff at specific unit rates, the business owner enters those terms into Wattwise and sees what they'd actually pay based on their half-hourly consumption — not an EAC estimate. If the broker's savings claim doesn't hold up against the actual usage pattern, that's visible before anything gets signed.

This positions Wattwise not as a replacement for comparison sites or brokers, but as the tool you use *before and after* them.

### 5. "Would a different tariff structure save me money?"

The tariff comparison engine works at three levels of confidence. The strongest comparison is against **Octopus Shape Shifters: Agile** — the UK's first half-hourly wholesale-tracking tariff for small businesses (launched November 2025). Because Octopus publishes their half-hourly prices via a free public API, Wattwise can calculate exactly what the business would have paid on Agile over any historical period. Beyond that, Wattwise models what the business would pay under different tariff structures (two-rate day/night, generic time-of-use) using representative rate differentials — directional guidance on whether their tariff type suits their usage pattern.

This is most relevant to businesses with some demand flexibility — offices with EV charging, warehouses with schedulable processes, businesses with battery storage — where shifting consumption to cheaper periods is actually possible. But it also works in reverse for fixed-schedule businesses: it can reveal that a business on a time-of-use tariff is actually *losing* money because their usage is peak-concentrated, and they'd be better off on a flat rate.

Wattwise is not a broker and does not provide live supplier quotes. What it gives the business owner is evidence — to take to a supplier or broker and negotiate from a position of knowledge rather than dependence.

---

## Why Would Someone Come Back?

The initial hook is curiosity and cost anxiety: "Am I wasting money?" The ongoing value is monitoring. Equipment degrades. Controls fail. Staff habits change. Seasons turn. A fridge compressor that starts cycling more frequently, a heating system that kicks in an hour earlier than it should, a new piece of equipment that nobody realised was drawing power 24/7 — these things accumulate silently on a monthly bill but show up clearly in half-hourly data. Wattwise watches for these changes and surfaces them before they become costly surprises.

For a business that uploads fresh data periodically (or connects via API for automatic syncing), Wattwise becomes the energy equivalent of a bank statement app: a place to check in, see if anything looks wrong, confirm your bills are accurate, and understand whether your costs are in line with what similar businesses are paying.

---

## What This Is Not

Wattwise is not a supplier switching service. It doesn't negotiate contracts or take commissions. It's not a broker — it's the tool you use before and after talking to a broker or comparison site. Before, to understand your consumption profile so you can ask for the right kind of tariff. After, to verify that what you've been offered actually suits your usage pattern. It gives the business owner the information they'd otherwise be paying a broker to provide (or worse, trusting a broker to provide honestly).

It's also not an IoT platform or a building management system. It works with data that already exists (smart meter readings) rather than requiring new hardware. The barrier to entry is deliberately low: upload a CSV, see your dashboard.

---

## The Bigger Picture

The research behind Wattwise paints a consistent picture across multiple authoritative sources (BCC, Carbon Trust, FSB, Energy UK, CBI, Ofgem): UK SMEs are under sustained energy cost pressure, structurally disadvantaged compared to households, and largely disengaged from understanding their own consumption. 68% have no energy policy. Only 26% feel they have appropriate knowledge to manage their energy transition. 61% say lower energy bills would be the single biggest incentive to take action.

The gap isn't awareness that energy costs too much — every business owner already knows that. The gap is the absence of any accessible tool that translates raw consumption data into clear, actionable, pound-denominated insight. That's what Wattwise is for.
