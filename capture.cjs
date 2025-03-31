const puppeteer = require('puppeteer');

async function captureScreenshot(url, width, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Naviguer vers l'URL spécifiée
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Calculer la hauteur totale du body
  const bodyHeight = await page.evaluate(() => {
    return document.body.scrollHeight;
  });

  // Définir la hauteur du viewport à la hauteur totale du body
  await page.setViewport({ width, height: bodyHeight });

  // Prendre la capture d'écran de toute la page (pas seulement visible à l'écran)
  await page.screenshot({ path: outputPath, fullPage: true });

  await browser.close();
}

// Capturer à une largeur de 1440px
captureScreenshot('http://localhost:5173/home', 1440, 'screenshot_1440px.png').then(() => {
  console.log('Capture d\'écran pour 1440px réussie !');
});

// Capturer à une largeur de 500px
captureScreenshot('http://localhost:5173/home', 500, 'screenshot_500px.png').then(() => {
  console.log('Capture d\'écran pour 500px réussie !');
});
