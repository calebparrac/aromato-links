// Genera public/og.png (1200×630) y public/apple-touch-icon.png (180×180)
// a partir del isotipo. Ejecutar con: node scripts/generate-images.mjs
import sharp from 'sharp';

const isotipo = (stroke) => `
  <g fill="none" stroke="${stroke}" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-width="4.6" d="M50,8 C50,8 30,32 30,52 A24,24 0 0,0 70,52 C70,32 50,8 50,8 Z"/>
    <g stroke-width="3.8">
      <line x1="43" y1="25" x2="57" y2="25"/>
      <line x1="43" y1="25" x2="30" y2="52"/>
      <line x1="57" y1="25" x2="70" y2="52"/>
      <line x1="30" y1="52" x2="70" y2="52"/>
      <line x1="30" y1="52" x2="50" y2="63"/>
      <line x1="70" y1="52" x2="50" y2="63"/>
    </g>
  </g>`;

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="bg" cx="50%" cy="0%" r="90%">
      <stop offset="0%" stop-color="#0B1F3A"/>
      <stop offset="70%" stop-color="#061428"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g transform="translate(490 201) scale(2.2)">${isotipo('#FFFFFF')}</g>
  <line x1="564" y1="409" x2="636" y2="409" stroke="#C9A227" stroke-width="2"/>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#0B1F3A"/>
  <g transform="translate(15 12) scale(0.7)">${isotipo('#FFFFFF')}</g>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og.png');
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Imágenes generadas en public/');
