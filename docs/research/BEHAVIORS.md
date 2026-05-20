# Behaviors — thekiln.com

## Navigation
- **Interaction model**: Static — no style changes on scroll
- Position: fixed
- Initial state: bg white, no shadow, no border
- Scrolled state: bg white, no shadow, no border (IDENTICAL — nav does NOT change on scroll)
- Hover on links: underline animation (Framer component: animated underline slides in)
- "Talk with us" button: black bg, white text, rounded pill

## Hero Section
- **Interaction model**: Static
- No entrance animations observed
- Decorative illustrations are static positioned images (no animation)

## Logo Grid
- **Interaction model**: Possibly infinite horizontal marquee or static grid
- From screenshot: appears as a static 3-row grid of logos at different sizes

## Services Cards (Sales/GTM, Marketing/Growth, RevOps)
- **Interaction model**: Static
- Cards have rounded corners (24px), off-white backgrounds
- No observed hover animations at extraction time

## "How We Work" Feature Cards
- **Interaction model**: Static
- 3 cards side by side with rounded corners (24px)
- Light off-white backgrounds

## Case Studies
- **Interaction model**: Static
- Each case study card = horizontal split: left (logo + title + button) | right (quote + person)
- Dotted horizontal divider between logo and title
- "Read story →" button: black filled, rounded

## Full Suite Features Section  
- **Interaction model**: Scroll-driven reveal (IntersectionObserver)
- 2-column layout separated by centered vertical line
- Cards animate into view as user scrolls (likely fade-in from sides)
- Kiln icon (⊞) appears at center of vertical line
- Left column cards: white/off-white bg, 24px radius
- Right column cards: slightly different off-white (#EEE or #F7F7F5)

## Testimonials
- **Interaction model**: Horizontal scroll carousel
- Cards overflow viewport (partial cards visible = auto-scrolling or user-scrollable)
- Each card: white bg, 24px radius, quote text + avatar + name + role
- Multiple cards visible simultaneously at desktop

## CTA + Footer
- **Interaction model**: Static
- Dark background (#030000)
- "Talk with us" button: white outlined (border: 1px solid white, transparent bg)
- Footer: 3-column grid (brand | About us | Resources)

## Global Observations
- No smooth scroll library detected (no Lenis, no Locomotive Scroll class)
- Standard browser scroll
- No page-level scroll-snap
- DM Sans font used throughout (not system fonts)
- Section labels: spaced uppercase with mixed bold/regular weight
