import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:4444', { waitUntil: 'load', timeout: 20000 });
await page.waitForTimeout(2000);

const bounds = await page.evaluate(() => {
  return [...document.querySelectorAll('section')].map((s, i) => {
    const r = s.getBoundingClientRect();
    return { i, top: Math.round(r.top + window.scrollY), h: Math.round(r.height) };
  });
});

for (const b of bounds) {
  console.log(`section ${b.i}: top=${b.top} h=${b.h}`);
  await page.evaluate((y) => window.scrollTo(0, y), b.top);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/section-${b.i}.png` });
}
await browser.close();
console.log('done');
