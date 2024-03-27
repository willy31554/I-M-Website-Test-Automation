import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');

    await expect(page.locator('header').filter({ hasText: 'Select Country Kenya I&M' }).locator('i').nth(3)).toBeVisible();
    await page.locator('header').filter({ hasText: 'Select Country Kenya I&M' }).locator('i').nth(3).click();
    await expect(page.locator('p').filter({ hasText: 'What are you looking for?' })).toBeVisible();
    await expect(page.locator('.quick-links-area-ls-row').first()).toBeVisible();
    await expect(page.locator('li').filter({ hasText: /^About Us$/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();
    await expect(page.getByText('Who We AreAnnual')).toBeVisible();
    await expect(page.getByText('Find out more about our products. Visit any I&M Bank Branch, Contact us through')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Find out more about our products. Visit any I&M Bank Branch, Contact us through +254 20 322 1000 or email customercare@imbank.co.ke');
    await expect(page.getByRole('heading', { name: 'Quick Links' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Quick Links');
    //await page.getByText('Downloads Investor Relations').click();
    //await page.locator('header').filter({ hasText: 'Select Country Kenya I&M' }).locator('i').nth(3).click();
    await expect(page.getByRole('link', { name: 'Personal Banking' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Business Banking' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Diaspora Banking' })).toBeVisible();
    await expect(page.locator('a').filter({ hasText: /^Foreign Exchange$/ })).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Select Country Kenya I&M' }).locator('span i')).toBeVisible();
    await page.locator('li').filter({ hasText: /^About Us$/ }).click();
});