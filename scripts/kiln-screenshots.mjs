import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// Desktop screenshot
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('https://thekiln.com', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(3000);
await page.screenshot({ path: '/tmp/kiln-desktop.png', fullPage: true });
console.log('Desktop screenshot taken');

// Get full rendered HTML
const html = await page.content();
const fs = await import('fs');
fs.writeFileSync('/tmp/kiln-rendered.html', html);
console.log('HTML saved, length:', html.length);

// Get page title and meta
const title = await page.title();
console.log('Title:', title);

// Get all text content sections
const sections = await page.evaluate(() => {
  const results = [];
  document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,button,span,li').forEach(el => {
    const text = el.textContent?.trim();
    if (text && text.length > 3 && text.length < 500) {
      results.push({ tag: el.tagName.toLowerCase(), text });
    }
  });
  return [...new Set(results.map(r => JSON.stringify(r)))].map(r => JSON.parse(r)).slice(0, 200);
});
fs.writeFileSync('/tmp/kiln-text-content.json', JSON.stringify(sections, null, 2));
console.log('Text content extracted:', sections.length, 'items');

// Mobile screenshot
await page.setViewportSize({ width: 390, height: 844 });
await page.screenshot({ path: '/tmp/kiln-mobile.png', fullPage: true });
console.log('Mobile screenshot taken');

await browser.close();
console.log('DONE');
