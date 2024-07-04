// this code for submit form many times!

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  scrape(browser);
})();
async function scrape(arg) {
  const browser = arg;
  const page = await browser.newPage();
  try {
    await page.goto("--url--");

    await page.evaluate(() => {
      localStorage.clear();
    });

    // form
    await page.waitForSelector("form");

    // form fields
    await page.type("#name", "name");
    await page.type("#phone", "phone");
    await page.type("#direction", "direction");

    // submit button
    await page.click("#submit");
  } catch (error) {
    await browser.close();
  } finally {
    setTimeout(() => {
      page.close();
      scrape(browser);
    }, 10000);
  }
}
