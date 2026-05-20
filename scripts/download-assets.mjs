import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const assets = [
  // Logo
  { url: 'https://framerusercontent.com/images/YLwP4kyyM1s6fcKAl00uLvuMhGg.png', dest: 'images/kiln-logo.png' },

  // Client logos
  { url: 'https://framerusercontent.com/images/8XWIXJtmXO7STedZbwi8rvVprig.png', dest: 'images/logo-notion.png' },
  { url: 'https://framerusercontent.com/images/EQpWJKXD76ioY9mCc483CpN1rA.png', dest: 'images/logo-twelvelabs.png' },
  { url: 'https://framerusercontent.com/images/ejdkP2HEFBbZtom1fRbJdBibV0.png', dest: 'images/logo-cognition.png' },
  { url: 'https://framerusercontent.com/images/EjIzKqp6rfyiJenutQ6ZbijVmqA.png', dest: 'images/logo-antimetal.png' },
  { url: 'https://framerusercontent.com/images/EFgX6QH3k2JRTonnRiBFl1Qf8.png', dest: 'images/logo-gates-foundation.png' },
  { url: 'https://framerusercontent.com/images/oO6pita4OIVpqMAOxlLnAZsgmg0.png', dest: 'images/logo-recess.png' },
  { url: 'https://framerusercontent.com/images/NqSK1Xe0TH1Hkj4zCtWwzPfUNU.png', dest: 'images/logo-loxo.png' },
  { url: 'https://framerusercontent.com/images/UvBTHzikaXxf1C46qhe7sZulmM.png', dest: 'images/logo-aligned.png' },
  { url: 'https://framerusercontent.com/images/2zvdXDuJGfQihZpsJh1AZj50dDI.png', dest: 'images/logo-bunker.png' },
  { url: 'https://framerusercontent.com/images/ur0lauSdG7o2Xfe1hHpucPF6oQ.png', dest: 'images/logo-density.png' },
  { url: 'https://framerusercontent.com/images/UG8NPOGerI3MSqhahHv9Sa0qxhI.png', dest: 'images/logo-materialize.png' },
  { url: 'https://framerusercontent.com/images/B6sOUBupp4W2OIcVWklweUtq9Rs.png', dest: 'images/logo-rafay.png' },
  { url: 'https://framerusercontent.com/images/DTIVD7w4DxIswu0KS9EWiG0SNs.png', dest: 'images/logo-sendoso.png' },
  { url: 'https://framerusercontent.com/images/liDX0SjpGaFEXWzliT8cgPoXdtc.png', dest: 'images/logo-troc.png' },
  { url: 'https://framerusercontent.com/images/b5Hc3o31cgiT302V8mNYXupYy4k.png', dest: 'images/logo-daxko.png' },
  { url: 'https://framerusercontent.com/images/komkThFe3k2Ge41KKGo4FelozW4.png', dest: 'images/logo-azuga.png' },
  { url: 'https://framerusercontent.com/images/aEad00d2f23mDNRZvFS3G1sZJM.png', dest: 'images/logo-integral.png' },
  { url: 'https://framerusercontent.com/images/VLUGtQd8TtySXhal2na6rw34c.png', dest: 'images/logo-trocone.png' },
  { url: 'https://framerusercontent.com/images/QpRvZh5NKULL21rg4s2SQd6SBeY.png', dest: 'images/logo-extra.png' },

  // Avatars
  { url: 'https://framerusercontent.com/images/5p4nyQqeyCcqrOLnVDjX31tKS0A.png', dest: 'images/avatar-harish.png' },
  { url: 'https://framerusercontent.com/images/UZezjZuM09AuSwmpFt6gWK7HuPY.png', dest: 'images/avatar-katie.png' },

  // Favicons
  { url: 'https://framerusercontent.com/images/Ma4RwWAO5Gj6fLvOfbK6U9tqByw.png', dest: 'seo/favicon-light.png' },
  { url: 'https://framerusercontent.com/images/mZmNP4PRdYLh2g99ose9XRVJrQ8.png', dest: 'seo/favicon-dark.png' },
  { url: 'https://framerusercontent.com/assets/ES073pFzz44VC8VfONGMcfxJVIM.png', dest: 'seo/og-image.png' },
];

async function downloadAsset(url, destRelative) {
  const dest = path.join(PUBLIC_DIR, destRelative);
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  if (fs.existsSync(dest)) {
    console.log(`  skip (exists): ${destRelative}`);
    return;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buf));
    console.log(`  ✓ ${destRelative} (${Math.round(buf.byteLength / 1024)}KB)`);
  } catch (err) {
    console.error(`  ✗ ${destRelative}: ${err.message}`);
  }
}

// Batch 4 at a time
console.log('Downloading assets...');
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map(a => downloadAsset(a.url, a.dest)));
}

// Also use Playwright to get the hero illustration URLs
console.log('\nFetching hero illustration URLs via Playwright...');
try {
  const { chromium } = await import('playwright');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('https://thekiln.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);

  const heroImgs = await page.evaluate(() => {
    // Get images in the hero area (top 800px of page)
    return [...document.querySelectorAll('img')].filter(img => {
      const rect = img.getBoundingClientRect();
      return rect.top < 800 && img.naturalWidth > 50;
    }).map(img => ({
      src: img.src || img.currentSrc,
      width: img.naturalWidth,
      height: img.naturalHeight,
      top: Math.round(img.getBoundingClientRect().top)
    }));
  });

  // Get service card illustrations (next ~700px)
  const serviceImgs = await page.evaluate(() => {
    return [...document.querySelectorAll('img')].filter(img => {
      const rect = img.getBoundingClientRect();
      return rect.top >= 800 && rect.top < 2000 && img.naturalWidth > 80;
    }).map(img => ({
      src: img.src || img.currentSrc,
      width: img.naturalWidth,
      height: img.naturalHeight,
      top: Math.round(img.getBoundingClientRect().top + window.scrollY)
    }));
  });

  // Scroll down to get feature section illustrations
  await page.evaluate(() => window.scrollTo(0, 4000));
  await page.waitForTimeout(500);
  const featureImgs = await page.evaluate(() => {
    return [...document.querySelectorAll('img')].filter(img => {
      const rect = img.getBoundingClientRect();
      return img.naturalWidth > 80 && img.naturalHeight > 50;
    }).map(img => ({
      src: img.src || img.currentSrc,
      width: img.naturalWidth,
      height: img.naturalHeight,
    }));
  });

  await browser.close();

  const allImgs = [...heroImgs, ...serviceImgs, ...featureImgs]
    .filter(img => img.src && img.src.includes('framerusercontent'))
    .map(img => ({ url: img.src.split('?')[0], ...img }));

  // Deduplicate
  const uniqueImgs = [...new Map(allImgs.map(i => [i.url, i])).values()];

  fs.writeFileSync('/tmp/kiln-all-imgs.json', JSON.stringify(uniqueImgs, null, 2));
  console.log(`Found ${uniqueImgs.length} unique Framer images`);

  // Download them with auto-named files
  const extraDownloads = uniqueImgs
    .filter(img => !assets.find(a => a.url.includes(img.url.split('/').pop()?.split('?')[0] ?? '')))
    .map((img, i) => {
      const ext = img.url.includes('.png') ? 'png' : img.url.includes('.jpg') ? 'jpg' : 'webp';
      const fname = img.url.split('/').pop() || `asset-${i}`;
      return { url: img.url, dest: `images/framer/${fname}.${ext}` };
    });

  for (let i = 0; i < extraDownloads.length; i += 4) {
    await Promise.all(extraDownloads.slice(i, i + 4).map(a => downloadAsset(a.url, a.dest)));
  }

  // Write a manifest for use in components
  fs.writeFileSync(
    path.join(PUBLIC_DIR, '..', 'src', 'lib', 'kiln-assets.ts'),
    `// Auto-generated asset manifest\nexport const KILN_ASSETS = ${JSON.stringify(
      uniqueImgs.map(img => ({
        url: img.url,
        localPath: '/images/framer/' + (img.url.split('/').pop() || 'unknown'),
        width: img.width,
        height: img.height,
      })),
      null,
      2
    )} as const;\n`
  );
  console.log('Asset manifest written to src/lib/kiln-assets.ts');
} catch (e) {
  console.error('Playwright step failed:', e.message);
}

console.log('\nDone!');
