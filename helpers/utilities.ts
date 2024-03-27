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