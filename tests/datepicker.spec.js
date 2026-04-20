import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //await page.fill('#datepicker','04/07/2026')

    const year="2029"
    const month="September"
    const date="20"
    await page.click('#datepicker')

    while(true)
    {

       const currentyear=await page.locator('.ui-datepicker-year').textContent()
       const currentmonth=await page.locator('.ui-datepicker-month').textContent()

       if(currentyear == year && currentmonth == month)
       {
        break;
       }

       await page.locator('[title="Next"]').click()

    }

    const dates=await page.$$("//a[@class='ui-state-default']")

    for(const dt of dates)
    {
        if(dt.textContent()==date)
        {
            await dt.click();
            break;
        }
    }

    await page.waitForTimeout(3000);

})
