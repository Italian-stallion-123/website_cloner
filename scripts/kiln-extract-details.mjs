import { runKilnExtraction } from './kiln-extractor.mjs';

await runKilnExtraction({
  mode: process.env.KILN_EXTRACT_MODE ?? 'fast',
  force: process.env.KILN_EXTRACT_FORCE === '1',
});
