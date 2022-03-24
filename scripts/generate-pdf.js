const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/");
  await page.emulateMediaType("screen");

  await page.pdf({
    path: "./react.pdf",
    printBackground: true,
    width: "612px",
    height: "792px",
  });
  await browser.close();
})();
