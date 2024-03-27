import { test, expect } from '@playwright/test';
import { navigateTo, scrollToBottom } from '../helpers/utilities';



async function testformapplication(page) {

    await page.goto('https://www.imbankgroup.com/ke/cards/im-visa-international-gold-card/');

    await page.locator('#page-wrap-in section').filter({ hasText: 'Are you interested in I&M' }).click();
    await expect(page.getByRole('heading', { name: 'Are you interested in I&M' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Are you interested in I&M Visa International Gold Credit Card?');
    await expect(page.locator('#gform_26 div').filter({ hasText: 'Full Name*Email Address*' })).toBeVisible();
    await expect(page.locator('#field_26_1')).toContainText('Full Name*');
    await expect(page.locator('#field_26_2')).toContainText('Email Address*');
    await expect(page.locator('#field_26_3')).toBeVisible();
    await expect(page.locator('#field_26_3')).toContainText('Phone Number*');
    await expect(page.getByText('Nearest Branch*Kenyatta')).toBeVisible();
    await expect(page.locator('#field_26_4')).toContainText('Nearest Branch*Kenyatta Avenue2nd Ngong AvenueSarit CentreBiashara StreetIndustrial AreaKisumuKaren ConnectionPanari Centre1 ParkParklandsWilson AirportOngata RongaiSouth CNyali Cinemax MsaLangata LinkValley Arcade BranchEldoretNakuru BranchRiverside BranchKisiiChangamwe MsaMalindiNyeriThika BranchVillage MarketLavington MallKitaleLunga LungaYaya CentreGateway MallRuarakaCross RoadNanyukiSpring ValleyMeruEldama ParkDunga RoadRidge CourtHaile Selassie Ave Msa');
    await expect(page.getByText('Select one of the options')).toBeVisible();
    await expect(page.getByText('Select one of the options below:* I am interested, please contact me I want')).toBeVisible();
    await expect(page.locator('#label_26_5_0')).toContainText('I am interested, please contact me');
    await expect(page.locator('#label_26_5_1')).toContainText('I want some clarification as below');
    await expect(page.locator('#field_26_6')).toBeVisible();
    await expect(page.locator('#field_26_6')).toContainText('Comment*');
    await expect(page.getByText('Consent*')).toBeVisible();
    await expect(page.locator('#field_26_7')).toContainText('Consent*');
    await expect(page.getByLabel('I have read and understood')).toBeVisible();
    await page.getByLabel('I have read and understood').check();
    await expect(page.getByText('Validate you\'re human')).toBeVisible();
    await expect(page.locator('#field_26_9')).toContainText('Validate you\'re human');
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
    await page.getByPlaceholder('Enter Your Name').click();
    await page.getByPlaceholder('Enter Your Name').fill('my first');
    await page.locator('#field_26_2').click();
    await page.getByPlaceholder('Enter Your Email Address').fill('example@gmail.com');
    await page.locator('#field_26_3').click();
    await page.getByPlaceholder('Enter Phone Number').fill('0720454576');
    await page.getByLabel('Nearest Branch*').selectOption('Eldoret');
    await page.getByLabel('I am interested, please').check();
    await page.getByPlaceholder('Enter your Comments').click();
    await page.getByPlaceholder('Enter your Comments').fill('hgb nncws');
    await page.frameLocator('iframe[name="a-rha0338iqgo2"]').getByLabel('I\'m not a robot').click();
}

test('test form', async ({ page }) => {
    await testformapplication(page)
});