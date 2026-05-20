# Nav Specification

## Overview
- **Target file:** `src/components/Nav.tsx`
- **Screenshot:** `docs/design-references/kiln-section-0.png`
- **Interaction model:** static (no scroll-driven style changes)

## DOM Structure
```
<nav> (fixed, full width, z-10)
  <a href="/"> (logo)
    <img> (The Kiln logo — black wordmark with 2X badge below)
  </a>
  <div> (links container, flex row, gap-6)
    <a>Case Studies</a>
    <a>Recruiting</a>
    <a>Newsletter</a>
  </div>
  <a href="/contact"> (CTA button)
    "Talk with us 👋"
  </a>
</nav>
```

## Computed Styles (exact values)

### Nav container
- position: fixed
- top: 0px
- left: 0px
- right: 0px
- height: 64px
- backgroundColor: rgb(255, 255, 255)
- padding: 12px 24px
- display: flex
- alignItems: center
- justifyContent: space-between
- zIndex: 10
- boxShadow: none
- borderBottom: none

### Logo image
- src: `https://framerusercontent.com/images/YLwP4kyyM1s6fcKAl00uLvuMhGg.png`
- display width: ~122px
- height: auto

### Nav links
- fontFamily: "DM Sans", sans-serif
- fontSize: 16px
- fontWeight: 500
- color: rgb(17, 17, 17)
- textDecoration: none
- Hover: animated underline (slide in from left, 2px height, #111111 color)

### CTA Button "Talk with us 👋"
- backgroundColor: rgb(17, 17, 17)
- color: rgb(255, 255, 255)
- borderRadius: 100px (pill)
- padding: 10px 20px
- fontSize: 16px
- fontWeight: 500
- border: none
- cursor: pointer
- Hover: slight opacity or scale (subtle)

## States & Behaviors

### Scroll behavior
- No change on scroll. The nav stays identical at position 0 and position 300+.

### Hover on links
- Animated underline appears below text
- Transition: width grows from 0 to 100%, 200ms ease

## Assets
- Logo: download from `https://framerusercontent.com/images/YLwP4kyyM1s6fcKAl00uLvuMhGg.png`
  → save to `public/images/kiln-logo.png`

## Text Content (verbatim)
- Logo alt: ""
- Links: "Case Studies", "Recruiting", "Newsletter"
- CTA: "Talk with us 👋"

## Responsive Behavior
- **Desktop (1440px):** Full nav with logo + links + button
- **Mobile (390px):** Hamburger menu or simplified (logo + button only, links hidden)
- **Breakpoint:** ~810px
