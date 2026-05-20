import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('https://thekiln.com', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(3000);

// Find all images in the logo grid section
const logos = await page.evaluate(() => {
  // Find all img elements on the page, focusing on the logo area
  const imgs = [...document.querySelectorAll('img')];
  return imgs.map(img => ({
    src: img.src || img.currentSrc,
    alt: img.alt,
    width: img.naturalWidth,
    height: img.naturalHeight,
    rect: img.getBoundingClientRect(),
  }));
});

console.log(JSON.stringify(logos, null, 2));
await browser.close();
