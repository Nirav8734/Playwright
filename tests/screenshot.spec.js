import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://www.amazon.com/')
    await page.waitForTimeout(10000)
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'homepage.png'})
})