import { test, expect } from '@playwright/test';
import { navigateTo, scrollToBottom } from '../helpers/utilities';



async function terms_and_conditions(page) {


    await page.goto('https://www.imbankgroup.com/ke/cards/im-visa-international-gold-card/');

    await expect(page.getByRole('heading', { name: 'Terms and Conditions', exact: true })).toBeVisible();
    await expect(page.locator('#features')).toContainText('Terms and Conditions');
    await expect(page.locator('#terms-and-conditions')).toBeVisible();
    await expect(page.locator('#terms-and-conditions-heading')).toContainText('Terms and Conditions');
    await page.getByRole('button', { name: 'Terms and Conditions +' }).click();
    await expect(page.getByLabel('Terms and Conditions').getByRole('list')).toContainText('Some of the features described above may be amended, varied or unavailable at some point in time Signature Change and Signature Pay facilities are at the discretion of I&M Bank. Card issuance is subject to Terms and Conditions of I&M Bank International Visa Infinite Credit Card Ease carefully read the Terms & Conditions and applicable charges prior to applying.');
    await page.locator('#terms-and-conditions-heading').click();

}

test('test form', async ({ page }) => {
    await terms_and_conditions(page)

});
