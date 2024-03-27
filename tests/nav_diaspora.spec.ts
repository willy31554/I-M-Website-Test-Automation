import { test, expect } from '@playwright/test';
import { navigateTo, clickTopNavLinkAndAssert, verifyCarLoanFormFields, Personal_Banking_menu, fillAndSubmitForm, applyForLoan, ApplyInPerson, testRequestCallback, Prepaid_Cards, testCustodialServices, testLoans, testPersonalBankingAccounts, testTransfersgovernments, testTransferslocal, testUnsecured_Personal_Loan, testWealthManagementService, test_Credit_Card, test_Debit_Card, test_Home_Loans, test_InsurancePremiumFinancing, testpersonalSavingsAccounts, testpersonalTransactionsAccounts, verifyinsurance } from '../helpers/utilities';
//import { Prepaid_Cards, testCustodialServices, testLoans, testPersonalBankingAccounts, testTransfersgovernments, testTransferslocal, testUnsecured_Personal_Loan, testWealthManagementService, test_Credit_Card, test_Debit_Card, test_Home_Loans, test_InsurancePremiumFinancing, testpersonalSavingsAccounts, testpersonalTransactionsAccounts, verifyinsurance } from '../tests/navigation.spec.ts';


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
    await page.goto('https://www.imbankgroup.com/ke/diaspora/find-an-agent/');
    //await page.getByRole('link', { name: 'Find An Agent', exact: true }).click();
    await expect(page.getByRole('img', { name: 'Find an Agent' })).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Find an Agent');
    await expect(page.getByText('To help you learn more about')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('To help you learn more about our products and services and to open your account, you can also contact any of our team of overseas agents.');
    await page.locator('.popup-trigger-dropdown > .dropdown > .dropdown-select-cont').click();
    await expect(page.locator('#page-wrap-in')).toContainText('Find an AgentTo help you learn more about our products and services and to open your account, you can also contact any of our team of overseas agents. Choose your countryChoose your countryAustraliaBotswanaCanadaGermanyIsraelNamibiaRwandaSaudi ArabiaSouth AfricaSwazilandSwedenUnited Arab EmiratesUSA ?> Charles Mutuota Ngahurocmutuota@yahoo.com Address: Phone:+61412112383 Email:cmutuota@yahoo.com ?> Thomas Gitumbi Machariatom.vicconsult@gmail.com Address: Phone:+26772867465 Email:tom.vicconsult@gmail.com Hottensia Wairimu Ndung’uwafrawa@gmail.com Address: Phone:+26776268067, +26773246107 Email:wafrawa@gmail.com ?> Jesse Gitonga Mukundijesse.gitonga@gmail.com Address: Phone:15195002063, 19055072301 Email:jesse.gitonga@gmail.com ?> James Ngubiriinfo@kenyagermanysacco.com Address: Phone:+491739043029 Email:info@kenyagermanysacco.com, ngubiri@yahoo.de ?> Alex Ngothongothoalex@gmail.com Address: Phone:+972546414629 Email:ngothoalex@gmail.com ?> Miriam Kanyule Kadorimiriamkadori@gmail.com Address: Phone:+26466256682 , +264813698518 Email:miriamkadori@gmail.com ?> Edgar Ogaoedgar.ogao@linkagesrwanda.com Address: Phone:0783073161 Email:edgar.ogao@linkagesrwanda.com ?> Peter Ngugi Muturi Address: Phone:0723-854709 Email: ?> Simon .T. M . Wanderisimon@idotech.co.za Address: Phone:+27110248419, +27724627718 Email:simon@idotech.co.za Paul Kariuki / Pauline Njogupauline@dignitygroup.co.za Address: Phone:+2727437212339 , +27724398287 Email:pauline@dignitygroup.co.za Peter Kimani Kinyanjuiinfo@petkimafrica.co.za Address: Phone:+27813759174 Email:info@petkimafrica.co.za Allan Sankale Wakabasankalewakaba@yahoo.com Address: Phone:+27762229846, +27515221365 Email:sankalewakaba@yahoo.com Robert Wanjohi Githua Address: Phone:0745212125 Email: William Gateru Muchinawmuchina@hotmail.com Address: Phone:+0846705286 Email:wmuchina@hotmail.com Martin K Lugho & Esther Leah M Ngigileangi2014@gmail.com Address: Phone:0766 672335, 011 -046 9170 Email:leangi2014@gmail.com ?> Margaret Wanjiru Kamirumwkamiru@gmail.com Address: Phone:+26824043284 Email:mwkamiru@gmail.com ?> James ObenjoOBEEBABAA12@HOTMAIL.COM Address: Phone:+46769241092 Email:OBEEBABAA12@HOTMAIL.COM ?> Eunice Muthoni KaniuKhanioh24@yahoo.com Address: Phone:+971509029087, +254792003700 Email:Khanioh24@yahoo.com Augustus Kyalo Mulikyalomuli@yahoo.com Address: Phone: Email:kyalomuli@yahoo.com Abubakar Osore Jumaabubakar.juma@gmail.com Address: Phone:+971522304906 Email:abubakar.juma@gmail.com ?> Martin Mukoya Luttamlutta@krazyhouseonline.com Address: Phone: Email:mlutta@krazyhouseonline.com Dr David Matara Angwenyiangwendm@gmail.com Address: Phone:+1-609-429-0569 Email:angwendm@gmail.com Wycliff Chakuachakuaw@gmail.com Address: Phone:612 369 8883 Email:chakuaw@gmail.com Peris Ndongendonge2001@yahoo.com Address: Phone:+15104998458 Email:ndonge2001@yahoo.com Michael Kamaummasharya@yahoo.com Address: Phone:+13142554961 Email:mmasharya@yahoo.com');


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