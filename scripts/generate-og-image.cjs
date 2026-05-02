const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  
  const root = path.resolve(__dirname, '..');
  const filePath = path.join(root, 'public', 'og-template.html');
  await page.goto(`file://${filePath}`);
  
  await page.waitForTimeout(1000);
  
  await page.screenshot({
    path: path.join(root, 'public', 'og-image.png'),
    fullPage: false,
  });
  
  await browser.close();
  console.log('OG image generated at public/og-image.png');
})();
