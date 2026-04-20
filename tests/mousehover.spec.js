import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://www.ajio.com/')

    const desktop= await page.locator("//span[text()='MEN']")
    const jeans= await page.locator("(//a[text()='Jeans'])[1]")

    await desktop.hover()
    await jeans.hover()

    await page.waitForTimeout(5000)
})