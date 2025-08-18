const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://qarmy.ar/practica/automation/index.html');
  await page.getByTestId('input-firstName').click();
  await page.getByTestId('input-firstName').click();
  await page.getByTestId('input-firstName').fill('Ejemplo');
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();