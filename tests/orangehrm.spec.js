import { test, expect } from '@playwright/test';

test('verify login', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.click('//button[@type="submit"]')
    await page.click('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]')
    await page.click('//a[text()="Logout"]')
    await page.waitForTimeout(5000)
})

test('verigy empty login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.click('//button[@type="submit"]')
    await page.consoleMessages('//span[@class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
    await page.waitForTimeout(5000)
})

test('verify error message', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill("Admin1234")
    await page.locator('//input[@name="password"]').fill("admin1235678")
    await page.click('//button[@type="submit"]')
    await page.consoleMessages('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]')
    await page.waitForTimeout(5000)
})

test('verify heading', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.click('//button[@type="submit"]')
    await page.click('//a[@class="oxd-main-menu-item active"]')
    //await page.click('//i[@class="oxd-icon bi-list oxd-topbar-header-hamburger"]')
    await page.click('//span[text()="Admin"]')
    await page.waitForTimeout(5000);

    
    await expect(page.locator("//h6[text()='Admin']")).toHaveText("Admin");

    //await expect.locator('//h6[text()="Admin"]').toHaveText("Admin");
   
    await expect(page.locator("//h6[text()='User Management']")).toHaveText("User Management");
    //await expect.locator('//h6[text()="User Management"]').toHaveText("User Management");
    await page.waitForTimeout(5000)
})