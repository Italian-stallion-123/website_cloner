import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('https://thekiln.com', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2000);

const getImgs = async () => await page.evaluate(() => {
  const results = [];
  document.querySelectorAll('img').forEach(img => {
    const rect = img.getBoundingClientRect();
    const scrollY = window.scrollY;
    const parent2 = img.parentElement?.parentElement;
    const nearbyText = (parent2?.textContent?.trim() || '').slice(0, 60);
    const src = (img.src || '').replace('https://framerusercontent.com/images/', '').split('?')[0];
    if (img.naturalWidth > 80) {
      results.push({ src, w: img.naturalWidth, h: img.naturalHeight, y: Math.round(rect.top + scrollY), t: nearbyText });
    }
  });
  return results;
});

const imgs1 = await getImgs();
await page.evaluate(() => window.scrollTo(0, 3000));
await page.waitForTimeout(500);
const imgs2 = await getImgs();
await page.evaluate(() => window.scrollTo(0, 5000));
await page.waitForTimeout(500);
const imgs3 = await getImgs();

const all = [...imgs1, ...imgs2, ...imgs3];
const unique = [...new Map(all.map(i => [i.src, i])).values()].sort((a,b) => a.y - b.y);

for (const i of unique) {
  console.log('y:' + String(i.y).padStart(5) + ' ' + i.w + 'x' + i.h + ' ' + i.src.slice(0,40) + ' "' + i.t.slice(0,50) + '"');
}

await browser.close();
