const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder(
	"/Users/kimjeongdeok/Downloads/chromedriver"
);
(async function helloSelenium() {
	let driver = await new Builder()
		.setChromeService(service)
		.forBrowser("chrome")
		.build();

	await driver.get("https://www.google.com");

	await driver.getTitle(); // => "Google"

	driver.manage().setTimeouts({ implicit: 0.5 });

	let searchBox = await driver.findElement(By.name("q"));
	let searchButton = await driver.findElement(By.name("btnK"));

	await searchBox.sendKeys("Selenium");
	await searchButton.click();

	await driver.findElement(By.name("q")).getAttribute("value"); // => 'Selenium'

	await driver.quit();
})();
