import{test} from "@playwright/test"
test ("DropDown selection",async({page}) => {
    await page.goto ("https://leaftaps.com/opentaps/control/main");
await page.locator('//input[@id="username"]').fill("democsr2");
await page.locator('//input[@id="password"]').fill("crmsfa");
await page.locator('//input[@class="decorativeSubmit"]').click();
await page.locator('//a[contains(text(), "CRM/SFA")]').click();
await page.locator('//a[contains(text(), "Leads")]').click();
await page.locator('//a[contains(text(), "Create Lead")]').click();
await page.locator('//input[@id="createLeadForm_companyName"]').fill("Test leaf");
await page.locator('//input[@id="createLeadForm_firstName"]').fill("Gayathri");
await page.locator('//input[@id="createLeadForm_lastName"]').fill("Parthiban");
await page.selectOption('//select[@id="createLeadForm_industryEnumId"]', 'IND_PRESS');
await page.waitForTimeout(10000);
});
