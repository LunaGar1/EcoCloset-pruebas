import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import firefox from "selenium-webdriver/firefox.js";
import "chromedriver";  

async function testBrowser(browserName, builderFn) {
  try {
    const driver = await builderFn();
    await driver.get("https://ecocloset-pi.onrender.com/");
    console.log(`✔ Prueba completada en: ${browserName}`);
    await driver.quit();
  } catch (error) {
    console.log(`⚠ No se pudo probar en: ${browserName}`);
    console.log(error.message);
  }
}

async function runTests() {
  // Chrome
  await testBrowser("chrome", async () => {
    return new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new chrome.Options())
      .build();
  });

  // Firefox
  await testBrowser("firefox", async () => {
    return new Builder()
      .forBrowser("firefox")
      .setFirefoxOptions(new firefox.Options())
      .build();
  });

  //Edge
  await testBrowser("edge", async () => {
    return new Builder().forBrowser("MicrosoftEdge").build();
  });
}

runTests();

