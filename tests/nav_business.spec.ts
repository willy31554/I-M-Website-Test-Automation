import { test, expect } from '@playwright/test';
import { navigateTo, clickTopNavLinkAndAssert, verifyCarLoanFormFields, Personal_Banking_menu, fillAndSubmitForm, applyForLoan, ApplyInPerson, testRequestCallback } from '../helpers/utilities';






//business
async function bankmenudropdown(page) {
    await navigateTo(page, 'https://www.imbankgroup.com/ke/');
    //await page.getByText('Business Accounts').click();
    await page.locator('#menu-item-12095').getByRole('link', { name: 'Business' }).click();

    // Hover over 'Business' to reveal the menu
    await page.hover('#menu-item-12095');

    // Find the 'Accounts +' link within the revealed menu
    await page.$('text=Business Accounts +');
    await page.hover('text=Business Accounts');
    await expect(page.getByRole('link', { name: 'Business Accounts -' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Business Accounts', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Special Accounts' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Fixed Deposit' })).toBeVisible();
    // Hover over 'Business' to reveal the menu
    await page.hover('#menu-item-12095');

    // Find the 'Accounts +' link within the revealed menu
    await page.$('text=Business Solutions +');
    await page.hover('text=Business Solutions');
    await expect(page.getByRole('link', { name: 'Business Solutions -' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Faster Paybill' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'I&M Webpay' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Remote Cheque Scanning' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Remote Cheque Scanning' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'German Desk' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Business Connect' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Business Connect' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Cash MGT Service' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Direct Debit Scheme' })).toBeVisible();
    await expect(page.locator('#menu-item-16556').getByRole('link', { name: 'Trade Finance' })).toBeVisible();

    // Hover over 'Business' to reveal the menu
    await page.hover('#menu-item-12095');

    await page.hover('text=Loans +');
    await page.hover('#menu-item-16557');

    // Hover over 'Loans' within the submenu
    await page.hover('text=Loans');
    // Verify the visibility of loan options
    await expect(page.getByRole('link', { name: 'Loans -' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Asset Finance' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Business Loans' })).toBeVisible();

    // Hover over 'Business' to reveal the menu
    await page.hover('#menu-item-12095');

    // Find the 'Accounts +' link within the revealed menu
    await page.$('text=Investment +');
    await page.hover('text=Investment');
    await expect(page.getByRole('link', { name: 'Investment -' })).toBeVisible();
    await expect(page.locator('#menu-item-16581').getByRole('link', { name: 'Custodial Services' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'I&M Burbidge Capital' })).toBeVisible();
    await page.hover('#menu-item-12095');

    // Find the 'Accounts +' link within the revealed menu
    await page.$('text=Insurance +');
    await page.hover('text=Insurance');
    await expect(page.getByRole('link', { name: 'Insurance -' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Bancassurance' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Insurance Premium Financing' })).toBeVisible();
    await page.hover('#menu-item-12095');

    // Find the 'Accounts +' link within the revealed menu
    await page.$('text=Transfers +');
    await page.hover('text=Transfers');
    await expect(page.getByRole('link', { name: 'Transfers -' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Government Payments' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Local & International' })).toBeVisible();
}

async function bankmenulink(page) {
    await expect(page.locator('#page-wrap-in')).toContainText('Business Banking');
    await expect(page.locator('#menu-item-11734')).toBeVisible();
    await expect(page.locator('#menu-item-11734')).toContainText('Accounts');
    await expect(page.locator('#menu-item-11406').getByRole('link', { name: 'Business Solutions' })).toBeVisible();
    await expect(page.locator('#menu-item-11406')).toContainText('Business Solutions');
    await expect(page.locator('#menu-item-11410').getByRole('link', { name: 'Trade Finance' })).toBeVisible();
    await expect(page.locator('#menu-item-11410')).toContainText('Trade Finance');
    await expect(page.locator('#menu-item-11407')).toBeVisible();
    await expect(page.locator('#menu-item-11407')).toContainText('Loans');
    await expect(page.locator('#menu-item-11409').getByRole('link', { name: 'Investment' })).toBeVisible();
    await expect(page.locator('#menu-item-11409')).toContainText('Investment');
    await expect(page.locator('#menu-item-11408').getByRole('link', { name: 'Insurance' })).toBeVisible();
    await expect(page.locator('#menu-item-11408')).toContainText('Insurance');
    await expect(page.locator('#menu-item-11411').getByRole('link', { name: 'Transfers' })).toBeVisible();
    await expect(page.locator('#menu-item-11411')).toContainText('Transfers');

}
async function bankaccountsfloat(page) {
    await expect(page.getByRole('link', { name: 'Business Accounts' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Business Accounts');
    await expect(page.getByRole('link', { name: 'Special Accounts' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Special Accounts');
    await expect(page.getByRole('link', { name: 'Fixed Deposit' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Fixed Deposit');
}
test('test business dropdown', async ({ page }) => {
    await bankmenudropdown(page)
});

test('Business Accounts', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/', { timeout: 30000 });
    await page.goto("https://www.imbankgroup.com/ke/business/business-accounts/")
    //await page.getByRole('link', { name: 'Business Accounts -' }).click();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Business Banking Accounts');

    await bankmenulink(page)
    await bankaccountsfloat(page)

    await expect(page.locator('div').filter({ hasText: 'Business Banking Accounts With our Business Banking Accounts you get: Free e-' }).nth(3)).toBeVisible();
    await page.locator('h1').click();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Business Banking Accounts');
    await expect(page.locator('#page-wrap-in')).toContainText('With our Business Banking Accounts you get:');
    await expect(page.locator('li').filter({ hasText: 'Free e-mail statements' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Free e-mail statements' }).locator('path')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Free e-mail statements');
    await expect(page.locator('li').filter({ hasText: 'Business connect platform' })).toBeVisible();
    await expect(page.locator('li:nth-child(2) > .list-inline-item-icon > .svg-scaler > #Capa_1 > g > g > g > .active-path').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Business connect platform access');
    await expect(page.locator('li').filter({ hasText: 'Free Daily Transaction' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Free Daily Transaction' }).locator('path').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Free Daily Transaction Notifications');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Business' })).toBeVisible();

    await expect(page.locator('h2').filter({ hasText: 'Business Banking Accounts' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Business Banking Accounts');
    await expect(page.locator('#page-wrap-in')).toContainText('Products designed specifically for your business');
    await expect(page.getByRole('link', { name: 'Find out more  Business' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Find out more  Business' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Find out more  Business' }).nth(2)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Find out more  Business' }).nth(2)).toBeVisible();
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  Sapphire FCY' }).nth(1)).toBeVisible();
    await expect(page.getByLabel('Next slide')).toBeVisible();
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  Business' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Compare Business Accounts' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Compare Business Accounts');
    await expect(page.getByText('Compare Business AccountsSelect an accountBusiness Current Account Business')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Select an account' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Select an account');
    await expect(page.getByRole('heading', { name: 'Select an account' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Select an account');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('li').filter({ hasText: 'Business Current Account' }).locator('div').first().click();
    await expect(page.locator('#page-wrap-in')).toContainText('Business Current Account');
    await expect(page.locator('#page-wrap-in')).toContainText('Business Current AccountOpening balanceKES 1,000Minimum balance to be maintainedNilAccount maintenance feeNilMonthly feeKsh 500 (for first 75 transactions per month free of ledger fees)Monthly Ledger feeKES 10 per transaction after first 75 free transactions per monthDebit card issuance fee (MasterCard Platinum)KES 500Debit card annual feesKES 500 per annum per cardI&M ATM cash withdrawalKes 33Other ATM cash withdrawalKes 55Cheque book issuance (per leaf)Kes 17Transfer within I&MFreeOther transaction chargesAs per the general tariffOther Account benefitsFree e-statement, daily sms/email notifcations Learn More');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont > .dropdown-select-icon > .bi').first().click();
    await page.locator('div').filter({ hasText: /^iMinVest Chama$/ }).first().click();
    await expect(page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('iMinVest Chama Account opening and minimum balanceKes 2,000Account maintenance feesNilE-statementsFreeCheque Book OptionAvailableLedger feesNil Learn More');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('div').filter({ hasText: /^Diplomatic account$/ }).first().click();
    await expect(page.locator('#page-wrap-in')).toContainText('Diplomatic accountFlat monthly feesNegotiable between Kes 0- 10,000Available currency optionsKES and /or GBP/EUR/USDCheque Book per leafFree except stamp duty (KES 2.50)Account maintenance feesNilAccount ledger feesNilMonthly e-statements and daily email transaction notificationsFreeOver- the- counter transactionsUnlimited and free Learn More');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont > .dropdown-select-icon > .bi').first().click();
    await page.locator('div').filter({ hasText: /^Noble Account$/ }).first().click();
    await expect(page.locator('#page-wrap-in')).toContainText('Noble AccountMinimum Balance, and nil for GBP, USD and Euro accounts10,000/-Ledger FeesNilFor receiving online donationsE-commerceInterest earning from balances of 5,000 for FCY(GBP, USD & Euro)5,000/-Cheque BookFree (except stamp duty )Incoming SWIFT and RTGSFreeInterest is payableNil Learn More');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('li').filter({ hasText: 'Sapphire FCY Account' }).first().click();
    await expect(page.getByText('Sapphire FCY AccountAccount')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Sapphire FCY AccountAccount opening balanceUSD/EUR/GBP 100 or equivalent in other currencies.Account maintenance chargesNilTransaction ledger feesNilQuarterly account statementFree via email (or at your preferred frequency).I&M USD Visa Debit card*Available for USD accounts only (Attractive reward points on Debit Card POS/Online transactions)Access to Electronic Banking Channels ( Mobile and Internet Banking)FreeInterest paymentAccrued on daily balances and paid quarterlyCheque BookAvailable at USD 0.2 per leafCash transactionsCash deposit fee apply as per tariffChinese Yuan and UAE Dirham accountsAvailable (Contact us for details) Learn More');
    await page.locator('div:nth-child(2) > .comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('div:nth-child(2) > .comparison-table-dropdown-cont > .dropdown > .dropdown-menu > li > .media').first().click();
    await expect(page.locator('#page-wrap-in')).toContainText('Select an accountBusiness Current Account Business Current AccountBusiness Premier Current AccountiMinVest ChamaDiplomatic accountNoble AccountBusiness Current AccountOpening balanceKES 1,000Minimum balance to be maintainedNilAccount maintenance feeNilMonthly feeKsh 500 (for first 75 transactions per month free of ledger fees)Monthly Ledger feeKES 10 per transaction after first 75 free transactions per monthDebit card issuance fee (MasterCard Platinum)KES 500Debit card annual feesKES 500 per annum per cardI&M ATM cash withdrawalKes 33Other ATM cash withdrawalKes 55Cheque book issuance (per leaf)Kes 17Transfer within I&MFreeOther transaction chargesAs per the general tariffOther Account benefitsFree e-statement, daily sms/email notifcations Learn More');
    await expect(page.locator('#page-wrap-in')).toContainText('Business Current AccountOpening balanceKES 1,000Minimum balance to be maintainedNilAccount maintenance feeNilMonthly feeKsh 500 (for first 75 transactions per month free of ledger fees)Monthly Ledger feeKES 10 per transaction after first 75 free transactions per monthDebit card issuance fee (MasterCard Platinum)KES 500Debit card annual feesKES 500 per annum per cardI&M ATM cash withdrawalKes 33Other ATM cash withdrawalKes 55Cheque book issuance (per leaf)Kes 17Transfer within I&MFreeOther transaction chargesAs per the general tariffOther Account benefitsFree e-statement, daily sms/email notifcations Learn More');
    await page.locator('div:nth-child(2) > .comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont > .dropdown-select > .media > .dropdown-media-text').click();
    await page.locator('li').filter({ hasText: 'Business Premier Current' }).nth(1).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Business Premier Current AccountOpening balanceKES 10,000Minimum balance to be maintainedKES 10,000Account maintenance feeNilMonthly feeNilMonthly Ledger feeKES 10 per transaction, min kes 300 per month, max kes 3000Debit card issuance fee (MasterCard Platinum)KES 500Debit card annual feesKES 500 per annum per cardI&M ATM cash withdrawalKes 33Other ATM cash withdrawalKes 55Cheque book issuance (per leaf)Kes 17Transfer within I&MFreeOther transaction chargesAs per the general tariffOther Account benefitsFree e-statement, daily sms/email notifcations Learn More');
    await page.locator('div:nth-child(2) > .comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('li').filter({ hasText: 'iMinVest Chama' }).nth(1).click();
    await expect(page.locator('#page-wrap-in')).toContainText('iMinVest Chama Account opening and minimum balanceKes 2,000Account maintenance feesNilE-statementsFreeCheque Book OptionAvailableLedger feesNil Learn More');
    await page.getByText('iMinVest Chama').first().click();
    await page.locator('div').filter({ hasText: /^Diplomatic account$/ }).nth(2).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Diplomatic accountFlat monthly feesNegotiable between Kes 0- 10,000Available currency optionsKES and /or GBP/EUR/USDCheque Book per leafFree except stamp duty (KES 2.50)Account maintenance feesNilAccount ledger feesNilMonthly e-statements and daily email transaction notificationsFreeOver- the- counter transactionsUnlimited and free Learn More');
    await page.getByText('Diplomatic account').first().click();
    await page.locator('div').filter({ hasText: /^Noble Account$/ }).nth(2).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Noble AccountMinimum Balance, and nil for GBP, USD and Euro accounts10,000/-Ledger FeesNilFor receiving online donationsE-commerceInterest earning from balances of 5,000 for FCY(GBP, USD & Euro)5,000/-Cheque BookFree (except stamp duty )Incoming SWIFT and RTGSFreeInterest is payableNil Learn More');
});
test('testbusina', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    // await page.getByRole('link', { name: 'Business Accounts', exact: true }).click();
    await page.goto('https://www.imbankgroup.com/ke/business/business-accounts/');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('With our Business Banking Accounts you get:');
    await expect(page.locator('li').filter({ hasText: 'Free e-mail statements' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Business connect platform' })).toBeVisible();
    await expect(page.getByText('Free Daily Transaction')).toBeVisible();
    await page.locator('li').filter({ hasText: 'Free Daily Transaction' }).click();
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Business' })).toBeVisible();
});


test('test Special Accounts', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business/business-accounts/special-accounts/');
    await page.getByRole('link', { name: 'Special Accounts' }).click();
    await bankmenulink(page)
    await bankaccountsfloat(page)
    await expect(page.locator('div').filter({ hasText: 'Business Special Accounts Tailor made accounts Dedicated relationship manager' }).nth(3)).toBeVisible();
    await expect(page.getByText('Business Special Accounts Tailor made accounts Dedicated relationship manager')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Business Special Accounts');
    await expect(page.locator('li').filter({ hasText: 'Tailor made accounts' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Tailor made accounts' }).locator('#Layer_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Tailor made accounts');
    await expect(page.locator('li').filter({ hasText: 'Dedicated relationship manager' })).toBeVisible();
    await expect(page.locator('ul').filter({ hasText: 'Tailor made accounts' }).locator('#Capa_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Dedicated relationship manager');
    await expect(page.locator('li').filter({ hasText: 'Secure Banking' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Secure Banking' }).locator('#Layer_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Secure Banking');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Business' })).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Business Special AccountsSpecifically designed to meet the banking needs of' })).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: 'Business Special Accounts' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Business Special Accounts');
    await expect(page.locator('#page-wrap-in')).toContainText('Specifically designed to meet the banking needs of your organisation');
    await expect(page.getByRole('link', { name: 'Find out more  Noble Account' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Find out more  Diplomatic' }).nth(1)).toBeVisible();
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  iMinVest' }).nth(1)).toBeVisible();
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('heading', { name: 'Compare Business Accounts' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Compare Business Accounts');
    await expect(page.getByText('Compare Business AccountsSelect an accountiMinVest Chama iMinVest ChamaNoble')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Select an account' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Select an account');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('li').filter({ hasText: 'iMinVest Chama' }).locator('div').first().click();
    await expect(page.getByText('Select an accountiMinVest Chama iMinVest ChamaNoble AccountiMinVest Chama')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('iMinVest Chama Account opening and minimum balanceKes 2,000Account maintenance feesNilE-statementsFreeCheque Book OptionAvailableLedger feesNil Learn More');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('li').filter({ hasText: 'Noble Account' }).first().click();
    await expect(page.locator('#page-wrap-in')).toContainText('Noble AccountMinimum Balance, and nil for GBP, USD and Euro accounts10,000/-Ledger FeesNilFor receiving online donationsE-commerceInterest earning from balances of 5,000 for FCY(GBP, USD & Euro)5,000/-Cheque BookFree (except stamp duty )Incoming SWIFT and RTGSFreeInterest is payableNil Learn More');
    await expect(page.getByRole('heading', { name: 'Select an account' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Diplomatic accountFlat monthly feesNegotiable between Kes 0- 10,000Available currency optionsKES and /or GBP/EUR/USDCheque Book per leafFree except stamp duty (KES 2.50)Account maintenance feesNilAccount ledger feesNilMonthly e-statements and daily email transaction notificationsFreeOver- the- counter transactionsUnlimited and free Learn More');
    await page.locator('div:nth-child(2) > .comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('li').filter({ hasText: 'iMinVest Chama' }).nth(1).click();
    await expect(page.locator('#page-wrap-in')).toContainText('iMinVest Chama Account opening and minimum balanceKes 2,000Account maintenance feesNilE-statementsFreeCheque Book OptionAvailableLedger feesNil Learn More');
});
test('test Fixed Deposit', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/accounts/fixed-deposit/')
    await page.getByRole('link', { name: 'Fixed Deposit' }).click();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Fixed Deposit');
    await Personal_Banking_menu(page)
    await bankaccountsfloat(page)
    await expect(page.locator('h1')).toContainText('Fixed Deposit');
    await expect(page.locator('#page-wrap-in')).toContainText('The deposit options are available in Kenya Shillings as well as a host of foreign currencies');
    await expect(page.locator('li').filter({ hasText: 'High Interest Rate' }).getByRole('img')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('High Interest Rate');
    await expect(page.locator('li').filter({ hasText: 'Available in multiple' }).locator('#Capa_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Available in multiple currencies');
    await expect(page.locator('li').filter({ hasText: 'Ranging from 1 Month to 1 Year' }).locator('path')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Ranging from 1 Month to 1 Year');
    await expect(page.locator('#overview').getByRole('heading', { name: 'Fixed Deposit' })).toBeVisible();
    await expect(page.locator('#overview')).toContainText('Fixed-term deposits yielding high returns. I&M Bank Fixed Deposits are accounts opened for fixed contracted periods, currently ranging from 1 month to 1 year. They earn interest at attractive rates, thus providing customers with long term savings growth opportunities. Fixed Deposits can be opened in Kenya Shillings | US Dollars | Euro GB Pounds | South African Rand');
    await expect(page.locator('#overview').getByRole('link', { name: 'VIEW RATES' })).toBeVisible();
    await expect(page.locator('#overview')).toContainText('VIEW RATES');
    await expect(page.getByRole('heading', { name: 'Features' })).toBeVisible();
    await expect(page.locator('#features')).toContainText('Features');
    await expect(page.locator('#features')).toContainText('Minimum Deposit50,000/-');
    await expect(page.locator('#features')).toContainText('Term1 month to 1yr');
    await expect(page.locator('#requirements')).toBeVisible();
    await expect(page.locator('#requirements')).toContainText('Fixed Term Deposit');
    await expect(page.locator('#requirements')).toContainText('Get attractive interest rates with our fixed-term deposits in either Kenya shillings or other popular foreign currencies.');
    await expect(page.locator('#requirements').getByRole('link', { name: 'VIEW RATES' })).toBeVisible();
    await expect(page.locator('#requirements')).toContainText('VIEW RATES');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Looking for a better fit' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Looking for a better fit');
    await expect(page.locator('#page-wrap-in')).toContainText('Flexi Deposit Builder');
    await expect(page.locator('#page-wrap-in')).toContainText('Build up savings automatically regularly and earn higher returns on them');
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Are you interested?');
    await page.goto('https://www.imbankgroup.com/ke/accounts/fixed-deposit/')
    await fillAndSubmitForm(page)
});



test('test Business Solutions', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business/business-solutions/')
    //await page.getByRole('link', { name: 'Business Solutions -' }).click();
    await bankmenulink(page)
    await expect(page.locator('div').filter({ hasText: 'From SMEs to Large' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'From SMEs to Large Corporates' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('From SMEs to Large Corporates');
    await expect(page.locator('#page-wrap-in')).toContainText('Our large range of business solutions has been tailor-made to suit the needs of individual business requirements.');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Business' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Business Solutions' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Business Solutions');
    await expect(page.getByRole('heading', { name: 'Offering you a wide range of' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Offering you a wide range of business products to suit the needs of your organisation!');
    await expect(page.getByRole('link', { name: 'Lipa na I&M Bank  Faster' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Faster PaybillStart receiving business payments in a matter of minutes.');
    await expect(page.locator('div').filter({ hasText: 'Offering you a wide range of' }).nth(3)).toBeVisible();
    await expect(page.getByRole('link', { name: 'E-Commerce  I&M Webpay Keep' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M WebpayKeep your business open 24/7 with I&M Webpay');
    await expect(page.getByRole('link', { name: 'Remote Cheque Scanning ' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Remote Cheque ScanningScan Cheques from your office');
    await expect(page.getByRole('link', { name: 'German Desk  German Desk' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('German DeskFinancial support and solutions for East Africa exclusively at I&M Bank.');
    await expect(page.getByRole('link', { name: 'Business Connect  Business' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Business ConnectEfficient Payments and Collections solution for your business');
    await expect(page.getByRole('link', { name: 'Cash Management Service ' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Cash MGT ServiceSecure cash transportation.');
    await expect(page.getByRole('link', { name: 'Direct Debit Scheme  Direct' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Direct Debit SchemeEasily collect regular payments from your customers');
    await expect(page.getByRole('link', { name: 'API Gateway  I&M API Gateway' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M API Gatewayfacilitates straight through processing (STP) of payments directly from our Customer’s ERP system');
    await expect(page.locator('.feature-18-section > .container > .row > .col')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Salary Transfer Service');
    await expect(page.locator('#page-wrap-in')).toContainText('Quick Transfer to EmployeeEasy ProcessMinimal Charge');
    await expect(page.getByRole('img', { name: 'Salary Transfer Service' })).toBeVisible();
});



test('test Faster Paybill', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/im-webpay-2/')
    //await page.getByRole('link', { name: 'Faster Paybill' }).click();
    await bankmenulink(page)
    await expect(page.locator('h1')).toContainText('Faster Paybill');
    await expect(page.locator('#page-wrap-in')).toContainText('Start receiving business payments in a matter of minutes.');
    await expect(page.locator('div').filter({ hasText: 'Faster PaybillStart receiving' }).nth(3)).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Instant Credit to your Account' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Instant Credit to your Account' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Instant Credit to your Account');
    await expect(page.locator('li').filter({ hasText: 'Free Confirmation SMSs' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Free Confirmation SMSs' }).getByRole('img')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Free Confirmation SMSs');
    await expect(page.locator('li').filter({ hasText: 'Zero Charge to Business and' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Zero Charge to Business and' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Zero Charge to Business and Customer');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Faster' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'FAST | EFFICIENT | FREE' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('FAST | EFFICIENT | FREE');
    await expect(page.locator('#page-wrap-in')).toContainText('We offer you a personalised M-PESA Paybill Short code linked to your Bank account to facilitate receipt of payments from your customers. Payments are credited to your Bank Account instantly and an alert is sent to both yourself and your customer.Set up within a day and the service is free – no charges** Charges are subject to future Tariff reviews. We are eager to see your business take off to great heights by facilitating faster payments via M-PESA paybill. We get you set-up within a day after receiving your request.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'BenefitsGet on board and' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Benefits');
    await expect(page.locator('#page-wrap-in')).toContainText('Get on board and start enjoying a host of benefits;Zero charges to your business.Zero charges to your customers.Instant credit to your Bank accountFree confirmation SMS to your business and your customer.Get a short code (Business Number) for your business M-PESA paymentsYou can choose business number of your choice subject to availability.We can validate your customer numbers for higher accuracy e.g. student number, membership number, utility number, invoice, or payment ref. numberSet up done within 24 hours after receiving application form.Free customized reports for your business.Receive higher limits per transaction , up to Kes 150,000.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Want more information?For set' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Want more information?');
    await expect(page.locator('#page-wrap-in')).toContainText('For set-up kindly contact your Relationship Manager or nearest I&M Bank Branch.');
    await ApplyInPerson(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/im-webpay-2/')
    await testRequestCallback(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/im-webpay-2/')
    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await fillAndSubmitForm(page)
});
test('test I&M Webpay', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/im-webpay/')

    await bankmenulink(page)

    //await page.getByRole('link', { name: 'I&M Webpay' }).click();
    await expect(page.locator('div').filter({ hasText: 'E-Commerce | I&M WebpayKeep' }).nth(3)).toBeVisible();
    await expect(page.locator('h1')).toContainText('E-Commerce | I&M Webpay');
    await expect(page.locator('#page-wrap-in')).toContainText('Keep your business open 24/7 with I&M Webpay');
    await expect(page.locator('li').filter({ hasText: 'Keep your business open 24/' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Keep your business open 24/7');
    await expect(page.locator('li').filter({ hasText: 'Accepts Visa, MasterCard and' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Accepts Visa, MasterCard and Union Pay');
    await expect(page.locator('li').filter({ hasText: 'Safe and Secure for Customer' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Safe and Secure for Customer and Merchant');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - I&M Webpay' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Benefits' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Convenience; customers make payments online from the comfort of their offices, homes, mobile phones, or cyber cafes after making purchases on your website.Wider reach; away from the conventional “Brick & Mortar” setup, internet acquiring enables you as the merchant to sell your goods and services online both locally and internationally. Your online shop is also open to the whole world 24/7.In the event someone wishes to purchase your services/products for a friend or family, online payment makes it very easy.Safe & secure; better than carrying cash around for both the customer and the merchant. The service also features 3D Secure, a state-of-the-art authentication process that ensures only the authorized cardholder is making the purchase, thus reducing the chances of fraud.Shorter settlement turnaround time of 3 working days (T+3)Currency in USD Dollar or Kenya ShillingsSupports all Visa, Union Pay, and MasterCard prepaid, debit, credit cards including Visa Electron and Maestro');
    await expect(page.getByText('3 Options for different categories of merchants: Learn More LiteThis is best')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('3 Options for different categories of merchants:');
    await expect(page.getByRole('link', { name: 'Learn More ' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More ' }).nth(1)).toBeVisible();
    await expect(page.getByText('Learn More LinkThe Link')).toBeVisible();
    await expect(page.locator('.feature-49-section > .container > .row > .col')).toBeVisible();
    await expect(page.getByRole('img', { name: 'Jambo Jet' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Precision Air' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Rwanda Air' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Travel star' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Kenya Red Cross' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Jambopay' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Gamewatch Safaris' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Kicheche' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'The Tamari Group' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'GA Insurance' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Kaps' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'chelli & peacock safaris' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Want more information?' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Want more information?');
    await expect(page.getByRole('link', { name: 'cardacquiring@imbank.co.ke' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('cardacquiring@imbank.co.ke');
    await ApplyInPerson(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/im-webpay/')
    await testRequestCallback(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/im-webpay/')
    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await fillAndSubmitForm(page)
});

test('test remote-cheque-scanning', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/remote-cheque-scanning/')

    await bankmenulink(page)

    //await page.getByRole('link', { name: 'Remote Cheque Scanning' }).click();
    await expect(page.locator('div').filter({ hasText: 'Remote Cheque ScanningRemotely bank cheques from the comfort of your office.' }).nth(3)).toBeVisible();
    await expect(page.locator('h1')).toContainText('Remote Cheque Scanning');
    await expect(page.locator('#page-wrap-in')).toContainText('Remotely bank cheques from the comfort of your office.');
    await expect(page.locator('li').filter({ hasText: 'Scan cheques form the comfort' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Scan cheques form the comfort of your office');
    await expect(page.locator('li').filter({ hasText: 'Real-time review of your' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Real-time review of your liquidity');
    await expect(page.locator('li').filter({ hasText: 'Minimizes fraud' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Minimizes fraud');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Remote' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('This solution allows your organization to scan cheques through to the bank from the comfort of your office. It enables your organization to transmit the cheque images over an encrypted internet connection to the bank for posting and clearance.');
    await expect(page.getByRole('heading', { name: 'Features' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('One login for maker-checkersOne login to access multiple accountsAbility to capture drawers name and narrationAbility to have drawers name on the reportAbility to capture post-dated chequesReworking cheques instead of rejecting and scanning again.Option of having admin profile for user management');
    await expect(page.getByRole('heading', { name: 'Remote Cheque Scanning Benefits' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Remote Cheque Scanning Benefits');
    await expect(page.locator('#page-wrap-in')).toContainText('Facilitates the means to remotely bank cheques from the comfort of your office.Minimizes fraud.Saves time, offering high value to your institution.Reconciles easily to your internal ERP system.Easy track of cheque transactions.Real-time review of your liquidity.Real-time view of your cheque transaction status.');
    await expect(page.getByRole('heading', { name: 'Security' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Security');
    await expect(page.locator('#page-wrap-in')).toContainText('The system has maker checker principle for all transactions.System has a clear audit trail of all activities.');
    await expect(page.getByRole('heading', { name: 'Portal' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Portal');
    await expect(page.locator('#page-wrap-in')).toContainText('https://cts.imbank.com/');
    await expect(page.getByRole('heading', { name: 'Want more information?' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Want more information?');
    await expect(page.locator('#page-wrap-in')).toContainText('Click above to view the brochure. For more details on this service and how to get started, kindly contact your branch manager or your relationship manager.');
    await expect(page.getByRole('link', { name: 'Brochure' })).toBeVisible();
    await ApplyInPerson(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/remote-cheque-scanning/')
    await testRequestCallback(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/remote-cheque-scanning/')
    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/remote-cheque-scanning/')
    await fillAndSubmitForm(page)
});
test('test German Desk', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/german-desk/')
    // await page.getByRole('link', { name: 'German Desk' }).click();
    await page.locator('div').filter({ hasText: /^Error 404$/ }).nth(1).click();
    await expect(page.getByRole('heading', { name: 'Sorry the page you are' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Sorry the page you are looking for is not found!');
    await expect(page.locator('#page-wrap-in')).toContainText('Here are some of the helpful links instead:');
    await expect(page.getByRole('link', { name: 'Personal Banking' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Business Banking' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Diaspora Banking' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Go to Main site' })).toBeVisible();
});
test('test Business Connect', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/business-connect/')
    await bankmenulink(page)

    //await page.getByRole('link', { name: 'Business Connect' }).click();
    await expect(page.locator('p').filter({ hasText: 'Business Banking' }).locator('a')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Business Connect', exact: true })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Business Connect');
    await expect(page.locator('#page-wrap-in')).toContainText('Efficient Payments and Collections solution for your business');
    await expect(page.locator('li').filter({ hasText: 'Easy Collection and Payment' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Easy Collection and Payment');
    await expect(page.locator('li').filter({ hasText: 'Easy Integration' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Easy Integration');
    await expect(page.locator('li').filter({ hasText: 'Real time' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Real time');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Business' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'B2B API Integration' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('B2B API Integration');
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Business Connect presents an efficient and convenient way for organizations to collect and account for payments owed to them by their customers or members. As a value add, we provide you with instant payment notifications for all successful payments.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'We have two options below' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('We have two options below based on your organization set-up.a) Direct integration with your Information System or Account System. This allows for real time customer details validation and subsequent update of your ERP system with successful payments collected by the Bank. Through our business connect (B2B) API integration collection solution, I&M Bank shall integrate with your ERP/system where your customers will be able to deposit cash and cheques at any of our branches or do electronic funds transfers and the payments will be updated directly into the ERP. This solution shall greatly improve the operational efficiency and eliminate the cash handling risks from your officers.b) Free Web portal and Mobile App this is available if you don’t have a system yet or your current system is not ready for integration. This will enable you access your payment reports and upload billing information.I&M Business Connect is ideal for:1. Fees collection in schools, universities, colleges, and other institutions2. Rent collections3. Membership subscriptions for clubs or professional bodies4. Utility bills collections5. Invoice/bill collections in businesses against goods/services soldKey payment channels available to our customers:1. Cash and Cheque deposits at I&M Bank branches2. Mobile Money - M-Pesa Paybill3. Pesalink4. RTGSFeatures:1. Transaction reference pre-validation Capability2. System Integration Capability3. Payments Notifications4. Reconciliation & SettlementBenefits:1. Real Time update of payments and receipts on your ERP System2. No manual/delayed upload to corporate system3. Ease of reconciliation4. Access to detailed reports for all transactions5. Validation against the unique Customer Number/Reference Number etc');
    await expect(page.locator('#page-wrap-in')).toContainText('a) Direct integration with your Information System or Account System. This allows for real time customer details validation and subsequent update of your ERP system with successful payments collected by the Bank. Through our business connect (B2B) API integration collection solution, I&M Bank shall integrate with your ERP/system where your customers will be able to deposit cash and cheques at any of our branches or do electronic funds transfers and the payments will be updated directly into the ERP. This solution shall greatly improve the operational efficiency and eliminate the cash handling risks from your officers.b) Free Web portal and Mobile App this is available if you don’t have a system yet or your current system is not ready for integration. This will enable you access your payment reports and upload billing information.');
    await expect(page.getByRole('heading', { name: 'I&M Business Connect is ideal' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Business Connect is ideal for:');
    await expect(page.locator('#page-wrap-in')).toContainText('1. Fees collection in schools, universities, colleges, and other institutions2. Rent collections3. Membership subscriptions for clubs or professional bodies4. Utility bills collections5. Invoice/bill collections in businesses against goods/services sold');
    await expect(page.getByRole('heading', { name: 'Key payment channels' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Key payment channels available to our customers:');
    await expect(page.locator('#page-wrap-in')).toContainText('1. Cash and Cheque deposits at I&M Bank branches2. Mobile Money - M-Pesa Paybill3. Pesalink4. RTGS');
    await expect(page.getByRole('heading', { name: 'Features:' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('1. Transaction reference pre-validation Capability2. System Integration Capability3. Payments Notifications4. Reconciliation & Settlement');
    await expect(page.getByRole('heading', { name: 'Benefits:' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('1. Real Time update of payments and receipts on your ERP System2. No manual/delayed upload to corporate system3. Ease of reconciliation4. Access to detailed reports for all transactions5. Validation against the unique Customer Number/Reference Number etc');
    await expect(page.getByRole('heading', { name: 'Some of the I&M Business' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Some of the I&M Business Connect Products and Services include:');
    await expect(page.getByRole('link', { name: 'Learn More ' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More ' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More ' }).nth(2)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Want more information?' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Want more information?');
    await expect(page.locator('#page-wrap-in')).toContainText('Click above to view the brochure. For more details on this service and how to get started, kindly contact your branch manager or your relationship manager.');
    await expect(page.getByRole('link', { name: 'Brochure' })).toBeVisible();
    await ApplyInPerson(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/business-connect/')
    await testRequestCallback(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/business-connect/')
    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/business-connect/')
    await fillAndSubmitForm(page)
});

test('test Cash MGT Service', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/cash-management-service/')
    await bankmenulink(page)

    //await page.getByRole('link', { name: 'Cash MGT Service' }).click();
    await page.locator('p').filter({ hasText: 'Business Banking' }).locator('a').click();
    await expect(page.getByRole('heading', { name: 'Cash Management Service', exact: true })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Cash Management Service');
    await expect(page.locator('#page-wrap-in')).toContainText('Secure cash transportation.');
    await expect(page.locator('li').filter({ hasText: 'Lower risk as cash is secured' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Lower risk as cash is secured by armed guards');
    await expect(page.locator('li').filter({ hasText: 'Insurance cover for Cash In' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Insurance cover for Cash In Transit');
    await expect(page.locator('li').filter({ hasText: 'Deliver and Collection of Cash' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Deliver and Collection of Cash');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Cash MGT' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Secure Cash Transportation' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Secure Cash Transportation');
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Cash Management service facilitates your business to get cash to the bank or any relevant destination quickly and safely at a reasonable cost. The Bank has partnered with a leading security company to offer you Cash in Transit (CIT) Services.');
    await expect(page.getByRole('heading', { name: 'Our Cash Management Services' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Our Cash Management Services offers:');
    await expect(page.locator('#page-wrap-in')).toContainText('Cash collection from customer premises or other relevant points to the BankCash delivery to customer premises or other relevant locationLower risk as cash is secured by armed guardsInsurance cover for Cash In TransitProfessional due diligence when transporting cashReasonable costConvenience – no need to travel to the bank for depositAccount is credited upon confirmation of cash');
    await expect(page.getByRole('heading', { name: 'I&M Cash Management is' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Cash Management is available in major cities and towns. Currently, the following towns are covered:');
    await expect(page.locator('#page-wrap-in')).toContainText('Nairobi CityMombasa CityKisumu CityNakuruEldoretKisiiNyeriMeru');
    await expect(page.getByRole('heading', { name: 'Want more information?' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Want more information?');
    await expect(page.locator('#page-wrap-in')).toContainText('Click above to view the brochure. For more details on this service and how to get started, kindly contact your branch manager or your relationship manager.');
    await expect(page.locator('#page-wrap-in')).toContainText('Click above to view the brochure. For more details on this service and how to get started, kindly contact your branch manager or your relationship manager.');
    await expect(page.getByRole('link', { name: 'BROCHURE' })).toBeVisible();
    await ApplyInPerson(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/cash-management-service/')
    await testRequestCallback(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/cash-management-service/')
    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/cash-management-service/')
    await fillAndSubmitForm(page)
});

test('test Direct Debit Scheme', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/direct-debit-scheme/')
    await bankmenulink(page)

    //await page.getByRole('link', { name: 'Direct Debit Scheme' }).click();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Direct Debit Scheme');
    await expect(page.locator('#page-wrap-in')).toContainText('Easily collect regular payments from your customers');
    await expect(page.locator('li').filter({ hasText: 'Cost effective' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Cost effective');
    await expect(page.locator('li').filter({ hasText: 'Quick reconciliation using' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Quick reconciliation using ready reports');
    await expect(page.locator('li').filter({ hasText: 'Eliminates risks of cash' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Eliminates risks of cash payments and cheque clearing');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Direct Debit' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'Direct Debit SchemeEasily' }).nth(3)).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: 'Direct Debit Scheme' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Direct Debit Scheme');
    await expect(page.locator('#page-wrap-in')).toContainText('Direct Debits is a service that aids businesses to collect regular payments from their customers holding accounts in various Banks.If your business/organization requires regular repetitive collections to be made ( Membership fees, rent, utility payments, insurance premium, etc), this service will enable you to directly collect the payable amounts from your customers’ bank account without them having to keep arranging for payment every time. It saves you and your customers administrative time and expenses.');
    await expect(page.getByRole('heading', { name: 'Among other benefits that' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Among other benefits that your business and your customers will enjoy include:');
    await expect(page.locator('#page-wrap-in')).toContainText('It is easy and convenient – the process is automated after initial set-upFree set-up for corporatesCost effectiveBetter cash flow managementQuick reconciliation using ready reportsEasy to pick and follow-up on failed paymentsEliminates risks of cash payments and cheque clearingAutomatic transfers as per desired frequency – No need for your customers to keep tracking the due dates.');
    await expect(page.getByRole('heading', { name: 'How the Service Works' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('How the Service Works');
    await expect(page.locator('#page-wrap-in')).toContainText('Your business, (referred to as an Originator in the Direct Debit Scheme) asks its customers (referred to as Payers) for an authority or mandate to make periodic deductions from the Payers’ Bank account being payments for a service offered. The Originator then forwards the instructions to I&M Bank to collect the monies owed as per stated frequency and credit the proceeds to the Originators Bank account at I&M Bank. Funds from other Banks are collected through the Clearing House under Kenya Bankers Association.');
    await expect(page.getByRole('heading', { name: 'How to sign-up' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('How to sign-up');
    await expect(page.getByRole('link', { name: 'DIRECT DEBIT SCHEME' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Download, complete and submit the DIRECT DEBIT SCHEME APPLICATION FORM to the nearest I&M Bank branch. Your I&M Bank Relationship Manager will guide you through the onboarding process. You will be required on a frequent basis to forward instructions from new customers joining your business or amendments from existing customers.');
    await expect(page.getByRole('heading', { name: 'Service charges' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('The service will attract the following charges which will be levied from your Business Account.Transaction descriptionCharge to the I&M Bank Business customerSet-up costFreeInward Direct Debit TransferKSh 100 per transferUnpaid outward Direct Debit TransferKSh 500 per transferYour customers (the Payers) will settle their respective transaction charges as levied by their banks where the account is held.');
    await expect(page.getByRole('heading', { name: 'Want more information?' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Click above to view the brochure. For more details on this service and how to get started, kindly contact your branch manager or your relationship manager.');
    await expect(page.getByRole('link', { name: 'Brochure' })).toBeVisible();
    await ApplyInPerson(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/direct-debit-scheme/')

    await testRequestCallback(page)
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/direct-debit-scheme/')

    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await page.goto('https://www.imbankgroup.com/ke/business-solutions/direct-debit-scheme/')

    await fillAndSubmitForm(page)
});


test('test Trade Finance', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business/trade-finance/')
    await bankmenulink(page)
    //await page.locator('#menu-item-16556').getByRole('link', { name: 'Trade Finance' }).click();
    await expect(page.locator('div').filter({ hasText: 'Trade ServicesGet access to:' }).nth(3)).toBeVisible();
    await expect(page.locator('h1')).toContainText('Trade Services');
    await expect(page.locator('#page-wrap-in')).toContainText('Get access to:');
    await expect(page.getByText('Quick turn around time')).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Quick turn around time' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Quick turn around time');
    await expect(page.locator('li').filter({ hasText: 'Large network of' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Large network of correspondent banks');
    await expect(page.locator('li').filter({ hasText: 'Personalised service' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Personalised service');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Trade Finance' })).toBeVisible();
    await expect(page.locator('#overview')).toBeVisible();
    await expect(page.locator('#overview').getByRole('heading', { name: 'Trade Services' })).toBeVisible();
    await expect(page.locator('#overview')).toContainText('Trade Services');
    await expect(page.locator('#overview')).toContainText('We cover the full range of trade finance services from letters of credit and guarantees to export and import trading.');
    await expect(page.locator('div').filter({ hasText: /^Our range of Trade Finance products include:$/ })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Our range of Trade Finance products include:');
    await expect(page.locator('#page-wrap-in')).toContainText('Letters of Credit (Import & Export)Guarantees | Bonds | Unsecured Bid BondsDocumentary Collections (Import & Export)Transactions under Export Credit Guarantee (GSM-102)program under United States Department of Agriculture');
    await expect(page.locator('#page-wrap-in')).toContainText('Bill AvalizationBill/Invoice DiscountingImport Bill Refinancing2- Year LC under Global Trade Finance program(GTFP) of International Finance Corporation (IFC)');
    await expect(page.getByText('FeaturesCapability to offer')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Features');
    await expect(page.locator('.feature-21-body-col > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Capability to offer trade finance services to all major financial centres worldwide through correspondent banking relationships with a host of major multinational Banks');
    await expect(page.locator('div').filter({ hasText: /^Ability to deal in most major currencies$/ }).nth(2)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Ability to deal in most major currencies');
    await expect(page.locator('div:nth-child(2) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Cross-border financing arrangements through established financing lines from major worldwide correspondent Banks in several countries');
    await expect(page.locator('div:nth-child(4) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('A dedicated Trade Finance Department provides very efficient processing and services.');
    await expect(page.locator('ul').filter({ hasText: 'Visit any I&M Bank branch and' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Visit any I&M Bank branch and talk to our friendly customer service representatives who will go through and understand your requirements to advise you on the most appropriate product.');
    await expect(page.locator('#page-wrap-in')).toContainText('Take advantage of I&M Bank’s Trade Finance Solutions and expand your import and export business.');

    await ApplyInPerson(page)
    await page.goto('https://www.imbankgroup.com/ke/business/trade-finance/')

    await testRequestCallback(page)
    await page.goto('https://www.imbankgroup.com/ke/business/trade-finance/')

    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await page.goto('https://www.imbankgroup.com/ke/business/trade-finance/')

    await fillAndSubmitForm(page)
});
async function businesloans(page) {


    await expect(page.locator('h1')).toContainText('Asset Finance');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Asset Finance' })).toBeVisible();
    await page.getByRole('link', { name: 'Asset Finance' }).click();
    await expect(page.getByRole('link', { name: 'Business Loans' })).toBeVisible();
}

test('test loans Asset Finance', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business/loans/business-loans/')
    //await page.getByRole('link', { name: 'Loans -' }).click();
    await bankmenulink(page)
    await businesloans(page)
    await expect(page.locator('.hero-section-4-container')).toBeVisible();

    await expect(page.getByRole('heading', { name: 'I&M Asset Finance' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Imagine Asset Finance that turns your dreams into reality. Asset Finance product at l&M Bank covers all forms of business and personal assets, which are moveable in nature and Identifiable through a serial/registration number. This largely covers motor vehicles, machinery and equipment.');
    await expect(page.getByRole('heading', { name: 'Car Loan Calculator' })).toBeVisible();
    await verifyCarLoanFormFields(page)
    await expect(page.getByRole('heading', { name: 'Key Features' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Key Features');
    await expect(page.getByText('Saloon CarsNew/Used')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Commercial trucks/Pick-ups' })).toBeVisible();
    await expect(page.getByText('Commercial trucks/Pick-upsNew')).toBeVisible();
    await expect(page.getByText('Prime Movers/Heavy Commercial TrucksNew/Used')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Prime Movers/Heavy Commercial Trucks');
    await expect(page.getByText('Earth Movers/Construction EquipmentNew/Used')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Earth Movers/Construction EquipmentNew/Used');
    await expect(page.getByText('Other EquipmentNew')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Other EquipmentNew');
    await expect(page.getByText('TractorsNew')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('TractorsNew');
    await expect(page.getByText('School busesNew')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('School busesNew');
    await expect(page.locator('#page-wrap')).toContainText('Motor cycles ( Fleet Purchasers)New');
    await expect(page.getByRole('heading', { name: 'Benefits' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Benefits');
    await expect(page.locator('.feature-21-body-col > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Quick and simple application process.');
    await expect(page.locator('#Hearth_report > path').first()).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#Capa_1 > path:nth-child(18)')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Financed assets are self-securing.');
    await expect(page.locator('div:nth-child(3) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Option of direct import finance through selected dealers.');
    await expect(page.locator('div:nth-child(4) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Insurance Premium Financing {IPF) available.');
    await expect(page.locator('div:nth-child(5) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Effective working relationships with vehicle. dealers/vendors country wide.');
    await expect(page.locator('div:nth-child(6) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Competitive pricing.');
    await expect(page.getByRole('button', { name: 'Application Requirements -' })).toBeVisible();
    await page.getByRole('button', { name: 'Application Requirements -' }).click();
    await expect(page.getByLabel('Application Requirements -').getByRole('list')).toContainText('Duly completed Asset Finance Application FormProforma Invoice from the Dealer or VendorCompany PIN CertificateCertificate of incorporationMemorandum & Articles of AssociationLatest 6-month bank statement (* 12 months is business is seasonal)Copies of contract where asset sought are to meet contractual requirementsLatest 3 years audited accounts, annual returns and cashflow projectionsCompany/Business Profile***All applications for second-hand units will also require an Original market valuation alongside a copy of the vehicle logbook. Companies approved on our panel are AA of Kenya and Regent.');
    await page.getByRole('button', { name: 'Application Requirements -' }).click();
    await expect(page.getByRole('button', { name: 'Terms: +' })).toBeVisible();
    await page.getByRole('button', { name: 'Terms: +' }).click();
    await expect(page.getByLabel('Terms:').getByRole('list')).toContainText('Finance of up to 80% on cost over a loan duration of 48 months (Used - Up to 8 Years) and Finance of up to 85% on cost over a loan duration of 60 months is availed for assets under the above categories subject to credit evaluation.Concessions for lower deposit and extended loan tenure are available under structured joint dealer/staff car loan schemes.');
    await page.getByRole('button', { name: 'Terms: -' }).click();
    await expect(page.getByRole('heading', { name: 'We also have partnerships' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('We also have partnerships with:');
    await expect(page.getByRole('link', { name: 'Learn More ' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More ' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More ' }).nth(2)).toBeVisible();
    await expect(page.getByText('Want Asset Finance from I&M')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Want Asset Finance from I&M Bank');

    await ApplyInPerson(page)
    await testRequestCallback(page)
    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await fillAndSubmitForm(page)

});



test('testI&M Business Loan', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await bankmenulink(page)
    await page.getByRole('link', { name: 'Business Loans' }).click();
    await expect(page.locator('p').filter({ hasText: 'Business Banking' }).locator('a')).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'I&M Business Loan We are here' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'I&M Business Loan' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('I&M Business Loan');
    await expect(page.locator('#page-wrap-in')).toContainText('We are here to help you turn your vision into reality!');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Business' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Asset Finance' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Our Business Loans are here' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Our Business Loans are here to turn your vision into reality');
    await expect(page.locator('#page-wrap')).toContainText('Choose us as your reliable and understanding partner for availing of financing to build up or run your business. We extend business loans, in the form of overdrafts or term loans, after detailed consultations with you. This ensures that the facility given to your business is the most appropriate and cost-effective for its purposes. Loans and overdrafts are available in Kenya Shillings as well as in other major currencies.');
    await expect(page.getByRole('heading', { name: 'Overdraft: A revolving short-' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Overdraft: A revolving short-term facility used mostly by businesses to meet their short-term working capital needs.');
    await expect(page.locator('#page-wrap')).toContainText('Extended for working capital requirementInterest linked to the Bank’s Base Lending Rate or Foreign Currency Base Lending rate (for foreign currency), charged quarterlyAvailable in KShs, US Dollars, GB Pounds and Euro');
    await expect(page.getByRole('button', { name: 'Term Loans Term loans are' })).toBeVisible();
    await page.getByRole('button', { name: 'Term Loans Term loans are' }).click();
    await expect(page.getByLabel('Term Loans Term loans are').getByRole('list')).toContainText('Purchase of long-term assets such as land, buildings, machines and motor vehiclesConstruction Loans/Real Estate Development LoansAsset Finance – New and used Motor vehicle and machines purchasesBusiness acquisitionsBusiness expansionsAgri-production, Agri-processing loansShort loans for working capital needs');
    await page.getByRole('button', { name: 'Term Loans Term loans are' }).click();
    await expect(page.getByRole('button', { name: 'Notes Please read carefully +' })).toBeVisible();
    await page.getByRole('button', { name: 'Notes Please read carefully +' }).click();
    await expect(page.getByLabel('Notes Please read carefully').getByRole('list')).toContainText('Interest linked to the Bank’s Base Lending Rate or Foreign Currency Base Lending rate (for foreign currency)Available in Kenyan Shillings, US Dollars, GB Pounds, and Euro');
    await page.getByRole('button', { name: 'Notes Please read carefully -' }).click();
    await expect(page.locator('#page-wrap')).toContainText('For more details, contact our Corporate Banking Division on +254 20 322 1001 or visit any of our branches.');
    await expect(page.getByRole('heading', { name: 'Want a business loan?' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Want a business loan?');
    await expect(page.locator('#page-wrap')).toContainText('Contact our Corporate Banking Division on +254 20 322 1001 or visit any of our branches.');
    await expect(page.getByRole('link', { name: 'FIND NEAREST BRANCH' })).toBeVisible();
    await ApplyInPerson(page)
    await page.goto('https://www.imbankgroup.com/ke/');
    await testRequestCallback(page)
    await page.goto('https://www.imbankgroup.com/ke/');
    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await page.goto('https://www.imbankgroup.com/ke/');
    await fillAndSubmitForm(page)
});


//investment

test('test Custody and Investment Services', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.goto('https://www.imbankgroup.com/ke/business/investment/custody-and-investment-services/')
    await bankmenulink(page)
    // await page.getByRole('link', { name: 'Investment -' }).click();
    await expect(page.locator('p').filter({ hasText: 'Business Banking' }).locator('a')).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'Custody and Investment ServicesLet us make your investments work for you' }).nth(3)).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Custody and Investment Services');
    await expect(page.locator('#page-wrap-in')).toContainText('Let us make your investments work for you');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Custody and' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Custody and Investment' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'I&M Burbidge Capital' })).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: /^Custody and Investment Services$/ })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Custody and Investment Services');
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Bank Kenya is licensed by the Capital Markets Authority (CMA) as a Central Depository Agent (CDA) and Custodian and registered by the Retirement Benefits Authority (RBA) as a Custodian for pension schemes. The unit provides all facilities required for investing in equities, fixed income and other securities through one point of contact in a personalized and professional environment of a commercial bank.');
    await expect(page.getByRole('heading', { name: 'Invest in:' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Invest in:');
    await expect(page.locator('.feature-17-body-col > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('div:nth-child(3) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Services Offered Central' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Services Offered' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Services Offered');
    await expect(page.locator('.feature-21-body-col > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Central Depository Services (CDS) accounts and services- Opening and maintenance of depository accounts');
    await expect(page.locator('.feature-21-body > div:nth-child(2) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Facilitating CDS services which include immobilization, inter CDA and private transfers, creation of liens, placement agents during IPO’s and other public offers etc.');
    await expect(page.locator('.feature-21-body > div:nth-child(3) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Investments in government securities (treasury bills and bonds) through primary market auctions and secondary market trades.');
    await expect(page.locator('div:nth-child(4) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('We also facilitate trades in corporate bonds and commercial papers;');
    await expect(page.locator('div:nth-child(5) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Offshore and cross border investments in international markets through Bank One Limited in Mauritius, I&M Bank Tanzania and I&M Bank Rwanda;');
    await expect(page.locator('div:nth-child(6) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Execution of trades through the Bank’s empanelled stockbrokers at the Nairobi Securities Exchange (NSE) or Over the Counter (OTC) markets');
    await expect(page.locator('div:nth-child(7) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Settlement of trades in equities, government paper, corporate debt and offshore Investments.');
    await expect(page.locator('div:nth-child(8) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Corporate actions processing including interest payments & maturities, dividend collection, processing of rights & bonus issues;');
    await expect(page.locator('div:nth-child(9) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Safekeeping of securities and documents;');
    await expect(page.locator('div:nth-child(10) > .card > .card-body')).toBeVisible();
    await page.locator('div:nth-child(10) > .card > .card-body').click();
    await expect(page.locator('#page-wrap-in')).toContainText('Portfolio and compliance reporting;');
    await expect(page.locator('div:nth-child(11) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Fixed & call deposits placements;');
    await expect(page.locator('div:nth-child(12) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Forex conversions, Proxy services and Escrow Services');
    await expect(page.getByRole('heading', { name: 'Additional Details' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Additional Details');
    await expect(page.getByRole('button', { name: 'Who are eligible for I&M Bank' })).toBeVisible();
    await expect(page.locator('#step-1-heading')).toContainText('Who are eligible for I&M Bank’s Custody and Investment Services?');
    await page.getByRole('button', { name: 'Who are eligible for I&M Bank' }).click();
    await expect(page.getByLabel('Who are eligible for I&M Bank').getByRole('list')).toContainText('Local and foreign individualsCorporates and institutionsHigh net worth investorsPension and provident schemesFund managersCollective Investment Schemes (CIS’s)Insurance companiesInvestment clubs (Chama’s)Savings And Credit Co-Operatives (SACCO’s)Capital Markets Authority (CMA) market intermediaries');
    await page.getByRole('button', { name: 'Who are eligible for I&M Bank' }).click();
    await expect(page.getByRole('button', { name: 'How to sign up? +' })).toBeVisible();
    await expect(page.locator('#step-2-heading')).toContainText('How to sign up?');
    await page.getByRole('button', { name: 'How to sign up? +' }).click();
    await expect(page.getByLabel('How to sign up?').getByRole('list')).toContainText('Meet a bank representative at any of I&M Bank’s branches who will discuss, understand your requirements and guide you on the account opening documentation and investment process; or,Contact our Custody & Investment Services team');
    await page.getByRole('button', { name: 'How to sign up? -' }).click();
    await expect(page.getByRole('heading', { name: 'Want to invest?' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Want to invest?');
    await expect(page.locator('#page-wrap-in')).toContainText('Get in touch with our Custody and Investment team on I&M Bank Tower, 8th floor, Kenyatta Avenue P.O. Box 30238-00100, Nairobi, Kenya Telephone; +254 322100/3221001/0719 088000/ 0732100000 Email; ims@imbank.co.ke');

    await ApplyInPerson(page)
    await page.goto('https://www.imbankgroup.com/ke/business/investment/custody-and-investment-services/')
    await testRequestCallback(page)
    await page.goto('https://www.imbankgroup.com/ke/business/investment/custody-and-investment-services/')
    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await fillAndSubmitForm(page)
});

test('test I&M Burbidge Capital', async ({ page }) => {

    // const pagePromise = page.waitForEvent('popup');
    //await page.locator('#menu-item-16582').getByRole('link', { name: 'I&M Burbidge Capital' }).click();
    await page.goto('https://www.imburbidgecapital.com/')
    //const page = await pagePromise;
    await expect(page.getByRole('link', { name: 'ImBurbdge Header 5.png' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'HOME' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'ABOUT US' })).toBeVisible();
    //await expect(page.getByRole('link', { name: 'MEET THE TEAM' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'DIRECTORS' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'UGANDA' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'SERVICES' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'TRACK RECORD' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'PUBLICATIONS', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'CONTACT US' })).toBeVisible();
    await expect(page.getByText('I&M Burbidge Capital We')).toBeVisible();
    await expect(page.locator('p').filter({ hasText: 'I&M Burbidge Capital We' })).toBeVisible();
    await expect(page.locator('#pgi9a0fcfb206454cc0af63d7593de3bd18_13')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'About Us I&M Burbidge Capital' })).toBeVisible();
    await expect(page.locator('section').filter({ hasText: 'About Us I&M Burbidge Capital' }).getByTestId('container-bg')).toBeVisible();
    await expect(page.getByText('Helping Businesses just like')).toBeVisible();
    await expect(page.frameLocator('iframe[title="Wix Chat"]').getByRole('heading', { name: 'I&M Burbidge Capital' })).toBeVisible();
    await expect(page.frameLocator('iframe[title="Wix Chat"]').getByLabel('Minimize Chat')).toBeVisible();
    await expect(page.frameLocator('iframe[title="Wix Chat"]').getByLabel('Minimize Chat')).toBeVisible();
    await page.frameLocator('iframe[title="Wix Chat"]').getByLabel('Minimize Chat').click();
    await expect(page.locator('#bgLayers_comp-lmk9td205').getByTestId('colorUnderlay')).toBeVisible();
    await expect(page.locator('#bgLayers_comp-lmk9td2e4 > .LWbAav')).toBeVisible();
    await expect(page.locator('#bgLayers_comp-lmk9td2n3 > .LWbAav')).toBeVisible();
    await expect(page.locator('#bgLayers_comp-lmk9td2r6 > .LWbAav')).toBeVisible();
    await expect(page.locator('#img_comp-lmk9td2x').getByRole('img', { name: 'IM Blue.png' })).toBeVisible();
    await expect(page.locator('#Containerzth1s')).toContainText('We are sector agnostic and our Team has experience across the key industry sectors in Sub-Saharan Africa.');
    await expect(page.getByRole('img', { name: 'Burbidge Award 2020.png' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Burbidge EAVCA award.png' })).toBeVisible();
    await expect(page.locator('#bgLayers_comp-lmk9td35').getByTestId('colorUnderlay')).toBeVisible();
    await expect(page.getByRole('img', { name: '-One_Park3.png' })).toBeVisible();
    await expect(page.locator('#comp-lmk9td381').getByTestId('container-bg')).toBeVisible();
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('form')).toContainText('First Name');
    await expect(page.locator('form')).toContainText('Last Name');
    await expect(page.locator('form')).toContainText('Email');
    await expect(page.locator('#comp-lmk9td421')).toContainText('Phone Number');
    await expect(page.locator('form')).toContainText('Message');
    await expect(page.getByTestId('buttonElement')).toContainText('Send');
});

//insurance
async function businessinsurance(page) {
    await expect(page.getByRole('link', { name: 'Bancassurance' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Insurance Premium Financing' })).toBeVisible();
}


test('test Bancassurance', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.getByRole('link', { name: 'Insurance -' }).click();
    await bankmenulink(page)
    await expect(page.locator('div').filter({ hasText: 'Need Insurance? We have it' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Need Insurance? We have it' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Need Insurance? We have it all!');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya -' })).toBeVisible();
    await businessinsurance(page)
    await expect(page.getByRole('heading', { name: 'A one stop shop for all your' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('A one stop shop for all your insurance needs');
    await expect(page.locator('#page-wrap')).toContainText('Through I&M Bancassurance Intermediary Limited, a wholly-owned subsidiary of I&M Bank, it is now easier than ever to enjoy insurance products The Bank through its subsidiary I&M Bancassurance Intermediary Limited has negotiated attractive premium rates, terms and flexible premium payment mode through Insurance Premium Financing (IPF) facility with leading insurance companies in the market. Our services are open to everyone i.e. both I&M Bank account holders and non-account holders. We offer:');
    await expect(page.locator('div').filter({ hasText: /^General Insurance$/ })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('General Insurance');
    await expect(page.locator('#page-wrap')).toContainText('Motor vehicleHousehold-domestic protectionFire insuranceCard insuranceMedicalSchool packagePersonal AccidentMarine insuranceProfessional indemnityPublic liabilityComputer all risks/electronic equipmentGoods in transit');
    await expect(page.locator('div').filter({ hasText: /^Life Insurance$/ })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Life Insurance');
    await expect(page.locator('#page-wrap')).toContainText('Child Education policyHousehold-domestic protectionIndividual life assurance policy – EndowmentFamily life assuranceGroup life assuranceSalary protectionUnit linkedMortgage protectionCredit life assuranceKaro plan – SchoolsKeyman insurance');
    await expect(page.locator('section').filter({ hasText: 'By choosing I&M Bancassurance' })).toBeVisible();
    await expect(page.getByText('By choosing I&M Bancassurance')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('By choosing I&M Bancassurance Intermediary Limited as your preferred insurance partner, you will enjoy the following benefits:-');
    await expect(page.getByText('ConvenienceWith our “one-stop')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Convenience');
    await expect(page.locator('#page-wrap')).toContainText('With our “one-stop-shop” for financial services, customers can now get their insurance requirements met at any I&M Bank branch.');
    await expect(page.getByText('Reputable CompaniesWe have')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Reputable Companies');
    await expect(page.locator('#page-wrap')).toContainText('We have partnered with underwriters who have vast experience, sound financial strength and satisfactory claims settlement records.');
    await expect(page.getByText('Competitive quotationsFlexible and competitive pricing of insurance covers.')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Competitive quotations');
    await expect(page.locator('#page-wrap')).toContainText('Flexible and competitive pricing of insurance covers.');
    await expect(page.getByText('Professional adviseProfessional staff that are well qualified to assist you to')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Professional advise');
    await expect(page.locator('#page-wrap')).toContainText('Professional staff that are well qualified to assist you to pick the most suitable cover.');
    await expect(page.getByText('Quick turnaround timeInsurance certificates and cover notes for motor and')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Quick turnaround time');
    await expect(page.locator('#page-wrap')).toContainText('Insurance certificates and cover notes for motor and property insurance respectively will be issued and collected at the Bank.');
    await expect(page.getByText('Flexible payment planAutomatic access to our Insurance Premium Financing (IPF')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Flexible payment plan');
    await expect(page.locator('#page-wrap')).toContainText('Automatic access to our Insurance Premium Financing (IPF), which enables payment of premiums in 4-10 instalments. For cash payments, premiums are collected directly from the customer’s bank account in I&M Bank.');
    await expect(page.locator('section').filter({ hasText: 'Business Insurance Products' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Business Insurance Products' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Business Insurance Products');
    await expect(page.getByRole('link', { name: 'Find out more  Business' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Find out more  Work Injury' }).nth(1)).toBeVisible();
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  Group Life' }).nth(1)).toBeVisible();
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  Business' }).nth(1)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await fillAndSubmitForm(page)
});



test('test Insurance Premium Financing', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.getByRole('link', { name: 'Insurance Premium Financing' }).click();
    await bankmenulink(page)
    await expect(page.locator('div').filter({ hasText: 'We care more about making' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'We care more about making' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('We care more about making life easier for you!');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Insurance' })).toBeVisible();
    await businessinsurance(page)
    await expect(page.getByRole('heading', { name: 'Insurance Premium Financing', exact: true })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Insurance Premium Financing');
    await expect(page.locator('#page-wrap')).toContainText('A short-term credit facility that enables the client to pay the insurance premium in easy instalments of up to 10 months. The product is available to both I&M Bank account holders and non-account holders. IPF is workable under general insurance policies that are normally placed or renewed for a fixed period of one year. It excludes Life insurance policies.');
    await expect(page.getByRole('heading', { name: 'Examples of such Insurance' })).toBeVisible();
    await expect(page.locator('.feature-32-body-col > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Fire and perilsMotor Commercial or PrivateIndustrial All RiskWorkmen’s compensationBurglary');
    await expect(page.locator('div:nth-child(2) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Golfers policyContractors all risk policyProfessional Indemnity CoverMedical Insurance premiums');
    await expect(page.getByRole('heading', { name: 'Benefits' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Benefits');
    await expect(page.locator('.feature-21-body-col > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#Layer_1').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('100% finance on applicable insurance premiums.');
    await expect(page.locator('.feature-21-body > div:nth-child(2) > .card > .card-body')).toBeVisible();
    await expect(page.locator('g > path:nth-child(4)').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Reliable flow management tool');
    await expect(page.locator('div:nth-child(3) > .card > .card-body > .media')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Convenient and simple documentation');
    await expect(page.locator('#Capa_1').nth(1)).toBeVisible();
    await expect(page.locator('div:nth-child(4) > .card > .card-body')).toBeVisible();
    await expect(page.locator('div:nth-child(4) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > #Capa_1 > path:nth-child(8)')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Easy application process');
    await expect(page.locator('div:nth-child(5) > .card > .card-body')).toBeVisible();
    await expect(page.locator('div:nth-child(5) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > #Capa_1 > path:nth-child(14)')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('No credit appraisal');
    await expect(page.locator('div:nth-child(6) > .card > .card-body')).toBeVisible();
    await expect(page.locator('div:nth-child(6) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > .injected-svg')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Quick turnaround time');
    await expect(page.locator('div:nth-child(7) > .card > .card-body')).toBeVisible();
    await expect(page.locator('div:nth-child(7) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > .injected-svg')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('No hidden charges and commitment fees');
    await expect(page.locator('div:nth-child(8) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#Flat')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Competitive pricing');
    await expect(page.getByRole('heading', { name: 'Additional Details' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Additional Details');
    await expect(page.locator('#application-requirements-heading')).toBeVisible();
    await expect(page.locator('#application-requirements-heading')).toContainText('Application Requirements');
    await page.getByRole('button', { name: 'Application Requirements +' }).click();
    await expect(page.getByRole('button', { name: 'Application Requirements -' })).toBeVisible();
    await expect(page.locator('#application-requirements-heading')).toContainText('Application Requirements');
    await expect(page.getByLabel('Application Requirements').getByRole('list')).toContainText('Duly completed application formExecuted Insurance Premium Finance Agreement endorsed by the insurance company (the insurance company underwriting the policies must however be approved by I&M Bank)Copy of National ID and PIN for individual applicantsCopy of Certificate of Incorporation/ Certificate of Registration for business entitiesCompany PIN');
    await page.getByRole('button', { name: 'Application Requirements -' }).click();
    await expect(page.getByRole('heading', { name: 'Want Insurance Premium' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Want Insurance Premium Financing?');
    await expect(page.locator('#page-wrap')).toContainText('For more information contact your Relationship Manager or Customer Service representative or Email us at Hire.Purchase@imbank.co.ke or call 0719 088 264/269');
    await ApplyInPerson(page)
    await page.goto('https://www.imbankgroup.com/ke/business/insurance/insurance-premium-financing/');
    await testRequestCallback(page)
    await page.goto('https://www.imbankgroup.com/ke/business/insurance/insurance-premium-financing/');
    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await page.goto('https://www.imbankgroup.com/ke/business/insurance/insurance-premium-financing/');
    await fillAndSubmitForm(page)
});

//transfers
async function businesstransfer(page) {
    await expect(page.getByRole('link', { name: 'Government Payments' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Local & International' })).toBeVisible();

}

test('test Local & International', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.getByRole('link', { name: 'Transfers -' }).click();
    await bankmenulink(page)
    await expect(page.locator('p').filter({ hasText: 'Business Banking' }).locator('a')).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'Conveniently make transfers & payments locally and internationally.Finance of' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Conveniently make transfers' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Conveniently make transfers & payments locally and internationally.');
    await expect(page.locator('#page-wrap-in')).toContainText('Finance of up to 80% on cost over loan duration of 48 months.');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Local &' })).toBeVisible();
    await businesstransfer(page)
    await expect(page.getByRole('heading', { name: 'International Transfers' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('International Transfers');
    await expect(page.locator('#page-wrap-in')).toContainText('I&M offers a range of dynamic Funds Transfer Services enabling you to conveniently make transfers internationally.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'International TransfersI&M' }).getByRole('link').first()).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .card').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'International TransfersI&M' }).getByRole('link').nth(2)).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'International TransfersI&M' }).getByRole('link').nth(1)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Local Transfers' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Local Transfers');
    await expect(page.locator('#page-wrap-in')).toContainText('I&M offers a range of dynamic Funds Transfer Services enabling you to conveniently make transfers locally.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Local TransfersI&M offers a' }).getByRole('link').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Local TransfersI&M offers a' }).getByRole('link').nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Local TransfersI&M offers a' }).getByRole('link').nth(2)).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'Brisk TransferFastest way to transfer funds in East Africa.Brisk Transfer Learn' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Brisk TransferFastest way to' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Brisk TransferFastest way to transfer funds in East Africa.');
    await expect(page.locator('#page-wrap-in')).toContainText('Brisk Transfer');
    await expect(page.getByRole('link', { name: 'Learn More', exact: true })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Brisk TransferFastest way to' }).first()).toBeVisible();
});




test('test Government Payments', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    //await page.getByRole('link', { name: 'Government Payments' }).click();
    await page.goto('https://www.imbankgroup.com/ke/business/transfers/government-payments/');
    await bankmenulink(page)
    await expect(page.locator('div').filter({ hasText: /^Business Banking$/ })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'Government PaymentsConveniently make transfers & payments locally and' }).nth(3)).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Government Payments');
    await expect(page.locator('#page-wrap-in')).toContainText('Conveniently make transfers & payments locally and internationally.');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Government' })).toBeVisible();
    await businesstransfer(page)
    await expect(page.locator('h2').filter({ hasText: 'Government Payments' })).toBeVisible();
    await page.locator('h2').filter({ hasText: 'Government Payments' }).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Government Payments');
    await expect(page.locator('#page-wrap-in')).toContainText('Conveniently make government payments through I&M Bank.');
    await expect(page.locator('.feature-22-body-col > .card').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More ' }).first()).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .card')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More ' }).nth(1)).toBeVisible();
});