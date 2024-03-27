// utilities.ts

import { Page, expect } from '@playwright/test';

export async function navigateTo(page: Page, url: string) {
    await page.goto(url);
}
// Reusable function to click on a top navigation link and perform assertions on the resulting page
export async function clickTopNavLinkAndAssert(page, linkName: string, assertions: () => Promise<void>) {
    await page.getByRole('link', { name: linkName }).click();
    await assertions();
}
export async function scrollToBottom(page: Page) {
    await page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
}

export async function expandAccordion(page: Page, selector: string) {
    await page.click(selector);
}

export async function fillForm(page: Page, formData: Record<string, string>) {
    for (const [field, value] of Object.entries(formData)) {
        await page.fill(`#${field}`, value);
    }
}

export async function RequestCallBackEnter(page) {
    await page.goto('https://www.imbankgroup.com/ke/personal/loans/car-loans/');
    // await page.click('text=Car Loans');

    await expect(page.getByText('Request Call BackEnter')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Request Call Back' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Request Call Back');
    await expect(page.locator('#page-wrap')).toContainText('Enter Contact Details');
    await expect(page.locator('#page-wrap')).toContainText('We are available from 9:00 AM to 4:00 PM Weekly.');
    await expect(page.getByText('We are available from 9:00 AM').first()).toBeVisible();
}



export async function ApplyInPerson(page) {
    await page.getByRole('heading', { name: 'Apply in person' }).click();
    await expect(page.getByRole('heading', { name: 'Apply in person' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Find your nearest branch');
    await expect(page.locator('#page-wrap')).toContainText('Find your nearest branch');
    await page.getByRole('link', { name: 'Find your nearest branch' }).click();
    await expect(page.locator('div').filter({ hasText: 'BranchesConvenient,' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Branches');
    await expect(page.locator('#page-wrap-in')).toContainText('Convenient, comfortable, aesthetic and friendly and each with a 24 hour ATM - describes our branches in all major centres in Kenya');
    await expect(page.locator('#page-wrap-in')).toContainText('NB: Please visit here to see the revised temporary branch operating hours due to the current pandemic.');
    await expect(page.locator('.feature-46-header > .drop-down-cont > .dropdown > .dropdown-select-cont')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Select a location');
    await page.locator('#page-wrap-in section').filter({ hasText: 'Select a location Select a' }).locator('i').nth(1).click();
    await page.locator('#page-wrap-in section').filter({ hasText: 'Select a location Select a' }).locator('i').nth(1).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Select a location');
    await expect(page.locator('#page-wrap-in')).toContainText('Select a location Select a location Uasin Gishu County Trans-Nzoia County Nyeri County Nakuru County Nairobi County Mombasa County Meru county Machakos County Laikipia County Kwale County Kisumu County Kisii County Kilifi County Kiambu County Kajiado County');
    await expect(page.locator('div').filter({ hasText: /^To navigate, press the arrow keys\.$/ }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('To navigate, press the arrow keys.');
    await expect(page.getByLabel('Drag Pegman onto the map to')).toBeVisible();
    await expect(page.getByLabel('Zoom in', { exact: true })).toBeVisible();
    await expect(page.getByLabel('Zoom out', { exact: true })).toBeVisible();
    console.log("test apply in person ")
}

export async function testRequestCallback(page) {
    await expect(page.getByText('Request Call BackEnter')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Request Call Back' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Request Call Back');
    await expect(page.locator('#page-wrap')).toContainText('Enter Contact Details');
    await expect(page.locator('#page-wrap')).toContainText('We are available from 9:00 AM to 4:00 PM Weekly.');
    await expect(page.getByText('We are available from 9:00 AM').first()).toBeVisible();

    //await expect(page.getByRole('heading', { name: 'Request Call Back' })).toBeVisible();
    await expect(page.getByText('Request Call BackEnter')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Request Call Back' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Request Call Back');
    await expect(page.getByRole('link', { name: 'Enter Contact Details' }).first()).toBeVisible();
    await expect(page.getByText('We are available from 9:00 AM').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('We are available from 9:00 AM to 4:00 PM Weekly.');
    await page.getByRole('link', { name: 'Enter Contact Details' }).first().click();
    await expect(page.locator('#request-call-back-form div').filter({ hasText: /^One of our representatives will call you back as soon as possible\.$/ })).toBeVisible();
    await expect(page.locator('#request-call-back-form')).toContainText('One of our representatives will call you back as soon as possible.');
    await expect(page.locator('#request-call-back-form div').filter({ hasText: 'Full Name*Email Address*' }).nth(2)).toBeVisible();
    await expect(page.locator('#field_13_2')).toBeVisible();
    await expect(page.locator('#field_13_2')).toContainText('Full Name*');
    await expect(page.getByPlaceholder('Enter Your Name')).toBeEmpty();
    await expect(page.locator('#field_13_3')).toBeVisible();
    await expect(page.locator('#field_13_3')).toContainText('Email Address*');
    await expect(page.getByPlaceholder('Enter Your Email Address')).toBeEmpty();
    await expect(page.locator('#field_13_4')).toBeVisible();
    await expect(page.locator('#field_13_4')).toContainText('Phone Number*');
    await expect(page.getByPlaceholder('Enter Phone Number')).toBeEmpty();
    await expect(page.locator('#field_13_6')).toBeVisible();
    await expect(page.locator('#field_13_6')).toContainText('Select one of the options below:*');
    await expect(page.getByRole('radio', { name: 'I am interested, please' })).toBeVisible();
    await expect(page.getByRole('radio', { name: 'I am interested, please' })).not.toBeChecked();
    await expect(page.getByRole('radio', { name: 'I want some clarification as' })).toBeVisible();
    await expect(page.locator('#label_13_6_1')).toContainText('I want some clarification as below');
    await expect(page.getByRole('radio', { name: 'I want some clarification as' })).not.toBeChecked();
    await expect(page.locator('#field_13_8')).toBeVisible();
    await expect(page.locator('#field_13_8')).toContainText('Consent* I have read and understood the Privacy Notice');
    await expect(page.getByRole('checkbox', { name: 'I have read and understood' })).not.toBeChecked();
    await page.getByRole('checkbox', { name: 'I have read and understood' }).check();
    await expect(page.locator('#field_13_9').getByText('Validate you\'re human')).toBeVisible();
    await expect(page.locator('#field_13_9')).toContainText('Validate you\'re human');
    await expect(page.locator('#field_13_9')).toBeVisible();
    await expect(page.locator('#gform_submit_button_13')).toBeVisible();
    await expect(page.locator('#gform_submit_button_13')).toContainText('Submit');
    await page.locator('#gform_submit_button_13').click();
    await expect(page.getByText('There was a problem with your submission. Please review the fields below.Full')).toBeVisible();

    console.log("test request callback")
}


export async function applyForLoan(page) {
    await page.getByText('Apply for a loanEnter Contact').click();
    await page.locator('.bi').first().click();
    await expect(page.getByText('Apply for a loanEnter Contact')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Apply for a loan' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Apply for a loan');
    await expect(page.getByRole('link', { name: 'Enter Contact Details' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Enter Contact Details');
    await expect(page.getByText('We are available from 9:00 AM').nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('We are available from 9:00 AM to 4:00 PM Weekly.');
    await page.getByRole('link', { name: 'Enter Contact Details' }).nth(1).click();
    await expect(page.locator('#request-call-back-form1 div').filter({ hasText: /^One of our representatives will call you back as soon as possible\.$/ })).toBeVisible();
    await expect(page.locator('#request-call-back-form1')).toContainText('One of our representatives will call you back as soon as possible.');
    await expect(page.getByText('Step 1 of')).toBeVisible();
    await expect(page.locator('#gf_progressbar_wrapper_14')).toContainText('Step 1 of 4');
    await expect(page.locator('#gform_14 div').filter({ hasText: 'PERSONAL DETAILSHiddenCard*' }).first()).toBeVisible();
    await expect(page.locator('#field_14_31')).toContainText('PERSONAL DETAILS');
    await expect(page.getByText('PERSONAL DETAILSHiddenCard*')).toBeVisible();
    await expect(page.locator('#field_14_108')).toContainText('First Name*');
    await expect(page.locator('#field_14_109')).toContainText('Second name*');
    await expect(page.locator('#field_14_110')).toContainText('Last name*');
    await expect(page.locator('#field_14_111')).toContainText('Preferred name on card*');
    await expect(page.locator('#field_14_10')).toContainText('ID/Passport No*');
    await expect(page.locator('#field_14_15')).toContainText('Nationality*');
    await expect(page.locator('#field_14_16')).toContainText('KRA PIN*');
    await expect(page.locator('#field_14_113')).toContainText('P.O Box*');
    await expect(page.locator('#field_14_114')).toContainText('Postal Code*');
    await expect(page.locator('#field_14_19')).toContainText('Physical Address*');
    await expect(page.locator('#field_14_21')).toBeVisible();
    await expect(page.locator('#field_14_21')).toContainText('Occupation*');
    await expect(page.locator('#field_14_20')).toContainText('Maritial Status*');
    await expect(page.locator('#field_14_115')).toContainText('No. of Dependants*');
    await expect(page.locator('#field_14_25')).toContainText('Education Level*Post GraduateGraduateDiplomaHighschool');
    await expect(page.locator('#field_14_26')).toContainText('Current Residence*Self OwnedRentedFamily OwnedCompany LeasedMortgage');
    await expect(page.locator('#field_14_28')).toContainText('Email (For card statements)*');
    await expect(page.locator('#field_14_29')).toContainText('Mobile No.*');
    await expect(page.locator('#field_14_36')).toBeVisible();
    await expect(page.locator('#field_14_36')).toContainText('CARD DETAILS');
    await expect(page.locator('#field_14_128')).toContainText('Amount applied for in figures (KES)*Please enter a number greater than or equal to 1.');
    await expect(page.locator('#field_14_39')).toContainText('Amount applied for in words*');
    await expect(page.locator('#field_14_40')).toContainText('*');
    await expect(page.getByRole('button', { name: 'Next', exact: true })).toBeVisible();
    await expect(page.locator('#gform_next_button_14_1')).toContainText('Next');
    await expect(page.getByRole('button', { name: 'Save and Continue Later' })).toBeVisible();
    await expect(page.locator('#gform_page_14_1')).toContainText('Next Save and Continue Later');
    console.log("test apply loan ")
}

export async function fillAndSubmitForm(page: any) {
    // Check visibility and text content of elements
    await expect(page.locator('#gform_17 div').filter({ hasText: 'Full Name*Email Address*' })).toBeVisible();
    await expect(page.locator('#field_17_2')).toContainText('Full Name*');
    await expect(page.locator('#field_17_3')).toContainText('Email Address*');

    // Check visibility and non-emptiness of required fields
    const emailInput = await page.getByRole('textbox', { name: 'Email Address *' });
    //await expect(emailInput).toBeVisible();
    //await expect(emailInput.inputValue()).not.toBe('');

    const phoneNumberInput = await page.getByRole('textbox', { name: 'Phone Number *' });
    //await expect(phoneNumberInput).toBeVisible();
    //await expect(phoneNumberInput.inputValue()).not.toBe('');

    // Other field validations...

    // Check visibility of the submit button
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
    await expect(page.locator('#gform_submit_button_17')).toContainText('Submit');
}

export async function verifyLoanLinksVisibility(page) {
    await expect(page.getByRole('link', { name: 'Car | Vehicle Loan' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Car | Vehicle Loan');
    await expect(page.getByRole('link', { name: 'House | Mortgage Loan' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('House | Mortgage Loan');
}

export async function verifyCarLoanFormFields(page) {
    await expect(page.locator('form[name="carloandata"]')).toContainText('Type of loan');
    await expect(page.locator('li').filter({ hasText: 'Type of loan Loan Amount' }).getByRole('textbox')).toHaveValue('Car');
    await expect(page.locator('form[name="carloandata"] div').filter({ hasText: 'Loan Amount' }).nth(1)).toBeVisible();
    await expect(page.locator('form[name="carloandata"]')).toContainText('Loan Amount');
    await expect(page.locator('input[name="principal"]')).toBeEmpty();
    await expect(page.locator('form[name="carloandata"] div').filter({ hasText: 'Payment Period(Months)' }).nth(1)).toBeVisible();
    await expect(page.locator('form[name="carloandata"]')).toContainText('Payment Period(Months)');
    await expect(page.getByText('Rate %')).toBeVisible();
    await expect(page.locator('form[name="carloandata"]')).toContainText('Rate %');
    await expect(page.locator('input[name="interest"]')).toBeEmpty();
    await expect(page.locator('form[name="carloandata"] div').filter({ hasText: 'Monthly Payment' }).nth(1)).toBeVisible();
    await expect(page.locator('form[name="carloandata"]')).toContainText('Monthly Payment');
    await expect(page.locator('input[name="payment"]')).toBeEmpty();
    await expect(page.locator('form[name="carloandata"] div').filter({ hasText: 'Total Payment' }).nth(1)).toBeVisible();
    await expect(page.locator('form[name="carloandata"]')).toContainText('Total Payment');
    await expect(page.locator('input[name="total"]')).toBeEmpty();
}

export async function test_Credit_Card(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');

    await page.$('text=Cards +');
    await page.hover('text=Cards');
    await page.getByRole('link', { name: 'Credit Cards' }).click();

    await Personal_Banking_menu(page)
    await verifyCardLinksVisibility(page);
    await expect(page.locator('div').filter({ hasText: 'I&M Bank Credit CardsTreat' }).nth(3)).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('I&M Bank Credit Cards');
    await expect(page.getByText('Treat yourself with best')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Treat yourself with best credit cards in Kenya');
    await expect(page.locator('li').filter({ hasText: 'Unlimited FREE Access to over' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Unlimited FREE Access to over' }).locator('#Capa_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Unlimited FREE Access to over 800 Airport Lounges');
    await expect(page.locator('li').filter({ hasText: 'Up to 50 days Credit period' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Up to 50 days Credit period' }).getByRole('img')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Up to 50 days Credit period');
    await expect(page.locator('li').filter({ hasText: 'Minimum payment up to 15%' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Minimum payment up to 15%' }).locator('#Capa_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Minimum payment up to 15%');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Credit Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'I&M Bank Credit CardsExperience freedom by choosing among a range of best Visa' })).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: 'I&M Bank Credit Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Bank Credit Cards');
    await expect(page.getByText('Experience freedom by')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Experience freedom by choosing among a range of best Visa credit cards in Kenya with many advantages like free credit period, loyalty points for usage and so much more');
    await expect(page.getByRole('link', { name: 'I&M Visa International' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'I&M Visa Infinite Credit Card' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Visa Infinite Credit Card');
    await expect(page.locator('#page-wrap-in')).toContainText('Kes 5000 Joining Fee');
    await expect(page.locator('#page-wrap-in')).toContainText('Get access to unlimited airport lounge the more you spendGet comprehensive travel insuranceGet extended warranty on your purchasesLifestyle benefits such as flight reservations etc.');

    await expect(page.locator('#page-wrap-in')).toContainText('I&M World Credit Mastercard');
    await expect(page.locator('#page-wrap-in')).toContainText('Kes 2500 Joining Fee');
    await expect(page.locator('#page-wrap-in')).toContainText('Free unlimited airport lounge access for CardholderGet comprehensive travel insuranceMerchant offers and discountsGlobal emergency services');
    await expect(page.getByRole('link', { name: 'I&M Visa International Gold' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Visa International Gold Credit Card');
    await expect(page.locator('#page-wrap-in')).toContainText('Kes 3500 Joining Fee');
    await expect(page.locator('#page-wrap-in')).toContainText('Free Credit facility up-to 50 daysCash Advance limit up to 30% of the credit limit.Attractive reward pointsWorldwide acceptance');
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Visa Classic Credit Card Kes' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Visa Classic Credit Card');
    await expect(page.locator('#page-wrap-in')).toContainText('Kes 2500 Joining Fee');
    await expect(page.locator('#page-wrap-in')).toContainText('Free Credit facility up to 50 days.Cash Advance limit up to 20% of the credit limit.Attractive Reward pointsWorldwide acceptance.');
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'I&M Visa International' }).nth(3)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Visa International Tamarind Gold Credit Card');
    await expect(page.locator('#page-wrap-in')).toContainText('Kes 0 Joining Fee');
    await expect(page.locator('#page-wrap-in')).toContainText('Free Credit facility up to 50 days.Cash Advance limit up to 30% of the credit limit.Privileges from the many restaurants\' outletsWorldwide acceptance.');
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'I&M Visa Infinite Credit Card' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Visa Infinite Credit Card');
    await expect(page.locator('#page-wrap-in')).toContainText('Kes 5000 Joining Fee');
    await expect(page.locator('#page-wrap-in')).toContainText('Get access to unlimited airport lounge the more you spendGet comprehensive travel insuranceGet extended warranty on your purchasesLifestyle benefits such as flight reservations etc.');
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'I&M World Credit Mastercard' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M World Credit Mastercard');
    await expect(page.locator('#page-wrap-in')).toContainText('Kes 2500 Joining Fee');
    await expect(page.locator('#page-wrap-in')).toContainText('Free unlimited airport lounge access for CardholderGet comprehensive travel insuranceMerchant offers and discountsGlobal emergency services');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'I&M Multicurrency Prepaid' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'I&M Multicurrency Prepaid Card' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Multicurrency Prepaid Card');
    await expect(page.locator('#page-wrap-in')).toContainText('Available in 3 major currenciesSave conversion costsEasy to load through M-PESAMaximum reload of up to $10,000');
    await expect(page.getByRole('img', { name: 'I&M Multicurrency Prepaid Card' })).toBeVisible();
    await page.locator('#page-wrap-in section').filter({ hasText: 'CompareSelect a cardI&M World' }).click();
    await expect(page.getByRole('heading', { name: 'Compare' })).toBeVisible();
    await expect(page.locator('.comparison-table')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Select a card');
    await expect(page.locator('#page-wrap-in')).toContainText('Select a card');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('#page-wrap-in section').filter({ hasText: 'CompareSelect a cardI&M World' }).click();
    await expect(page.locator('.comparison-table-item').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Select a cardI&M World Credit MastercardI&M World Credit MastercardI&M Visa International Gold Credit CardVisa Classic Credit CardI&M Visa Infinite Credit CardI&M World Credit MastercardJoining FeeKes 2,500Supplementary Joining FeeKshs.1500Annual FeesKshs. 5500Supplementary Annual FeesKshs. 5500Credit PeriodUp to 50 daysRoll-over Amount95%Minimum Payment5%Cash AdvanceUp to 40% of credit limitRevolving Credit Interest3.5% per month on actual daily outstanding balanceLate Payment Penalty Rate6% flat on outstanding amountOver Limit ChargeKes 1,500Cash Advance Charge7.50% of cash advancedUnpaid Instruments Handling FeesKShs. 2,500Card Replacement FeesKShs. 1,000Credit Life Insurance % of approved limit0.36% p.a Learn More');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('div').filter({ hasText: /^I&M Visa International Gold Credit Card$/ }).nth(2).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Select a cardI&M Visa International Gold Credit CardI&M World Credit MastercardI&M Visa International Gold Credit CardVisa Classic Credit CardI&M Visa Infinite Credit CardI&M Visa International Gold Credit CardJoining FeeKes 3,500Supplementary Joining FeeKes 3,500Annual FeesKes 4,000Supplementary Annual FeesKes 2,000Credit PeriodUp to 50 daysRoll-over Amount90%Minimum Payment10%Cash Advance30% of credit limitRevolving Credit Interest3.5% per month on the actual daily outstanding balanceLate Payment Penalty Rate6% flat on outstanding minimum payment amount on due date, Kshs 1,000/- maximumOver Limit ChargeKes 1,500Cash Advance Charge7.50% of cash advancedUnpaid Instruments Handling FeesKShs. 2,000Card Replacement FeesKShs. 1,000Credit Life Insurance % of approved limit0.36% p.a Learn More');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('li').filter({ hasText: 'Visa Classic Credit Card' }).first().click();
    await expect(page.locator('#page-wrap-in')).toContainText('Select a cardVisa Classic Credit CardI&M World Credit MastercardI&M Visa International Gold Credit CardVisa Classic Credit CardI&M Visa Infinite Credit CardVisa Classic Credit CardJoining FeeKes 2,500Supplementary Joining FeeKes 2,500Annual FeesKes 3,000Supplementary Annual FeesKes 1,500Credit PeriodUp to 50 daysRoll-over Amount95%Minimum Payment5%Revolving Credit Interest3.5% per month on the actual daily outstanding balanceLate Payment Penalty RateKshs.1,000 or 6% of outstanding amount.Over Limit ChargeKes 1,500Cash Advance Charge7.5% of cash advancedUnpaid Instruments Handling FeesKShs. 2,000Card Replacement FeesKShs. 1,000Credit Life Insurance % of approved limit0.36% p.a Learn More');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('div').filter({ hasText: /^I&M Visa Infinite Credit Card$/ }).nth(1).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Select a cardI&M Visa Infinite Credit CardI&M World Credit MastercardI&M Visa International Gold Credit CardVisa Classic Credit CardI&M Visa Infinite Credit CardI&M Visa Infinite Credit CardJoining FeeKes 5,000Supplementary Joining FeeKes 5,000Annual Fees$75Supplementary Annual Fees$75Credit PeriodUp to 50 daysRoll-over Amount90%Minimum Payment10%Cash Advance30% of credit limitRevolving Credit Interest3.5% per month on actual daily outstanding balanceLate Payment Penalty Rate6% flat on outstanding amountOver Limit ChargeKes 1,500Cash Advance Charge7.50% of cash advancedUnpaid Instruments Handling FeesKShs. 2,000Card Replacement FeesKShs. 1,000Credit Life Insurance % of approved limit0.36% Learn More');
    await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.locator('#page-wrap-in section').filter({ hasText: 'CompareSelect a cardI&M Visa' }).click();
    await page.locator('div:nth-child(2) > .comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
    await page.getByText('I&M Visa International Tamarind Gold Credit Card').nth(2).click();
    await page.locator('.comparison-table > div:nth-child(2)').click();

}
export async function test_Debit_Card(page) {

    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');

    await page.$('text=Cards +');
    await page.hover('text=Cards');

    await page.getByRole('link', { name: 'Debit Cards' }).click();

    await Personal_Banking_menu(page)
    await verifyCardLinksVisibility(page);
    await page.locator('h1').click();
    await expect(page.locator('h1')).toContainText('I&M Mastercard & Visa Debit Cards');
    await expect(page.locator('div').filter({ hasText: 'I&M Mastercard & Visa Debit CardsLet\'s Un-Complicate life Worldwide Access Safe' }).nth(3)).toBeVisible();
    await expect(page.getByText('Let\'s Un-Complicate life')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Let\'s Un-Complicate life');
    await expect(page.locator('li').filter({ hasText: 'Worldwide Access' }).locator('#Capa_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Worldwide Access');
    await expect(page.locator('li').filter({ hasText: 'Worldwide Access' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Safe and Secure' }).locator('#Layer_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Safe and Secure');
    await expect(page.locator('li').filter({ hasText: 'Safe and Secure' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Reward points for card usage' }).locator('#Layer_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Reward points for card usage');
    await expect(page.locator('li').filter({ hasText: 'Reward points for card usage' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Debit Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'I&M Mastercard & Visa Debit CardsA range of Mastercard & Visa debit cards that' })).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: 'I&M Mastercard & Visa Debit' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Mastercard & Visa Debit Cards');
    await expect(page.locator('#page-wrap-in')).toContainText('A range of Mastercard & Visa debit cards that directly debits funds from your bank account for worldwide usage');
    await expect(page.getByRole('link', { name: 'I&M World Elite Debit' }).first()).toBeVisible(); //await expect(page.locator('#page-wrap-in')).toContainText('A range of Mastercard & Visa debit cards that directly debits funds from your bank account for worldwide usage');
    await expect(page.getByRole('link', { name: 'I&M World Elite Debit' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M World Elite Debit Mastercard');
    await expect(page.locator('#page-wrap-in')).toContainText('Kes 0 Card annual fees');
    await expect(page.locator('#page-wrap-in')).toContainText('Free unlimited Airport Lounge Access (Mastercard Travel Pass) for you + 1 guestEarn cash rewards on all POS and online transactionsAccess over a million ATMs in over 210 countries');
    await expect(page.getByRole('link', { name: 'I&M World Debit Mastercard' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M World Debit Mastercard');
    await expect(page.locator('#page-wrap-in')).toContainText('Kes 0 Card annual fees');
    await expect(page.locator('#page-wrap-in')).toContainText('Free unlimited Airport Lounge Access (Mastercard Travel Pass) for card holderEarn cash rewards on all POS and online transactionsAccess over a million ATMs in over 210 countries');
    await expect(page.getByRole('link', { name: 'I&M Platinum Debit Mastercard' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Platinum Debit Mastercard');
    await expect(page.locator('#page-wrap-in')).toContainText('Kes 0 Card annual fees');
    await expect(page.locator('#page-wrap-in')).toContainText('Jumia Prime - 25% cashback on Annual Subscription FeeEarn cash rewards on all POS and online transactionsAccess over a million ATMs in over 210 countries');
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'I&M USD Visa Debit Card $ 5' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M USD Visa Debit Card');
    await expect(page.locator('#page-wrap-in')).toContainText('$ 5 Card annual fees');
    await expect(page.locator('#page-wrap-in')).toContainText('Daily Limits of Kshs. 100,000 (Equivalent in $)Withdraw funds in US DollarsUse your card overseasEarn Reward Points every time you transact');
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'I&M Visa Platinum Debit Card' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Visa Platinum Debit Card');
    await expect(page.locator('#page-wrap-in')).toContainText('$ 5 Card annual fees');
    await expect(page.locator('#page-wrap-in')).toContainText('Daily Limits: KShs 100,000Visa Offers and PromotionsGlobal Emergency AssistanceReward Points');
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'I&M Visa Debit Card Kes 350' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Visa Debit Card');
    await expect(page.locator('#page-wrap-in')).toContainText('Kes 350 Card annual fees');
    await expect(page.locator('#page-wrap-in')).toContainText('Daily Limits: Ksh. 100,000Worldwide usageKeep your card safe by lock/unlock feature on I&M OTGEarn Reward Points every time you transact.');

    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Withdraw USD from Select I&M' })).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Withdraw USD from Select I&M' }).getByRole('img').nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Withdraw USD from Select I&M ATMs');
    await expect(page.getByRole('heading', { name: 'Withdraw USD from Select I&M' })).toBeVisible();
    await expect(page.getByText('Sarit Centre | I&M TowerSarit')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Sarit Centre | I&M TowerSarit Select CentreWilson Airport | RiversideJKIA | Village MarketYaya Centre | Langata Link');

}


export async function verifyCardLinksVisibility(page) {
    await expect(page.getByRole('link', { name: 'Credit Cards', exact: true })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Credit Cards');
    await expect(page.getByRole('link', { name: 'Debit Cards', exact: true })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Debit Cards');
    await expect(page.getByRole('link', { name: 'Prepaid Cards', exact: true })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Prepaid Cards');
}

export async function Prepaid_Cards(page) {

    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');

    await page.$('text=Cards +');
    await page.hover('text=Cards');
    await page.getByRole('link', { name: 'Prepaid Cards' }).click();
    await Personal_Banking_menu(page)
    await verifyCardLinksVisibility(page);
    await expect(page.getByRole('heading', { name: 'Prepaid Cards', exact: true })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Beautiful destinations await you! Choose from a wide range of I&M Bank Prepaid cards');
    await expect(page.locator('li').filter({ hasText: 'Worldwide Usage' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Easy expense management' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Multiple Currencies available' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Prepaid Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Credit Cards');
    await expect(page.getByRole('heading', { name: 'I&M Prepaid Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('We offer 3 types of prepaid cards (1 Mastercard and 2 VISA Pre-paid cards) which are convenient payment cards designed for travelers both within Kenya and internationally. They are easy to purchase and available across the counter from all I&M Bank branches');
    await expect(page.getByRole('link', { name: 'I&M Multicurrency Prepaid' }).nth(1)).toBeVisible();
    await page.getByRole('link', { name: 'I&M Visa Travel Prepaid Card' }).nth(1).click();
    await expect(page.getByRole('link', { name: 'I&M Visa Travel Prepaid Card' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'I&M Visa Safari Prepaid Card' }).nth(1)).toBeVisible();
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'I&M Multicurrency Prepaid' }).nth(2)).toBeVisible();
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'I&M Visa Travel Prepaid Card' }).nth(2)).toBeVisible();
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'I&M Visa Safari Prepaid Card' }).nth(2)).toBeVisible();
}
export async function verifypersonalinsurancelink(page) {
    await expect(page.getByRole('link', { name: 'Bancassurance' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Bancassurance');
    await expect(page.getByRole('link', { name: 'Insurance Premium Financing' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Insurance Premium Financing');
}

export async function verifyinsurance(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');
    await page.$('text=Insurance +');
    await page.hover('text=Insurance');
    await page.getByRole('link', { name: 'Insurance -' }).click();
    await Personal_Banking_menu(page)
    await expect(page.locator('div').filter({ hasText: 'Need Insurance? We have it' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Need Insurance? We have it' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Need Insurance? We have it all!');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Bancassurance' })).toBeVisible();
    await verifypersonalinsurancelink(page)
    await expect(page.locator('section').filter({ hasText: 'A one stop shop for all your' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'A one stop shop for all your' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('A one stop shop for all your insurance needs');
    await expect(page.locator('#page-wrap')).toContainText('Through I&M Bancassurance Intermediary Limited, a wholly-owned subsidiary of I&M Bank, it is now easier than ever to enjoy insurance products The Bank through its subsidiary I&M Bancassurance Intermediary Limited has negotiated attractive premium rates, terms, and flexible premium payment mode through Insurance Premium Financing (IPF) facility with leading insurance companies in the market. Our services are open to everyone i.e. both I&M Bank account holders and non-account holders. We offer:');
    await page.locator('.feature-25-body').click();
    await expect(page.locator('div').filter({ hasText: /^General Insurance$/ })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Motor vehicleHousehold-domestic protectionFire insuranceCard insuranceMedicalSchool packagePersonal AccidentMarine insuranceProfessional indemnityPublic liabilityComputer all risks/electronic equipmentGoods in transit');
    await expect(page.locator('h3').filter({ hasText: 'Life Insurance' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Life Insurance');
    await expect(page.locator('#page-wrap')).toContainText('Child Education policyHousehold-domestic protectionIndividual life assurance policy – EndowmentFamily life assuranceGroup life assuranceSalary protectionUnit linkedMortgage protectionCredit life assuranceKaro plan – SchoolsKeyman insurance');
    await expect(page.getByText('By choosing I&M Bancassurance')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('By choosing I&M Bancassurance Intermediary Limited as your preferred insurance partner, you will enjoy the following benefits:-');
    await expect(page.locator('.feature-26-body')).toBeVisible();
    await expect(page.getByText('ConvenienceWith our “one-stop')).toBeVisible();
    await expect(page.locator('.card-type-19-icon > .svg-scaler > .injected-svg').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Convenience');
    await expect(page.locator('#page-wrap')).toContainText('With our “one-stop-shop” for financial services, customers can now get their insurance requirements met at any I&M Bank branch.');
    await expect(page.getByText('Reputable CompaniesWe have')).toBeVisible();
    await expect(page.locator('#Capa_1').nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Reputable Companies');
    await expect(page.locator('#page-wrap')).toContainText('We have partnered with underwriters who have vast experience, sound financial strength and satisfactory claims settlement records.');
    await expect(page.getByText('Competitive quotationsFlexible and competitive pricing of insurance covers.')).toBeVisible();
    await expect(page.locator('div:nth-child(3) > .card > .card-body > .card-type-19-icon > .svg-scaler > .injected-svg > path').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Competitive quotations');
    await expect(page.locator('#page-wrap')).toContainText('Flexible and competitive pricing of insurance covers.');
    await expect(page.getByText('Professional adviseProfessional staff that are well qualified to assist you to')).toBeVisible();
    await expect(page.locator('#Capa_1').nth(2)).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Professional advise');
    await expect(page.locator('#page-wrap')).toContainText('Professional staff that are well qualified to assist you to pick the most suitable cover.');
    await expect(page.getByText('Quick turnaround timeInsurance certificates and cover notes for motor and')).toBeVisible();
    await expect(page.locator('div:nth-child(5) > .card > .card-body > .card-type-19-icon > .svg-scaler > .injected-svg')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Quick turnaround time');
    await expect(page.locator('#page-wrap')).toContainText('Insurance certificates and cover notes for motor and property insurance respectively will be issued and collected at the Bank.');
    await expect(page.getByText('Flexible payment planAutomatic access to our Insurance Premium Financing (IPF')).toBeVisible();
    await expect(page.locator('div:nth-child(6) > .card > .card-body > .card-type-19-icon > .svg-scaler > .injected-svg')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Flexible payment plan');
    await expect(page.locator('#page-wrap')).toContainText('Automatic access to our Insurance Premium Financing (IPF), which enables payment of premiums in 4-10 instalments. For cash payments, premiums are collected directly from the customer’s bank account in I&M Bank.');
    await expect(page.getByRole('heading', { name: 'General Insurance Products' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('General Insurance Products');
    await expect(page.getByRole('link', { name: 'Find out more  Personal' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Find out more  Personal' }).first().click();
    await page.goto('https://www.imbankgroup.com/ke/personal/insurance/bancassurance/');
    await expect(page.locator('#page-wrap')).toContainText('Personal Accident');
    await expect(page.locator('#page-wrap')).toContainText('Covers the financial consequences after sustaining injury as a result of an accident');
    await expect(page.getByRole('link', { name: 'Find out more  Personal' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Find out more  Home' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Home Insurance');
    await expect(page.locator('#page-wrap')).toContainText('The cover protects your private dwelling house or flat against various perils');
    await page.locator('section').filter({ hasText: 'General Insurance Products' }).getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  Motor' })).toBeVisible();
    await expect(page.getByLabel('3 / 7').getByRole('heading')).toContainText('Motor Insurance');
    await expect(page.getByLabel('3 / 7').getByRole('paragraph')).toContainText('Takes care of the risks a motorist is exposed to as a result of owning and use of a vehicle on a public road.');
    await page.locator('section').filter({ hasText: 'General Insurance Products' }).getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  Malaika' })).toBeVisible();
    await expect(page.getByLabel('4 /').getByRole('heading')).toContainText('Malaika Advantage');
    await expect(page.getByLabel('4 /').getByRole('paragraph')).toContainText('Motor Insurance for lady motorists');
    await page.locator('section').filter({ hasText: 'General Insurance Products' }).getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  Travel' })).toBeVisible();
    await expect(page.getByLabel('5 /').getByRole('heading')).toContainText('Travel Insurance');
    await expect(page.getByLabel('5 /').getByRole('paragraph')).toContainText('Enjoy your travel stress-free, we are there for you!');
    await page.locator('section').filter({ hasText: 'General Insurance Products' }).getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  Health' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Health Insurance');
    await expect(page.locator('#page-wrap')).toContainText('Worry less about your health, we are here to take care of it!');
    await page.locator('section').filter({ hasText: 'General Insurance Products' }).getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  Cover for' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Cover for Covid-19');
    await expect(page.locator('#page-wrap')).toContainText('Protect yourself against the unexpected');
    await page.locator('section').filter({ hasText: 'General Insurance Products' }).getByLabel('Next slide').click();
    await expect(page.getByText('Life Insurance Find out more')).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: 'Life Insurance' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Life Insurance');
    await expect(page.getByRole('link', { name: 'Find out more  Child' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Child Education');
    await expect(page.locator('#page-wrap')).toContainText('The smartest way to secure your child\'s future!');
    await expect(page.getByRole('link', { name: 'Find out more  Pension Plan' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Pension Plan');
    await expect(page.locator('#page-wrap')).toContainText('Plan well for your retirement');
    await page.locator('section').filter({ hasText: 'Life Insurance Find out more' }).getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  Golfers' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Golfers Insurance');
    await expect(page.locator('#page-wrap')).toContainText('Play your golf with confidence while we back you!');
    await page.locator('section').filter({ hasText: 'Life Insurance Find out more' }).getByLabel('Next slide').click();
    await expect(page.getByRole('heading', { name: 'Want more information?' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Want more information?');
    await expect(page.locator('#page-wrap')).toContainText('Contact our Bancassurance team on bancassurance@imbank.co.ke');
    await ApplyInPerson(page)
    await page.goto("https://www.imbankgroup.com/ke/personal/insurance/bancassurance/")
    await testRequestCallback(page)
    await page.goto("https://www.imbankgroup.com/ke/personal/insurance/bancassurance/")
    await applyForLoan(page)
}
export async function test_InsurancePremiumFinancing(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');
    await page.$('text=Insurance +');
    await page.hover('text=Insurance');
    await page.locator('#menu-item-16547').getByRole('link', { name: 'Insurance Premium Financing' }).click();

    await page.goto('https://www.imbankgroup.com/ke/personal/insurance/insurance-premium-financing/');
    await Personal_Banking_menu(page)
    await expect(page.locator('div').filter({ hasText: 'Insurance Premium FinancingWe' }).nth(3)).toBeVisible();
    await expect(page.locator('h1')).toContainText('Insurance Premium Financing');
    await expect(page.locator('#page-wrap-in')).toContainText('We care more about making life easier for you!');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Insurance' })).toBeVisible();
    await verifypersonalinsurancelink(page)
    await expect(page.getByText('Insurance Premium FinancingA')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Insurance Premium Financing');
    await expect(page.locator('#page-wrap')).toContainText('A short-term credit facility that enables the client to pay the insurance premiums in easy installments of up to 10 months. The product is available to both I&M Bank account holders and non-account holders. IPF is workable under general insurance policies that are normally placed or renewed for a fixed period of one year. It excludes Life insurance policies.');
    await expect(page.getByRole('heading', { name: 'Examples of such Insurance' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Examples of such Insurance policies:');
    await expect(page.getByText('Fire and perils')).toBeVisible();
    await expect(page.locator('.feature-32-body-col > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Fire and perilsMotor Commercial or PrivateIndustrial All RiskWorkmen’s compensationBurglary');
    await expect(page.locator('div:nth-child(2) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Golfers policyContractors all-risk policyProfessional Indemnity CoverMedical Insurance premiums');
    await expect(page.getByRole('heading', { name: 'Benefits' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Benefits');
    await expect(page.getByText('100% finance on applicable insurance premiums. Convenient and simple')).toBeVisible();
    await expect(page.locator('.card-body > .media').first()).toBeVisible();
    await expect(page.locator('#Layer_1').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('100% finance on applicable insurance premiums.');
    await expect(page.locator('.feature-21-body > div:nth-child(2) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#Layer_1').nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Convenient and simple documentation');
    await expect(page.locator('div:nth-child(3) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#Capa_1 > path').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('No credit appraisal');
    await expect(page.locator('div:nth-child(4) > .card > .card-body')).toBeVisible();
    await expect(page.locator('div:nth-child(4) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > #Capa_1 > path:nth-child(8)')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('No hidden charges and commitment fees');
    await expect(page.locator('div:nth-child(5) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#Capa_1').nth(3)).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Reliable flow management tool');
    await expect(page.locator('div:nth-child(6) > .card > .card-body')).toBeVisible();
    await expect(page.locator('div:nth-child(6) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > .injected-svg')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Easy application process');
    await expect(page.locator('div:nth-child(7) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Quick turnaround time');
    await expect(page.locator('div:nth-child(8) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#Flat')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Competitive pricing');
    await expect(page.getByRole('heading', { name: 'Additional Details' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Additional Details');
    await expect(page.getByRole('button', { name: 'Application Requirements +' })).toBeVisible();
    await expect(page.locator('#application-requirements-heading')).toContainText('Application Requirements');
    await page.getByRole('button', { name: 'Application Requirements +' }).click();
    await expect(page.getByLabel('Application Requirements').locator('div')).toContainText('Duly completed application formExecuted Insurance Premium Finance Agreement endorsed by the insurance company (the insurance company underwriting the policies must however be approved by I&M Bank)Copy of National ID and PIN for individual applicantsCopy of Certificate of Incorporation/ Certificate of Registration for business entitiesCompany PIN');
    await page.getByRole('button', { name: 'Application Requirements -' }).click();
    await expect(page.locator('section').filter({ hasText: 'Want Insurance Premium' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Want Insurance Premium Financing?');
    await expect(page.locator('#page-wrap')).toContainText('For more information contact your Relationship Manager or Customer Service representative or Email us at Hire.Purchase@imbank.co.ke or call 0719 088 264/269');
    await ApplyInPerson(page)
    await page.goto("https://www.imbankgroup.com/ke/personal/insurance/insurance-premium-financing/")
    await testRequestCallback(page)
    await page.goto("https://www.imbankgroup.com/ke/personal/insurance/insurance-premium-financing/")
    await applyForLoan(page)
    await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Are you interested?');
    await fillAndSubmitForm(page)
}
export async function verifypersonaltransfer(page) {
    await expect(page.getByRole('link', { name: 'Local & International Transfer' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Local & International Transfer');
    await expect(page.getByRole('link', { name: 'Government Payments' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Government Payments');
}

export async function testTransferslocal(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');
    await page.$('text=Transfers +');
    await page.hover('text=Transfers');
    await page.getByRole('link', { name: 'Transfers -' }).click();
    await expect(page.getByRole('link', { name: 'Local & International Transfer' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'Conveniently make transfers & payments locally and internationally.' }).nth(3)).toBeVisible();
    await page.getByRole('heading', { name: 'Conveniently make transfers' }).click();
    await expect(page.getByRole('heading', { name: 'Conveniently make transfers' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Conveniently make transfers & payments locally and internationally.');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Local &' })).toBeVisible();
    await verifypersonaltransfer(page)
    await expect(page.getByRole('heading', { name: 'International Transfers' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('International Transfers');
    await expect(page.locator('#page-wrap-in')).toContainText('I&M offers a range of dynamic Funds Transfer Services enabling you to conveniently make transfers internationally.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'International TransfersI&M' }).getByRole('link').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Learn More');
    await expect(page.getByText('Learn More Learn More Learn').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'International TransfersI&M' }).getByRole('link').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'International TransfersI&M' }).getByRole('link').nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'International TransfersI&M' }).getByRole('link').nth(2)).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'International TransfersI&M' }).getByRole('link').nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Local Transfers' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Local Transfers');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Local TransfersI&M offers a' }).getByRole('paragraph')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M offers a range of dynamic Funds Transfer Services enabling you to conveniently make transfers locally.');
    await expect(page.getByText('Learn More Learn More Learn').nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Local TransfersI&M offers a' }).getByRole('link').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Local TransfersI&M offers a' }).getByRole('link').nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Local TransfersI&M offers a' }).getByRole('link').nth(2)).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Local TransfersI&M offers a' }).getByRole('link').nth(3)).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'BRISKEnjoy Seamless Banking Across The Region Learn More' }).nth(3)).toBeVisible();
    await page.getByRole('heading', { name: 'BRISK' }).click();
    await expect(page.locator('#page-wrap-in')).toContainText('BRISK');
    await expect(page.locator('#page-wrap-in')).toContainText('Enjoy Seamless Banking Across The Region');
    await expect(page.getByRole('img', { name: 'BRISK' }).nth(2)).toBeVisible();
    await expect(page.getByRole('img', { name: 'BRISK' }).nth(1)).toBeVisible();
    await expect(page.locator('.feature-18-cta')).toBeVisible();
}

export async function testTransfersgovernments(page) {


    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');
    await page.$('text=Transfers +');
    await page.hover('text=Transfers');
    await page.getByRole('link', { name: 'Government Payments' }).click();
    await expect(page.locator('.hero-section-4-container')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Government Payments');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Government' })).toBeVisible();
    await verifypersonaltransfer(page)
    await expect(page.locator('h2').filter({ hasText: 'Government Payments' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Government Payments');
    await expect(page.locator('#page-wrap-in')).toContainText('Conveniently make government payments through I&M Bank');
    await expect(page.locator('.feature-22-body-col > .card').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More ' }).first()).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .card')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More ' }).nth(1)).toBeVisible();
}
export async function testCustodialServices(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');
    await expect(page.locator('#menu-item-16545').getByRole('link', { name: 'Custodial Services' })).toBeVisible();
    await page.locator('#menu-item-16545').getByRole('link', { name: 'Custodial Services' }).click();
    await Personal_Banking_menu(page)
    await expect(page.locator('.hero-section-4-container')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Custodial Investment Services');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Custodial' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'Custodial Investment ServicesI&M Bank Kenya is licensed by the Capital Markets' }).nth(3)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Custodial Investment Services');
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Bank Kenya is licensed by the Capital Markets Authority (CMA) as a Central Depository Agent (CDA) and Custodian and registered by the Retirement Benefits Authority (RBA) as a Custodian for pension schemes. The unit provides all facilities required for investing in equities, fixed income and other securities through one point of contact in a personalized and professional environment of a commercial bank.');
    await expect(page.getByRole('heading', { name: 'Invest in:' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Invest in:');
    await expect(page.getByText('Equities Fixed Income Other')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Equities');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Invest in: Equities Fixed' }).locator('#Layer_1')).toBeVisible();
    await expect(page.locator('.feature-17-body-col > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Invest in: Equities Fixed' }).getByRole('img').nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Fixed Income');
    await expect(page.locator('div:nth-child(3) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#Capa_1 > g > path').first()).toBeVisible();
    await expect(page.locator('#Capa_1 > g > path:nth-child(4)').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Other Securities');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Services Offered Central' })).toBeVisible();
    await expect(page.locator('.feature-21-body-col > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('.card-type-13-icon > .svg-scaler > .injected-svg > path:nth-child(2)').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Central Depository Services (CDS) accounts and services- Opening and maintenance of depository accounts');
    await expect(page.locator('.feature-21-body > div:nth-child(2) > .card > .card-body')).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > .injected-svg')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Facilitating CDS services which include immobilization, inter CDA and private transfers, creation of liens, placement agents during IPO’s and other public offers, etc.');
    await expect(page.locator('.feature-21-body > div:nth-child(3) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#Capa_1').nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Investments in government securities (treasury bills and bonds) through primary market auctions and secondary market trades.');
    await expect(page.locator('div:nth-child(4) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#Capa_1').nth(2)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('We also facilitating trades in corporate bonds and commercial papers;');
    await expect(page.locator('div:nth-child(5) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Services Offered Central' }).locator('#Layer_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Offshore and cross border investments in international markets through Bank One Limited in Mauritius, I&M Bank Tanzania, and I&M Bank Rwanda;');
    await expect(page.locator('div:nth-child(6) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > .injected-svg')).toBeVisible();
    await expect(page.locator('div:nth-child(6) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Execution of trades through the Bank’s empaneled stockbrokers at the Nairobi Securities Exchange (NSE) or Over the Counter (OTC) markets');
    await expect(page.locator('div:nth-child(7) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#Capa_1').nth(3)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Settlement of trades in equities, government paper, corporate debt, and offshore Investments.');
    await expect(page.locator('div:nth-child(8) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#Layer_2')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Corporate actions processing including interest payments & maturities, dividend collection, processing of rights & bonus issues;');
    await expect(page.locator('div:nth-child(9) > .card > .card-body')).toBeVisible();
    await expect(page.locator('div:nth-child(9) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > .injected-svg')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Safekeeping of securities and documents;');
    await expect(page.locator('div:nth-child(10) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#Capa_1').nth(4)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Portfolio and compliance reporting;');
    await expect(page.locator('div:nth-child(11) > .card > .card-body')).toBeVisible();
    await expect(page.locator('path:nth-child(27)')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Fixed & call deposits placements;');
    await expect(page.locator('div:nth-child(12) > .card > .card-body')).toBeVisible();
    await expect(page.locator('div:nth-child(12) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > .injected-svg')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Forex conversions, Proxy services and Escrow Services');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Additional Details Who are' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Additional Details' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Additional Details');
    await expect(page.locator('#additional-details')).toBeVisible();
    await expect(page.locator('#additional-details')).toContainText('Who are eligible for I&M Bank’s Custody and Investment Services? Local and foreign individualsCorporates and institutionsHigh net worth investorsPension and provident schemesFund managersCollective Investment Schemes (CIS’s)Insurance companiesInvestment clubs (Chama’s)Savings And Credit Co-Operatives (SACCO’s)Capital Markets Authority (CMA) market intermediaries How to sign up? Meet a bank representative at any of I&M Bank’s branches who will discuss, understand your requirements, and guide you on the account opening documentation and investment process; or,Contact our Custody & Investment Services team');
    await page.getByRole('button', { name: 'Who are eligible for I&M Bank' }).click();
    await expect(page.locator('#step-1-heading')).toContainText('Who are eligible for I&M Bank’s Custody and Investment Services?');
    await expect(page.getByText('Local and foreign individualsCorporates and institutionsHigh net worth')).toBeVisible();
    await expect(page.getByLabel('Who are eligible for I&M Bank').getByRole('list')).toContainText('Local and foreign individualsCorporates and institutionsHigh net worth investorsPension and provident schemesFund managersCollective Investment Schemes (CIS’s)Insurance companiesInvestment clubs (Chama’s)Savings And Credit Co-Operatives (SACCO’s)Capital Markets Authority (CMA) market intermediaries');
    await page.getByRole('button', { name: 'Who are eligible for I&M Bank' }).click();
    await page.getByRole('button', { name: 'How to sign up? +' }).click();
    await expect(page.getByRole('button', { name: 'How to sign up? -' })).toBeVisible();
    await expect(page.locator('#step-2-heading')).toContainText('How to sign up?');
    await expect(page.getByLabel('How to sign up?').getByRole('list')).toContainText('Meet a bank representative at any of I&M Bank’s branches who will discuss, understand your requirements, and guide you on the account opening documentation and investment process; or,Contact our Custody & Investment Services team');
    await page.getByRole('button', { name: 'How to sign up? -' }).click();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Want to invest?Get in touch' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Want to invest?');
    await expect(page.locator('#page-wrap-in')).toContainText('Get in touch with our Custody and Investment team on I&M Bank Tower, 8th floor, Kenyatta Avenue P.O. Box 30238-00100, Nairobi, Kenya Telephone; +254 322100/3221001/0719 088000/ 0732100000 Email; ims@imbank.co.ke');
    await fillAndSubmitForm(page)
}
export async function testWealthManagementService(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');
    await expect(page.getByRole('link', { name: 'Wealth Management Service' })).toBeVisible();
    await page.getByRole('link', { name: 'Wealth Management Service' }).click();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Wealth' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Wealth Management');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Wealth ManagementWealth' })).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: /^Wealth Management$/ })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Wealth Management');
    await expect(page.locator('#page-wrap-in')).toContainText('Wealth Management refers to the practice of creating financial and investment solutions for an individual or a family based on their needs. This covers a wide scope of needs including investment, financial, tax and estate planning.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Our ProductsPortfolio' })).toBeVisible();
    await expect(page.locator('.feature-25-section > .container > .row > .col')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Our Products' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Our Products');
    await expect(page.locator('#page-wrap-in')).toContainText('Portfolio OptimizationGovernment securities(bonds and treasury bills)Bond Leverage');
    await expect(page.getByRole('heading', { name: 'Our Products' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Our Products');
    await expect(page.locator('#page-wrap-in')).toContainText('Offshore Sovereign bondsOffshore equities, mutual funds, ETFs and index fundsI&M Capital Wealth FundBond Trading Facility');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'By choosing Wealth Management' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('By choosing Wealth Management from I&M Capital Ltd, you will enjoy the following benefits:-');
    await expect(page.locator('#page-wrap-in')).toContainText('Access to Multiple ServicesWealth Managers assess client needs and proposes a plan that will lead to the desired financial and investment outcome. Whether financial or investment planning needs, we provide the right solutions.');
    await expect(page.locator('.injected-svg').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Access to Multiple Services');
    await expect(page.locator('.feature-21-body > div:nth-child(2) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Assistance During Life Changes');
    await expect(page.locator('#page-wrap-in')).toContainText('Your life as you know it can change in the blink of an eye. Major life changes can greatly impact your financial situation. These changes can include having a child, getting married, buying a home, retiring, or a change in your career. Any significant change in your life can come with its fair share of stress. This is especially apparent where you need to make big decisions regarding your finances and investments. Our investment advisors can assist you in making the right decision during these life altering times.');
    await expect(page.locator('div:nth-child(2) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > .injected-svg')).toBeVisible();
    await expect(page.locator('div:nth-child(4) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#Capa_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Setting goals is an extremely delicate, yet crucial process.. An investment advisor can help you create a series of realistic and manageable goals for your future. These can range from one-year goals and five-year goals to 20-year goals and even 50-year goals. We help you plan, set, and execute what you need to achieve your goals. These goals can include capital growth, income, inheritance of the estate etc.');
    await expect(page.locator('#page-wrap-in')).toContainText('Setting Goals');
    await expect(page.locator('div:nth-child(5) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Feeling Confident');
    await expect(page.locator('#page-wrap-in')).toContainText('We take the weight off your day-to-day investment decisions and make choices in line with your investment goals. We also keep you up-to-date on the performance of your investments and suggest ways to improve them to give you the best returns.');
    await expect(page.locator('div:nth-child(5) > .card > .card-body > .media > .card-type-13-icon > .svg-scaler > .injected-svg')).toBeVisible();
    await expect(page.locator('div:nth-child(6) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#Flat')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Advice from the Experts');
    await expect(page.locator('#page-wrap-in')).toContainText('Investment advisors are experts in getting you the best value for money while meeting the needs of the customer.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'More about our Wealth' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('More about our Wealth Management Services');
    await expect(page.getByRole('link', { name: 'Wealth Management Services ' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Our ProductsLearn more on what we offer');
    await expect(page.locator('#page-wrap-in')).toContainText('Wealth Management Services');
    await expect(page.getByRole('link', { name: 'Research Notes  Research' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Research Notes');
    await expect(page.locator('#page-wrap-in')).toContainText('Research Notes');
    await expect(page.getByRole('link', { name: 'Third Party Conduct' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Complaint Handling Process' })).toBeVisible();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Customer Service Charter' }).click();
    const page1 = await page1Promise;
    await expect(page.locator('#page-wrap-in')).toContainText('Complaint Handling Process');
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Complaint Handling Process' }).click();
    const page2 = await page2Promise;
    await expect(page.locator('#page-wrap-in')).toContainText('Third Party Conduct');
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Third Party Conduct' }).click();
    const page3 = await page3Promise;
    await page.getByRole('heading', { name: 'Are you interested with this' }).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Are you interested with this product/service?');
    await fillAndSubmitForm(page)
}
export async function testUnsecured_Personal_Loan(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    const url = "https://www.imbankgroup.com/ke/personal/loans/unsecured-personal-loan/"
    await page.hover('#menu-item-12094');
    await page.$('text=Loans +');
    await page.hover('text=Loans');

    await expect(page.getByRole('link', { name: 'Unsecured Personal Loan' })).toBeVisible();
    await page.getByRole('link', { name: 'Unsecured Personal Loan' }).click();
    await Personal_Banking_menu(page)
    //await fillAndSubmitForm(page)
    await expect(page.locator('div').filter({ hasText: 'I&M Unsecured Personal LoanYour next goal is a decision away! Let us turn your' }).nth(3)).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('I&M Unsecured Personal Loan');
    await expect(page.locator('#page-wrap-in')).toContainText('Your next goal is a decision away! Let us turn your wish lists into a to do list instantly!');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Unsecured' })).toBeVisible();
    await expect(page.getByText('I&M Unsecured Personal LoanTurn your aspirations into reality. Pursue your')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('I&M Unsecured Personal Loan');
    await expect(page.locator('#page-wrap')).toContainText('Turn your aspirations into reality. Pursue your dreams, do more with your life. No matter whether your goals are short or long term, every goal, every wish and every desire should not be brushed aside. We want you to never miss what’s important to you!');
    await expect(page.getByText('Benefits Loan Tenure - You')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Benefits' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Benefits');
    await expect(page.locator('.feature-21-body-col > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Loan Tenure - You can choose from a minimum of 1 month to a maximum of 60 months for your personal loan repayment.');
    await expect(page.locator('div:nth-child(2) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Interest Rates - Enjoy competitive interest rates and processing fees.');
    await expect(page.getByText('Loan Insurance - Get peace of')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Loan Insurance - Get peace of mind with competitive credit life insurance provided');
    await expect(page.locator('div:nth-child(4) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Unsecured Loan - You don\'t have to provide any collateral as security');
    await expect(page.locator('div:nth-child(5) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Quick Turnaround Time - Application is processed within 24 hours');
    await expect(page.locator('div:nth-child(6) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Loan Application - Fast and convenient application process');
    await expect(page.getByRole('heading', { name: 'Notes', exact: true })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Notes');
    await expect(page.getByRole('button', { name: 'Notes +' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Notes +' })).toBeVisible();
    await page.getByRole('button', { name: 'Notes +' }).click();
    await expect(page.getByText('Your I&M Personal Loan')).toBeVisible();
    await expect(page.getByLabel('Notes').getByRole('list')).toContainText('Your I&M Personal Loan Application will go through credit check at the point of application.');
    await expect(page.getByText('I&M Personal Loan approval')).toBeVisible();
    await expect(page.getByLabel('Notes').getByRole('list')).toContainText('I&M Personal Loan approval remains at the discretion of the Bank.'); await expect(page.getByText('Apply in personFind your')).toBeVisible();
    await ApplyInPerson(page)
    await page.goto(url)
    //await fillAndSubmitForm(page)
}

export async function test_Home_Loans(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    const url = "https://www.imbankgroup.com/ke/personal/loans/home-loans/"
    await page.hover('#menu-item-12094');
    await page.$('text=Loans +');
    await page.hover('text=Loans');

    await expect(page.getByRole('link', { name: 'Home Loans' })).toBeVisible();

    await page.getByRole('link', { name: 'Home Loans' }).click();
    await Personal_Banking_menu(page)
    //await page.goto(url);
    await verifyLoanLinksVisibility(page);

    await expect(page.locator('div').filter({ hasText: 'Get your dream home!Buy a' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Get your dream home!' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Get your dream home!');
    await page.goto(url);
    //await verifyLoanLinksVisibility(page);
    await expect(page.locator('#page-wrap-in')).toContainText('Buy a house earlier than you can imagine with our unique Step-up Home Loan.');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Home Loans' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'Buy a house earlier than you can imagine with our unique Step-up Home LoanThe I' }).nth(2)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Buy a house earlier than you' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Buy a house earlier than you can imagine with our unique Step-up Home Loan');
    await expect(page.getByText('The I&M Step – Up Home Loan')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('The I&M Step – Up Home Loan is designed to meet a wide range of needs such as the purchase of property, an undeveloped plot, construction, renovations etc. We offer 2 options for the Home Loan: EMI Payments and the unique Step–Up option.');
    await expect(page.getByRole('heading', { name: 'Home Loan Calculator' })).toBeVisible();
    await verifyhomeCalculator(page)
    await expect(page.getByRole('heading', { name: 'Regular Home Loan (EMI Option)' })).toBeVisible();
    await page.locator('div').filter({ hasText: 'Regular Home Loan (EMI Option' }).nth(3).click();
    await expect(page.locator('#page-wrap')).toContainText('Regular Home Loan (EMI Option)');
    await expect(page.locator('#page-wrap')).toContainText('EMI stands for Equated Monthly Installment which is an important part of your home loan. It includes repayment of the principal amount and payment of the interest on the outstanding amount of your home loan.');
    await expect(page.locator('#page-wrap')).toContainText('A longer loan tenure will reduce the Equated Monthly Instalments.');
    await expect(page.getByRole('img', { name: 'Regular Home Loan (EMI Option)' })).toBeVisible();
    await expect(page.getByText('Step-up OptionWith the unique')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Step-up Option');
    await expect(page.locator('#page-wrap')).toContainText('With the unique Step–Up option available with this facility, you can choose to pay lesser monthly repayments in the initial years and higher amounts in later years, thereby matching your repayments to your future growing income.');
    await expect(page.locator('#page-wrap')).toContainText('One can borrow as little as Ksh 2million and as much Ksh 100 million payable for up to 20 years.');
    await expect(page.locator('#page-wrap')).toContainText('This facility is also available in US Dollars.');
    await expect(page.locator('div').filter({ hasText: /^1$/ })).toBeVisible();
    await expect(page.getByText('1Optional pre-approved Visa')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('1Optional pre-approved Visa international credit card with a waiver on joining fees;');
    await expect(page.getByText('2Free fire insurance cover')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('2Free fire insurance cover for the first year with GA Insurance Co Ltd;');
    await expect(page.getByText('3Pricing concessions for an')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('3Pricing concessions for an increased margin of financing.');
    await expect(page.locator('p').filter({ hasText: 'This facility is also' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('This facility is also available in US Dollars.');
    await page.getByText('Additional Details Special').click();
    await expect(page.getByText('Additional Details Special')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Additional Details Special benefits and features A unique step-up option, whereby you can choose to pay lower monthly repayments in the initial years and higher amounts in later years, thereby matching your repayments to your future growing incomeCompetitive pricing on Home Care insurancePre-approved Visa international credit card with a waiver on joining feesFree fire insurance cover for the first year with GA Insurance Co LtdUp to 20 years repayment period for Kenya Shillings mortgage and 10 years for US Dollar and EUR denominated mortgage Wide range of mortgage facilities Purchase of new or existing residential propertyPurchase of undeveloped plot or landConstruction of residential property on a previously purchased landFinancing the purchase of a unit being built by a reputed developerTake over of existing house loans from other financing institutionsTop-up of existing Home Loan with l&M BankRenovation, repairs, or extension of existing propertyEquity release - raising funds from the value of your existing house Residential plot purchaseCommercial mortgage - purchase of commercial property, plot, or construction Mortgage in Foreign currency - US Dollar-denominated For Diaspora Cusotmers - Deal Facilitation Dear FacilitationWe endeavour to make your property purchase deal hassle-free. We link you to professional services like lawyers, valuers, surveyors, etc and facilitate payments/documents execution for your property purchases.Our Deal Facilitation services, offered from our Diaspora Banking Unit, are provided free of charge to Diaspora customers who sign-up for our mortgage services, and on payment of facilitation fees for Diaspora customers who prefer to use their own funds for purchasing their properties.');
    await page.getByRole('button', { name: 'Special benefits and features' }).click();
    await expect(page.getByLabel('Special benefits and features').getByRole('list')).toContainText('A unique step-up option, whereby you can choose to pay lower monthly repayments in the initial years and higher amounts in later years, thereby matching your repayments to your future growing incomeCompetitive pricing on Home Care insurancePre-approved Visa international credit card with a waiver on joining feesFree fire insurance cover for the first year with GA Insurance Co LtdUp to 20 years repayment period for Kenya Shillings mortgage and 10 years for US Dollar and EUR denominated mortgage');
    await page.getByRole('button', { name: 'Special benefits and features' }).click();
    await page.getByRole('button', { name: 'Wide range of mortgage' }).click();
    await expect(page.getByLabel('Wide range of mortgage').locator('div')).toContainText('Purchase of new or existing residential propertyPurchase of undeveloped plot or landConstruction of residential property on a previously purchased landFinancing the purchase of a unit being built by a reputed developerTake over of existing house loans from other financing institutionsTop-up of existing Home Loan with l&M BankRenovation, repairs, or extension of existing propertyEquity release - raising funds from the value of your existing house Residential plot purchaseCommercial mortgage - purchase of commercial property, plot, or construction Mortgage in Foreign currency - US Dollar-denominated');
    await page.getByRole('button', { name: 'Wide range of mortgage' }).click();
    await page.getByRole('button', { name: 'For Diaspora Cusotmers - Deal' }).click();
    await expect(page.getByLabel('For Diaspora Cusotmers - Deal').getByRole('list')).toContainText('Dear FacilitationWe endeavour to make your property purchase deal hassle-free. We link you to professional services like lawyers, valuers, surveyors, etc and facilitate payments/documents execution for your property purchases.Our Deal Facilitation services, offered from our Diaspora Banking Unit, are provided free of charge to Diaspora customers who sign-up for our mortgage services, and on payment of facilitation fees for Diaspora customers who prefer to use their own funds for purchasing their properties.');
    await page.getByRole('button', { name: 'For Diaspora Cusotmers - Deal' }).click();
    await expect(page.getByRole('heading', { name: 'Want to apply for a home loan?' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Want to apply for a home loan?');
    await expect(page.getByText('For details on requirements')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('For details on requirements and the application process, kindly visit your branch or contact your relationship manager.');
    await ApplyInPerson(page)
    await page.goto(url)
    await testRequestCallback(page)
    await page.goto(url)
    await applyForLoan(page)
    await page.goto(url)

    await fillAndSubmitForm(page)
}
export async function testpersonalTransactionsAccounts(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');

    // Find the 'Accounts +' link within the revealed menu
    await page.$('text=Accounts +');
    await page.hover('text=Accounts');

    await expect(page.getByRole('link', { name: 'Transactions Accounts' })).toBeVisible();
    await page.getByRole('link', { name: 'Transactions Accounts' }).click();
    await page.getByRole('heading', { name: 'Personal Transaction Accounts' }).click();
    await expect(page.getByText('Personal Transaction AccountsWith our Personal Transaction Accounts, you get.')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Personal Transaction Accounts');
    await expect(page.locator('#page-wrap-in')).toContainText('With our Personal Transaction Accounts, you get.');
    await expect(page.locator('li').filter({ hasText: 'Access to Electronic Banking' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Access to Electronic Banking');
    await expect(page.locator('li').filter({ hasText: 'International Mastercard &' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('International Mastercard & Visa Cards');
    await expect(page.locator('li').filter({ hasText: 'IMBA Loyalty Points' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('IMBA Loyalty Points');
    await expect(page.locator('#Layer_1 path').nth(1)).toBeVisible();
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Transaction' })).toBeVisible();
    await Personal_Banking_menu(page);

    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Transaction AccountsSelect an' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Transaction Accounts');
    await expect(page.locator('#page-wrap-in')).toContainText('Select an account based on your needs: A flat fee account (Club Account) or pay as you go account (PayGo)');

    //slider
    await expect(page.getByRole('link', { name: 'Find out more  Club Account' }).first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Club AccountUnrivalled gateway to a world of privileges all for just one monthly flat fee');
    await expect(page.getByRole('link', { name: 'Find out more  PayGo Account' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('PayGo AccountAn account with unparalleled flexibility and you get charged only for what you use');
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  PayGo Account' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('PayGo AccountAn account with unparalleled flexibility and you get charged only for what you use');
    await expect(page.getByRole('link', { name: 'Find out more  Sapphire FCY' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Sapphire FCY AccountA foreign currency transaction account available in 8 major currencies.');
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'Find out more  Sapphire FCY' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Sapphire FCY AccountA foreign currency transaction account available in 8 major currencies.');
    await expect(page.getByRole('link', { name: 'Find out more  Club Account' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Club AccountUnrivalled gateway to a world of privileges all for just one monthly flat fee');
}
export async function testpersonalSavingsAccounts(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');

    // Find the 'Accounts +' link within the revealed menu
    await page.$('text=Accounts +');
    await page.hover('text=Accounts');
    await page.getByRole('link', { name: 'Savings Accounts' }).click();
    await Personal_Banking_menu(page);
    await expect(page.locator('div').filter({ hasText: 'Personal Savings Accounts With our Personal Savings Accounts you get:' }).nth(3)).toBeVisible();
    await expect(page.getByText('Personal Savings Accounts With our Personal Savings Accounts you get:')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Personal Savings Accounts');
    await expect(page.locator('#page-wrap-in')).toContainText('With our Personal Savings Accounts you get:');
    await expect(page.locator('li').filter({ hasText: 'Competitive Interest Rates' })).toBeVisible();
    await page.locator('li').filter({ hasText: 'Competitive Interest Rates' }).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Competitive Interest Rates');
    await expect(page.getByText('Flexible Savings Plans')).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Flexible Savings Plans' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Flexible Savings Plans');
    await expect(page.locator('li').filter({ hasText: 'Automatic Savings Option' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Automatic Savings Option');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Savings' })).toBeVisible();
    await featurecheckAccountPage(page)
    await expect(page.locator('#page-wrap-in')).toContainText('Personal Savings Accounts');
    await expect(page.locator('#page-wrap-in')).toContainText('We offer a range of deposit savings accounts in Kenya to enable you to get higher returns on your savings conveniently. Our term deposit plans are offered for a range of periods and follow a structured schedule of attractive interest returns.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Personal Savings AccountsWe' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Find out more  Fixed Deposit' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Fixed Deposit');
    await expect(page.locator('#page-wrap-in')).toContainText('The deposit options are available in Kenya Shillings as well as a host of foreign currencies.');
    await expect(page.getByRole('link', { name: 'Find out more  Flexi Deposit' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Flexi Deposit Builder');
    await expect(page.locator('#page-wrap-in')).toContainText('Build up savings automatically regularly and earn higher returns on them');
    await expect(page.locator('.feature-28-body-col > .card')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Young Savers Account');
    await expect(page.locator('#page-wrap-in')).toContainText('A savings account specifically for children designed to inculcate the savings habit & ensure they don’t face financial challenges in the future.');
    await expect(page.getByRole('link', { name: 'Find out more  I&M Savers' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Savers Account');
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Savers Account provides you with a safe choice of building funds for your dream projects!');
    await expect(page.getByRole('link', { name: 'Find out more  MyGoalz' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('MyGoalz Account');
    await expect(page.locator('#page-wrap-in')).toContainText('Saving for your next car or house purchase or dream vacation? Open My Goalz Account');
}
export async function Personal_Banking_menu(page: any) {
    await expect(page.locator('p').filter({ hasText: 'Personal Banking' }).locator('a')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Personal Banking');
    await expect(page.locator('#menu-item-10550').getByRole('link', { name: 'Accounts' })).toBeVisible();
    await expect(page.locator('#menu-item-10550')).toContainText('Accounts');
    await expect(page.locator('#menu-item-9654').getByRole('link', { name: 'Cards' })).toBeVisible();
    await expect(page.locator('#menu-item-9654')).toContainText('Cards');
    await expect(page.locator('#menu-item-10555').getByRole('link', { name: 'Loans' })).toBeVisible();
    await expect(page.locator('#menu-item-10555')).toContainText('Loans');
    await expect(page.locator('#menu-item-10547').getByRole('link', { name: 'Investment' })).toBeVisible();
    await expect(page.locator('#menu-item-10547')).toContainText('Investment');
    await expect(page.locator('#menu-item-10548').getByRole('link', { name: 'Insurance' })).toBeVisible();
    await expect(page.locator('#menu-item-10548')).toContainText('Insurance');
    await expect(page.locator('#menu-item-10549').getByRole('link', { name: 'Transfers' })).toBeVisible();
    await expect(page.locator('#menu-item-10549')).toContainText('Transfers');
}
export async function featurecheckAccountPage(page: any) {
    // Check visibility and text content of links
    await expect(page.getByRole('link', { name: 'Transaction Accounts' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Transaction Accounts');
    await expect(page.getByRole('link', { name: 'Savings Accounts' })).toBeVisible();

    // Click on 'Savings Accounts' link
    await page.getByRole('link', { name: 'Savings Accounts' }).click();

    // Check if 'Savings Accounts' page content is visible and correct
    await expect(page.locator('#page-wrap-in')).toContainText('Savings Accounts');
    await expect(page.getByRole('link', { name: 'Select Banking' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Select Banking');
}
export async function testPersonalBankingAccounts(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.locator('#menu-item-12094').getByRole('link', { name: 'Personal' }).click();
    await Personal_Banking_menu(page);
    //await page.locator('div').filter({ hasText: 'Personal Banking with I&MGet' }).nth(3).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Personal BankingAccounts Cards Loans Investment Insurance Transfers');
    await expect(page.locator('h1')).toContainText('Personal Banking with I&M');
    await expect(page.locator('#page-wrap-in')).toContainText('Get unrivalled banking experience with us!');
    await expect(page.getByText('International Cards Unique')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('International Cards');
    await expect(page.locator('#page-wrap-in')).toContainText('Unique Accounts');
    await expect(page.locator('#page-wrap-in')).toContainText('Insurance');
    await checkPageContent(page, "feature list");//calling featurelist
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Personal Banking with I&MWe' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Personal Banking with I&M');
    await expect(page.locator('#page-wrap-in')).toContainText('We offer a range of products and services to cater to your needs. Some of them include, Accounts, Cards, Insurance products, Custody and Investment Services, Select Banking, Asset Finance and so much more.');
    await expect(page.getByRole('link', { name: 'TRANSACTION ACCOUNTS Choose' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('TRANSACTION ACCOUNTS');
    await expect(page.locator('#page-wrap-in')).toContainText('Choose amongst a range of top-of-the-line personal transaction accounts that best suits your requirements.');
    await expect(page.locator('#page-wrap-in')).toContainText('TRANSACTION ACCOUNTSChoose amongst a range of top-of-the-line personal transaction accounts that best suits your requirements. Learn More');
    await expect(page.getByRole('link', { name: 'SAVINGS ACCOUNTS Choose' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('SAVINGS ACCOUNTS');
    await expect(page.locator('#page-wrap-in')).toContainText('Choose amongst a range of top-of-the-line deposit plans to maximize your savings, even for your child.');
    await expect(page.getByRole('link', { name: 'CARDS Choose amongst a range' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('CARDS');
    await expect(page.locator('#page-wrap-in')).toContainText('Choose amongst a range of credit, debit, and pre-paid cards to carry with you wherever you go.');
    await expect(page.getByRole('heading', { name: 'Featured Accounts' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Featured Accounts');
    await expect(page.getByText('Featured Accounts PayGo')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Club Account');
    await expect(page.locator('#page-wrap-in')).toContainText('Club Account');
    await expect(page.locator('#page-wrap-in')).toContainText('Unrivalled gateway to a world of privileges all for just one monthly flat fee');
    await expect(page.getByRole('link', { name: 'PayGo Account  PayGo Account' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('PayGo Account');
    await expect(page.locator('#page-wrap-in')).toContainText('PayGo Account');
    await expect(page.locator('#page-wrap-in')).toContainText('An account with unparalleled flexibility and you get charged only for what you use');
    await page.getByLabel('Next slide').click();
    await expect(page.getByRole('link', { name: 'PayGo Account  PayGo Account' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('PayGo Account');
    await expect(page.locator('#page-wrap-in')).toContainText('An account with unparalleled flexibility and you get charged only for what you use');
    await expect(page.getByRole('link', { name: 'Sapphire FCY Account ' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Sapphire FCY Account');
    await expect(page.locator('#page-wrap-in')).toContainText('Sapphire FCY');
    await expect(page.locator('#page-wrap-in')).toContainText('A foreign currency transaction account available in 8 major currencies.');
    await page.getByLabel('Next slide').click();
    await expect(page.getByText('Cards Find out more Credit')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Find out more  Credit Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Find out more');
    await expect(page.locator('#page-wrap-in')).toContainText('Credit Cards');
    await expect(page.locator('#page-wrap-in')).toContainText('Choose among a range of credit cards with advantages like free credit period and loyalty points.');
    await expect(page.getByRole('link', { name: 'Find out more  Debit Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Debit Cards');
    await expect(page.locator('#page-wrap-in')).toContainText('Mastercard & Visa Cards that directly debits your bank account for world wide usage.');
    await expect(page.getByRole('link', { name: 'Find out more  Prepaid Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Prepaid Cards');
    await expect(page.locator('#page-wrap-in')).toContainText('Choose among a range of prepaid cards while traveling in Kenya or internationally.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Visa Infinite Credit' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Visa Infinite Credit Card');
    await expect(page.locator('#page-wrap-in')).toContainText('Welcome to the world infinite possibilities with the I&M Visa Infinite Credit Card that offers you unparalleled services and privileges locally and abroad.');
    await expect(page.getByRole('link', { name: 'Learn More', exact: true })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Learn More');
    await expect(page.getByRole('img', { name: 'Visa Infinite Credit Card' })).toBeVisible();
}
export async function testLoans(page) {


    const url = 'https://www.imbankgroup.com/ke/personal/loans/car-loans/';
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');
    await page.$('text=Loans +');
    await page.hover('text=Loans');

    await page.getByRole('link', { name: 'Loans -' }).click();
    await Personal_Banking_menu(page)

    await expect(page.locator('div').filter({ hasText: 'Get your dream car today!' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Get your dream car today!' })).toBeVisible();
    await expect(page.getByText('Finance of up to 80% on cost over a loan duration of 48 months', { exact: true })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Get your dream car today!');
    await page.getByText('Finance of up to 80% on cost over a loan duration of 48 months', { exact: true }).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Finance of up to 80% on cost over a loan duration of 48 months');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Car Loans' })).toBeVisible();
    await verifyLoanLinksVisibility(page);
    await expect(page.locator('.feature-19-section > .position-absolute')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Buy a car of your choice' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Buy a car of your choice today!');
    await expect(page.getByText('Asset Finance product at l&M')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Asset Finance product at l&M Bank Ltd covers all forms of business and personal assets, which are moveable and identifiable through a serial/registration number. This largely covers motor vehicles, machinery and equipment.');
    await expect(page.getByRole('heading', { name: 'Car Loan Calculator' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Car Loan Calculator');
    await expect(page.getByText('Type of loan Loan Amount')).toBeVisible();
    await expect(page.locator('form[name="carloandata"]')).toContainText('Type of loan');
    await verifyCarLoanFormFields(page);

    await expect(page.getByText('Key Features Asset FinanceAge')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Key Features');
    await expect(page.getByText('Asset FinanceAge')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Asset FinanceAge');
    await expect(page.getByText('Saloon CarsNew/Used')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Saloon CarsNew/Used');
    await expect(page.getByText('Commercial trucks/Pick-upsNew')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Commercial trucks/Pick-upsNew/Used');
    await expect(page.getByRole('heading', { name: 'Prime Movers/Heavy Commercial' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Prime Movers/Heavy Commercial TrucksNew/Used');
    await expect(page.getByRole('heading', { name: 'Earth Movers/Construction' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Earth Movers/Construction Equipment');
    await expect(page.getByText('Other EquipmentNew')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Other EquipmentNew');
    await expect(page.getByText('TractorsNew')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('TractorsNew');
    await expect(page.getByText('School busesNew')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('School busesNew');
    await expect(page.getByText('Motor cycles ( Fleet Purchasers)New')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Motor cycles ( Fleet Purchasers)New');
    await expect(page.getByText('Key Benefits Quick and simple')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Key Benefits' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Key Benefits');
    await expect(page.locator('.card-body > .media').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Quick and simple application process.');
    await expect(page.locator('div:nth-child(2) > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Financed assets are self-securing.');
    await expect(page.getByText('Option of direct import')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Option of direct import finance through selected dealers.');
    await expect(page.locator('div:nth-child(4) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Insurance Premium Financing (IPF) available.');
    await expect(page.getByText('Effective working')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Effective working relationships with the vehicle dealers/vendors countrywide.');
    await expect(page.locator('div:nth-child(6) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Competitive pricing.');
    await expect(page.locator('#terms-heading')).toBeVisible();
    await page.getByRole('button', { name: 'Terms +' }).click();
    await expect(page.getByLabel('Terms', { exact: true }).getByRole('list')).toContainText('Finance of up to 80% on cost over a loan duration of 48 months (Used - Up to 8 Years) and Finance of up to 85% on cost over a loan duration of 60 months is availed for assets under the above categories subject to credit evaluation. Concessions for lower deposit and extended loan tenure are available under structured joint dealer/staff car loan schemes.');
    await expect(page.getByRole('heading', { name: 'We have partnerships with:' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('We have partnerships with:');
    await expect(page.getByRole('link', { name: 'Learn More ' }).first()).toBeVisible();
    await page.goto('https://www.imbankgroup.com/ke/partnerships/world-navi/');
    await page.goto('https://www.imbankgroup.com/ke/personal/loans/car-loans/');
    await expect(page.getByRole('link', { name: 'Learn More ' }).first()).toBeVisible();
    await expect(page.locator('.feature-22-body > div:nth-child(2) > .card')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More ' }).nth(2)).toBeVisible();
    await page.locator('div').filter({ hasText: 'Are you ready to apply?To' }).nth(3).click();
    await expect(page.locator('#page-wrap')).toContainText('To open an account online with I&M Bank you will need a digital copy of the following documents: As a Kenyan citizen, you will require your Kenyan National ID card/passport, KRA PIN number. For Foreign Nationals you will require a passport, work permit/ dependent pass.');
    await expect(page.getByRole('heading', { name: 'Are you ready to apply?' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Are you ready to apply?');
    await expect(page.getByRole('link', { name: 'View Accounts' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('View Accounts');
    await ApplyInPerson(page)
    //await applyForLoan(page)
    await page.goto(url);
    await testRequestCallback(page)
    await page.goto(url);
    await applyForLoan(page)
    await page.goto(url);
    await fillAndSubmitForm(page)
    await Personal_Banking_menu(page)
}

export async function checkPageContent(page, featureListName) {
    await expect(page.getByRole('link', { name: 'Deals & Offerings' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Deals & Offerings');
    await expect(page.getByRole('link', { name: 'Cards', exact: true }).nth(1)).toBeVisible();
    //await expect(page.locator('#page-wrap-in').getByRole('link', { name: 'Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Cards');

    await expect(page.getByRole('link', { name: 'Mpesa Xpress' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Mpesa Xpress');

    await expect(page.getByRole('link', { name: 'Foreign Exchange' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Foreign Exchange');

    await expect(page.getByRole('link', { name: 'Customer Care' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Customer Care');

    console.log(`Page content for "${featureListName}" verified successfully.`);
}

export async function verifyhomeCalculator(page) {
    await expect(page.getByText('Home Loan Calculator Type of')).toBeVisible();
    await expect(page.locator('form[name="homeloandata"] div').filter({ hasText: 'Type of loan' }).nth(1)).toBeVisible();
    await expect(page.locator('form[name="homeloandata"]')).toContainText('Type of loan');
    await expect(page.locator('form[name="homeloandata"] div').filter({ hasText: 'Type of loan Loan Amount' }).getByRole('textbox')).toHaveValue('Mortgage');
    await expect(page.locator('form[name="homeloandata"] div').filter({ hasText: 'Loan Amount' }).nth(1)).toBeVisible();
    await expect(page.locator('form[name="homeloandata"]')).toContainText('Loan Amount');
    await expect(page.locator('input[name="principal"]')).toBeEmpty();
    await expect(page.locator('form[name="homeloandata"] div').filter({ hasText: 'Payment Period(Months)' }).nth(1)).toBeVisible();
    await expect(page.locator('form[name="homeloandata"]')).toContainText('Payment Period(Months)');
    await expect(page.locator('input[name="months"]')).toBeEmpty();
    await expect(page.getByText('Rate %')).toBeVisible();
    await expect(page.locator('form[name="homeloandata"]')).toContainText('Payment Period(Months)');
    await expect(page.locator('form[name="homeloandata"]')).toContainText('Rate %');
    await expect(page.locator('form[name="homeloandata"] div').filter({ hasText: 'Monthly Payment' }).nth(1)).toBeVisible();
    await expect(page.locator('form[name="homeloandata"]')).toContainText('Monthly Payment');
    await expect(page.locator('input[name="payment"]')).toHaveValue('0.00');
    await expect(page.locator('form[name="homeloandata"] div').filter({ hasText: 'Total Payment' }).nth(1)).toBeVisible();
    await expect(page.locator('form[name="homeloandata"]')).toContainText('Total Payment');
    await expect(page.locator('input[name="total"]')).toHaveValue('0.00');

}