import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://www.amazon.com/');
    await page.click("//input[@name='field-keywords']",'Tshirt') 
    await page.click("//input[@type='submit']")

    await page.click("//span[@class='nav-cart-icon nav-sprite']")
})