# Apple.com Landing Page — Design Specification

> UI/UX Agent Research — 2026-03-20

---

## 1. DESIGN TOKENS

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text-primary` | `#1d1d1f` | Headings, body text |
| `--color-text-secondary` | `#6e6e73` | Secondary text, captions |
| `--color-link` | `#0066cc` | Text links, CTAs |
| `--color-link-hover` | `#0077ed` | Link hover state |
| `--color-bg-white` | `#ffffff` | Default background |
| `--color-bg-light` | `#f5f5f7` | Alternating section bg |
| `--color-bg-near-white` | `#fbfbfd` | Subtle section bg |
| `--color-bg-dark` | `#000000` | Dark hero sections |
| `--color-text-on-dark` | `#f5f5f7` | Text on dark backgrounds |
| `--color-nav-bg` | `rgba(251,251,253,0.8)` | Translucent nav bg |
| `--color-nav-border` | `rgba(0,0,0,0.1)` | Nav bottom border |

### Typography

**Font Stack:**
```css
font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
/* Body text variant */
font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
```

**Type Scale:**

| Element | Size (desktop) | Weight | Line Height | Letter Spacing |
|---------|---------------|--------|-------------|----------------|
| Hero headline (large) | 56px-96px | 600 | 1.05 | -0.015em |
| Hero headline (medium) | 48px | 600 | 1.08 | -0.003em |
| Section headline | 40px | 600 | 1.1 | 0 |
| Subheadline | 28px | 400 | 1.14 | 0.007em |
| Body (large) | 21px | 400 | 1.38 | 0.011em |
| Body | 17px | 400 | 1.47 | -0.022em |
| CTA link | 17px-21px | 400 | 1.38 | 0.011em |
| Nav link | 12px | 400 | 1 | -0.01em |
| Caption/footnote | 12px | 400 | 1.33 | -0.01em |

### Spacing Scale

| Token | Value |
|-------|-------|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 40px |
| `--space-2xl` | 60px |
| `--space-3xl` | 80px |
| `--space-section` | 12px (gap between hero sections) |

### Responsive Breakpoints

| Name | Range | Container |
|------|-------|-----------|
| Small (mobile) | < 735px | 87.5% width |
| Medium (tablet) | 735px - 1068px | 692px max |
| Large (desktop) | 1069px - 1440px | 980px max |
| X-Large (wide) | > 1441px | 980px max |

---

## 2. PAGE STRUCTURE (Top to Bottom)

```
┌─────────────────────────────────────────────┐
│ Global Nav (sticky, translucent)            │  44px height
├─────────────────────────────────────────────┤
│ Hero #1 — iPhone (full-width, dark bg)      │  ~580px height
├─────────────────────────────────────────────┤
│ Hero #2 — MacBook Neo (full-width)          │  ~580px height
├─────────────────────────────────────────────┤
│ Hero #3 — iPad Air (full-width)             │  ~580px height
├─────────────────────────────────────────────┤
│ Hero #4 — Tim Cook Letter (full-width)      │  ~400px height
├─────────────────────────────────────────────┤
│ Promo Grid                                  │
│ ┌──────────────────────────────────────┐    │
│ │ MacBook Pro (full-width tile)        │    │  ~580px
│ ├─────────────────┬────────────────────┤    │
│ │ AirPods Max 2   │ Apple Watch S11    │    │  ~500px
│ │ (half-width)    │ (half-width)       │    │
│ ├──────────────────────────────────────┤    │
│ │ Apple Trade In (full-width tile)     │    │  ~400px
│ ├──────────────────────────────────────┤    │
│ │ Apple Card (full-width tile)         │    │  ~400px
│ └──────────────────────────────────────┘    │
├─────────────────────────────────────────────┤
│ Entertainment Section                       │
│ "Endless entertainment" + tabbed carousel   │
│ (9 Apple TV+ tiles + Music/Fitness/Arcade)  │
├─────────────────────────────────────────────┤
│ Footer (multi-column links)                 │
│ Legal bar (copyright + links)               │
└─────────────────────────────────────────────┘
```

---

## 3. COMPONENT ARCHITECTURE

### Layout Components

| Component | Props | Description |
|-----------|-------|-------------|
| `<Navbar />` | - | Sticky translucent nav with mega menu |
| `<NavMegaMenu />` | `category` | Dropdown mega menu panel |
| `<HeroSection />` | `variant, bgColor, product` | Full-width hero banner |
| `<PromoGrid />` | - | Grid container for promo tiles |
| `<PromoTile />` | `size: 'full' \| 'half'` | Individual promo card |
| `<EntertainmentSection />` | - | Tabbed carousel section |
| `<CarouselGallery />` | `items, service` | Horizontal scrolling gallery |
| `<Footer />` | - | Multi-column footer |
| `<LegalBar />` | - | Bottom legal links bar |

### UI Components

| Component | Props | Description |
|-----------|-------|-------------|
| `<CTALink />` | `variant: 'primary' \| 'secondary'` | Blue text link with chevron > |
| `<Badge />` | `text` | "New", "Order 3.25" label |
| `<EntertainmentCard />` | `show, genre, tagline, cta` | TV show / music / game card |
| `<FooterColumn />` | `title, links[]` | Single footer link column |
| `<SearchOverlay />` | - | Full-screen search overlay |
| `<BagDropdown />` | - | Shopping bag dropdown |

---

## 4. NAVIGATION SPECS

### Navbar
- **Height:** 44px
- **Position:** `sticky`, `top: 0`, `z-index: 9999`
- **Background:** `rgba(251, 251, 253, 0.8)`
- **Backdrop:** `backdrop-filter: saturate(180%) blur(20px)`
- **Border-bottom:** `1px solid rgba(0, 0, 0, 0.1)`
- **Max-width:** `980px` centered content
- **Font size:** 12px
- **Link color:** `#1d1d1f` (opacity 0.8)
- **Link hover:** `#1d1d1f` (opacity 1.0)

### Mega Menu Dropdown
- **Transition:** `max-height 0.4s ease, opacity 0.3s ease`
- **Background:** same translucent as nav
- **Content max-width:** 980px
- **Padding:** 40px 0
- **Link font-size:** 12px (column headers 11px, uppercase, bold)

---

## 5. HERO SECTION PATTERN

```css
.hero-section {
  width: 100%;
  min-height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* or flex-end for bottom-aligned text */
  text-align: center;
  padding: 60px 0;
  overflow: hidden;
  position: relative;
  margin-bottom: 12px; /* gap between sections */
}
```

### Hero Text Layout
- **Product name:** 21px-28px, semibold
- **Headline:** 48px-56px, semibold
- **CTAs:** Two inline links, 21px, blue #06c, separated by ~16px gap
- **CTA format:** `Learn more >` and `Buy >` (chevron character)

### Background Pattern
- Dark sections (iPhone, MacBook Pro): `background: #000`, white text
- Light sections (iPad, Watch): `background: #f5f5f7` or `#fff`, dark text
- Product image: positioned via `background-image` or `<img>` with `object-fit: cover`

---

## 6. PROMO TILE GRID

```css
.promo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  max-width: 100%;
  padding: 0;
}

.promo-tile--full {
  grid-column: 1 / -1; /* spans full width */
}

.promo-tile--half {
  grid-column: span 1; /* half width */
}
```

Each tile:
- **Min-height:** ~400-580px
- **Border-radius:** 0 (edge-to-edge)
- **Overflow:** hidden
- **Text alignment:** center
- **Padding:** 40px-60px top

---

## 7. ENTERTAINMENT SECTION

### Structure
- Section heading: "Endless entertainment." (centered, 48px)
- **Tab bar:** Service tabs (Apple TV+, Apple Music, Apple Fitness+, Apple Arcade)
- **Carousel:** Horizontally scrollable card gallery
- **Cards:** ~280px wide, 400px tall, rounded corners (18px border-radius)

### Card Design
```
┌─────────────────┐
│                  │
│   [Show Image]   │
│                  │
│ Service logo     │
│ Genre            │
│ Title            │
│ Tagline          │
│ CTA link         │
└─────────────────┘
```

---

## 8. ANIMATION SPECS

### Scroll-Triggered Fade-In
```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```
Triggered via Intersection Observer with `threshold: 0.15`

### Link/CTA Hover
```css
a.cta-link {
  color: #06c;
  transition: color 0.3s ease;
}
a.cta-link:hover {
  color: #0077ed;
  text-decoration: underline;
}
```

### Nav Dropdown
```css
.mega-menu {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease;
}
.mega-menu.open {
  max-height: 500px;
  opacity: 1;
}
```

### Carousel Scroll
- Smooth scroll behavior: `scroll-behavior: smooth`
- Snap: `scroll-snap-type: x mandatory` with `scroll-snap-align: start` on cards

---

## 9. FOOTER SPECS

### Layout
- **Background:** `#f5f5f7`
- **Max-width:** 980px centered
- **Columns:** CSS grid, `grid-template-columns: repeat(5, 1fr)` on desktop
- **Mobile:** Accordion pattern (columns collapse)
- **Font-size:** 12px
- **Link color:** `#424245`
- **Link hover:** `#1d1d1f`
- **Column header:** 12px, semibold, `#1d1d1f`
- **Separator:** `1px solid #d2d2d7` between sections

### Legal Bar
- **Border-top:** `1px solid #d2d2d7`
- **Padding:** 17px 0
- **Font-size:** 12px
- **Color:** `#6e6e73`
- **Layout:** `space-between` with copyright left, links right

---

## 10. TECH STACK RECOMMENDATION

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** CSS transitions + Intersection Observer API
- **Carousel:** Native CSS scroll-snap (no library needed)
- **Icons:** Inline SVG (Apple logo, chevrons, search, bag)
- **Fonts:** System font stack (SF Pro on macOS/iOS, fallback to Helvetica/Arial)
- **Images:** `next/image` with responsive srcSet, WebP format
