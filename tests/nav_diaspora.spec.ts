import { test, expect } from '@playwright/test';
import { navigateTo, clickTopNavLinkAndAssert, verifyCarLoanFormFields, Personal_Banking_menu, fillAndSubmitForm, applyForLoan, ApplyInPerson, testRequestCallback } from '../helpers/utilities';
import { Prepaid_Cards, testCustodialServices, testLoans, testPersonalBankingAccounts, testTransfersgovernments, testTransferslocal, testUnsecured_Personal_Loan, testWealthManagementService, test_Credit_Card, test_Debit_Card, test_Home_Loans, test_InsurancePremiumFinancing, testpersonalSavingsAccounts, testpersonalTransactionsAccounts, verifyinsurance } from '../tests/navigation.spec.ts';


test('test menu  diaspora', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.locator('#menu-item-12093').getByRole('link', { name: 'Diaspora' }).click();
    await page.hover('#menu-item-12093');

    await expect(page.getByRole('link', { name: 'Accounts +' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Loans +' })).toBeVisible();
    await expect(page.locator('#menu-item-16544')).toContainText('Wealth Management Service');
    await expect(page.locator('#menu-item-16545')).toContainText('Custodial Services');
    await expect(page.getByRole('link', { name: 'Insurance +' })).toBeVisible();
    //await expect(page.getByRole('link', { name: 'Find An Agent', exact: true })).toBeVisible();

    await expect(page.getByRole('link', { name: 'Transfers +' })).toBeVisible();

});

test('test dispora Accounts', async ({ page }) => {
    await testPersonalBankingAccounts(page);

});
test('test dispora Transactions Accounts', async ({ page }) => {
    await testpersonalTransactionsAccounts(page);

});
test('test dispora Savings Accounts', async ({ page }) => {
    await testpersonalSavingsAccounts(page);

});
test('test dispora Cards', async ({ page }) => {
    await test_Credit_Card(page);
}
);

test('test dispora CreditCards', async ({ page }) => {
    await test_Credit_Card(page)
});
test('test disporaDebitCards', async ({ page }) => {
    await test_Debit_Card(page)
});

test('test disporaPrepaidCards', async ({ page }) => {
    await Prepaid_Cards(page)
});

test('test diaspora Loans', async ({ page }) => {
    await testLoans(page);
});

test('test diaspora Car | Vehicle Loans', async ({ page }) => {
    await testLoans(page);
});
test('test dispora dispora House | Mortgage Loa', async ({ page }) => {
    await test_Home_Loans(page);
});
test('test dispora I & M @Work', async ({ page }) => {
    await testUnsecured_Personal_Loan(page);
});
test('test Diaspora Wealth Management Service', async ({ page }) => {
    await testWealthManagementService(page)

});


test('test Diaspora Custodial Services', async ({ page }) => {
    await testCustodialServices(page)

});
test('test Diaspora insurance', async ({ page }) => {
    await verifyinsurance(page)
});
test('test Diaspora  bancassurance', async ({ page }) => {
    await verifyinsurance(page)
});
test('test Diaspora Insurance Premium Financing', async ({ page }) => {
    await test_InsurancePremiumFinancing(page)
});


test('test Find An Agent', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Find An Agent', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Transfers -' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Local & International Transfer' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Local & International Transfer' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Government Payments' })).toBeVisible();
    await page.getByRole('link', { name: 'Find An Agent', exact: true }).click();
    await expect(page.getByRole('img', { name: 'Find an Agent' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Find an Agent' })).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Find an Agent');
    await expect(page.locator('#page-wrap-in')).toContainText('To help you learn more about our products and services and to open your account, you can also contact any of our team of overseas agents.');
    await expect(page.locator('.popup-trigger-dropdown > .dropdown > .dropdown-select-cont')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Choose your country');
    await expect(page.getByRole('link', { name: 'Choose your country' })).toBeVisible();

});
test('test diaspora transfers', async ({ page }) => {
    await testTransferslocal(page)
});

test('test diaspora localand internationaltransfers', async ({ page }) => {
    await testTransferslocal(page)
});

test('test Diaspora Government Payments', async ({ page }) => {
    await testTransfersgovernments(page)
});