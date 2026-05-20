# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Screenshot:** `docs/design-references/kiln-section-6400.png`
- **Interaction model:** horizontal scroll (overflow-x: scroll or auto-scrolling marquee)

## DOM Structure
```
<section>
  <p class="label">TESTIM<strong>ONIALS</strong></p>
  <h2>Leading GTM teams love The Kiln</h2>
  
  <div class="testimonials-track">  ← horizontal scrollable container
    <TestimonialCard ... />  ← 4+ visible cards, overflow on sides
    <TestimonialCard ... />
    <TestimonialCard ... />
    <TestimonialCard ... />
    (more...)
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 80px
- paddingBottom: 80px
- textAlign: center
- overflow: hidden (clips horizontal overflow)

### H2 "Leading GTM teams love The Kiln"
- fontSize: 64px, fontWeight: 700, letterSpacing: -3.2px, lineHeight: 64px
- maxWidth: 700px, margin: 0 auto 60px

### Testimonials track container
- display: flex
- flexDirection: row
- gap: 20px
- overflowX: auto
- paddingLeft: 120px  ← partial card visible on left
- paddingRight: 120px
- paddingBottom: 20px
- scrollbarWidth: none (hidden scrollbar)
- cursor: grab (on drag)

### Testimonial card
- backgroundColor: rgb(255, 255, 255)
- border: 1px solid rgba(0, 0, 0, 0.08)
- borderRadius: 24px
- padding: 32px
- width: 340px
- flexShrink: 0
- display: flex
- flexDirection: column
- gap: 24px

### Quote text
- fontSize: 16px
- fontWeight: 500
- lineHeight: 24px
- color: rgb(17, 17, 17)

### Person row
- display: flex
- alignItems: center
- gap: 12px
- marginTop: auto

### Avatar
- width: 40px
- height: 40px
- borderRadius: 50%
- objectFit: cover

### Person name
- fontSize: 15px
- fontWeight: 700
- color: rgb(17, 17, 17)

### Person role
- fontSize: 13px
- fontWeight: 500
- color: rgb(17, 17, 17)
- opacity: 0.6

## Testimonial Cards Data

### Card 1
- **Quote:** "The Kiln team was incredibly helpful. They met us exactly where we needed. They hit our major asks in just 48 hours! Highly recommend working with this collaborative team."
- **Name:** Taylor Bond
- **Role:** Senior Director of Operations, NewStore

### Card 2
- **Quote:** "Working with The Kiln team was great – their work was fast and effective. They helped us set up several detailed waterfall tables in Clay and recorded detailed SOPs for our team to use after the engagement. They made everything so easy."
- **Name:** Jon Caldwell
- **Role:** Growth at Bunker
- **Avatar:** person photo

### Card 3
- **Quote:** "They bring the right mix of speed, structure, and systems thinking for companies looking to make GTM Engineering a competitive edge."
- **Name:** Liam Mulcahy
- **Role:** Ops Partner at Kleiner Perkins
- **Avatar:** person photo

### Card 4
- **Quote:** "The Kiln has my highest recommendation for getting things done when it matters. They are reliable, thorough, and a great partner for the long term."
- **Name:** Varun Anand
- **Role:** Co-Founder, Clay
- **Avatar:** person photo

## Responsive Behavior
- **Desktop (1440px):** ~3.5 cards visible simultaneously, overflow scroll horizontal
- **Mobile (390px):** ~1.2 cards visible, horizontal scroll
