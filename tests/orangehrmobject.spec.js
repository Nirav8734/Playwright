import { test, expect } from '@playwright/test';
import {orangelogin} from '../pages/orangelogin'; 

test('test', async ({ page }) => {
    const login=new orangelogin(page);
    await login.gotologinpage();
    await login.login('Admin','admin123')
    await page.waitForTimeout(5000)

})

test('test1', async ({ page }) => {
    const login=new orangelogin(page);
    await login.gotologinpage();
    await login.login(' ',' ')
    await page.consoleMessages('//span[@class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
    await page.waitForTimeout(5000)

})


test('test2', async ({ page }) => {
    const login2=new orangelogin(page);
    await login2.gotologinpage();
    await login2.login2('Admin12345','admin12345678')
    await page.consoleMessages('//p[@class="oxd-text oxd-text--p oxd-alert-content-text"]')
    await page.waitForTimeout(5000)

})


test('test3', async ({ page }) => {
    const login=new orangelogin(page);
    await login.gotologinpage();
    await login.login('Admin','admin123')
    await expect(login.adminHeader).toHaveText("Admin");
    await expect(login.managementHeader).toHaveText("User Management");
})