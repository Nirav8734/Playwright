import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const double= await page.locator("//button[text()='Copy Text']")

    await double.dblclick()
    
    

    await page.waitForTimeout(5000)
})