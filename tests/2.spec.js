import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    page.goto('https://www.redbus.com/')

    await page.locator('#src').fill('Delhi')
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    const fromcityoption=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for(let option of fromcityoption)
    {
        const value=await option.textContent
        console.log(value);
    }

    await page.waitForTimeout(5000);
})