import { test, expect } from '@playwright/test';
import {loginpage} from '../pages/loginpage'; 

test('test', async ({ page }) => {

    const login=new loginpage(page);
    await login.gotologinpage();
    await login.login('niravprajapati1309@gmail.com','8734986314');
    await page.waitForTimeout(3000)
})