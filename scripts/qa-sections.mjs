import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:4444', { waitUntil: 'domcontentloaded', timeout: 15000 });
await page.waitForTimeout(2000);

// Get positions of sections
const bounds = await page.evaluate(() => {
  const sections = document.querySelectorAll('section, footer');
  return [...sections].map((s, i) => {
    const r = s.getBoundingClientRect();
    const scrollY = window.scrollY;
    return { i, top: Math.round(r.top + scrollY), h: Math.round(r.height), tag: s.tagName };
  });
});
console.log(JSON.stringify(bounds));
await browser.close();
