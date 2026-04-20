import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://amazone.net/en-in');
  await page.getByRole('heading', { name: 'Consent to Cookies & Data' }).click();
  await page.getByRole('img', { name: 'ideas-for-landingpages' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Imprint' }).click();
  const page1 = await page1Promise;
  await page1.getByText('AMAZONE Impressum').first().click();
})
  
test('test1', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.locator('#desktop-header-cnt').getByRole('link', { name: 'Men', exact: true }).click();

  await page.locator('#desktop-header-cnt').getByRole('link', { name: 'Women' }).click();
  await page.locator('#desktop-header-cnt').getByRole('link', { name: 'Kids' }).click();
  await page.locator('#desktop-header-cnt').getByRole('link', { name: 'Home', exact: true }).click();
  await page.locator('#desktop-header-cnt').getByRole('link', { name: 'Beauty' }).click();
});

test('test2', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('button', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Electronics' }).click();
  await page.getByRole('link', { name: 'Computers & Accessories' }).click();
  await page.locator('.a-link-normal').first().click();
  await page.goto('https://www.amazon.com/Protective-Handheld-Barcode-Computer-Accessories/dp/B0BMGC5WFY/ref=sr_1_1_sspa?qid=1775129917&s=electronics&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&th=1');
  await page.locator('//a[text()="Computers & Accessories"]')
})