import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const TARGET_URL = 'https://thekiln.com';
const TMP_DIR = '/tmp';
const MANIFEST_PATH = path.join(TMP_DIR, 'kiln-extraction-manifest.json');
const CACHE_TTL_MS = 15 * 60 * 1000;

const ARTIFACTS = [
  'kiln-structure.json',
  'kiln-design.json',
  'kiln-nav.json',
  'kiln-screenshots.json',
  'kiln-images.json',
  'kiln-textcontent.json',
  'kiln-header-states.json',
  'kiln-hero.json',
  'kiln-buttons.json',
  'kiln-section-labels.json',
  'kiln-testimonials.json',
  'kiln-hero-details.json',
  'kiln-cards.json',
  'kiln-footer.json',
  'kiln-cta.json',
  'kiln-logos.json',
  'kiln-feature-section.json',
];

function artifactPath(name) {
  return path.join(TMP_DIR, name);
}

function writeJson(name, data) {
  fs.writeFileSync(artifactPath(name), JSON.stringify(data, null, 2));
}

function hasFreshCache(mode) {
  if (!fs.existsSync(MANIFEST_PATH)) {
    return false;
  }

  try {
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    const artifactMode = manifest.mode ?? 'fast';
    const cacheAge = Date.now() - (manifest.generatedAt ?? 0);
    const freshEnough = cacheAge < CACHE_TTL_MS;
    const modeSatisfied = artifactMode === 'full' || artifactMode === mode;
    const artifactsPresent = ARTIFACTS.every((name) => fs.existsSync(artifactPath(name)));
    return freshEnough && modeSatisfied && artifactsPresent;
  } catch {
    return false;
  }
}

async function waitForPageReady(page) {
  await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded', timeout: 20000 });
  await Promise.allSettled([
    page.waitForSelector('main, nav, footer', { timeout: 5000 }),
    page.evaluate(() => (document.fonts?.ready ? document.fonts.ready.then(() => true) : true)),
  ]);
  await page.waitForFunction(() => document.body && document.body.innerText.trim().length > 100, { timeout: 5000 }).catch(() => {});
}

async function collectSnapshot(page) {
  return page.evaluate(() => {
    const normalizeText = (value) => value?.replace(/\s+/g, ' ').trim() ?? '';
    const bodyEls = Array.from(document.body?.querySelectorAll('*') ?? []);
    const limitedEls = bodyEls.slice(0, 1800);
    const interactiveSelectors = 'button, a[class*="btn"], a[class*="cta"], [class*="button"]';
    const sectionSelectors = 'section, main > div, header, nav, footer, [class*="section"], [class*="hero"], [class*="features"]';
    const allColors = new Set();
    const fontFamilies = new Set();
    const textSeen = new Set();

    const structure = Array.from(document.querySelectorAll(sectionSelectors)).map((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.height < 20) {
        return null;
      }
      const cs = getComputedStyle(el);
      return {
        index,
        tag: el.tagName.toLowerCase(),
        classes: el.className?.toString().slice(0, 100),
        id: el.id,
        offsetTop: Math.round(rect.top + window.scrollY),
        height: Math.round(rect.height),
        bg: cs.backgroundColor,
        text: normalizeText(el.textContent).slice(0, 150),
      };
    }).filter(Boolean);

    const designElementSelectors = [
      'body', 'h1', 'h2', 'h3', 'h4', 'p', 'a', 'button', 'nav', 'header', 'footer',
      '[class*="hero"]', '[class*="title"]', '[class*="cta"]', '[class*="btn"]', '[class*="card"]',
    ];
    const designElements = {};
    for (const sel of designElementSelectors) {
      const el = document.querySelector(sel);
      if (!el) {
        continue;
      }
      const cs = getComputedStyle(el);
      designElements[sel] = {
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
      };
    }

    for (const el of limitedEls.slice(0, 700)) {
      const cs = getComputedStyle(el);
      for (const prop of ['color', 'backgroundColor', 'borderColor', 'outlineColor']) {
        const value = cs[prop];
        if (value && value !== 'rgba(0, 0, 0, 0)' && value !== 'transparent') {
          allColors.add(value);
        }
      }
    }

    for (const el of Array.from(document.querySelectorAll('h1,h2,h3,p,button,a,span')).slice(0, 120)) {
      fontFamilies.add(getComputedStyle(el).fontFamily);
    }

    const navEl = document.querySelector('nav, header nav, [class*="nav"], [class*="header"]');
    const nav = navEl ? {
      bg: getComputedStyle(navEl).backgroundColor,
      padding: getComputedStyle(navEl).padding,
      position: getComputedStyle(navEl).position,
      links: Array.from(navEl.querySelectorAll('a')).map((a) => ({ text: normalizeText(a.textContent), href: a.href })),
      buttons: Array.from(navEl.querySelectorAll('button, [class*="btn"], [class*="cta"]')).map((b) => ({ text: normalizeText(b.textContent) })),
      html: navEl.outerHTML.slice(0, 2000),
    } : null;

    const images = Array.from(document.querySelectorAll('img')).map((img) => ({
      src: img.src || img.currentSrc,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      classes: img.className?.toString().slice(0, 100),
    })).filter((img) => img.src);

    const bgImages = [];
    for (const el of limitedEls) {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.includes('url')) {
        const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
        if (match) {
          bgImages.push({
            url: match[1],
            element: `${el.tagName} ${el.className?.toString().slice(0, 50) ?? ''}`.trim(),
          });
        }
      }
      if (bgImages.length >= 50) {
        break;
      }
    }

    const textContent = [];
    for (const el of document.querySelectorAll('h1,h2,h3,h4,h5,p,li,button,a,span,label,div')) {
      const text = normalizeText(el.textContent);
      if (!text || text.length < 3 || text.length > 500 || textSeen.has(text)) {
        continue;
      }
      if (el.children.length > 0 && el.tagName !== 'BUTTON' && el.tagName !== 'A') {
        continue;
      }
      textSeen.add(text);
      const cs = getComputedStyle(el);
      textContent.push({
        tag: el.tagName.toLowerCase(),
        text,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        color: cs.color,
      });
      if (textContent.length >= 300) {
        break;
      }
    }

    const heroEl = document.querySelector('[class*="hero"], main > div:first-child, main > section:first-child, #hero') ||
      Array.from(document.querySelectorAll('div')).find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.height > 400 && rect.top < 200;
      });
    const hero = heroEl ? {
      tag: heroEl.tagName,
      classes: heroEl.className?.toString(),
      bg: getComputedStyle(heroEl).background,
      height: getComputedStyle(heroEl).height,
      html: heroEl.outerHTML.slice(0, 3000),
    } : null;

    const interactive = Array.from(document.querySelectorAll(interactiveSelectors)).map((el) => {
      const cs = getComputedStyle(el);
      return {
        text: normalizeText(el.textContent).slice(0, 50),
        tag: el.tagName.toLowerCase(),
        bg: cs.backgroundColor,
        color: cs.color,
        padding: cs.padding,
        borderRadius: cs.borderRadius,
        border: cs.border,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        href: el.href || null,
      };
    }).slice(0, 30);

    const keywords = ['SERVICES', 'HOW WE WORK', 'CASE STUDIES', 'TESTIMONIALS', 'BOOK'];
    const sectionLabels = [];
    for (const el of limitedEls) {
      const text = normalizeText(el.textContent).toUpperCase();
      if (!text) {
        continue;
      }
      const matchesKeyword = keywords.some((kw) => text === kw || text.includes(kw));
      if (!matchesKeyword) {
        continue;
      }
      const cs = getComputedStyle(el);
      if (el.children.length <= 3) {
        sectionLabels.push({
          text: normalizeText(el.textContent),
          outerHTML: el.outerHTML.slice(0, 500),
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          letterSpacing: cs.letterSpacing,
          color: cs.color,
          textTransform: cs.textTransform,
        });
      }
      if (sectionLabels.length >= 15) {
        break;
      }
    }

    const quoteMap = new Map();
    for (const el of limitedEls) {
      const text = normalizeText(el.textContent);
      if (!text || text.length <= 50 || !text.includes('"') || el.children.length >= 5) {
        continue;
      }
      const cs = getComputedStyle(el);
      if (parseFloat(cs.fontSize) < 14) {
        continue;
      }
      const entry = {
        text: text.slice(0, 300),
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
      };
      quoteMap.set(JSON.stringify(entry), entry);
      if (quoteMap.size >= 20) {
        break;
      }
    }

    const banner = document.querySelector('[class*="banner"], [class*="announce"], [class*="acquisition"]') ||
      Array.from(document.querySelectorAll('div')).find((el) => normalizeText(el.textContent).includes('acquired by 2X'));
    const ctaBtn = Array.from(document.querySelectorAll('a, button')).find((el) => normalizeText(el.textContent).includes('Talk with us'));
    const learnMoreBtn = Array.from(document.querySelectorAll('a, button')).find((el) => {
      const text = normalizeText(el.textContent);
      return text === 'Learn More →' || text.includes('Learn More');
    });
    const heroDetails = {
      bannerData: banner ? {
        text: normalizeText(banner.textContent),
        bg: getComputedStyle(banner).backgroundColor,
        borderRadius: getComputedStyle(banner).borderRadius,
        html: banner.outerHTML.slice(0, 500),
      } : null,
      ctaBtnData: ctaBtn ? {
        text: normalizeText(ctaBtn.textContent),
        bg: getComputedStyle(ctaBtn).backgroundColor,
        color: getComputedStyle(ctaBtn).color,
        borderRadius: getComputedStyle(ctaBtn).borderRadius,
        padding: getComputedStyle(ctaBtn).padding,
        fontSize: getComputedStyle(ctaBtn).fontSize,
        fontWeight: getComputedStyle(ctaBtn).fontWeight,
        border: getComputedStyle(ctaBtn).border,
      } : null,
      learnMoreData: learnMoreBtn ? {
        text: normalizeText(learnMoreBtn.textContent),
        bg: getComputedStyle(learnMoreBtn).backgroundColor,
        color: getComputedStyle(learnMoreBtn).color,
        borderRadius: getComputedStyle(learnMoreBtn).borderRadius,
        padding: getComputedStyle(learnMoreBtn).padding,
      } : null,
    };

    const servicesCards = [];
    for (const el of Array.from(document.querySelectorAll('div'))) {
      const cs = getComputedStyle(el);
      const bg = cs.backgroundColor;
      if (parseFloat(cs.borderRadius) < 12 || bg === 'rgba(0, 0, 0, 0)' || bg === 'rgb(255, 255, 255)') {
        continue;
      }
      if (!el.textContent || el.textContent.length <= 50 || el.children.length === 0) {
        continue;
      }
      const rect = el.getBoundingClientRect();
      servicesCards.push({
        bg,
        borderRadius: cs.borderRadius,
        padding: cs.padding,
        boxShadow: cs.boxShadow,
        offsetTop: Math.round(rect.top + window.scrollY),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        text: normalizeText(el.textContent).slice(0, 200),
      });
      if (servicesCards.length >= 20) {
        break;
      }
    }

    const footerEl = document.querySelector('footer, [class*="footer"]');
    const footer = footerEl ? {
      bg: getComputedStyle(footerEl).backgroundColor,
      color: getComputedStyle(footerEl).color,
      padding: getComputedStyle(footerEl).padding,
      html: footerEl.outerHTML.slice(0, 3000),
      links: Array.from(footerEl.querySelectorAll('a')).map((a) => ({ text: normalizeText(a.textContent), href: a.href })),
      offsetTop: Math.round(footerEl.getBoundingClientRect().top + window.scrollY),
    } : null;

    const ctaSectionEl = Array.from(document.querySelectorAll('div, section')).find((el) => {
      const bg = getComputedStyle(el).backgroundColor;
      return (bg === 'rgb(3, 0, 0)' || bg === 'rgb(0, 0, 0)' || bg.includes('0, 0, 0')) &&
        normalizeText(el.textContent).includes('Get in touch') &&
        el.children.length > 0;
    });
    const ctaSection = ctaSectionEl ? {
      bg: getComputedStyle(ctaSectionEl).backgroundColor,
      padding: getComputedStyle(ctaSectionEl).padding,
      html: ctaSectionEl.outerHTML.slice(0, 2000),
      text: normalizeText(ctaSectionEl.textContent).slice(0, 500),
    } : null;

    const logoGrid = Array.from(document.querySelectorAll('img')).filter((img) => {
      const rect = img.getBoundingClientRect();
      return img.naturalHeight < 100 && img.naturalWidth > 40 && rect.top > 400 && rect.top < 800;
    }).map((img) => ({
      src: img.src,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      displayWidth: Math.round(img.getBoundingClientRect().width),
      displayHeight: Math.round(img.getBoundingClientRect().height),
    }));

    const vertLine = Array.from(document.querySelectorAll('div')).find((el) => {
      const cs = getComputedStyle(el);
      return parseFloat(cs.width) < 5 && parseFloat(cs.height) > 100 && cs.backgroundColor !== 'rgba(0, 0, 0, 0)';
    });
    const featureSection = {
      vertLineFound: Boolean(vertLine),
      vertLineBg: vertLine ? getComputedStyle(vertLine).backgroundColor : null,
      vertLineWidth: vertLine ? getComputedStyle(vertLine).width : null,
    };

    return {
      meta: {
        pageHeight: document.documentElement.scrollHeight,
      },
      structure,
      design: {
        elements: designElements,
        colors: Array.from(allColors).slice(0, 30),
        fontFamilies: Array.from(fontFamilies).slice(0, 10),
      },
      nav,
      images: {
        images,
        bgImages,
      },
      textContent,
      hero,
      interactive,
      sectionLabels,
      testimonials: Array.from(quoteMap.values()),
      heroDetails,
      servicesCards: servicesCards.sort((a, b) => a.offsetTop - b.offsetTop).slice(0, 20),
      footer,
      ctaSection,
      logoGrid,
      featureSection,
    };
  });
}

async function captureHeaderStates(page) {
  const capture = async () => page.evaluate(() => {
    const header = document.querySelector('nav, header, [class*="nav"], [class*="header"]');
    if (!header) {
      return null;
    }
    const cs = getComputedStyle(header);
    return {
      bg: cs.backgroundColor,
      position: cs.position,
      top: cs.top,
      height: cs.height,
      boxShadow: cs.boxShadow,
      backdropFilter: cs.backdropFilter,
      borderBottom: cs.borderBottom,
      zIndex: cs.zIndex,
    };
  });

  const headerInit = await capture();
  await page.evaluate(() => window.scrollTo(0, 300));
  await page.waitForTimeout(150);
  const headerScrolled = await capture();
  await page.evaluate(() => window.scrollTo(0, 0));
  return { headerInit, headerScrolled };
}

async function captureScreenshots(page, snapshot, mode) {
  const pageHeight = snapshot.meta.pageHeight;
  const viewportHeight = 900;
  const screenshots = [];

  let positions;
  if (mode === 'full') {
    positions = [];
    for (let scrollY = 0; scrollY < pageHeight; scrollY += viewportHeight - 100) {
      positions.push(scrollY);
    }
  } else {
    const heroHeight = parseInt(snapshot.hero?.height ?? '0', 10) || viewportHeight;
    const footerTop = snapshot.footer?.offsetTop ?? Math.max(pageHeight - viewportHeight, 0);
    positions = Array.from(new Set([
      0,
      Math.max(0, Math.min(pageHeight - viewportHeight, heroHeight)),
      Math.max(0, Math.min(pageHeight - viewportHeight, footerTop)),
    ])).sort((a, b) => a - b);
  }

  for (const scrollY of positions) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(120);
    const file = artifactPath(`kiln-section-${scrollY}.png`);
    await page.screenshot({ path: file });
    screenshots.push({ file, scrollY });
  }

  await page.evaluate(() => window.scrollTo(0, 0));
  return screenshots;
}

function persistSnapshot(snapshot, headerStates, screenshots) {
  writeJson('kiln-structure.json', snapshot.structure);
  writeJson('kiln-design.json', snapshot.design);
  writeJson('kiln-nav.json', snapshot.nav);
  writeJson('kiln-screenshots.json', screenshots);
  writeJson('kiln-images.json', snapshot.images);
  writeJson('kiln-textcontent.json', snapshot.textContent);
  writeJson('kiln-header-states.json', headerStates);
  writeJson('kiln-hero.json', snapshot.hero);
  writeJson('kiln-buttons.json', snapshot.interactive);
  writeJson('kiln-section-labels.json', snapshot.sectionLabels);
  writeJson('kiln-testimonials.json', snapshot.testimonials);
  writeJson('kiln-hero-details.json', snapshot.heroDetails);
  writeJson('kiln-cards.json', snapshot.servicesCards);
  writeJson('kiln-footer.json', snapshot.footer);
  writeJson('kiln-cta.json', snapshot.ctaSection);
  writeJson('kiln-logos.json', snapshot.logoGrid);
  writeJson('kiln-feature-section.json', snapshot.featureSection);
}

function parseArgs(argv) {
  const args = { mode: 'fast', force: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--mode' && argv[i + 1]) {
      args.mode = argv[i + 1];
      i += 1;
    } else if (arg === '--force') {
      args.force = true;
    }
  }
  if (args.mode !== 'fast' && args.mode !== 'full') {
    throw new Error(`Unsupported mode: ${args.mode}`);
  }
  return args;
}

export async function runKilnExtraction({ mode = 'fast', force = false } = {}) {
  if (!force && hasFreshCache(mode)) {
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    console.log(`Using cached Kiln extraction from ${new Date(manifest.generatedAt).toISOString()} (${manifest.mode}).`);
    return manifest;
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  try {
    await waitForPageReady(page);
    const snapshot = await collectSnapshot(page);
    const [headerStates, screenshots] = await Promise.all([
      captureHeaderStates(page),
      captureScreenshots(page, snapshot, mode),
    ]);
    persistSnapshot(snapshot, headerStates, screenshots);

    const manifest = {
      mode,
      generatedAt: Date.now(),
      pageHeight: snapshot.meta.pageHeight,
      screenshots: screenshots.length,
      images: snapshot.images.images.length,
      textItems: snapshot.textContent.length,
    };
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
    console.log(`Kiln extraction complete in ${mode} mode.`);
    console.log('Page height:', snapshot.meta.pageHeight, 'px');
    console.log('Screenshots taken:', screenshots.length);
    console.log('Images found:', snapshot.images.images.length);
    console.log('Text items:', snapshot.textContent.length);
    return manifest;
  } finally {
    await browser.close();
  }
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isDirectRun) {
  const args = parseArgs(process.argv.slice(2));
  await runKilnExtraction(args);
}
