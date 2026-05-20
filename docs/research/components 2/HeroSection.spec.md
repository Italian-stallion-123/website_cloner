# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/kiln-section-0.png`
- **Interaction model:** static

## DOM Structure
```
<section> (full width, min-height ~730px, white bg, relative, overflow hidden)
  <div> (announcement banner — centered pill)
    <span class="new-badge">"NEW"</span>
    <span>"The Kiln has been acquired by 2X!"</span>
    <a>"Learn More →"</a>
  </div>
  
  <h1>"Expert GTM Engineers, at your fingertips."</h1>
  <p>(subtitle)</p>
  <a class="cta-btn">"Talk with us 👋"</a>
  
  <div> (decorative illustrations — absolutely positioned)
    <img> (hourglass — left side)
    <img> (cloud doodle — top center)
    <img> (squiggly blob — right side)
  </div>
</section>
```

## Computed Styles

### Section container
- backgroundColor: rgb(255, 255, 255)
- paddingTop: 64px (accounts for fixed nav)
- paddingBottom: 60px
- display: flex
- flexDirection: column
- alignItems: center
- textAlign: center
- position: relative
- overflow: hidden

### Announcement banner
- display: inline-flex
- alignItems: center
- gap: 8px
- backgroundColor: rgb(17, 17, 17) (dark pill)
- color: rgb(255, 255, 255)
- borderRadius: 100px
- padding: 6px 12px
- fontSize: 14px
- fontWeight: 500
- marginTop: 48px
- marginBottom: 24px

### "NEW" badge inside banner
- backgroundColor: rgb(255, 255, 255)
- color: rgb(17, 17, 17)
- borderRadius: 100px
- padding: 2px 8px
- fontSize: 12px
- fontWeight: 700
- textTransform: uppercase

### "Learn More →" link inside banner
- backgroundColor: rgb(1, 88, 112) (teal)
- color: rgb(255, 255, 255)
- borderRadius: 100px
- padding: 4px 10px
- fontSize: 13px
- fontWeight: 500

### H1 "Expert GTM Engineers, at your fingertips."
- fontFamily: "DM Sans", sans-serif
- fontSize: 64px
- fontWeight: 700
- lineHeight: 64px
- letterSpacing: -3.2px
- color: rgb(17, 17, 17)
- maxWidth: 700px
- marginTop: 0px
- marginBottom: 20px
- textAlign: center

### Subtitle paragraph
- fontFamily: "DM Sans", sans-serif
- fontSize: 18px
- fontWeight: 500
- lineHeight: 28px
- color: rgb(17, 17, 17)
- maxWidth: 480px
- textAlign: center
- marginBottom: 32px
- opacity: ~0.8

### CTA Button "Talk with us 👋"
- backgroundColor: rgb(17, 17, 17)
- color: rgb(255, 255, 255)
- borderRadius: 100px
- padding: 14px 28px
- fontSize: 18px
- fontWeight: 600
- border: none
- cursor: pointer
- display: inline-flex
- alignItems: center
- gap: 8px

## Decorative Illustrations (absolutely positioned)
All positioned relative to the section container:

### Hourglass (left side)
- src: `public/images/hero-hourglass.png` (from framerusercontent)
- position: absolute
- left: ~60px
- top: ~100px
- width: ~200px
- transform: rotate(-10deg) or similar

### Cloud doodle (top center-left area)
- Various small decorative elements above the H1

### Squiggly blob (right side)
- position: absolute
- right: ~60px
- top: ~150px
- width: ~180px

## Assets to download
See scripts/download-assets.mjs — hero decorative images from framerusercontent.com

## Text Content (verbatim)
- Banner: "NEW  The Kiln has been acquired by 2X!  Learn More →"
- H1: "Expert GTM Engineers, at your fingertips."
- Subtitle: "The Kiln is a team of automation experts, data scientists, and early Clay employees that help build inbound, outbound, and RevOps systems that scale."
- CTA: "Talk with us 👋"

## Responsive Behavior
- **Desktop (1440px):** Decorative images visible, H1 64px, centered
- **Mobile (390px):** Decorative images hidden or scaled down, H1 ~40px, tighter padding
- **Breakpoint:** ~810px
