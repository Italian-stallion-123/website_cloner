import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('https://thekiln.com', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(3000);

// Screenshot the logo grid area (approx y:580-1050 on 1440px viewport)
await page.screenshot({ path: '/tmp/logo-grid-section.png', clip: { x: 0, y: 580, width: 1440, height: 470 } });

// Extract images in the logo grid y-range with their x positions
const logos = await page.evaluate(() => {
  const imgs = [...document.querySelectorAll('img')];
  return imgs
    .map(img => {
      const rect = img.getBoundingClientRect();
      return {
        src: img.src,
        width: img.naturalWidth,
        height: img.naturalHeight,
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        w: Math.round(rect.width),
        h: Math.round(rect.height),
      };
    })
    // Filter to logo grid area: y 600-1050, width > 40
    .filter(img => img.y >= 600 && img.y <= 1050 && img.w >= 40)
    .sort((a, b) => a.y - b.y || a.x - b.x);
});

console.log('Logo grid images sorted by position:');
logos.forEach((l, i) => {
  const url = l.src.split('/').pop().split('?')[0];
  console.log(`${i+1}. [x:${l.x} y:${l.y} ${l.w}x${l.h}] ${url} (nat: ${l.width}x${l.height})`);
});

await browser.close();
