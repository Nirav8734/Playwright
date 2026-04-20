import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://www.amazon.com/')
    await page.locator('#nav-link-accountList').click();
    //await page.locator('//span[text()="Sign in" and @class="nav-action-inner"]/parent::a/parent::div[@id="nav-flyout-ya-signin"]');
    await page.locator('//input[@id="ap_email_login"]').fill('niravprajapati1309@gmail.com');
    await page.locator('//input[@class="a-button-input"]').click();
    await page.locator('//input[@id="ap_password"]').fill('8734986314');
    await page.locator('//input[@id="signInSubmit"]').click();

})