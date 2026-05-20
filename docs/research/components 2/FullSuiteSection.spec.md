# FullSuiteSection Specification

## Overview
- **Target file:** `src/components/FullSuiteSection.tsx`
- **Screenshot:** `docs/design-references/kiln-section-4000.png`, `docs/design-references/kiln-section-4800.png`, `docs/design-references/kiln-section-5600.png`
- **Interaction model:** scroll-driven reveal (IntersectionObserver fade-in as cards enter viewport)

## DOM Structure
```
<section>
  <p class="label">SERVI<strong>CES</strong></p>
  <h2>A full-suite of services to unlock your <em>growth</em></h2>
  <p class="subtitle">Leverage new sales tech the smart way.</p>
  
  <div class="two-col-layout">
    <div class="left-col">
      <FeatureCard title="Create systems that allow you to sell, not prepare to sell" ... />
      <FeatureCard title="Deeply researched enrichment beyond conventional data providers" ... />
      <FeatureCard title="Take full advantage of the new GTM tool stack" ... />
    </div>
    
    <div class="center-line">
      <div class="line-top" />
      <div class="kiln-icon">⊞</div>  ← The Kiln logo icon
      <div class="line-bottom" />
    </div>
    
    <div class="right-col">
      <FeatureCard title="Ensure your data is actually usable" ... />
      <FeatureCard title="Make inbound leads actionable before they fall off the vine" ... />
      (spacer to offset from top)
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 80px
- textAlign: center

### H2 "A full-suite of services to unlock your *growth*"
- fontSize: 64px, fontWeight: 700, letterSpacing: -3.2px, lineHeight: 64px
- "growth" is italic
- maxWidth: 800px, margin: 0 auto 20px

### Two-column layout
- display: grid
- gridTemplateColumns: 1fr 60px 1fr  ← two content cols with center column for the line
- gap: 0
- maxWidth: 1200px
- margin: 60px auto 0
- padding: 0 24px
- alignItems: start

### Center line column
- display: flex
- flexDirection: column
- alignItems: center
- position: relative

### Vertical line
- width: 1px
- backgroundColor: rgb(17, 17, 17)
- opacity: 0.15
- flex: 1
- minHeight: 200px

### Kiln icon in center
- The Kiln logo icon ⊞ (grid of 4 squares)
- width: 32px, height: 32px
- backgroundColor: rgb(255, 255, 255)
- border: 1px solid rgba(0,0,0,0.12)
- borderRadius: 8px
- padding: 6px
- margin: 12px 0

### Left column
- display: flex
- flexDirection: column
- gap: 24px
- paddingRight: 32px
- paddingTop: 0

### Right column
- display: flex
- flexDirection: column
- gap: 24px
- paddingLeft: 32px
- paddingTop: 200px  ← offset down to stagger with left column

## Feature Card Styles (same as HowWeWork but different backgrounds)

### Card container
- borderRadius: 24px
- padding: 28px 32px
- display: flex
- flexDirection: column
- alignItems: flex-start
- gap: 16px

Card backgrounds alternating:
- rgb(247, 247, 245) — lightest off-white
- rgb(242, 240, 233) — warm off-white
- rgb(238, 238, 238) — slightly gray

### 3D Illustration (top of card)
- width: ~160px
- height: ~120px
- objectFit: contain
- alignSelf: flex-end or center

### Card title
- fontSize: 22px
- fontWeight: 700
- lineHeight: 26px
- letterSpacing: -0.3px
- color: rgb(17, 17, 17)

### Card description
- fontSize: 15px
- fontWeight: 500
- lineHeight: 22px
- color: rgb(17, 17, 17)
- opacity: 0.65

## Per-Card Content

### Left Col Card 1: Sell, not prepare
- **Title:** "Create systems that allow you to sell, not prepare to sell"
- **Description:** "The Kiln helps create sales enablement processes that give your sales team more time to close deals. Done are the days of researching, copywriting, and alternating between different tools."
- **Illustration:** 3D gears/cogs image

### Left Col Card 2: Enrichment
- **Title:** "Deeply researched enrichment beyond conventional data providers"
- **Description:** "If the information you're looking for can be found somewhere, we can help you find it at scale. We help create custom AI agents that scrape unstructured data with shocking accuracy."
- **Illustration:** 3D magnifying glass / research image

### Left Col Card 3: GTM Tool Stack
- **Title:** "Take full advantage of the new GTM tool stack"
- **Description:** "Tools like Clay are powerful and complex. The Kiln helps spark new ideas on how to use them effectively, while integrating the existing stack you've worked so hard to build."
- **Illustration:** 3D tools / wrench image

### Right Col Card 1: Data usability
- **Title:** "Ensure your data is actually usable"
- **Description:** "CRMs are useless if the data in them is stale or messy. Our systems help clean and normalize data to make your CRM a true source of truth again."
- **Illustration:** 3D broom / cleaning image

### Right Col Card 2: Inbound leads
- **Title:** "Make inbound leads actionable before they fall off the vine"
- **Description:** "We can aggregate leads from your marketing initiatives, score them on just about any criteria, and then create processes that actually take action on them."
- **Illustration:** 3D fruit/vine or funnel image

## Assets
Download all 3D illustration images from framerusercontent CDN (see download-assets script)

## Responsive Behavior
- **Desktop (1440px):** 2-column layout with center divider line
- **Mobile (390px):** Single column, center line hidden, all cards stacked
