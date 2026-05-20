import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2000);

// Full page screenshot
await page.screenshot({ path: '/tmp/clone-desktop.png', fullPage: true });
console.log('Desktop screenshot taken');

// Section shots
const sections = [0, 800, 1600, 2400, 3200, 4000, 4800, 5600];
for (const y of sections) {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/clone-section-${y}.png` });
}

// Mobile
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/clone-mobile.png', fullPage: true });

await browser.close();
console.log('QA screenshots done');
