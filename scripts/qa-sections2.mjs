import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:4444', { waitUntil: 'domcontentloaded', timeout: 15000 });
await page.waitForTimeout(2000);

// Take multiple section screenshots
const clips = [
  { name: 'logos', y: 1150, h: 400 },
  { name: 'casestudies-top', y: 6300, h: 900 },
  { name: 'fullsuite-top', y: 11200, h: 900 },
];

for (const clip of clips) {
  await page.screenshot({ 
    path: `/tmp/qa-${clip.name}.png`, 
    clip: { x: 0, y: clip.y, width: 1440, height: clip.h } 
  });
  console.log(`✓ qa-${clip.name}.png`);
}

await browser.close();
