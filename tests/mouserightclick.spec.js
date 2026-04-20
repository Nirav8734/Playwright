import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://www.ajio.com/')

    const button= await page.locator("//span[text()='MEN']")

    await button.click({button:'right'});
    
    

    await page.waitForTimeout(5000)
})