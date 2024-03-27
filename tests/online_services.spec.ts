import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.locator('header').filter({ hasText: 'Select Country Kenya I&M' }).locator('i').nth(1).click();
    await expect(page.getByRole('search').getByText('What are you looking for?')).toBeVisible();
    await expect(page.getByRole('search')).toContainText('What are you looking for?');
    await expect(page.getByPlaceholder('Search here')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'What are you looking for? SearchQuick Links Pre-Paid Cards Loan Application' }).locator('i')).toBeVisible();
    await page.getByRole('heading', { name: 'Quick Links' }).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Pre-Paid Cards');
    await expect(page.locator('#page-wrap-in')).toContainText('Loan Application');
    await expect(page.locator('#page-wrap-in')).toContainText('Ways to bank');
    await expect(page.locator('#page-wrap-in')).toContainText('Ways to bank');
    await expect(page.locator('#page-wrap-in')).toContainText('ATM\'s & Branches');
    await page.locator('#page-wrap-in section').filter({ hasText: 'What are you looking for? SearchQuick Links Pre-Paid Cards Loan Application' }).locator('i').click();

});