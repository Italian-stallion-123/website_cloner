# CaseStudiesSection Specification

## Overview
- **Target file:** `src/components/CaseStudiesSection.tsx`
- **Screenshot:** `docs/design-references/kiln-section-3200.png`, `docs/design-references/kiln-section-4000.png`
- **Interaction model:** static

## DOM Structure
```
<section>
  <p class="label">CASE <strong>STUDIES</strong></p>
  <h2>Trusted by <em>leading</em> companies</h2>
  <p class="subtitle">"Real projects. Real impact. Explore how top companies partner with us..."</p>
  
  <div class="case-studies-list">
    <CaseStudyCard company="Azuga" ... />
    <CaseStudyCard company="Sendoso" ... />
  </div>
  
  <a href="/case-studies">"More case studies >>>"</a>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 60px
- textAlign: center

### Label "CASE STUDIES"
- "CASE " — fontWeight: 400
- "STUDIES" — fontWeight: 700
- fontSize: 12px, letterSpacing: 3px, textTransform: uppercase

### H2
- fontSize: 64px, fontWeight: 700, letterSpacing: -3.2px, lineHeight: 64px
- "leading" is italic
- maxWidth: 700px, margin: 0 auto 20px

### Subtitle
- text: "Real projects. Real impact. Explore how top companies partner with us to execute smarter and grow quicker."
- fontSize: 18px, fontWeight: 500, opacity: 0.7, maxWidth: 560px, margin: 0 auto 60px

### Case studies list
- display: flex
- flexDirection: column
- gap: 24px
- maxWidth: 1000px
- margin: 0 auto
- padding: 0 24px

### Case study card
- backgroundColor: rgb(247, 247, 245)
- borderRadius: 24px
- padding: 40px
- display: grid
- gridTemplateColumns: 1fr 1px 1fr  ← left content | dotted divider | right quote
- gap: 40px
- alignItems: start

### Dotted vertical divider (between left and right)
- width: 1px
- backgroundColor: transparent
- backgroundImage: repeating-linear-gradient(to bottom, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 4px, transparent 4px, transparent 10px)
- alignSelf: stretch

### Left panel
- display: flex
- flexDirection: column
- alignItems: flex-start
- gap: 24px

### Company logo
- maxWidth: 150px
- maxHeight: 50px
- objectFit: contain

### Dotted horizontal rule below logo
- width: 100%
- height: 1px
- backgroundImage: repeating-linear-gradient(to right, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 4px, transparent 4px, transparent 10px)

### Case study title (h3 on left)
- fontSize: 24px
- fontWeight: 700
- lineHeight: 30px
- letterSpacing: -0.3px
- color: rgb(17, 17, 17)

### "Read story →" button
- backgroundColor: rgb(17, 17, 17)
- color: rgb(255, 255, 255)
- borderRadius: 100px
- padding: 12px 24px
- fontSize: 15px
- fontWeight: 600
- display: inline-flex
- alignItems: center
- gap: 8px

### Right panel (testimonial quote)
- backgroundColor: rgb(242, 240, 233)
- borderRadius: 16px
- padding: 28px
- display: flex
- flexDirection: column
- gap: 20px

### Quote icon (")
- width: 32px, height: 32px
- color: rgb(17, 17, 17)
- opacity: 0.3

### Quote text
- fontSize: 16px
- fontWeight: 500
- lineHeight: 24px
- color: rgb(17, 17, 17)
- fontStyle: italic

### Quote person row
- display: flex
- alignItems: center
- gap: 12px

### Avatar
- width: 48px
- height: 48px
- borderRadius: 50%
- objectFit: cover

### Person name
- fontSize: 15px
- fontWeight: 700
- color: rgb(17, 17, 17)

### Person title
- fontSize: 14px
- fontWeight: 500
- color: rgb(17, 17, 17)
- opacity: 0.6

### "More case studies >>>" link
- fontSize: 16px
- fontWeight: 600
- color: rgb(17, 17, 17)
- marginTop: 40px
- display: block
- textAlign: center

## Per-Card Content

### Card 1: Azuga
- **Company logo:** `public/images/logo-azuga.png`
- **Title:** "How Azuga Went From 640+ Hours of Manual Work Per Week to a Scalable Data Engine"
- **Button:** "Read story →" → href="/case-studies/azuga"
- **Quote:** "This was supposed to be a basic enrichment project—what we got was full operational transformation."
- **Person:** Harish Bilimale
- **Title:** Sr. Director CRM Strategy and Salesforce Governance
- **Avatar:** `public/images/avatar-harish.png`

### Card 2: Sendoso
- **Company logo:** `public/images/logo-sendoso.png`
- **Title:** "How Sendoso Created an AI-Forward, Scalable GTM Motion with The Kiln"
- **Button:** "Read story →" → href="/case-studies/sendoso"
- **Quote:** "We handed off a dream. The Kiln built it flawlessly."
- **Person:** Katie Penner
- **Title:** Head of Sender Relations
- **Avatar:** `public/images/avatar-katie.png`

## Assets
- Azuga logo: `https://framerusercontent.com/images/komkThFe3k2Ge41KKGo4FelozW4.png`
- Sendoso logo: `https://framerusercontent.com/images/DTIVD7w4DxIswu0KS9EWiG0SNs.png` (orange wordmark)
- Harish avatar: `https://framerusercontent.com/images/5p4nyQqeyCcqrOLnVDjX31tKS0A.png` (80x80 person photo)
- Katie avatar: same or similar from framerusercontent

## Responsive Behavior
- **Desktop (1440px):** 2-column split card (left content + right quote)
- **Mobile (390px):** Stack vertically (content on top, quote below)
