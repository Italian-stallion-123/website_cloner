import fs from 'fs';

const toDownload = [
  { url: 'https://framerusercontent.com/images/UZezjZuM09AuSwmpFt6gWK7HuPY.png', file: 'logo-hologram.png' },
  { url: 'https://framerusercontent.com/images/DTIVD7w4DxIswu0KS9EWiG0SNs.png', file: 'logo-captions.png' },
  { url: 'https://framerusercontent.com/images/gtYHmzWVg3Bzr8reNtoGPUqL4.png', file: 'logo-newstore.png' },
  { url: 'https://framerusercontent.com/images/H1VcTJY6E5L0RZaBW2xK49EL2U.png', file: 'logo-clientell.png' },
];

const outDir = '/Users/giorgiozanella/Documents/Coding/General Project/Website Clone/public/images';

for (const item of toDownload) {
  const res = await fetch(item.url);
  if (!res.ok) { console.error(`FAIL ${item.file}: ${res.status}`); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(`${outDir}/${item.file}`, buf);
  console.log(`✓ ${item.file} (${buf.length} bytes)`);
}
