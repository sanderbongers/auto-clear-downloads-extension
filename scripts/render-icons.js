const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '..', 'icons');
const source = path.join(iconsDir, 'icon.svg');
const sizes = [32, 48, 96, 128];

(async () => {
  const svg = fs.readFileSync(source);

  for (const size of sizes) {
    const output = path.join(iconsDir, `icon-${size}.png`);

    await sharp(svg, { density: 384 })
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(output);

    console.log(`Rendered ${path.relative(process.cwd(), output)}`);
  }
})();
