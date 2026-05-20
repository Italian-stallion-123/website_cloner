# LogoGrid Specification

## Overview
- **Target file:** `src/components/LogoGrid.tsx`
- **Screenshot:** `docs/design-references/kiln-section-0.png` (bottom half)
- **Interaction model:** static grid

## DOM Structure
```
<section> (white bg, padding 40px 0)
  <div> (grid container, max-width 1100px, centered)
    Row 1: Notion, TwelveLabs, Cognition, Antimetal
    Row 2: Bill & Melinda Gates Foundation, Recess, Loxo, Aligned
    Row 3: BUNKER, Density, Materialize, Daxko
    Row 4: azuga (+ Integral), RAFAY, Sendoso, T-ROC
  </div>
</section>
```

## Computed Styles

### Section
- backgroundColor: rgb(255, 255, 255)
- padding: 40px 24px

### Grid container
- display: grid
- gridTemplateColumns: repeat(4, 1fr)
- gap: 0px (logos have internal spacing)
- maxWidth: 1100px
- margin: 0 auto

### Logo cell
- display: flex
- alignItems: center
- justifyContent: center
- padding: 20px 24px
- border: 1px solid rgba(0, 0, 0, 0.08)

### Logo images
- maxHeight: 40px
- maxWidth: 160px
- objectFit: contain
- filter: none (full color logos shown)
- opacity: 1

## Logo Images (from framerusercontent CDN)
All logos are PNG images. Download URLs:
1. Notion: `https://framerusercontent.com/images/8XWIXJtmXO7STedZbwi8rvVprig.png` (41x41)
2. TwelveLabs: `https://framerusercontent.com/images/EQpWJKXD76ioY9mCc483CpN1rA.png` (500x173)
3. Cognition: `https://framerusercontent.com/images/ejdkP2HEFBbZtom1fRbJdBibV0.png` (300x61)
4. Antimetal: `https://framerusercontent.com/images/EjIzKqp6rfyiJenutQ6ZbijVmqA.png` (224x48)
5. Bill & Melinda Gates Foundation: `https://framerusercontent.com/images/EFgX6QH3k2JRTonnRiBFl1Qf8.png` (558xN)
6. Recess: `https://framerusercontent.com/images/oO6pita4OIVpqMAOxlLnAZsgmg0.png` (255x44)
7. Loxo: `https://framerusercontent.com/images/NqSK1Xe0TH1Hkj4zCtWwzPfUNU.png` (280x84)
8. Aligned: `https://framerusercontent.com/images/UvBTHzikaXxf1C46qhe7sZulmM.png` (2331xN)
9. BUNKER: `https://framerusercontent.com/images/2zvdXDuJGfQihZpsJh1AZj50dDI.png` (228x48)
10. Density: `https://framerusercontent.com/images/ur0lauSdG7o2Xfe1hHpucPF6oQ.png` (220x55)
11. Materialize: `https://framerusercontent.com/images/UG8NPOGerI3MSqhahHv9Sa0qxhI.png` (640xN)
12. Daxko: `https://framerusercontent.com/images/5p4nyQqeyCcqrOLnVDjX31tKS0A.png` (80x80) — wait, this is a person avatar. Logo may differ.
13. azuga: from kiln-text-content reference
14. Integral: (paired with azuga logo area)
15. RAFAY: `https://framerusercontent.com/images/B6sOUBupp4W2OIcVWklweUtq9Rs.png`
16. Sendoso: `https://framerusercontent.com/images/DTIVD7w4DxIwU0KS9EWiG0SNs.png`
17. T-ROC: `https://framerusercontent.com/images/liDX0SjpGaFEXWzliT8cgPoXdtc.png`

Use asset download script to pull all logo images.

## Text Content
No text — logos only (image-based)

## Responsive Behavior
- **Desktop (1440px):** 4-column grid, 4 rows
- **Tablet (768px):** 3-column grid
- **Mobile (390px):** 2-column grid
- **Breakpoint:** ~810px for 3-col, ~480px for 2-col
