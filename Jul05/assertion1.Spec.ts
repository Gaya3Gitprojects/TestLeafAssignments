import{expect,test} from "@playwright/test";

test("enableButton test", async ({ page }) => {
    await page.goto("https://leafground.com/input.xhtml");
    // await page.locator("#username").fill("democsr2");
    // await page.locator("#password").fill("crmsfa");
    // await page.locator('//input[@class="decorativeSubmit"]').click();
  await expect.soft(page.locator(`//input[@placeholder='Disabled']`)).toBeDisabled();
    await expect(page.locator("//input[@placeholder='Babu Manickam']")).toBeEditable();
    await page.locator("//input[@placeholder='Babu Manickam']").fill("Test Value");
    await page.waitForTimeout(10000);
});
