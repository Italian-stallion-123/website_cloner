import fs from 'fs';

// Single-occurrence (actual) logo URLs from Playwright extraction
const toDownload = [
  // Row 1
  { url: 'https://framerusercontent.com/images/EjIzKqp6rfyiJenutQ6ZbijVmqA.png', file: 'logo-redocs.png' },
  { url: 'https://framerusercontent.com/images/NqSK1Xe0TH1Hkj4zCtWwzPfUNU.png', file: 'logo-lendingone.png' },
  // Row 2
  { url: 'https://framerusercontent.com/images/ur0lauSdG7o2Xfe1hHpucPF6oQ.png', file: 'logo-spotai.png' },
  { url: 'https://framerusercontent.com/images/TkvwPqvH8hBQcmZ3BTDCxRyM.png', file: 'logo-hologram-real.png' },
  // Row 3
  { url: 'https://framerusercontent.com/images/aEad00d2f23mDNRZvFS3G1sZJM.png', file: 'logo-integral-real.png' },
  { url: 'https://framerusercontent.com/images/B6sOUBupp4W2OIcVWklweUtq9Rs.png', file: 'logo-density-real.png' },
  { url: 'https://framerusercontent.com/images/liDX0SjpGaFEXWzliT8cgPoXdtc.png', file: 'logo-captions-real.png' },
  { url: 'https://framerusercontent.com/images/b5Hc3o31cgiT302V8mNYXupYy4k.png', file: 'logo-daxko-real.png' },
  // Row 4
  { url: 'https://framerusercontent.com/images/gtYHmzWVg3Bzr8reNtoGPUqL4.png', file: 'logo-newstore-check.png' },
  { url: 'https://framerusercontent.com/images/YwxsDVlByUh5KQpVpMbtwj9ordY.png', file: 'logo-sendoso-check.png' },
  { url: 'https://framerusercontent.com/images/VQHlT7vi6qYWDAXSq0Ti8GgPQ.png', file: 'logo-clientell-text.png' },
  { url: 'https://framerusercontent.com/images/H1VcTJY6E5L0RZaBW2xK49EL2U.png', file: 'logo-clientell-icon.png' },
  // Row 1 check
  { url: 'https://framerusercontent.com/images/EQpWJKXD76ioY9mCc483CpN1rA.png', file: 'logo-notion-check.png' },
  { url: 'https://framerusercontent.com/images/EFgX6QH3k2JRTonnRiBFl1Qf8.png', file: 'logo-cognition-check.png' },
  { url: 'https://framerusercontent.com/images/UvBTHzikaXxf1C46qhe7sZulmM.png', file: 'logo-gates-check.png' },
  { url: 'https://framerusercontent.com/images/UG8NPOGerI3MSqhahHv9Sa0qxhI.png', file: 'logo-loxo-check.png' },
];

const outDir = '/tmp/logo-checks';
fs.mkdirSync(outDir, { recursive: true });

for (const item of toDownload) {
  const res = await fetch(item.url);
  if (!res.ok) { console.error(`FAIL ${item.file}: ${res.status}`); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(`${outDir}/${item.file}`, buf);
  console.log(`✓ ${item.file} (${buf.length} bytes)`);
}
