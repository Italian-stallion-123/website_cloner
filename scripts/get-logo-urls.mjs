import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('https://thekiln.com', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(3000);

// Get all imgs in logo grid area, with visibility info
const logos = await page.evaluate(() => {
  const imgs = [...document.querySelectorAll('img')];
  return imgs
    .map(img => {
      const rect = img.getBoundingClientRect();
      const cs = getComputedStyle(img);
      return {
        src: img.src,
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        w: Math.round(rect.width),
        h: Math.round(rect.height),
        opacity: cs.opacity,
        visibility: cs.visibility,
        display: cs.display,
      };
    })
    .filter(img => img.y >= 600 && img.y <= 1050 && img.w >= 40)
    .sort((a, b) => a.y - b.y || a.x - b.x);
});

logos.forEach((l) => {
  const url = l.src.split('/').pop().split('?')[0];
  const visible = l.opacity !== '0' && l.visibility !== 'hidden' && l.display !== 'none';
  console.log(`[x:${l.x} y:${l.y} ${l.w}x${l.h}] op=${l.opacity} vis=${l.visibility} ${visible?'✓':'✗'} ${url}`);
});

await browser.close();
