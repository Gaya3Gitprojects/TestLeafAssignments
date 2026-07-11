import {test} from"@playwright/test"
test("CSS Test", async ({ page }) => {
    await page.goto("https://login.salesforce.com/?locale=in");
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
await page.locator("#password").fill("TestLeaf@2025");
await page.locator("#Login").click();
console.log("Test completed");
await page.waitForTimeout(10000);
});