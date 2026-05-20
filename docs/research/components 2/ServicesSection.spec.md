# ServicesSection Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **Screenshot:** `docs/design-references/kiln-section-800.png`, `docs/design-references/kiln-section-1600.png`
- **Interaction model:** static

## DOM Structure
```
<section>
  <div class="label">SERVI<span>CES</span></div>   ← mixed weight
  <h2>All-in-one GTM services that <em>grow</em> with you</h2>
  <p>(subtitle)</p>
  
  <div class="cards-grid">  ← 3 columns
    <ServiceCard title="Sales/GTM" ... />
    <ServiceCard title="Marketing/Growth" ... />
    <ServiceCard title="RevOps" ... />
  </div>
</section>
```

## Section Label Pattern
The label "SERVICES" has two different font weights:
- "SERVI" — fontWeight: 700 (bold)
- "CES" — fontWeight: 400 (normal)
- All caps, letterSpacing: ~3px, fontSize: 12px, color: rgb(17, 17, 17)

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 80px
- textAlign: center

### Section label
- fontSize: 12px
- textTransform: uppercase
- letterSpacing: 3px
- color: rgb(17, 17, 17)
- marginBottom: 16px
- See mixed weight pattern above

### H2 "All-in-one GTM services that *grow* with you"
- fontFamily: "DM Sans", sans-serif
- fontSize: 64px
- fontWeight: 700
- lineHeight: 64px
- letterSpacing: -3.2px
- color: rgb(17, 17, 17)
- maxWidth: 800px
- margin: 0 auto 20px
- "grow" is italic: fontStyle: italic

### Subtitle
- fontSize: 18px
- fontWeight: 500
- lineHeight: 28px
- color: rgb(17, 17, 17)
- opacity: 0.7
- maxWidth: 480px
- margin: 0 auto 60px
- text: "From strategy to execution, we equip your team with the systems and expertise to move faster and scale smarter."

### Cards grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 24px
- maxWidth: 1160px
- margin: 0 auto
- padding: 0 24px

## Service Card Styles

### Card container
- backgroundColor: alternating — first+third: rgb(247, 247, 245), second: rgb(242, 240, 233)
- borderRadius: 24px
- padding: 32px
- display: flex
- flexDirection: column
- alignItems: center
- textAlign: center (for title/desc), textAlign: left (for bullet list)
- overflow: hidden

### 3D Illustration image (top of card)
- width: ~200px
- height: ~160px
- objectFit: contain
- marginBottom: 24px

Illustration URLs (framerusercontent CDN):
- Sales/GTM: colorful mail/envelope 3D image
- Marketing/Growth: paper planes 3D image  
- RevOps: colorful buildings/city 3D image

### Card title (h3)
- fontFamily: "DM Sans", sans-serif
- fontSize: 28px
- fontWeight: 700
- lineHeight: 32px
- letterSpacing: -0.5px
- color: rgb(17, 17, 17)
- marginBottom: 12px

### Card description paragraph
- fontSize: 16px
- fontWeight: 500
- lineHeight: 24px
- color: rgb(17, 17, 17)
- opacity: 0.7
- marginBottom: 24px

### Bullet list
- textAlign: left
- listStyle: none
- padding: 0
- display: flex
- flexDirection: column
- gap: 8px

### Bullet list item
- fontSize: 14px
- fontWeight: 500
- color: rgb(17, 17, 17)
- display: flex
- alignItems: center
- gap: 8px
- Before each item: small checkmark or arrow icon

### "Talk with us" link at bottom of each card
- fontSize: 14px
- fontWeight: 600
- color: rgb(17, 17, 17)
- textDecoration: underline OR styled button
- marginTop: auto (pushes to bottom)

## Per-Card Content

### Card 1: Sales/GTM
- **Title:** "Sales/GTM"
- **Description:** "Our systems improve GTM efficiency from outbound to inbound and throughout the sales funnel. We recommend top tools, create a unified system, and implement them for an optimized GTM tech stack."
- **Bullet list:**
  - Automated GTM co-pilots
  - TAM mapping & deep enrichment
  - Automated, personalized outbound
  - Lead qualification and normalization
  - Mid-funnel automation
  - Custom sales/GTM requests
  - Competitive intelligence
  - AI research automation
  - Meeting prep automation
  - Email deliverability optimization
  - Automated Linkedin outreach

### Card 2: Marketing/Growth
- **Title:** "Marketing/Growth"
- **Description:** "We transform your marketing data into valuable insights and streamline your growth data for automated next steps. Our approach converts your ads, webinars, conferences, and emails into impactful sales data."
- **Bullet list:**
  - Inbound lead enrichment
  - Account scoring and assignment
  - Inbound-led outbound sequences
  - Paid ads audience building
  - Custom landing pages at scale
  - Deep ICP/account enrichment and research
  - Custom marketing/growth requests
  - Event marketing outreach automation
  - Social tracking & competitive monitoring
  - Website visitor tracking

### Card 3: RevOps
- **Title:** "RevOps"
- **Description:** "We help businesses transform their CRMs into thriving ecosystems. In the age of AI, strong CRMs are essential for success. We ensure your data is accurate and ready for automation to improve operations."
- **Bullet list:**
  - CRM data cleaning
  - Automated CRM enrichment
  - Data normalization
  - Account, contact, and lead research
  - Automated campaign updates
  - CRM lead scoring
  - Custom RevOps requests

## Assets
- Sales card illustration: download from framerusercontent (mail/envelope 3D)
- Marketing card illustration: download from framerusercontent (paper planes 3D)
- RevOps card illustration: download from framerusercontent (buildings 3D)

## Responsive Behavior
- **Desktop (1440px):** 3-column grid
- **Tablet (768px):** 2-column or 1-column
- **Mobile (390px):** 1-column, full width cards
