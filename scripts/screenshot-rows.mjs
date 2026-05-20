import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 1200 });
await page.goto('https://thekiln.com', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(3000);

// Take a taller screenshot of the logo area
await page.screenshot({ path: '/tmp/logo-grid-full.png', clip: { x: 0, y: 580, width: 1440, height: 550 } });
console.log('Screenshot saved');
await browser.close();
