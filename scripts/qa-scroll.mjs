import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:4444', { waitUntil: 'domcontentloaded', timeout: 15000 });
await page.waitForTimeout(1500);

// Logo grid at ~y:1191
await page.evaluate(() => window.scrollTo(0, 1100));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s-logos.png' });

// Case studies top at ~y:6348
await page.evaluate(() => window.scrollTo(0, 6300));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s-cases.png' });

// FullSuite at ~y:11297
await page.evaluate(() => window.scrollTo(0, 11200));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s-fullsuite.png' });

// Testimonials at ~y:15363
await page.evaluate(() => window.scrollTo(0, 15300));
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/s-testimonials.png' });

await browser.close();
console.log('done');
