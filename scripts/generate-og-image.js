// scripts/generate-og-image.js
// Converts og-image.svg to og-image.png for social media compatibility
// Run: node scripts/generate-og-image.js

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(__dirname, '../public/og-image.svg');
const pngPath = resolve(__dirname, '../public/og-image.png');

const svgBuffer = readFileSync(svgPath);

sharp(svgBuffer)
  .resize(1200, 630)
  .png({ quality: 90 })
  .toFile(pngPath)
  .then(() => console.log('Generated public/og-image.png (1200x630)'))
  .catch((err) => {
    console.error('Failed to generate og-image.png:', err.message);
    process.exit(1);
  });
