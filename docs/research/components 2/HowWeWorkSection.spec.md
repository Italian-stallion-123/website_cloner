# HowWeWorkSection Specification

## Overview
- **Target file:** `src/components/HowWeWorkSection.tsx`
- **Screenshot:** `docs/design-references/kiln-section-1600.png`, `docs/design-references/kiln-section-2400.png`
- **Interaction model:** static

## DOM Structure
```
<section>
  <p class="label">HOW WE <strong>WORK</strong></p>
  <h2>Custom engineering for <em>unique</em> challenges</h2>
  <p class="subtitle">(subtext)</p>
  
  <div class="cards-grid">  ← 3 columns
    <FeatureCard icon="clock" title="We invest deep time, not just hours" ... />
    <FeatureCard icon="lightbulb" title="Strategy that ships real solutions" ... />
    <FeatureCard icon="box" title="Custom is our comfort zone" ... />
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 80px
- textAlign: center

### Label "HOW WE WORK"
- fontSize: 12px
- textTransform: uppercase
- letterSpacing: 3px
- color: rgb(17, 17, 17)
- marginBottom: 16px
- "HOW WE" — fontWeight: 400; "WORK" — fontWeight: 700

### H2 "Custom engineering for *unique* challenges"
- fontFamily: "DM Sans", sans-serif
- fontSize: 64px
- fontWeight: 700
- lineHeight: 64px
- letterSpacing: -3.2px
- color: rgb(17, 17, 17)
- maxWidth: 700px
- margin: 0 auto 20px
- "unique" is italic

### Subtitle
- fontSize: 18px
- fontWeight: 500
- lineHeight: 28px
- color: rgb(17, 17, 17)
- opacity: 0.7
- maxWidth: 600px
- margin: 0 auto 60px
- text: "We combine deep technical expertise with focused, bespoke execution - dedicating our GTM engineers to a select few clients to tackle complex, custom projects."

### Cards grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 24px
- maxWidth: 1160px
- margin: 0 auto
- padding: 0 24px

## Feature Card Styles

### Card container
- backgroundColor: rgb(247, 247, 245) — first card has darker variant, middle white, third slightly different
  - Card 1: rgb(242, 240, 233) (warm off-white)
  - Card 2: rgb(255, 255, 255) (white)
  - Card 3: rgb(247, 247, 245) (light off-white)
- borderRadius: 24px
- padding: 32px
- display: flex
- flexDirection: column
- alignItems: flex-start (left-aligned content)
- textAlign: left
- minHeight: 300px

### Icon
- width: 40px
- height: 40px
- marginBottom: 20px
- Small emoji-like icon (clock ⏱, lightbulb 💡, box 📦 or similar)

### Card title
- fontFamily: "DM Sans", sans-serif
- fontSize: 24px
- fontWeight: 700
- lineHeight: 28px
- letterSpacing: -0.5px
- color: rgb(17, 17, 17)
- marginBottom: 16px
- Note: Card 1 has italic styling on "not just hours"

### Card description
- fontSize: 16px
- fontWeight: 500
- lineHeight: 24px
- color: rgb(17, 17, 17)
- opacity: 0.7

## Per-Card Content

### Card 1: Deep Time
- **Icon:** clock/timer (⏱ or similar small icon)
- **Title:** "We invest deep time, not just hours"
- **Description:** "We actually spend time on clients. Our GTM engineers only work on a few clients at a time to increase the time being spent on your projects."

### Card 2: Real Solutions
- **Icon:** lightbulb or star icon
- **Title:** "Strategy that ships real solutions"
- **Description:** "Our team is highly technical. While we're great at strategy, our team has the technical ability to make projects actually happen instead of staying theoretical."

### Card 3: Custom Zone
- **Icon:** box/package icon
- **Title:** "Custom is our comfort zone"
- **Description:** "We love complex, bespoke projects. Unlike more templatized agencies, we love to work on the custom projects that nobody else could complete."

## Responsive Behavior
- **Desktop (1440px):** 3-column grid
- **Mobile (390px):** 1-column stack
