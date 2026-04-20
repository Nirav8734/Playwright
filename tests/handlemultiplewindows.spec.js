import { test, expect , chromium } from '@playwright/test';

test('test', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    
    const page1=await context.newPage()
    const page2=await context.newPage()

    const allpages=context.pages()
    console.log("No of Pages created:",allpages.length)

    await page1.goto('https://www.amazon.com/')
    await expect(page1).toHaveTitle("Amazon.com. Spend less. Smile more.")

    await page2.goto('https://www.makemytrip.com/flights/?cmp=SEM|D|DF|B|Brand|Brand-BrandExact_DT|B_M_Makemytrip_Search_Exact|RSA|&ef_id=:G:s')
    


})