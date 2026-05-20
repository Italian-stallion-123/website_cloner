# Page Topology — thekiln.com

## URL: https://thekiln.com
## Page Height: 8010px (desktop 1440px)

## Fixed Overlays
- **Navigation**: Fixed top, z-index 10, white bg, 64px height — overlays everything

## Page Sections (flow order, top to bottom)

| # | Name | approx y | Height | Background | Interaction |
|---|------|----------|--------|------------|-------------|
| 1 | Hero | 0 | ~730px | white | static |
| 2 | Logo Grid | ~730px | ~230px | white | static (infinite scroll marquee possible) |
| 3 | Services Cards | ~960px | ~700px | white | static |
| 4 | How We Work | ~1660px | ~700px | white | static |
| 5 | Case Studies | ~2360px | ~1100px | white | static |
| 6 | Full Suite Features | ~3460px | ~1700px | white | scroll-driven reveal (IntersectionObserver) |
| 7 | Testimonials | ~5160px | ~700px | white | horizontal scroll |
| 8 | CTA Dark + Footer | ~5860px | ~1200px | #030000 (near black) | static |

## Layout Structure
- Max content width: ~1200px, centered
- Single column at page level
- Nav: position fixed, full viewport width
- Body has padding-top ~64px to account for fixed nav

## Z-Index Layers
1. Nav: z-index 10 (fixed overlay)
2. Feature section Kiln icon marker: absolute positioned center line
3. Everything else: default stacking

## Notes
- Section labels have mixed font weight pattern: "SERVI**CES**" (bold first part, normal second)
- Headings use italic for emphasis words: "that *grow* with you"
- The features section (Full Suite) has a centered vertical line ~1px wide with The Kiln icon in the middle
- Testimonials overflow horizontally (partial cards visible on edges = horizontal scroll carousel)
- Footer is part of the same dark section as the CTA
