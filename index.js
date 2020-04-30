const puppeteer = require("puppeteer-core");

const messageDetails = require("./message");

const { message, numbers } = messageDetails;
console.log(message);

const loopItems = async (page, number, message) => {
  await page.goto("https://messages.google.com/web/conversations/new");
  await page.waitForSelector("input.input");
  await page.type("input.input", number + String.fromCharCode(13));
  await page.waitForSelector("textarea.input");
  sp = message.split("\n");

  for (let i = 0; i < sp.length; i++) {
    await page.type("textarea.input", sp[i]);
    if (i !== sp.length - 1) {
      await page.keyboard.down("Shift");
      await page.keyboard.type(String.fromCharCode(13));
      await page.keyboard.up("Shift");
    }
  }
  // submit
  await page.type("textarea.input", String.fromCharCode(13));

  await page.waitFor(6000);
};
(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: false,
    userDataDir:
      "/Users/jmcd/Library/Application Support/Google/Chrome/Profile 1",
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1024,
    height: 768,
  });

  for (let i = 0; i < numbers.length; i++) {
    await loopItems(page, numbers[i], message);
  }

  //await page.screenshot({ path: "example.png" });

  await browser.close();
})();
