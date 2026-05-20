import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:4444', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2000);

const sections = [0, 800, 1600, 2400, 3200, 4000, 4800, 5600, 6400, 7200];
for (const y of sections) {
  await page.evaluate((sy) => window.scrollTo(0, sy), y);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/qa-${y}.png` });
  console.log('Shot at y=' + y);
}
await page.screenshot({ path: '/tmp/qa-full.png', fullPage: true });

// Mobile
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:4444', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/qa-mobile-full.png', fullPage: true });

await browser.close();
console.log('QA complete');
