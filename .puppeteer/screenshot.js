const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  const url = 'https://evacoffee.github.io/eva-personal/';
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  // small delay to let client-side React render
  await page.waitForTimeout(1500);

  const path = '/workspaces/eva-personal/screenshot.png';
  await page.screenshot({ path, fullPage: false });
  console.log('Screenshot saved to', path);

  await browser.close();
})();
