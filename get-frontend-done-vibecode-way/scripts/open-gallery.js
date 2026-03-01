#!/usr/bin/env node
/**
 * Open Component Gallery in the default browser, or print URLs with --print.
 * Usage: node open-gallery.js [--print]
 */
const { execSync } = require('child_process');
const url = 'https://component.gallery';
const args = process.argv.slice(2);

if (args.includes('--print')) {
  console.log('Component Gallery:', url);
  console.log('Components: https://component.gallery/components');
  console.log('Design systems: https://component.gallery/design-systems');
  process.exit(0);
}

const cmd = process.platform === 'win32'
  ? `start "" "${url}"`
  : process.platform === 'darwin'
    ? `open "${url}"`
    : `xdg-open "${url}"`;

try {
  execSync(cmd, { stdio: 'ignore' });
} catch (_) {
  console.log('Open in browser:', url);
}
