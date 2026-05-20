# CTAAndFooter Specification

## Overview
- **Target file:** `src/components/CTAAndFooter.tsx`
- **Screenshot:** `docs/design-references/kiln-section-7200.png`
- **Interaction model:** static

## DOM Structure
```
<div class="cta-footer-wrapper">  ← dark background #030000
  
  <!-- CTA Section -->
  <section class="cta-section">
    <p class="label">BOOK A <strong>DEMO</strong></p>
    <h2>"Get in touch today to level-up your processes"</h2>
    <p class="subtitle">(subtext)</p>
    <a class="cta-btn-outline">"Talk with us 👋"</a>
  </section>
  
  <!-- Footer -->
  <footer>
    <div class="footer-grid">
      <!-- Col 1: Brand -->
      <div>
        <div class="footer-logo">
          <img> (⊞ icon)
          <span>The Kiln</span>
        </div>
        <p class="footer-desc">(description)</p>
      </div>
      
      <!-- Col 2: About us -->
      <div>
        <h4>About us</h4>
        <ul>
          <li><a>Home</a></li>
          <li><a>Case Studies</a></li>
          <li><a>Follow us on LinkedIn</a></li>
        </ul>
      </div>
      
      <!-- Col 3: Resources -->
      <div>
        <h4>Resources</h4>
        <ul>
          <li><a>Tutorials</a></li>
          <li><a>Tools</a></li>
          <li><a>Newsletter</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>
```

## Computed Styles

### CTA + Footer wrapper
- backgroundColor: rgb(3, 0, 0) — near black (NOT pure #000000)
- color: rgb(255, 255, 255)
- paddingTop: 0

### CTA Section
- paddingTop: 100px
- paddingBottom: 80px
- textAlign: center
- maxWidth: 900px
- margin: 0 auto

### CTA Label "BOOK A DEMO"
- fontSize: 12px, letterSpacing: 3px, textTransform: uppercase
- "BOOK A " — fontWeight: 400, color: rgba(255,255,255,0.6)
- "DEMO" — fontWeight: 700, color: rgb(255, 255, 255)
- marginBottom: 20px

### CTA H2
- fontFamily: "DM Sans", sans-serif
- fontSize: 64px
- fontWeight: 700
- lineHeight: 64px
- letterSpacing: -3.2px
- color: rgb(255, 255, 255)
- maxWidth: 700px
- margin: 0 auto 24px

### CTA Subtitle
- text: "Partnered with leading go-to-market teams to automate outbound, sales flows, and much more."
- fontSize: 18px, fontWeight: 500, lineHeight: 28px
- color: rgba(255, 255, 255, 0.7)
- maxWidth: 480px
- margin: 0 auto 48px

### CTA Button "Talk with us 👋" (outline variant)
- backgroundColor: transparent
- color: rgb(255, 255, 255)
- border: 2px solid rgba(255, 255, 255, 0.5)
- borderRadius: 100px
- padding: 14px 28px
- fontSize: 18px
- fontWeight: 600
- cursor: pointer
- Hover: border becomes rgb(255,255,255), slight bg rgba(255,255,255,0.05)

### Footer section
- borderTop: 1px solid rgba(255, 255, 255, 0.12)
- padding: 60px 24px
- maxWidth: 1160px
- margin: 0 auto

### Footer grid
- display: grid
- gridTemplateColumns: 2fr 1fr 1fr
- gap: 60px
- alignItems: start

### Footer logo row
- display: flex
- alignItems: center
- gap: 10px
- marginBottom: 16px

### Footer logo icon (⊞)
- width: 32px, height: 32px
- The Kiln icon — grid of 4 squares
- color: rgb(255, 255, 255) (white version)

### Footer brand name "The Kiln"
- fontSize: 20px
- fontWeight: 700
- color: rgb(255, 255, 255)

### Footer description
- fontSize: 14px
- fontWeight: 400
- lineHeight: 22px
- color: rgba(255, 255, 255, 0.6)
- maxWidth: 280px

### Footer column headings (About us / Resources)
- fontSize: 16px
- fontWeight: 700
- color: rgb(255, 255, 255)
- marginBottom: 20px

### Footer links
- fontSize: 14px
- fontWeight: 500
- color: rgba(255, 255, 255, 0.6)
- textDecoration: none
- lineHeight: 36px
- Hover: color: rgb(255, 255, 255)

## Text Content (verbatim)
- CTA label: "BOOK A DEMO"
- H2: "Get in touch today to level-up your processes"
- Subtitle: "Partnered with leading go-to-market teams to automate outbound, sales flows, and much more."
- Button: "Talk with us 👋"

Footer col 1:
- Brand: "The Kiln"
- Description: "The Kiln is a team of GTM experts, data scientists, and former Clay employees that help the world's leading RevOps and growth teams scale their most creative ideas."

Footer col 2 - About us:
- Home → "/"
- Case Studies → "/case-studies"
- Follow us on LinkedIn → "https://linkedin.com/company/..."

Footer col 3 - Resources:
- Tutorials → "#"
- Tools → "#"
- Newsletter → "https://gtmcookbook.beehiiv.com/"

## Responsive Behavior
- **Desktop (1440px):** 3-column footer grid
- **Mobile (390px):** Single column footer stack
