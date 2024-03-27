import { test, expect } from '@playwright/test';
import { navigateTo, clickTopNavLinkAndAssert } from '../helpers/utilities';




test('Test Country Dropdown', async ({ page }) => {
    await navigateTo(page, 'https://www.imbankgroup.com/ke/');

    await expect(page.locator('header').filter({ hasText: 'Select Country Kenya I&M' }).getByRole('paragraph')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Select Country');
    await expect(page.locator('#page-wrap-in').getByRole('link', { name: 'Kenya' })).toBeVisible();

    await page.locator('#page-wrap-in').getByRole('link', { name: 'Kenya' }).click();
    await expect(page.getByRole('link', { name: 'Kenya' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Tanzania' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Rwanda' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Uganda' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Mauritius' })).toBeVisible();

    await page.locator('header').filter({ hasText: 'Select Country Kenya I&M' }).locator('i').first().click();
    await page.locator('header').filter({ hasText: 'Select Country Kenya I&M' }).locator('i').first().click();
    await expect(page.getByRole('link', { name: 'Kenya' }).nth(1)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Tanzania' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Rwanda' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Uganda' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Mauritius' })).toBeVisible();
});
test('Test Top Nav Visibility and Assertions', async ({ page }) => {
    await navigateTo(page, 'https://www.imbankgroup.com/ke/');

    // Assert visibility and assertions of top navigation elements
    await expect(page.locator('#menu-item-12249')).toBeVisible();
    await expect(page.locator('#menu-item-12275')).toBeVisible();
    await expect(page.locator('#menu-item-15185')).toBeVisible();

    // Click on top navigation links
    await page.getByRole('link', { name: 'Ways to Bank' }).click();
    await page.getByRole('link', { name: 'Branches , CDMs & ATMs locator' }).click();
    await page.getByRole('link', { name: 'Help & Support' }).click();
});

test('Test Ways to Bank Page', async ({ page }) => {
    await navigateTo(page, 'https://www.imbankgroup.com/ke/');
    await page.getByRole('link', { name: 'Ways to Bank' }).click();
    await expect(page.locator('h1')).toContainText('Ways to Bank with I&M');
    await expect(page.locator('#page-wrap-in')).toContainText('Providing you with world class channels to bank with I&M Bank at your convenience.');
    await expect(page.getByRole('link', { name: 'Learn more  Mobile Banking' })).toBeVisible();
    await page.getByRole('link', { name: 'Learn more  Mobile Banking' }).click();
    await page.goto('https://www.imbankgroup.com/ke/ways-to-bank/');
    await expect(page.locator('#page-wrap-in')).toContainText('Mobile BankingAccess your account 24/7 using mobile phone banking service. It is convenient, friendly and secure.');
    await expect(page.getByRole('link', { name: 'Learn more  Internet Banking' })).toBeVisible();
    await page.getByRole('link', { name: 'Learn more  Internet Banking' }).click();
    await page.goto('https://www.imbankgroup.com/ke/ways-to-bank/');
    await expect(page.locator('#page-wrap-in')).toContainText('Internet Banking');
    await expect(page.locator('#page-wrap-in')).toContainText('Access your accounts 24/7 from wherever you happen to be with I&M OTG Personal & Business');
    await expect(page.getByRole('link', { name: 'Learn more  ATM and Branches' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('ATM and Branches');
    await expect(page.locator('#page-wrap-in')).toContainText('Convenient, comfortable, aesthetic and friendly and each with a 24 hour ATM - describes our branches in all major centres in Kenya');
    await page.getByRole('link', { name: 'Learn more  ATM and Branches' }).click();


});



test('test Learn more  Mobile Banking', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.getByRole('link', { name: 'Ways to Bank' }).click();
    await page.getByRole('link', { name: 'Learn more  Mobile Banking' }).click();
    await expect(page.getByRole('heading', { name: 'Its more than just Mobile' })).toBeVisible();
    await expect(page.getByText('Its convenience at its best!')).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Transfers conveniently' }).getByRole('img')).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Pay Bills' }).locator('#Capa_1')).toBeVisible();
    await expect(page.getByText('.cls-1{fill:#fbfafc;} Balance')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Its more than just Mobile Banking');
    await expect(page.locator('#page-wrap-in')).toContainText('Its convenience at its best!');
    await expect(page.locator('#page-wrap-in')).toContainText('Transfers conveniently');
    await expect(page.locator('#page-wrap-in')).toContainText('Pay Bills');
    await expect(page.locator('#page-wrap-in')).toContainText('Balance Enquiry, Mini Statement & more!');
    await expect(page.getByRole('heading', { name: 'I&M On The Go - Personal' })).toBeVisible();
    await expect(page.getByText('Access your account 24/7')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M On The Go - Personal');
    await expect(page.locator('#page-wrap-in')).toContainText('Access your account 24/7 using mobile phone banking service. It is convenient, friendly and secure. Come experience our state of the art I&M On The Go (OTG) Personal Mobile App and Web channel. I&M On The Go has been developed with your needs in mind.You will now experience a simple and easy to use interface on both mobile and web.');
    await expect(page.getByRole('link', { name: 'IOS Application Download the' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Android Application Download' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'I&M On The Go web Signup' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('IOS Application');
    await expect(page.locator('#page-wrap-in')).toContainText('Android Application');
    await expect(page.locator('#page-wrap-in')).toContainText('I&M On The Go web');
    await expect(page.getByText('Easy and convenient I&M')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Easy and convenient I&M Mobile Banking now also supports 2 joint approvers to authorise transactions. (For joint account holders only)');
    await expect(page.locator('#page-wrap-in')).toContainText('With I&M Mobile you may get');
    await expect(page.locator('#page-wrap-in')).toContainText('View account balances');
    await page.getByText('Quick links for most used').click();
    await expect(page.locator('#page-wrap-in')).toContainText('Quick links for most used payments');
    await expect(page.locator('#page-wrap-in')).toContainText('All Accounts Overview');
    await expect(page.locator('#page-wrap-in')).toContainText('Mobile Money, Local and International Payments');
    await expect(page.locator('#page-wrap-in')).toContainText('Airtime | Utility | Pesalink | KRA Payments');
    await expect(page.locator('#page-wrap-in')).toContainText('Approval policy for Joint Account Holders');
    await expect(page.locator('#page-wrap-in')).toContainText('Service Requests: Stop Cheque | Lock/Unlock - Temporary Block');
    await expect(page.locator('#page-wrap-in')).toContainText('Unsecured Personal Loan');
    await expect(page.locator('#page-wrap-in')).toContainText('Card Lock and Unlock Feature');
    await expect(page.locator('#page-wrap-in')).toContainText('Authentication through SMS/E-Mail or Google Authenticator and so much more!');
    await expect(page.locator('#page-wrap-in')).toContainText('USSD via *458# available (Separate registration required)');
    await expect(page.locator('#page-wrap-in')).toContainText('Service Guarantee: Cash compensation should RTGS or SWIFT Transfer fail (T&Cs Apply)');
    await expect(page.getByText('RegistrationNew UserTo self-')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Registration');
    await expect(page.locator('#page-wrap-in')).toContainText('New UserTo self-register on I&M On The Go (OTG), simply download the app from the links above, use your registered email on your bank account at I&M Bank and follow the prompts to complete your registration.Existing UserIf you have been using the previous Mobile Banking App/Web, simply use the forgot password option and follow the prompts. You may also use the User Guide below for guidance.');
    await expect(page.locator('#page-wrap-in')).toContainText('Click Here to see the process of switching to the new App.');
    await page.getByRole('link', { name: 'Here' }).click({
        button: 'right'
    });
    await expect(page.getByRole('link', { name: 'Here' })).toBeVisible();
});


test('test Learn more  Internet Banking', async ({ page }) => {
    await navigateTo(page, 'https://www.imbankgroup.com/ke/');
    await page.getByRole('link', { name: 'Ways to Bank' }).click();
    await page.getByRole('link', { name: 'Learn more  Internet Banking' }).click();
    await expect(page.getByText('I&M On The Go - WebManage')).toBeVisible();
    await expect(page.locator('h1')).toContainText('I&M On The Go - Web');
    await expect(page.getByText('Manage your finances wherever')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Manage your finances wherever you are, whenever you want.');
    await expect(page.locator('#Capa_1').first()).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'safe, fast and convenient.' }).getByRole('img')).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Quick Registration Process' }).locator('#Capa_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Access to your accounts anywhere anytime');
    await expect(page.locator('#page-wrap-in')).toContainText('safe, fast and convenient.');
    await expect(page.locator('#page-wrap-in')).toContainText('Quick Registration Process');
    await expect(page.getByRole('link', { name: 'I&M OTG - Personal' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M OTG - Personal');
    await expect(page.getByRole('link', { name: 'I&M OTG - Business' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M OTG - Business');
    await expect(page.locator('div').filter({ hasText: 'Our unique full-featured' }).nth(2)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Our unique full-featured internet banking lets you access your accounts 24/7 from wherever you happen to be');
    await expect(page.getByRole('heading', { name: 'Registration Process' })).toBeVisible();
    await expect(page.getByText('Registration ProcessThe registration process for I&M OTG is easy! Step')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Registration Process');
    await expect(page.locator('#page-wrap-in')).toContainText('The registration process for I&M OTG is easy!');
    await expect(page.locator('.feature-48-body-col > .card').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Registration ProcessThe' }).locator('i').first()).toBeVisible();
    await page.getByRole('heading', { name: 'Step 1' }).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Step 1');
    await expect(page.locator('#page-wrap-in')).toContainText('Download the respective app from your Play Store or visit the Web link.');
    await expect(page.locator('div:nth-child(2) > .card')).toBeVisible();
    await expect(page.getByText('Step 2Register as new if you')).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Registration ProcessThe' }).locator('i').nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Step 2');
    await expect(page.locator('#page-wrap-in')).toContainText('Register as new if you have never used any of our previous Mobile Banking services or select forgot password if you have previously been using our older systems');
    await expect(page.locator('div:nth-child(3) > .card')).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Registration ProcessThe' }).locator('i').nth(2)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Step 3' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Step 3');
    await expect(page.locator('#page-wrap-in')).toContainText('Once logged in, you can enjoy a host of banking services. Please contact our support team if you are facing any challenges.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Benefits offered by I&M On' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Benefits offered by I&M On The Go');
    await expect(page.locator('#page-wrap-in')).toContainText('Access to your accounts anywhere anytime i.e. do your transactions 24/7 whenever convenient for you');
    await expect(page.locator('#page-wrap-in')).toContainText('One-stop service point for all your banking needs; loans, accounts, credit cards, debit cards and other services');
    await expect(page.locator('#page-wrap-in')).toContainText('Remit funds to your loved ones and business associates without hassles');
    await expect(page.locator('#page-wrap-in')).toContainText('Pay Credit cards and top up your prepaid cards');
    await expect(page.locator('#page-wrap-in')).toContainText('Make requests like bankers cheques, cheque books, standing instructions etc');
    await expect(page.locator('#page-wrap-in')).toContainText('Monitor your account activities through online statements and transaction advices');
    await expect(page.locator('#page-wrap-in')).toContainText('Top-Up your mobile phone, transfer funds from your account to M-PESA');
    await expect(page.locator('#page-wrap-in')).toContainText('Online payment of utility bills');
    await expect(page.locator('#page-wrap-in')).toContainText('Access to quick and free information e.g. interest rates and forex rates');
    await expect(page.locator('#page-wrap-in')).toContainText('Service Guarantee: Cash compensation should RTGS or SWIFT Transfer fail (T&Cs Apply)');
});




async function testLearnMoreATMAndBranches(page) {
    await navigateTo(page, 'https://www.imbankgroup.com/ke/');
    await page.getByRole('link', { name: 'Ways to Bank' }).click();
    await page.getByRole('link', { name: 'Learn more  ATM and Branches' }).click();
    await expect(page.getByText('Branches & ATMs LocatorATM')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Branches & ATMs Locator');
    await expect(page.locator('#menu-item-12274')).toContainText('ATM and Cash Deposit Machine (CDM) Locator');
    await expect(page.locator('#menu-item-12273')).toContainText('Branch Locator');
    await page.locator('#page-wrap-in section').filter({ hasText: 'Branches & ATMs LocatorATM' }).click();
    await expect(page.locator('div').filter({ hasText: 'ATMs, Cash Deposit Machines (' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'ATMs, Cash Deposit Machines (' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('ATMs, Cash Deposit Machines (CDMs) and Branches');
    await expect(page.locator('#atm-locator')).toBeVisible();
    await expect(page.locator('#atm-locator')).toContainText('ATMs in Kajiado County Ongata RongaiLocation: 1st floor, Maasai Mall, Ongata Rongai ATMs in Kiambu County I&M Bank Tatu City BranchLocation: Tatu City, Close to Roast by Carnivore, off Kiambu Road ATMs in Kilifi County I&M Bank Kilifi BranchLocation: Ground Floor, Ganze Road, KilifiI&M Bank Malindi BranchLocation: Ground Floor, Sabaki Centre, Lamu Road, MalindiI&M Bank Watamu BranchLocation: Ground Floor, Watamu Mall, Jacaranda Road, Watamu ATMs in Kisii County I&M Kisii BranchLocation: Royal Tower, Hospital Road ATMs in Kisumu County I&M Kisumu BranchLocation: Bon Accord House, Oginga Odinga Street ATMs in Kwale County I&M Bank Diani BranchLocation: Ground Floor, Diani Beach Shopping Centre, Diani Beach Road, Diani ATMs in Laikipia County I&M Bank Nanyuki BranchLocation: Ground Floor, Hussein Building ATMs in Machakos County I&M Bank Gateway MallLocation: 1st floor, Maasai Mall, Ongata Rongai ATMs in Meru County I&M Bank Meru BranchLocation: Ground Floor, P&K Plaza, Moi Avenue ATMs In Mombasa I&M Haile Selassie BranchLocation: Patel Samaj Building, Haile Selassie Avenue, MombasaI&M Nyerere BranchLocation: Ground Floor, Acacia Centre, Nyerere AvenueI&M Bank Nyali Cinemax BranchLocation: Nyali Cinemax, Main Nyali RoadChangamweLocation: Airport Centre Mall, Changamwe Magongo Road ATMs in Nairobi County Sarit CenterLocation: Ground Floor, next to I&M Bank Branch Sarit Centre, WestlandsRiversideLocation: Ground Floor, Hanover, 14 Riverside DriveJKIA ATMLocation: JKIA - Departure Lounge - Unit 1I&M Village Market BranchLocation: 1st Floor, Village Market Shopping Complex - New Wing, Limuru RoadYaya CentreLocation: Ground Floor, Yaya CentreSarit Select CentreLocation: New Wing, Basement, Sarit Centre Mall, WestlandsI&M Panari Centre BranchLocation: Panari Centre, Mombasa RoadDiamond Plaza Shopping ComplexLocation: Diamond Plaza - Highbridge Shopping ComplexThika Road MallLocation: Ground Floor, next to Carrefour Supermarket, Thika Road Mall, off Thika Super HighwayKaren BranchLocation: I&M Bank Karen Connection Branch, Office Park KarenI&M Ruaraka BranchLocation: Kenafric Business Park, Ground Floor, Baba Dogo RoadGreenspan MallLocation: Ground Floor, Greenspan MallI&M Kenyatta Avenue BranchLocation: The Entrance of I&M Bank Kenyatta Avenue branch, at I&M Bank Tower, Kenyatta AvenueLavington MallLocation: 1st Floor, Lavington Mall, James Gichuru RoadI&M South C BranchLocation: South C, Shopping CentreI&M Bank Valley Arcade branchLocation: Kenol Kobil Station, Gitanga RoadEldama Park BranchLocation: Eldama Park, Eldama Ravine RoadI&M Bank Spring Valley BranchLocation: Ground Floor, Block B, Spring Valley Business ParkI&M Bank 2nd Ngong Avenue BranchLocation: I&M Bank House, 2nd Ngong AvenueI&M Bank Lunga Lunga BranchLocation: First Floor, Lunga Lunga Mall, Lunga Lunga Road Industrial AreaI&M One Park AvenueLocation: Ground Floor, 1 Park AvenueI&M Biashara Street BranchLocation: Ansh PlazaI&M Bank Industrial Area BranchLocation: K.C.C Building, Changamwe Road, NairobiI&M Dunga BranchLocation: Industrial Area, Dunga RoadI&M Cross Road BranchLocation: Cross Road, Off River RoadI&M Bank Saifee Park BranchLocation: Ground Floor, Kipevu Link Shopping Centre, Kiboko rd, KarenI&M Bank GTC BranchLocation: 2nd floor, Global Trade Centre, Chiromo lane, WestlandsI&M Bank Gikomba BranchLocation: 1st Floor, Nafuu Building, Kombo Munyiri RoadI&M Bank BBS Mall Eastleigh BranchLocation: 3rd Floor, BBS Mall, General Waruinge Street ATMs in Nakuru County I&M Bank Naivasha BranchLocation: 1st Floor, Western Building, Moi Avenue, NaivashaI&M Nakuru BranchLocation: Polo Centre, Kenyatta Avenue ATMs in Nyeri County I&M Bank Nyeri branchLocation: Ground Floor, Hopewell Place, Gakere Road ATMs in Trans-Nzoia County I&M Kitale BranchLocation: Ground Floor, Mega Centre Mall, Kitale ATMs in Uasin Gishu County I&M Eldoret BranchLocation: Ground Floor,Imperial Court, Uganda Road Cash Deposit Machines (CDMs) Sarit CenterLocation: Ground Floor, next to I&M Bank Branch Sarit Centre, WestlandsI&M Parklands BranchLocation: 1 Park Ave, Ground Floor (Junction of 1st Parklands and Limuru Road)I&M Kisumu BranchLocation: Bon Accord House, Oginga Odinga StreetI&M Kisii BranchLocation: Royal Tower, Hospital RoadI&M Eldoret BranchLocation: Ground Floor,Imperial Court, Uganda RoadI&M Haile Selassie BranchLocation: Patel Samaj Building, Haile Selassie Avenue, MombasaI&M Kitale BranchLocation: Ground Floor, Mega Centre Mall, KitaleI&M Nakuru BranchLocation: Polo Centre, Kenyatta AvenueI&M Panari Centre BranchLocation: Panari Centre, Mombasa RoadI&M Nyerere BranchLocation: Ground Floor, Acacia Centre, Nyerere AvenueI&M Ruaraka BranchLocation: Kenafric Business Park, Ground Floor, Baba Dogo RoadI&M Kenyatta Avenue BranchLocation: The Entrance of I&M Bank Kenyatta Avenue branch, at I&M Bank Tower, Kenyatta AvenueI&M Bank Industrial Area BranchLocation: K.C.C Building, Changamwe Road, NairobiI&M Cross Road BranchLocation: Cross Road, Off River RoadI&M Bank Tatu City BranchLocation: Tatu City, Close to Roast by Carnivore, off Kiambu RoadI&M Bank GTC BranchLocation: 2nd floor, Global Trade Centre, Chiromo lane, WestlandsI&M Bank Gikomba BranchLocation: 1st Floor, Nafuu Building, Kombo Munyiri RoadI&M Bank BBS Mall Eastleigh BranchLocation: 3rd Floor, BBS Mall, General Waruinge Street US Dollar Dispensing ATMs Sarit CenterLocation: Ground Floor, next to I&M Bank Branch Sarit Centre, WestlandsWilson AirportLocation: Pewin House, Wilson AirportRiversideLocation: Ground Floor, Hanover, 14 Riverside DriveJKIA ATMLocation: JKIA - Departure Lounge - Unit 1I&M Village Market BranchLocation: 1st Floor, Village Market Shopping Complex - New Wing, Limuru RoadYaya CentreLocation: Ground Floor, Yaya CentreLangata LinkLocation: Langata Link Complex, Langata South RoadSarit Select CentreLocation: New Wing, Basement, Sarit Centre Mall, WestlandsKaren BranchLocation: I&M Bank Karen Connection Branch, Office Park KarenI&M TowerLocation: Kenyatta Avenue');
    await page.getByRole('button', { name: 'ATMs in Kajiado County +' }).click();
    await page.getByLabel('ATMs in Kajiado County').locator('div').nth(1).click();
    await expect(page.getByLabel('ATMs in Kajiado County')).toContainText('Ongata RongaiLocation: 1st floor, Maasai Mall, Ongata Rongai');
    await page.getByRole('button', { name: 'ATMs in Kajiado County -' }).click();
    await page.getByRole('button', { name: 'ATMs in Kiambu County +' }).click();
    await expect(page.getByLabel('ATMs in Kiambu County').locator('div').nth(1)).toBeVisible();
    await expect(page.getByLabel('ATMs in Kiambu County')).toContainText('I&M Bank Tatu City BranchLocation: Tatu City, Close to Roast by Carnivore, off Kiambu Road');
    await page.getByRole('button', { name: 'ATMs in Kiambu County -' }).click();
    await page.getByRole('button', { name: 'ATMs in Kilifi County +' }).click();
    await expect(page.getByLabel('ATMs in Kilifi County').locator('div').filter({ hasText: 'I&M Bank Kilifi' }).first()).toBeVisible();
    await expect(page.getByText('I&M Bank Kilifi BranchLocation: Ground Floor, Ganze Road, Kilifi')).toBeVisible();
    await expect(page.getByLabel('ATMs in Kilifi County')).toContainText('I&M Bank Kilifi BranchLocation: Ground Floor, Ganze Road, Kilifi');
    await expect(page.getByText('I&M Bank Malindi BranchLocation: Ground Floor, Sabaki Centre, Lamu Road, Malindi')).toBeVisible();
    await page.getByText('I&M Bank Malindi BranchLocation: Ground Floor, Sabaki Centre, Lamu Road, Malindi').click();
    await page.getByText('I&M Bank Malindi BranchLocation: Ground Floor, Sabaki Centre, Lamu Road, Malindi').click();
    await expect(page.getByLabel('ATMs in Kilifi County')).toContainText('I&M Bank Malindi BranchLocation: Ground Floor, Sabaki Centre, Lamu Road, Malindi');
    await expect(page.getByText('I&M Bank Watamu BranchLocation: Ground Floor, Watamu Mall, Jacaranda Road,')).toBeVisible();
    await expect(page.getByLabel('ATMs in Kilifi County')).toContainText('I&M Bank Watamu BranchLocation: Ground Floor, Watamu Mall, Jacaranda Road, Watamu');
    await page.getByRole('button', { name: 'ATMs in Kilifi County -' }).click();
    await page.waitForSelector('button', { name: 'ATMs in Kilifi County +' }, { timeout: 60000 });
    await page.getByRole('button', { name: 'ATMs in Kilifi County +' }).click();
    await expect(page.getByText('I&M Bank Kilifi BranchLocation: Ground Floor, Ganze Road, KilifiI&M Bank')).toBeVisible();
    await expect(page.getByText('I&M Bank Kilifi BranchLocation: Ground Floor, Ganze Road, Kilifi')).toBeVisible();
    await expect(page.getByLabel('ATMs in Kilifi County')).toContainText('I&M Bank Kilifi BranchLocation: Ground Floor, Ganze Road, Kilifi');
    await expect(page.getByText('I&M Bank Malindi BranchLocation: Ground Floor, Sabaki Centre, Lamu Road, Malindi')).toBeVisible({ timeout: 10000 }); // Increase timeout to 10 seconds

    //await expect(page.getByText('I&M Bank Malindi BranchLocation: Ground Floor, Sabaki Centre, Lamu Road, Malindi')).toBeVisible();
    await expect(page.getByLabel('ATMs in Kilifi County')).toContainText('I&M Bank Malindi BranchLocation: Ground Floor, Sabaki Centre, Lamu Road, Malindi');
    await expect(page.getByText('I&M Bank Watamu BranchLocation: Ground Floor, Watamu Mall, Jacaranda Road,')).toBeVisible({ timeout: 10000 });
    await expect(page.getByLabel('ATMs in Kilifi County')).toContainText('I&M Bank Watamu BranchLocation: Ground Floor, Watamu Mall, Jacaranda Road, Watamu');
    //await page.getByRole('button', { name: 'ATMs in Kilifi County -' }).click();
    await page.waitForSelector('button', { name: 'ATMs in Kilifi County -' }, { timeout: 5000 });

    await page.getByRole('button', { name: 'ATMs in Kisii County +' }).click();
    await expect(page.getByLabel('ATMs in Kisii County').getByText('I&M Kisii BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Kisii County')).toContainText('I&M Kisii BranchLocation: Royal Tower, Hospital Road');
    await page.getByRole('button', { name: 'ATMs in Kisii County -' }).click();
    await page.getByRole('button', { name: 'ATMs in Kisumu County +' }).click();
    await expect(page.getByLabel('ATMs in Kisumu County').getByText('I&M Kisumu BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Kisumu County')).toContainText('I&M Kisumu BranchLocation: Bon Accord House, Oginga Odinga Street');
    await page.getByRole('button', { name: 'ATMs in Kisumu County -' }).click();
    await page.getByRole('button', { name: 'ATMs in Kwale County +' }).click();
    await expect(page.getByText('I&M Bank Diani BranchLocation')).toBeVisible();
    await expect(page.getByLabel('ATMs in Kwale County')).toContainText('I&M Bank Diani BranchLocation: Ground Floor, Diani Beach Shopping Centre, Diani Beach Road, Diani');
    await page.getByRole('button', { name: 'ATMs in Kwale County -' }).click();
    await page.getByRole('button', { name: 'ATMs in Laikipia County +' }).click();
    await expect(page.getByText('I&M Bank Nanyuki BranchLocation: Ground Floor, Hussein Building')).toBeVisible();
    await expect(page.getByLabel('ATMs in Laikipia County')).toContainText('I&M Bank Nanyuki BranchLocation: Ground Floor, Hussein Building');
    await page.getByRole('button', { name: 'ATMs in Laikipia County -' }).click();
    await page.getByRole('button', { name: 'ATMs in Machakos County +' }).click();
    await expect(page.getByText('I&M Bank Gateway MallLocation')).toBeVisible();
    await expect(page.getByLabel('ATMs in Machakos County')).toContainText('I&M Bank Gateway MallLocation: 1st floor, Maasai Mall, Ongata Rongai');
    await page.getByRole('button', { name: 'ATMs in Machakos County -' }).click();
    await page.getByRole('button', { name: 'ATMs in Meru County +' }).click();
    await expect(page.getByRole('heading', { name: 'I&M Bank Meru Branch' })).toBeVisible();
    await expect(page.getByText('I&M Bank Meru BranchLocation')).toBeVisible();
    await expect(page.getByLabel('ATMs in Meru County')).toContainText('I&M Bank Meru BranchLocation: Ground Floor, P&K Plaza, Moi Avenue');
    await page.getByRole('button', { name: 'ATMs in Meru County -' }).click();
    await page.waitForSelector('button', { name: 'ATMs In Mombasa +' }, { timeout: 70000 }); // Increase timeout to 60 seconds

    await page.getByRole('button', { name: 'ATMs In Mombasa +' }).click();
    await expect(page.getByLabel('ATMs In Mombasa').getByText('I&M Haile Selassie BranchLocation: Patel Samaj Building, Haile Selassie Avenue')).toBeVisible();
    await expect(page.getByLabel('ATMs In Mombasa')).toContainText('I&M Haile Selassie BranchLocation: Patel Samaj Building, Haile Selassie Avenue, Mombasa');
    await expect(page.getByLabel('ATMs In Mombasa').getByText('I&M Nyerere BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs In Mombasa')).toContainText('I&M Nyerere BranchLocation: Ground Floor, Acacia Centre, Nyerere Avenue');
    await expect(page.getByText('I&M Bank Nyali Cinemax BranchLocation: Nyali Cinemax, Main Nyali Road')).toBeVisible();
    await expect(page.getByLabel('ATMs In Mombasa')).toContainText('I&M Bank Nyali Cinemax BranchLocation: Nyali Cinemax, Main Nyali Road');
    await expect(page.getByText('ChangamweLocation: Airport')).toBeVisible();
    await expect(page.getByLabel('ATMs In Mombasa')).toContainText('ChangamweLocation: Airport Centre Mall, Changamwe Magongo Road');
    await page.getByRole('button', { name: 'ATMs In Mombasa -' }).click();
    await page.getByRole('button', { name: 'ATMs in Nairobi County +' }).click();
    await expect(page.getByRole('heading', { name: 'Riverside' })).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County').locator('div').filter({ hasText: 'Sarit CenterLocation: Ground' }).first()).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('Sarit CenterLocation: Ground')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('Sarit CenterLocation: Ground Floor, next to I&M Bank Branch Sarit Centre, Westlands');
    await expect(page.getByLabel('ATMs in Nairobi County').locator('p').filter({ hasText: 'Location: Ground Floor, Hanover, 14 Riverside Drive' }).getByRole('strong')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('RiversideLocation: Ground')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('RiversideLocation: Ground Floor, Hanover, 14 Riverside Drive');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('JKIA ATMLocation: JKIA -')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('JKIA ATMLocation: JKIA - Departure Lounge - Unit 1');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('I&M Village Market BranchLocation: 1st Floor, Village Market Shopping Complex')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Village Market BranchLocation: 1st Floor, Village Market Shopping Complex - New Wing, Limuru Road');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('Yaya CentreLocation: Ground')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('Yaya CentreLocation: Ground Floor, Yaya Centre');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('Sarit Select CentreLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('Sarit Select CentreLocation: New Wing, Basement, Sarit Centre Mall, Westlands');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('I&M Panari Centre BranchLocation: Panari Centre, Mombasa Road')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Panari Centre BranchLocation: Panari Centre, Mombasa Road');
    await expect(page.getByText('Diamond Plaza Shopping ComplexLocation: Diamond Plaza - Highbridge Shopping')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('Diamond Plaza Shopping ComplexLocation: Diamond Plaza - Highbridge Shopping Complex');
    await expect(page.getByText('Thika Road MallLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('Thika Road MallLocation: Ground Floor, next to Carrefour Supermarket, Thika Road Mall, off Thika Super Highway');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('Karen BranchLocation: I&M')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('Karen BranchLocation: I&M Bank Karen Connection Branch, Office Park Karen');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('I&M Ruaraka BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Ruaraka BranchLocation: Kenafric Business Park, Ground Floor, Baba Dogo Road');
    await expect(page.getByText('Greenspan MallLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('Greenspan MallLocation: Ground Floor, Greenspan Mall');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('I&M Kenyatta Avenue BranchLocation: The Entrance of I&M Bank Kenyatta Avenue')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Kenyatta Avenue BranchLocation: The Entrance of I&M Bank Kenyatta Avenue branch, at I&M Bank Tower, Kenyatta Avenue');
    await expect(page.getByText('Lavington MallLocation: 1st')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('Lavington MallLocation: 1st Floor, Lavington Mall, James Gichuru Road');
    await expect(page.getByText('I&M South C BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M South C BranchLocation: South C, Shopping Centre');
    await expect(page.getByText('I&M Bank Valley Arcade branchLocation: Kenol Kobil Station, Gitanga Road')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Bank Valley Arcade branchLocation: Kenol Kobil Station, Gitanga Road');
    await expect(page.getByText('Eldama Park BranchLocation:')).toBeVisible();
    await page.getByText('Eldama Park BranchLocation:').click();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('Eldama Park BranchLocation: Eldama Park, Eldama Ravine Road');
    await expect(page.getByText('I&M Bank Spring Valley BranchLocation: Ground Floor, Block B, Spring Valley')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Bank Spring Valley BranchLocation: Ground Floor, Block B, Spring Valley Business Park');
    await expect(page.getByText('I&M Bank 2nd Ngong Avenue BranchLocation: I&M Bank House, 2nd Ngong Avenue')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Bank 2nd Ngong Avenue BranchLocation: I&M Bank House, 2nd Ngong Avenue');
    await expect(page.getByText('I&M Bank Lunga Lunga BranchLocation: First Floor, Lunga Lunga Mall, Lunga Lunga')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Bank Lunga Lunga BranchLocation: First Floor, Lunga Lunga Mall, Lunga Lunga Road Industrial Area');
    await expect(page.getByText('I&M One Park AvenueLocation:')).toBeVisible();
    await page.getByText('I&M One Park AvenueLocation:').click();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M One Park AvenueLocation: Ground Floor, 1 Park Avenue');
    await expect(page.getByText('I&M Biashara Street BranchLocation: Ansh Plaza')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Biashara Street BranchLocation: Ansh Plaza');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('I&M Bank Industrial Area BranchLocation: K.C.C Building, Changamwe Road, Nairobi')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Bank Industrial Area BranchLocation: K.C.C Building, Changamwe Road, Nairobi');
    await expect(page.getByText('I&M Dunga BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Dunga BranchLocation: Industrial Area, Dunga Road');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('I&M Cross Road BranchLocation')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Cross Road BranchLocation: Cross Road, Off River Road');
    await expect(page.getByText('I&M Bank Saifee Park BranchLocation: Ground Floor, Kipevu Link Shopping Centre')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Bank Saifee Park BranchLocation: Ground Floor, Kipevu Link Shopping Centre, Kiboko rd, Karen');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('I&M Bank GTC BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Bank GTC BranchLocation: 2nd floor, Global Trade Centre, Chiromo lane, Westlands');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('I&M Bank Gikomba BranchLocation: 1st Floor, Nafuu Building, Kombo Munyiri Road')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Bank Gikomba BranchLocation: 1st Floor, Nafuu Building, Kombo Munyiri Road');
    await expect(page.getByLabel('ATMs in Nairobi County').getByText('I&M Bank BBS Mall Eastleigh BranchLocation: 3rd Floor, BBS Mall, General')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nairobi County')).toContainText('I&M Bank BBS Mall Eastleigh BranchLocation: 3rd Floor, BBS Mall, General Waruinge Street');
    await page.getByRole('button', { name: 'ATMs in Nairobi County -' }).click();
    await page.getByRole('button', { name: 'ATMs in Nakuru County +' }).click();
    await expect(page.getByText('I&M Bank Naivasha BranchLocation: 1st Floor, Western Building, Moi Avenue,')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nakuru County')).toContainText('I&M Bank Naivasha BranchLocation: 1st Floor, Western Building, Moi Avenue, Naivasha');
    await expect(page.getByLabel('ATMs in Nakuru County').getByText('I&M Nakuru BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nakuru County')).toContainText('I&M Nakuru BranchLocation: Polo Centre, Kenyatta Avenue');
    await page.getByRole('button', { name: 'ATMs in Nakuru County -' }).click();

    await page.waitForSelector('button', { name: 'ATMs in Nyeri County +' }, { timeout: 60000 }); // Increase timeout to 60 seconds
    await page.getByRole('button', { name: 'ATMs in Nyeri County +' }).click();
    await expect(page.getByText('I&M Bank Nyeri branchLocation')).toBeVisible();
    await expect(page.getByLabel('ATMs in Nyeri County')).toContainText('I&M Bank Nyeri branchLocation: Ground Floor, Hopewell Place, Gakere Road');
    await page.getByRole('button', { name: 'ATMs in Nyeri County -' }).click();
    await page.getByRole('button', { name: 'ATMs in Trans-Nzoia County +' }).click();
    await expect(page.getByLabel('ATMs in Trans-Nzoia County').getByText('I&M Kitale BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Trans-Nzoia County')).toContainText('I&M Kitale BranchLocation: Ground Floor, Mega Centre Mall, Kitale');
    await page.getByRole('button', { name: 'ATMs in Trans-Nzoia County -' }).click();
    await page.waitForSelector('button', { name: 'ATMs in Uasin Gishu County +' }, { timeout: 60000 }); // Increase timeout t
    await page.getByRole('button', { name: 'ATMs in Uasin Gishu County +' }).click();
    await expect(page.getByLabel('ATMs in Uasin Gishu County').getByText('I&M Eldoret BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('ATMs in Uasin Gishu County')).toContainText('I&M Eldoret BranchLocation: Ground Floor,Imperial Court, Uganda Road');
    await page.getByRole('button', { name: 'ATMs in Uasin Gishu County -' }).click();
    await page.getByRole('button', { name: 'Cash Deposit Machines (CDMs) +' }).click();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').locator('div').filter({ hasText: 'Sarit CenterLocation: Ground' }).first()).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('Sarit CenterLocation: Ground Floor, next to I&M Bank Branch Sarit Centre, WestlandsI&M Parklands BranchLocation: 1 Park Ave, Ground Floor (Junction of 1st Parklands and Limuru Road)I&M Kisumu BranchLocation: Bon Accord House, Oginga Odinga StreetI&M Kisii BranchLocation: Royal Tower, Hospital RoadI&M Eldoret BranchLocation: Ground Floor,Imperial Court, Uganda RoadI&M Haile Selassie BranchLocation: Patel Samaj Building, Haile Selassie Avenue, MombasaI&M Kitale BranchLocation: Ground Floor, Mega Centre Mall, KitaleI&M Nakuru BranchLocation: Polo Centre, Kenyatta AvenueI&M Panari Centre BranchLocation: Panari Centre, Mombasa RoadI&M Nyerere BranchLocation: Ground Floor, Acacia Centre, Nyerere AvenueI&M Ruaraka BranchLocation: Kenafric Business Park, Ground Floor, Baba Dogo RoadI&M Kenyatta Avenue BranchLocation: The Entrance of I&M Bank Kenyatta Avenue branch, at I&M Bank Tower, Kenyatta AvenueI&M Bank Industrial Area BranchLocation: K.C.C Building, Changamwe Road, NairobiI&M Cross Road BranchLocation: Cross Road, Off River RoadI&M Bank Tatu City BranchLocation: Tatu City, Close to Roast by Carnivore, off Kiambu RoadI&M Bank GTC BranchLocation: 2nd floor, Global Trade Centre, Chiromo lane, WestlandsI&M Bank Gikomba BranchLocation: 1st Floor, Nafuu Building, Kombo Munyiri RoadI&M Bank BBS Mall Eastleigh BranchLocation: 3rd Floor, BBS Mall, General Waruinge Street');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('Location: Ground Floor, next')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('Sarit CenterLocation: Ground')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('Sarit CenterLocation: Ground Floor, next to I&M Bank Branch Sarit Centre, Westlands');
    await expect(page.getByText('I&M Parklands BranchLocation')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Parklands BranchLocation: 1 Park Ave, Ground Floor (Junction of 1st Parklands and Limuru Road)');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Kisumu BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Kisumu BranchLocation: Bon Accord House, Oginga Odinga Street');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Kisii BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Kisii BranchLocation: Royal Tower, Hospital Road');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Eldoret BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Eldoret BranchLocation: Ground Floor,Imperial Court, Uganda Road');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Haile Selassie BranchLocation: Patel Samaj Building, Haile Selassie Avenue')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Haile Selassie BranchLocation: Patel Samaj Building, Haile Selassie Avenue, Mombasa');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Kitale BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Kitale BranchLocation: Ground Floor, Mega Centre Mall, Kitale');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Nakuru BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Nakuru BranchLocation: Polo Centre, Kenyatta Avenue');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Panari Centre BranchLocation: Panari Centre, Mombasa Road')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Panari Centre BranchLocation: Panari Centre, Mombasa Road');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Nyerere BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Nyerere BranchLocation: Ground Floor, Acacia Centre, Nyerere Avenue');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Ruaraka BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Ruaraka BranchLocation: Kenafric Business Park, Ground Floor, Baba Dogo Road');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('Location: The Entrance of I&M')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Kenyatta Avenue BranchLocation: The Entrance of I&M Bank Kenyatta Avenue')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Kenyatta Avenue BranchLocation: The Entrance of I&M Bank Kenyatta Avenue branch, at I&M Bank Tower, Kenyatta Avenue');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('Location: K.C.C Building,')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Bank Industrial Area BranchLocation: K.C.C Building, Changamwe Road, Nairobi')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Bank Industrial Area BranchLocation: K.C.C Building, Changamwe Road, Nairobi');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Cross Road BranchLocation')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Cross Road BranchLocation: Cross Road, Off River Road');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Bank Tatu City BranchLocation: Tatu City, Close to Roast by Carnivore, off')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Bank Tatu City BranchLocation: Tatu City, Close to Roast by Carnivore, off Kiambu Road');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Bank GTC BranchLocation:')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Bank GTC BranchLocation: 2nd floor, Global Trade Centre, Chiromo lane, Westlands');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Bank Gikomba BranchLocation: 1st Floor, Nafuu Building, Kombo Munyiri Road')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Bank Gikomba BranchLocation: 1st Floor, Nafuu Building, Kombo Munyiri Road');
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)').getByText('I&M Bank BBS Mall Eastleigh BranchLocation: 3rd Floor, BBS Mall, General')).toBeVisible();
    await expect(page.getByLabel('Cash Deposit Machines (CDMs)')).toContainText('I&M Bank BBS Mall Eastleigh BranchLocation: 3rd Floor, BBS Mall, General Waruinge Street');
    await page.getByRole('button', { name: 'Cash Deposit Machines (CDMs) -' }).click();
    await page.getByRole('button', { name: 'US Dollar Dispensing ATMs +' }).click();
    await expect(page.getByLabel('US Dollar Dispensing ATMs').locator('div').filter({ hasText: 'Sarit CenterLocation: Ground' }).first()).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('Sarit CenterLocation: Ground Floor, next to I&M Bank Branch Sarit Centre, WestlandsWilson AirportLocation: Pewin House, Wilson AirportRiversideLocation: Ground Floor, Hanover, 14 Riverside DriveJKIA ATMLocation: JKIA - Departure Lounge - Unit 1I&M Village Market BranchLocation: 1st Floor, Village Market Shopping Complex - New Wing, Limuru RoadYaya CentreLocation: Ground Floor, Yaya CentreLangata LinkLocation: Langata Link Complex, Langata South RoadSarit Select CentreLocation: New Wing, Basement, Sarit Centre Mall, WestlandsKaren BranchLocation: I&M Bank Karen Connection Branch, Office Park KarenI&M TowerLocation: Kenyatta Avenue');
    await expect(page.getByLabel('US Dollar Dispensing ATMs').getByText('Sarit CenterLocation: Ground')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('Sarit CenterLocation: Ground Floor, next to I&M Bank Branch Sarit Centre, Westlands');
    await expect(page.getByText('Wilson AirportLocation: Pewin')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('Wilson AirportLocation: Pewin House, Wilson Airport');
    await expect(page.getByLabel('US Dollar Dispensing ATMs').getByText('Location: Ground Floor, Hanover, 14 Riverside Drive')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs').getByText('RiversideLocation: Ground')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('RiversideLocation: Ground Floor, Hanover, 14 Riverside Drive');
    await expect(page.getByLabel('US Dollar Dispensing ATMs').getByText('JKIA ATMLocation: JKIA -')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('JKIA ATMLocation: JKIA - Departure Lounge - Unit 1');
    await expect(page.getByLabel('US Dollar Dispensing ATMs').getByText('I&M Village Market BranchLocation: 1st Floor, Village Market Shopping Complex')).toBeVisible();
    await page.getByLabel('US Dollar Dispensing ATMs').getByText('I&M Village Market BranchLocation: 1st Floor, Village Market Shopping Complex').click();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('I&M Village Market BranchLocation: 1st Floor, Village Market Shopping Complex - New Wing, Limuru Road');
    await expect(page.getByLabel('US Dollar Dispensing ATMs').getByText('Yaya CentreLocation: Ground')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('Yaya CentreLocation: Ground Floor, Yaya Centre');
    await expect(page.getByText('Langata LinkLocation: Langata')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('Langata LinkLocation: Langata Link Complex, Langata South Road');
    await expect(page.getByLabel('US Dollar Dispensing ATMs').getByText('Sarit Select CentreLocation:')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('Sarit Select CentreLocation: New Wing, Basement, Sarit Centre Mall, Westlands');
    await expect(page.getByText('Langata LinkLocation: Langata')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('Langata LinkLocation: Langata Link Complex, Langata South Road');
    await expect(page.getByLabel('US Dollar Dispensing ATMs').getByText('Sarit Select CentreLocation:')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('Sarit Select CentreLocation: New Wing, Basement, Sarit Centre Mall, Westlands');
    await expect(page.getByLabel('US Dollar Dispensing ATMs').getByText('Karen BranchLocation: I&M')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('Karen BranchLocation: I&M Bank Karen Connection Branch, Office Park Karen');
    await expect(page.getByText('I&M TowerLocation: Kenyatta')).toBeVisible();
    await expect(page.getByLabel('US Dollar Dispensing ATMs')).toContainText('I&M TowerLocation: Kenyatta Avenue');
    await page.getByRole('button', { name: 'US Dollar Dispensing ATMs -' }).click();
}
test('test Learn more  ATM and Branches', async ({ page }) => {
    await testLearnMoreATMAndBranches(page);
});

test('Test Branches, CDMs & ATMs Locator Page', async ({ page }) => {
    await testLearnMoreATMAndBranches(page);
});
test('Test Help & Support Page', async ({ page }) => {

    await navigateTo(page, 'https://www.imbankgroup.com/ke/');
    await page.getByRole('link', { name: 'Help & Support' }).click();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'How can we help you today?For' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'How can we help you today?' })).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'How can we help you today?For' }).getByRole('paragraph')).toBeVisible();
    await expect(page.locator('h1')).toContainText('How can we help you today?');
    await expect(page.locator('#page-wrap-in')).toContainText('For our online users, the fastest way to get in touch with us is through this special contact form. We also have a list of all our branches and their contact details.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Complaint handling We are' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Complaint handling We are' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Complaint handling');
    await expect(page.locator('#page-wrap-in')).toContainText('We are always concerned to hear that something has gone wrong. If you have a problem, please let us know and we will do everything we can to sort it out straight away.');
    await expect(page.getByRole('link', { name: 'Customer Charter I&M Bank is' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Customer Charter');
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Bank is committed to providing excellent service experiences to all our customers. The Bank\'s service Charter guides the behaviour of our staff and sets out minimum standards of service delivery.');
    await expect(page.getByRole('link', { name: 'Service Guarantee Enjoy a' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Service Guarantee');
    await expect(page.locator('#page-wrap-in')).toContainText('Enjoy a service guarantee when we process your Outgoing International Transfers (TT) or RTGS Local transfer(s) through our On The Go (OTG) Mobile and Web App. Should we fail to execute due to any error on our part, we will proactively compensate you Kes. 1,250 and Kes 500 respectively.');
    await expect(page.locator('div').filter({ hasText: 'Contacts and EnquiryFor our' }).nth(3)).toBeVisible();
    await expect(page.getByText('Contacts and EnquiryFor our')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Contacts and Enquiry');
    await expect(page.locator('#page-wrap-in')).toContainText('For our online users, the fastest way to get in touch with us is through this special contact form');
    await expect(page.locator('.feature-17-body-col > .card > .card-body').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('24-hour Call Centre+254 719 088 000 +254 20 322 1000 +254 732 100 000 0800721088 (Toll Free Card Enquiries)');
    await expect(page.locator('div:nth-child(2) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Customer Carecustomercare@imbank.co.ke callcentre@imbank.co.ke');
    await expect(page.locator('div:nth-child(3) > .card > .card-body')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Postal addressI&M Bank P.O BOX 30238-00100 NAIROBI, GPO KENYA.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Facebook Twitter Instagram' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Facebook');
    await expect(page.getByRole('link', { name: 'Facebook' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Twitter' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Twitter');
    await expect(page.getByRole('link', { name: 'Instagram' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Instagram');
    await expect(page.getByRole('link', { name: 'Linkedin' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Linkedin');
    await expect(page.getByRole('link', { name: 'Youtube' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Youtube');
    await expect(page.getByRole('link', { name: 'Whatsapp' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Whatsapp');
    await expect(page.locator('.footer-notes')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Get in Touch : If you need any help or information, please complete the form below so that we can quickly get back to you.');
    await expect(page.locator('.form-layout-body')).toBeVisible();
    await expect(page.locator('#field_17_2')).toBeVisible();
    await expect(page.locator('#field_17_2')).toContainText('Full Name*');
    await expect(page.getByLabel('Full Name*')).toBeEmpty();
    await expect(page.locator('#field_17_3')).toBeVisible();
    await expect(page.locator('#field_17_3')).toContainText('Email Address*');
    await expect(page.locator('#field_17_4')).toBeVisible();
    await expect(page.locator('#field_17_4')).toContainText('Phone Number*');
    await expect(page.getByText('Nearest BranchSelect')).toBeVisible();
    await expect(page.locator('#field_17_5')).toContainText('Nearest BranchSelect BranchKenyatta Avenue2nd Ngong AvenueSarit CentreBiashara StreetNyerereIndustrial AreaKisumuKaren ConnectionPanari CentreParklandsWilson AirportOngata RongaiSouth CNyali CineplexLangata LinkValley Arcade BranchEldoretNakuru BranchRiverside BranchKisiiChangamwe BranchMalindiNyeriThika BranchVillage MarketLavington MallKitaleLunga LungaYaya CentreGateway MallRuarakaMilele MallCross RoadNanyukiSpring ValleyMeruEldama ParkDunga RoadRidge CourtHaile Selassie');
    await expect(page.locator('#field_17_10')).toBeVisible();
    await expect(page.locator('#field_17_10')).toContainText('Validate you\'re human');
    await page.locator('#gform_17 div').filter({ hasText: 'Submit' }).click();
    await expect(page.locator('#gform_submit_button_17')).toContainText('Submit');
});


test('Navigation Automation', async ({ page }) => {
    await navigateTo(page, 'https://www.imbankgroup.com/ke/');
    await page.locator('header').filter({ hasText: 'Select Country Kenya I&M' }).getByRole('paragraph').click();
    await expect(page.locator('#page-wrap-in').getByRole('link', { name: 'Kenya' })).toBeVisible();
    await page.getByRole('link', { name: 'Ways to Bank' }).click();
    await page.getByRole('link', { name: 'Branches , CDMs & ATMs locator' }).click();
    await page.getByRole('link', { name: 'Help & Support' }).click();
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.locator('.navbar-brand').click();
    await expect(page.locator('.navbar-brand')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.locator('#menu-item-12094').getByRole('link', { name: 'Personal' })).toBeVisible();
    await expect(page.locator('#menu-item-12095').getByRole('link', { name: 'Business', exact: true })).toBeVisible();
    await expect(page.locator('#menu-item-12093').getByRole('link', { name: 'Diaspora' })).toBeVisible();
    await expect(page.locator('#menu-item-12100').getByRole('link', { name: 'About Us' })).toBeVisible();
    await page.locator('header').filter({ hasText: 'Select Country Kenya I&M' }).locator('i').nth(1).click();
    await page.locator('#page-wrap-in section').filter({ hasText: 'What are you looking for? SearchQuick Links Pre-Paid Cards Loan Application' }).locator('i').click();
    await expect(page.getByRole('button', { name: 'Online Services ' })).toBeVisible();
    await expect(page.locator('header').filter({ hasText: 'Select Country Kenya I&M' }).locator('i').nth(3)).toBeVisible();
});
async function checkPageContent(page, featureListName) {
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


test('test home page', async ({ page }) => {
    await navigateTo(page, 'https://www.imbankgroup.com/ke/');
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page.locator('div').filter({ hasText: 'f #NiSareKabisaBANK TO MPESA' }).locator('img')).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'f #NiSareKabisaBANK TO MPESA' }).locator('img')).toBeVisible();
    await expect(page.getByRole('heading', { name: '#NiSareKabisa' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('#NiSareKabisa');
    await expect(page.getByText('BANK TO MPESA NI SARE KABISA')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('BANK TO MPESA NI SARE KABISA');
    await expect(page.locator('div').filter({ hasText: 'f #NiSareKabisaBANK TO MPESA' }).locator('div').nth(3)).toBeVisible();
    await expect(page.getByText('Download the I&M Bank Mobile')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Download the I&M Bank Mobile App to open your personal account today!');
    await checkPageContent(page, "feature list");//calling featurelist

    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Providing you with more than' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Providing you with more than' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Providing you with more than just banking...');
    await expect(page.getByText('I&M On The Go Download I&M On The Go and enjoy a unique banking experience I&M')).toBeVisible();
    await expect(page.getByRole('link', { name: 'I&M On The Go Download I&M On' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M On The Go');
    await expect(page.locator('#page-wrap-in')).toContainText('Download I&M On The Go and enjoy a unique banking experience');
    await expect(page.getByRole('link', { name: 'I&M Capital Wealth Fund Open-' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Capital Wealth Fund');
    await expect(page.locator('#page-wrap-in')).toContainText('Open-ended Mutual Fund that invests in short term fixed income securities.');
    await expect(page.getByRole('link', { name: 'I&M Foundation I&M Foundation' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Foundation');
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Foundation stands committed to improving the quality of life in our society. Learn more');
    await expect(page.getByRole('heading', { name: 'I&M bouquet specially crafted' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M bouquet specially crafted for your specific needs');
    await expect(page.getByLabel('5 /').getByRole('link', { name: 'Dream Chaser You are poised' })).toBeVisible();
    await expect(page.getByLabel('5 /').getByRole('heading')).toContainText('Dream Chaser');
    await expect(page.getByLabel('5 /').getByRole('paragraph')).toContainText('You are poised to go places and we are on your side, helping you turn your dreams into reality.');
    await expect(page.getByLabel('6 /').getByRole('link', { name: 'Legacy Builder You have' })).toBeVisible();
    await expect(page.getByLabel('6 /').getByRole('heading')).toContainText('Legacy Builder');
    await expect(page.getByLabel('6 /').getByRole('paragraph')).toContainText('You have achieved a lot and we are on your side, helping you enjoy your wealth.');
    await expect(page.getByLabel('7 /').getByRole('link', { name: 'Game Changer You are building' })).toBeVisible();
    await expect(page.getByLabel('7 /').getByRole('heading')).toContainText('Game Changer');
    await expect(page.getByLabel('7 /').getByRole('link', { name: 'Game Changer You are building' })).toBeVisible();
    await expect(page.getByLabel('7 /').getByRole('paragraph')).toContainText('You are building your business and we are on your side, helping your dreams come to life.');
    await expect(page.getByLabel('8 /').getByRole('link', { name: 'Industry Shaper You are' })).toBeVisible();
    await expect(page.getByLabel('8 /').getByRole('heading')).toContainText('Industry Shaper');
    await expect(page.getByLabel('8 /').getByRole('paragraph')).toContainText('You are charting your company’s growth and we are on your side, helping you conquer new frontiers.');
    await page.getByLabel('Next slide').click();
    await expect(page.getByText('I&M bouquet specially crafted for your specific needs Dream Chaser You are')).toBeVisible();
    await page.getByLabel('Next slide').click();
    await page.getByLabel('Next slide').click();
    await page.getByLabel('Next slide').click();
    await page.getByLabel('Next slide').click();
    await page.getByLabel('Next slide').click();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'I&M bouquet specially crafted' })).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'I&M Bank Prepaid CardsLooking' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'The smartest way to secure' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Bank Prepaid Cards');
    await expect(page.locator('#page-wrap-in')).toContainText('Looking for a prepaid card for travel or online shopping? Select from a range of prepaid cards from I&M Bank available in local and international currencies! Apply online now!');
    await expect(page.getByRole('link', { name: 'Learn More', exact: true })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Learn More');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'TariffClick to learn more' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Tariff Click to learn more' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('TariffClick to learn more about I&M Products and Services Tariff Learn More');
    await expect(page.getByRole('link', { name: 'Information Security Protect' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Information SecurityProtect yourself from fraudsters Learn More');
    await expect(page.getByRole('link', { name: 'Travel Insurance Get covered' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Travel Insurance Get covered at affordable premiums for a stress free travel! Learn More');
    await expect(page.locator('.three-quarter-background')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Loan Calculator');
    await expect(page.locator('ul').filter({ hasText: 'Loan Calculator' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Loan Calculator' })).toBeVisible();
    await expect(page.locator('#loan-calculator')).toContainText('Loan Calculator');
    await expect(page.locator('#loan-calculator')).toContainText('Find out more about our loans');
    await page.getByText('Type of loan Loan Amount').click();
    await expect(page.getByText('Payment Period(Months) Rate %')).toBeVisible();
    await expect(page.locator('form[name="carloandata"]')).toContainText('Type of loan');
    await expect(page.locator('form[name="carloandata"]')).toContainText('Type of loan');
    await expect(page.locator('form[name="carloandata"]')).toContainText('Loan Amount');
    await expect(page.locator('form[name="carloandata"]')).toContainText('Payment Period(Months)');
    await expect(page.locator('#loan-calculator').getByText('Rate %')).toBeVisible();
    await expect(page.locator('form[name="carloandata"]')).toContainText('Rate %');
    await expect(page.locator('form[name="carloandata"] div').filter({ hasText: 'Monthly Payment' }).nth(1)).toBeVisible();
    await expect(page.locator('form[name="carloandata"]')).toContainText('Monthly Payment');
    await expect(page.locator('form[name="carloandata"] div').filter({ hasText: 'Total Payment' }).nth(1)).toBeVisible();
    await expect(page.locator('form[name="carloandata"]')).toContainText('Total Payment');
    await expect(page.getByRole('heading', { name: 'Corporate news and' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Corporate news and announcements');
    await expect(page.getByText('August 2023I&M Group PLC delivers 23% growth in Operating Income with a significant growth of 28% in the Retail Segment 7 August 2023Resignation of Mr. Suleiman Kiggundu Jr. as a Director of the Board 18 July 2023Odyssey Energy Solutions and I&M Bank join forces to drive renewable energy investments')).toBeVisible();
    await expect(page.locator('article').filter({ hasText: '28 August 2023I&M Group PLC' }).getByRole('link').first()).toBeVisible();
    await expect(page.getByRole('link', { name: '28 August' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Group PLC delivers 23% growth in Operating Income with a significant growth of 28% in the Retail Segment');
    await expect(page.locator('article').filter({ hasText: '7 August 2023Resignation of' }).getByRole('link').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Resignation of Mr. Suleiman Kiggundu Jr. as a Director of the Board');
    await expect(page.getByRole('link', { name: '7 August' })).toBeVisible();
    await expect(page.locator('article').filter({ hasText: '18 July 2023Odyssey Energy' }).getByRole('link').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'July 2023' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Odyssey Energy Solutions and' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Odyssey Energy Solutions and I&M Bank join forces to drive renewable energy investments');
});



test('test  Personal Accounts drop down', async ({ page }) => {
    await navigateTo(page, 'https://www.imbankgroup.com/ke/');
    await page.getByText('Personal Accounts').click();
    await page.locator('#menu-item-12094').getByRole('link', { name: 'Personal' }).click();
    await page.hover('#menu-item-12094');
    // Capture a screenshot after hovering
    await page.screenshot({ path: 'hoveffr_screenshot.png' });
    await expect(page.getByRole('link', { name: 'Accounts +' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Loans +' })).toBeVisible();
    await expect(page.locator('#menu-item-16544')).toContainText('Wealth Management Service');
    await expect(page.locator('#menu-item-16545')).toContainText('Custodial Services');
    await expect(page.getByRole('link', { name: 'Insurance +' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Transfers +' })).toBeVisible();
    // Hover over 'Personal' to reveal the menu
    await page.hover('#menu-item-12094');

    // Find the 'Accounts +' link within the revealed menu
    await page.$('text=Accounts +');
    await page.hover('text=Accounts');

    await expect(page.getByRole('link', { name: 'Transactions Accounts' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Savings Accounts', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Select Banking' })).toBeVisible();
    await page.hover('#menu-item-12094');

    // Find the 'Cards +' link within the revealed menu
    await page.$('text=Cards +');
    await page.hover('text=Cards');
    await expect(page.getByRole('link', { name: 'Credit Cards', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Debit Cards', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Prepaid Cards', exact: true })).toBeVisible();
    await page.hover('#menu-item-12094');

    // Find the 'Loans +' link within the revealed menu
    await page.$('text=Loans +');
    await page.hover('text=Loans');
    await expect(page.getByRole('link', { name: 'Car Loans' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home Loans' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Unsecured Personal Loan' })).toBeVisible();
    await page.hover('#menu-item-12094');
    await expect(page.getByRole('link', { name: 'Wealth Management Service' })).toBeVisible();
    await expect(page.locator('#menu-item-16545').getByRole('link', { name: 'Custodial Services' })).toBeVisible();
    // Find the 'Insurance +' link within the revealed menu
    await page.$('text=Insurance +');
    await page.hover('text=Insurance');
    await expect(page.getByRole('link', { name: 'Bancassurance' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Insurance Premium Financing' })).toBeVisible();
    // Find the 'Transfers +' link within the revealed menu
    await page.$('text=Transfers +');
    await page.hover('text=Transfers');
    await expect(page.getByRole('link', { name: 'Local and International' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Government Payments' })).toBeVisible();

});




async function Personal_Banking_menu(page: any) {
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
async function featurecheckAccountPage(page: any) {
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
async function testPersonalBankingAccounts(page) {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.locator('#menu-item-12094').getByRole('link', { name: 'Personal' }).click();
    await Personal_Banking_menu(page);
    await page.locator('div').filter({ hasText: 'Personal Banking with I&MGet' }).nth(3).click();
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
async function testpersonalTransactionsAccounts(page) {
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
async function testpersonalSavingsAccounts(page) {
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

test('test Personal BankingAccounts', async ({ page }) => {
    await testPersonalBankingAccounts(page)

});
test('test personal Transactions Accounts', async ({ page }) => {
    await testpersonalTransactionsAccounts(page)

});
test('test personal Savings Accounts', async ({ page }) => {
    await testpersonalSavingsAccounts(page)

});

async function fillAndSubmitFormdd(page: any) {
    // Click on the specified div
    // await page.locator('div').filter({ hasText: 'Are you interested?Full Name*' }).nth(2).click();

    // Check visibility and text content of elements
    await expect(page.locator('#gform_17 div').filter({ hasText: 'Full Name*Email Address*' })).toBeVisible();
    await expect(page.locator('#field_17_2')).toContainText('Full Name*');
    //await expect(page.getByRole('textbox', { name: 'Full Name *' })).toBeEmpty();
    await expect(page.locator('#field_17_3')).toContainText('Email Address*');
    await expect(page.getByRole('textbox', { name: 'Email Address *' })).toBeEmpty();
    await expect(page.locator('#field_17_4')).toContainText('Phone Number*');
    await expect(page.getByRole('textbox', { name: 'Phone Number *' })).toBeEmpty();
    await expect(page.locator('#field_17_5')).toContainText('Nearest BranchSelect BranchKenyatta Avenue2nd Ngong AvenueSarit CentreBiashara StreetNyerereIndustrial AreaKisumuKaren ConnectionPanari CentreParklandsWilson AirportOngata RongaiSouth CNyali CineplexLangata LinkValley Arcade BranchEldoretNakuru BranchRiverside BranchKisiiChangamwe BranchMalindiNyeriThika BranchVillage MarketLavington MallKitaleLunga LungaYaya CentreGateway MallRuarakaMilele MallCross RoadNanyukiSpring ValleyMeruEldama ParkDunga RoadRidge CourtHaile Selassie');
    await expect(page.getByText('Nearest BranchSelect')).toBeVisible();
    await expect(page.locator('#field_17_10')).toContainText("Validate you're human");

    // Click on "I'm not a robot" inside the iframe
    //const frame = page.frameLocator('iframe[name="a-g5lvo62zxc8d"]');
    //await frame.getByLabel("I'm not a robot").click();

    // Check visibility of elements within the iframe
    await expect(page.locator('#field_17_10')).toBeVisible();


    // Check visibility of the submit button
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
    await expect(page.locator('#gform_submit_button_17')).toContainText('Submit');
}
async function fillAndSubmitForm(page: any) {
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


test('test personal Select Banking', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');

    // Find the 'Accounts +' link within the revealed menu
    await page.$('text=Accounts +');
    await page.hover('text=Accounts');
    await page.getByRole('link', { name: 'Select Banking' }).click();
    await Personal_Banking_menu(page);
    await expect(page.locator('div').filter({ hasText: 'Select Banking: A special way' }).nth(3)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Select Banking: A special way' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Select Banking: A special way to Bank with I&M');
    await expect(page.locator('#page-wrap-in')).toContainText('Select Banking offers you');
    await expect(page.locator('li').filter({ hasText: 'Dedicated Relationship Manager' }).locator('#Capa_1')).toBeVisible();
    await expect(page.getByText('Dedicated Relationship Manager')).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Dedicated Relationship Manager' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Dedicated Relationship Manager');
    await expect(page.locator('li').filter({ hasText: 'Exclusive Select Recognition' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Exclusive Select Recognition Card');
    await expect(page.locator('li').filter({ hasText: 'Exclusive Select Recognition' }).getByRole('img')).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Access to “Priority Queuing”' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Access to “Priority Queuing”' }).locator('#Capa_1')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Access to “Priority Queuing”');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Select' })).toBeVisible();
    await expect(page.locator('#overview')).toContainText('Select Banking');
    await expect(page.locator('#overview')).toContainText('Our I&M Select Banking Service accords our customers with many recognition benefits, offers several complementary and concessional services, and makes some specialized products available to members.');
    await expect(page.getByRole('heading', { name: 'Select Banking', exact: true })).toBeVisible();
    await expect(page.locator('#overview')).toContainText('Select Banking');
    await expect(page.locator('#overview')).toContainText('Our I&M Select Banking Service accords our customers with many recognition benefits, offers several complementary and concessional services, and makes some specialized products available to members.');
    await expect(page.getByText('Special Products and ServicesThe Relationship Managers at the I&M Select Centre')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Special Products and Services');
    await expect(page.locator('#page-wrap-in')).toContainText('The Relationship Managers at the I&M Select Centre will also offer you a set of specialized products and services from a one-stop location. These include:');
    await expect(page.getByRole('link', { name: 'Wealth Management Services We' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Wealth Management Services');
    await expect(page.locator('#page-wrap-in')).toContainText('We now offer financial and investment solutions for an individual or a family based on their needs. This covers a wide scope of needs including investment, financial, tax and estate planning.');
    await expect(page.getByRole('link', { name: 'Off-shore Financial Services' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Off-shore Financial Services');
    await expect(page.locator('#page-wrap-in')).toContainText('Our sister bank in Mauritius, Bank One Ltd. facilitates the setting up of off-shore companies, bank accounts and trusts for customers. Ask the Select Centre for more Information.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'I&M Select Banking Service you get I&M Select Centre AccessSelect Services is' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Select Banking Service you get');
    await expect(page.getByLabel('I&M Select Centre Access').getByRole('figure').locator('div')).toBeVisible();
    await expect(page.getByRole('tab', { name: 'I&M Select Centre Access ' })).toBeVisible();
    await expect(page.locator('#select-banking-service-1-tab')).toContainText('I&M Select Centre Access');
    await expect(page.getByRole('tab', { name: 'Select Centre ' })).toBeVisible();
    await expect(page.locator('#select-banking-service-2-tab')).toContainText('Select Centre');
    await expect(page.getByRole('tab', { name: 'Specially designed cheque' })).toBeVisible();
    await expect(page.locator('#select-banking-service-3-tab')).toContainText('Specially designed cheque book');
    await expect(page.getByRole('tab', { name: 'Free Travel Insurance ' })).toBeVisible();
    await expect(page.locator('#select-banking-service-4-tab')).toContainText('Free Travel Insurance');
    await expect(page.getByRole('tab', { name: 'Safe Deposit Lockers ' })).toBeVisible();
    await expect(page.locator('#select-banking-service-5-tab')).toContainText('Safe Deposit Lockers');
    await expect(page.getByRole('tab', { name: 'I&M Infinite Credit Card ' })).toBeVisible();
    await expect(page.locator('#select-banking-service-6-tab')).toContainText('I&M Infinite Credit Card');
    await expect(page.getByRole('tab', { name: 'Pre-Approved Term Loan ' })).toBeVisible();
    await expect(page.locator('#select-banking-service-7-tab')).toContainText('Pre-Approved Term Loan');
    await expect(page.locator('#select-membership')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Select Membership' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Select Membership');
    await expect(page.locator('#select-membership-heading')).toContainText('How you can be a select customer: Complimentary | Paid Subscription');
    await page.getByRole('button', { name: 'How you can be a select' }).click();
    await expect(page.getByLabel('How you can be a select').locator('div')).toBeVisible();
    await expect(page.getByLabel('How you can be a select').locator('div')).toContainText('I&M Select Services are selectively offered on a complimentary basis to eligible customers on an invitation basis by the Bank.Interested Customers can also enjoy a range of these personalized benefits by subscription at a monthly fee of ksh.2,000.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Are you ready to apply?Visit' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Are you ready to apply?');
    await expect(page.locator('#page-wrap-in')).toContainText('Visit any branch for more details');
    await expect(page.getByRole('link', { name: 'View Accounts' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('View Accounts');
    await expect(page.getByText('Apply in personFind your')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Apply in personFind your nearest branch');
    await expect(page.getByText('Request Call BackEnter')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Request Call BackEnter Contact Details One of our representatives will call you back as soon as possible. Full Name*Email Address* Phone Number*Select one of the options below:* I am interested, please contact me I want some clarification as below Comment*Consent* I have read and understood the Privacy NoticeValidate you\'re human Submit We are available from 9:00 AM to 4:00 PM Weekly.');
    await expect(page.getByText('Apply for a loanEnter Contact')).toBeVisible();
    await page.getByRole('heading', { name: 'Apply for a loan' }).click();
    await expect(page.locator('#page-wrap-in')).toContainText('Apply for a loan');
    await expect(page.locator('#page-wrap-in')).toContainText('Enter Contact Details');
    await expect(page.locator('#page-wrap-in')).toContainText('We are available from 9:00 AM to 4:00 PM Weekly.');
    await fillAndSubmitForm(page)
    await featurecheckAccountPage(page)

});


async function verifyCardLinksVisibility(page) {
    await expect(page.getByRole('link', { name: 'Credit Cards', exact: true })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Credit Cards');
    await expect(page.getByRole('link', { name: 'Debit Cards', exact: true })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Debit Cards');
    await expect(page.getByRole('link', { name: 'Prepaid Cards', exact: true })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Prepaid Cards');
}
test('test Cards', async ({ page }) => {
    await page.goto('https://www.imbankgroup.com/ke/');
    await page.hover('#menu-item-12094');

    await page.$('text=Cards +');
    await page.hover('text=Cards');
    await page.getByRole('link', { name: 'Cards -' }).click();
    await expect(page.locator('div').filter({ hasText: 'Explore more with I&M Cards!' }).nth(3)).toBeVisible();
    await expect(page.locator('h1')).toContainText('Explore more with I&M Cards!');
    await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Cards' })).toBeVisible();
    await Personal_Banking_menu(page)
    await verifyCardLinksVisibility(page);
    await expect(page.locator('#page-wrap-in')).toContainText('Choose among a range of credit, debit and pre-paid cards to carry with you wherever you go.');
    await expect(page.locator('#page-wrap-in')).toContainText('We offer a wide range of Visa and MasterCard payment cards. These personal banking cards are designed to facilitate the process by which you make payment for your everyday expenditures and while travelling locally and overseas, without the risk and hassles of carrying cash, as well as conveniently accessing cash when required from ATMs.');
    await expect(page.locator('section').filter({ hasText: 'Choose among a range of' }).nth(1)).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'I&M Cards: Reliable &' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('I&M Cards:');
    await expect(page.locator('div').filter({ hasText: 'I&M Cards: Reliable &' }).nth(2)).toBeVisible();
    await expect(page.getByText('Reliable & ConvenientAccepted')).toBeVisible();
    await expect(page.locator('path:nth-child(4)').first()).toBeVisible();
    await expect(page.locator('path:nth-child(17)').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'I&M Cards: Reliable &' }).getByRole('img').first()).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Reliable & Convenient');
    await expect(page.locator('#page-wrap-in')).toContainText('Accepted by all Visa & MasterCard affiliated Merchant outlets.');
    await expect(page.getByText('Online ShoppingMake online')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Online Shopping');
    await expect(page.locator('#page-wrap-in')).toContainText('Make online purchases or shop online.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'I&M Cards: Reliable &' }).getByRole('img').nth(1)).toBeVisible();
    await expect(page.getByText('Worldwide AccessOver 3.5')).toBeVisible();
    await expect(page.locator('circle')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Worldwide Access');
    await expect(page.locator('#page-wrap-in')).toContainText('Over 3.5 Million ATM’s all over the world.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'CardsChoose among a range of' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Cards');
    await expect(page.locator('#page-wrap-in')).toContainText('Choose among a range of credit, debit and pre-paid cards to carry with you wherever you go.');
    await expect(page.getByRole('link', { name: 'Find out more  Credit Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Credit Cards');
    await expect(page.locator('#page-wrap-in')).toContainText('Choose among a range of credit cards with many advantages like free credit period and loyalty points for usage.');
    await expect(page.getByRole('link', { name: 'Find out more  Debit Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Debit Cards');
    await expect(page.locator('#page-wrap-in')).toContainText('Mastercard & Visa Cards that directly debits funds from your bank account for worldwide usage.');
    await expect(page.getByRole('link', { name: 'Find out more  Prepaid Cards' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Prepaid Cards');
    await expect(page.locator('#page-wrap-in')).toContainText('Choose among a range of prepaid cards when travelling in Kenya or internationally.');
    await expect(page.locator('#page-wrap-in section').filter({ hasText: 'The new I&M MasterCard' })).toBeVisible();
    await expect(page.locator('.feature-18-container')).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('The new I&M MasterCard Multicurrency Prepaid Card');
    await expect(page.locator('#page-wrap-in')).toContainText('A MasterCard pre-paid card in multiple major currencies suitable for use while travelling and shopping overseas');
    await expect(page.locator('#page-wrap-in')).toContainText('Learn More');
    await expect(page.getByRole('img', { name: 'The new I&M MasterCard' }).first()).toBeVisible();
});

async function test_Credit_Card(page) {
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
async function test_Debit_Card(page) {

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




async function Prepaid_Cards(page) {

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
test('test Credit Card', async ({ page }) => {
    await test_Credit_Card(page)
});
test('test Debit Cards', async ({ page }) => {
    await test_Debit_Card(page)
});

test('test Prepaid Card', async ({ page }) => {
    await Prepaid_Cards(page)
});


async function verifyLoanLinksVisibility(page) {
    await expect(page.getByRole('link', { name: 'Car | Vehicle Loan' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Car | Vehicle Loan');
    await expect(page.getByRole('link', { name: 'House | Mortgage Loan' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('House | Mortgage Loan');
}

// Usage:
async function RequestCallBackEnter(page) {
    await page.goto('https://www.imbankgroup.com/ke/personal/loans/car-loans/');
    // await page.click('text=Car Loans');

    await expect(page.getByText('Request Call BackEnter')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Request Call Back' })).toBeVisible();
    await expect(page.locator('#page-wrap')).toContainText('Request Call Back');
    await expect(page.locator('#page-wrap')).toContainText('Enter Contact Details');
    await expect(page.locator('#page-wrap')).toContainText('We are available from 9:00 AM to 4:00 PM Weekly.');
    await expect(page.getByText('We are available from 9:00 AM').first()).toBeVisible();
}

test('testRequest Call BackEnter', async ({ page }) => {
    await RequestCallBackEnter(page);
});

async function ApplyInPerson(page) {
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

async function testRequestCallback(page) {
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


async function applyForLoan(page) {
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

async function testLoans(page) {


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

async function verifyCarLoanFormFields(page) {
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

test('test Loans', async ({ page }) => {
    await testLoans(page);
});

test('test Car Loans', async ({ page }) => {
    await testLoans(page);
});

async function verifyhomeCalculator(page) {
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

async function test_Home_Loans(page) {
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

test('test Home Loans', async ({ page }) => {
    await test_Home_Loans(page);
});


async function testUnsecured_Personal_Loan(page) {
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
test('test Unsecured Personal loans', async ({ page }) => {
    await testUnsecured_Personal_Loan(page);
});


async function testWealthManagementService(page) {
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

test('test Wealth Management Service', async ({ page }) => {
    await testWealthManagementService(page)

});
async function testCustodialServices(page) {
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
test('testCustodial Services', async ({ page }) => {
    await testCustodialServices(page)

});
async function verifypersonalinsurancelink(page) {
    await expect(page.getByRole('link', { name: 'Bancassurance' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Bancassurance');
    await expect(page.getByRole('link', { name: 'Insurance Premium Financing' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Insurance Premium Financing');
}

async function verifyinsurance(page) {
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

test('test insurance', async ({ page }) => {
    await verifyinsurance(page)
});
test('test bancassurance', async ({ page }) => {
    await verifyinsurance(page)
});



async function test_InsurancePremiumFinancing(page) {
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
test('test Insurance Premium Financing', async ({ page }) => {
    await test_InsurancePremiumFinancing(page)
});
async function verifypersonaltransfer(page) {
    await expect(page.getByRole('link', { name: 'Local & International Transfer' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Local & International Transfer');
    await expect(page.getByRole('link', { name: 'Government Payments' })).toBeVisible();
    await expect(page.locator('#page-wrap-in')).toContainText('Government Payments');
}

async function testTransferslocal(page) {
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

async function testTransfersgovernments(page) {


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
test('test transfers', async ({ page }) => {
    await testTransferslocal(page)
});

test('test local-and-international-transfers', async ({ page }) => {
    await testTransferslocal(page)
});

test('test Government Payments', async ({ page }) => {
    await testTransfersgovernments(page)
});

// //business
// async function bankmenudropdown(page) {
//     await navigateTo(page, 'https://www.imbankgroup.com/ke/');
//     //await page.getByText('Business Accounts').click();
//     await page.locator('#menu-item-12095').getByRole('link', { name: 'Business' }).click();

//     // Hover over 'Business' to reveal the menu
//     await page.hover('#menu-item-12095');

//     // Find the 'Accounts +' link within the revealed menu
//     await page.$('text=Business Accounts +');
//     await page.hover('text=Business Accounts');
//     await expect(page.getByRole('link', { name: 'Business Accounts -' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Business Accounts', exact: true })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Special Accounts' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Fixed Deposit' })).toBeVisible();
//     // Hover over 'Business' to reveal the menu
//     await page.hover('#menu-item-12095');

//     // Find the 'Accounts +' link within the revealed menu
//     await page.$('text=Business Solutions +');
//     await page.hover('text=Business Solutions');
//     await expect(page.getByRole('link', { name: 'Business Solutions -' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Faster Paybill' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'I&M Webpay' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Remote Cheque Scanning' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Remote Cheque Scanning' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'German Desk' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Business Connect' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Business Connect' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Cash MGT Service' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Direct Debit Scheme' })).toBeVisible();
//     await expect(page.locator('#menu-item-16556').getByRole('link', { name: 'Trade Finance' })).toBeVisible();

//     // Hover over 'Business' to reveal the menu
//     await page.hover('#menu-item-12095');

//     await page.hover('text=Loans +');
//     await page.hover('#menu-item-16557');

//     // Hover over 'Loans' within the submenu
//     await page.hover('text=Loans');
//     // Verify the visibility of loan options
//     await expect(page.getByRole('link', { name: 'Loans -' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Asset Finance' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Business Loans' })).toBeVisible();

//     // Hover over 'Business' to reveal the menu
//     await page.hover('#menu-item-12095');

//     // Find the 'Accounts +' link within the revealed menu
//     await page.$('text=Investment +');
//     await page.hover('text=Investment');
//     await expect(page.getByRole('link', { name: 'Investment -' })).toBeVisible();
//     await expect(page.locator('#menu-item-16581').getByRole('link', { name: 'Custodial Services' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'I&M Burbidge Capital' })).toBeVisible();
//     await page.hover('#menu-item-12095');

//     // Find the 'Accounts +' link within the revealed menu
//     await page.$('text=Insurance +');
//     await page.hover('text=Insurance');
//     await expect(page.getByRole('link', { name: 'Insurance -' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Bancassurance' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Insurance Premium Financing' })).toBeVisible();
//     await page.hover('#menu-item-12095');

//     // Find the 'Accounts +' link within the revealed menu
//     await page.$('text=Transfers +');
//     await page.hover('text=Transfers');
//     await expect(page.getByRole('link', { name: 'Transfers -' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Government Payments' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Local & International' })).toBeVisible();
// }

// async function bankmenulink(page) {
//     await expect(page.locator('#page-wrap-in')).toContainText('Business Banking');
//     await expect(page.locator('#menu-item-11734')).toBeVisible();
//     await expect(page.locator('#menu-item-11734')).toContainText('Accounts');
//     await expect(page.locator('#menu-item-11406').getByRole('link', { name: 'Business Solutions' })).toBeVisible();
//     await expect(page.locator('#menu-item-11406')).toContainText('Business Solutions');
//     await expect(page.locator('#menu-item-11410').getByRole('link', { name: 'Trade Finance' })).toBeVisible();
//     await expect(page.locator('#menu-item-11410')).toContainText('Trade Finance');
//     await expect(page.locator('#menu-item-11407')).toBeVisible();
//     await expect(page.locator('#menu-item-11407')).toContainText('Loans');
//     await expect(page.locator('#menu-item-11409').getByRole('link', { name: 'Investment' })).toBeVisible();
//     await expect(page.locator('#menu-item-11409')).toContainText('Investment');
//     await expect(page.locator('#menu-item-11408').getByRole('link', { name: 'Insurance' })).toBeVisible();
//     await expect(page.locator('#menu-item-11408')).toContainText('Insurance');
//     await expect(page.locator('#menu-item-11411').getByRole('link', { name: 'Transfers' })).toBeVisible();
//     await expect(page.locator('#menu-item-11411')).toContainText('Transfers');

// }
// async function bankaccountsfloat(page) {
//     await expect(page.getByRole('link', { name: 'Business Accounts' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Business Accounts');
//     await expect(page.getByRole('link', { name: 'Special Accounts' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Special Accounts');
//     await expect(page.getByRole('link', { name: 'Fixed Deposit' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Fixed Deposit');
// }
// test('test business dropdown', async ({ page }) => {
//     await bankmenudropdown(page)
// });

// test('Business Accounts', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto("https://www.imbankgroup.com/ke/business/business-accounts/")
//     //await page.getByRole('link', { name: 'Business Accounts -' }).click();
//     await expect(page.locator('h1')).toBeVisible();
//     await expect(page.locator('h1')).toContainText('Business Banking Accounts');

//     await bankmenulink(page)
//     await bankaccountsfloat(page)

//     await expect(page.locator('div').filter({ hasText: 'Business Banking Accounts With our Business Banking Accounts you get: Free e-' }).nth(3)).toBeVisible();
//     await page.locator('h1').click();
//     await expect(page.locator('h1')).toBeVisible();
//     await expect(page.locator('h1')).toContainText('Business Banking Accounts');
//     await expect(page.locator('#page-wrap-in')).toContainText('With our Business Banking Accounts you get:');
//     await expect(page.locator('li').filter({ hasText: 'Free e-mail statements' })).toBeVisible();
//     await expect(page.locator('li').filter({ hasText: 'Free e-mail statements' }).locator('path')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Free e-mail statements');
//     await expect(page.locator('li').filter({ hasText: 'Business connect platform' })).toBeVisible();
//     await expect(page.locator('li:nth-child(2) > .list-inline-item-icon > .svg-scaler > #Capa_1 > g > g > g > .active-path').first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Business connect platform access');
//     await expect(page.locator('li').filter({ hasText: 'Free Daily Transaction' })).toBeVisible();
//     await expect(page.locator('li').filter({ hasText: 'Free Daily Transaction' }).locator('path').first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Free Daily Transaction Notifications');
//     await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Business' })).toBeVisible();

//     await expect(page.locator('h2').filter({ hasText: 'Business Banking Accounts' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Business Banking Accounts');
//     await expect(page.locator('#page-wrap-in')).toContainText('Products designed specifically for your business');
//     await expect(page.getByRole('link', { name: 'Find out more  Business' }).nth(1)).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Find out more  Business' }).nth(1)).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Find out more  Business' }).nth(2)).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Find out more  Business' }).nth(2)).toBeVisible();
//     await page.getByLabel('Next slide').click();
//     await expect(page.getByRole('link', { name: 'Find out more  Sapphire FCY' }).nth(1)).toBeVisible();
//     await expect(page.getByLabel('Next slide')).toBeVisible();
//     await page.getByLabel('Next slide').click();
//     await expect(page.getByRole('link', { name: 'Find out more  Business' }).nth(3)).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'Compare Business Accounts' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Compare Business Accounts');
//     await expect(page.getByText('Compare Business AccountsSelect an accountBusiness Current Account Business')).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'Select an account' }).first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Select an account');
//     await expect(page.getByRole('heading', { name: 'Select an account' }).nth(1)).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Select an account');
//     await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
//     await page.locator('li').filter({ hasText: 'Business Current Account' }).locator('div').first().click();
//     await expect(page.locator('#page-wrap-in')).toContainText('Business Current Account');
//     await expect(page.locator('#page-wrap-in')).toContainText('Business Current AccountOpening balanceKES 1,000Minimum balance to be maintainedNilAccount maintenance feeNilMonthly feeKsh 500 (for first 75 transactions per month free of ledger fees)Monthly Ledger feeKES 10 per transaction after first 75 free transactions per monthDebit card issuance fee (MasterCard Platinum)KES 500Debit card annual feesKES 500 per annum per cardI&M ATM cash withdrawalKes 33Other ATM cash withdrawalKes 55Cheque book issuance (per leaf)Kes 17Transfer within I&MFreeOther transaction chargesAs per the general tariffOther Account benefitsFree e-statement, daily sms/email notifcations Learn More');
//     await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont > .dropdown-select-icon > .bi').first().click();
//     await page.locator('div').filter({ hasText: /^iMinVest Chama$/ }).first().click();
//     await expect(page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('iMinVest Chama Account opening and minimum balanceKes 2,000Account maintenance feesNilE-statementsFreeCheque Book OptionAvailableLedger feesNil Learn More');
//     await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
//     await page.locator('div').filter({ hasText: /^Diplomatic account$/ }).first().click();
//     await expect(page.locator('#page-wrap-in')).toContainText('Diplomatic accountFlat monthly feesNegotiable between Kes 0- 10,000Available currency optionsKES and /or GBP/EUR/USDCheque Book per leafFree except stamp duty (KES 2.50)Account maintenance feesNilAccount ledger feesNilMonthly e-statements and daily email transaction notificationsFreeOver- the- counter transactionsUnlimited and free Learn More');
//     await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont > .dropdown-select-icon > .bi').first().click();
//     await page.locator('div').filter({ hasText: /^Noble Account$/ }).first().click();
//     await expect(page.locator('#page-wrap-in')).toContainText('Noble AccountMinimum Balance, and nil for GBP, USD and Euro accounts10,000/-Ledger FeesNilFor receiving online donationsE-commerceInterest earning from balances of 5,000 for FCY(GBP, USD & Euro)5,000/-Cheque BookFree (except stamp duty )Incoming SWIFT and RTGSFreeInterest is payableNil Learn More');
//     await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
//     await page.locator('li').filter({ hasText: 'Sapphire FCY Account' }).first().click();
//     await expect(page.getByText('Sapphire FCY AccountAccount')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Sapphire FCY AccountAccount opening balanceUSD/EUR/GBP 100 or equivalent in other currencies.Account maintenance chargesNilTransaction ledger feesNilQuarterly account statementFree via email (or at your preferred frequency).I&M USD Visa Debit card*Available for USD accounts only (Attractive reward points on Debit Card POS/Online transactions)Access to Electronic Banking Channels ( Mobile and Internet Banking)FreeInterest paymentAccrued on daily balances and paid quarterlyCheque BookAvailable at USD 0.2 per leafCash transactionsCash deposit fee apply as per tariffChinese Yuan and UAE Dirham accountsAvailable (Contact us for details) Learn More');
//     await page.locator('div:nth-child(2) > .comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
//     await page.locator('div:nth-child(2) > .comparison-table-dropdown-cont > .dropdown > .dropdown-menu > li > .media').first().click();
//     await expect(page.locator('#page-wrap-in')).toContainText('Select an accountBusiness Current Account Business Current AccountBusiness Premier Current AccountiMinVest ChamaDiplomatic accountNoble AccountBusiness Current AccountOpening balanceKES 1,000Minimum balance to be maintainedNilAccount maintenance feeNilMonthly feeKsh 500 (for first 75 transactions per month free of ledger fees)Monthly Ledger feeKES 10 per transaction after first 75 free transactions per monthDebit card issuance fee (MasterCard Platinum)KES 500Debit card annual feesKES 500 per annum per cardI&M ATM cash withdrawalKes 33Other ATM cash withdrawalKes 55Cheque book issuance (per leaf)Kes 17Transfer within I&MFreeOther transaction chargesAs per the general tariffOther Account benefitsFree e-statement, daily sms/email notifcations Learn More');
//     await expect(page.locator('#page-wrap-in')).toContainText('Business Current AccountOpening balanceKES 1,000Minimum balance to be maintainedNilAccount maintenance feeNilMonthly feeKsh 500 (for first 75 transactions per month free of ledger fees)Monthly Ledger feeKES 10 per transaction after first 75 free transactions per monthDebit card issuance fee (MasterCard Platinum)KES 500Debit card annual feesKES 500 per annum per cardI&M ATM cash withdrawalKes 33Other ATM cash withdrawalKes 55Cheque book issuance (per leaf)Kes 17Transfer within I&MFreeOther transaction chargesAs per the general tariffOther Account benefitsFree e-statement, daily sms/email notifcations Learn More');
//     await page.locator('div:nth-child(2) > .comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont > .dropdown-select > .media > .dropdown-media-text').click();
//     await page.locator('li').filter({ hasText: 'Business Premier Current' }).nth(1).click();
//     await expect(page.locator('#page-wrap-in')).toContainText('Business Premier Current AccountOpening balanceKES 10,000Minimum balance to be maintainedKES 10,000Account maintenance feeNilMonthly feeNilMonthly Ledger feeKES 10 per transaction, min kes 300 per month, max kes 3000Debit card issuance fee (MasterCard Platinum)KES 500Debit card annual feesKES 500 per annum per cardI&M ATM cash withdrawalKes 33Other ATM cash withdrawalKes 55Cheque book issuance (per leaf)Kes 17Transfer within I&MFreeOther transaction chargesAs per the general tariffOther Account benefitsFree e-statement, daily sms/email notifcations Learn More');
//     await page.locator('div:nth-child(2) > .comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
//     await page.locator('li').filter({ hasText: 'iMinVest Chama' }).nth(1).click();
//     await expect(page.locator('#page-wrap-in')).toContainText('iMinVest Chama Account opening and minimum balanceKes 2,000Account maintenance feesNilE-statementsFreeCheque Book OptionAvailableLedger feesNil Learn More');
//     await page.getByText('iMinVest Chama').first().click();
//     await page.locator('div').filter({ hasText: /^Diplomatic account$/ }).nth(2).click();
//     await expect(page.locator('#page-wrap-in')).toContainText('Diplomatic accountFlat monthly feesNegotiable between Kes 0- 10,000Available currency optionsKES and /or GBP/EUR/USDCheque Book per leafFree except stamp duty (KES 2.50)Account maintenance feesNilAccount ledger feesNilMonthly e-statements and daily email transaction notificationsFreeOver- the- counter transactionsUnlimited and free Learn More');
//     await page.getByText('Diplomatic account').first().click();
//     await page.locator('div').filter({ hasText: /^Noble Account$/ }).nth(2).click();
//     await expect(page.locator('#page-wrap-in')).toContainText('Noble AccountMinimum Balance, and nil for GBP, USD and Euro accounts10,000/-Ledger FeesNilFor receiving online donationsE-commerceInterest earning from balances of 5,000 for FCY(GBP, USD & Euro)5,000/-Cheque BookFree (except stamp duty )Incoming SWIFT and RTGSFreeInterest is payableNil Learn More');
// });



// test('test Special Accounts', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto('https://www.imbankgroup.com/ke/business/business-accounts/special-accounts/');
//     await page.getByRole('link', { name: 'Special Accounts' }).click();
//     await bankmenulink(page)
//     await bankaccountsfloat(page)
//     await expect(page.locator('div').filter({ hasText: 'Business Special Accounts Tailor made accounts Dedicated relationship manager' }).nth(3)).toBeVisible();
//     await expect(page.getByText('Business Special Accounts Tailor made accounts Dedicated relationship manager')).toBeVisible();
//     await expect(page.locator('h1')).toContainText('Business Special Accounts');
//     await expect(page.locator('li').filter({ hasText: 'Tailor made accounts' })).toBeVisible();
//     await expect(page.locator('li').filter({ hasText: 'Tailor made accounts' }).locator('#Layer_1')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Tailor made accounts');
//     await expect(page.locator('li').filter({ hasText: 'Dedicated relationship manager' })).toBeVisible();
//     await expect(page.locator('ul').filter({ hasText: 'Tailor made accounts' }).locator('#Capa_1')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Dedicated relationship manager');
//     await expect(page.locator('li').filter({ hasText: 'Secure Banking' })).toBeVisible();
//     await expect(page.locator('li').filter({ hasText: 'Secure Banking' }).locator('#Layer_1')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Secure Banking');
//     await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Business' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Business Special AccountsSpecifically designed to meet the banking needs of' })).toBeVisible();
//     await expect(page.locator('h2').filter({ hasText: 'Business Special Accounts' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Business Special Accounts');
//     await expect(page.locator('#page-wrap-in')).toContainText('Specifically designed to meet the banking needs of your organisation');
//     await expect(page.getByRole('link', { name: 'Find out more  Noble Account' }).first()).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Find out more  Diplomatic' }).nth(1)).toBeVisible();
//     await page.getByLabel('Next slide').click();
//     await expect(page.getByRole('link', { name: 'Find out more  iMinVest' }).nth(1)).toBeVisible();
//     await page.getByLabel('Next slide').click();
//     await expect(page.getByRole('heading', { name: 'Compare Business Accounts' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Compare Business Accounts');
//     await expect(page.getByText('Compare Business AccountsSelect an accountiMinVest Chama iMinVest ChamaNoble')).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'Select an account' }).first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Select an account');
//     await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
//     await page.locator('li').filter({ hasText: 'iMinVest Chama' }).locator('div').first().click();
//     await expect(page.getByText('Select an accountiMinVest Chama iMinVest ChamaNoble AccountiMinVest Chama')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('iMinVest Chama Account opening and minimum balanceKes 2,000Account maintenance feesNilE-statementsFreeCheque Book OptionAvailableLedger feesNil Learn More');
//     await page.locator('.comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
//     await page.locator('li').filter({ hasText: 'Noble Account' }).first().click();
//     await expect(page.locator('#page-wrap-in')).toContainText('Noble AccountMinimum Balance, and nil for GBP, USD and Euro accounts10,000/-Ledger FeesNilFor receiving online donationsE-commerceInterest earning from balances of 5,000 for FCY(GBP, USD & Euro)5,000/-Cheque BookFree (except stamp duty )Incoming SWIFT and RTGSFreeInterest is payableNil Learn More');
//     await expect(page.getByRole('heading', { name: 'Select an account' }).nth(1)).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Diplomatic accountFlat monthly feesNegotiable between Kes 0- 10,000Available currency optionsKES and /or GBP/EUR/USDCheque Book per leafFree except stamp duty (KES 2.50)Account maintenance feesNilAccount ledger feesNilMonthly e-statements and daily email transaction notificationsFreeOver- the- counter transactionsUnlimited and free Learn More');
//     await page.locator('div:nth-child(2) > .comparison-table-dropdown-cont > .dropdown > .dropdown-select-cont').first().click();
//     await page.locator('li').filter({ hasText: 'iMinVest Chama' }).nth(1).click();
//     await expect(page.locator('#page-wrap-in')).toContainText('iMinVest Chama Account opening and minimum balanceKes 2,000Account maintenance feesNilE-statementsFreeCheque Book OptionAvailableLedger feesNil Learn More');
// });
// test('test Fixed Deposit', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto('https://www.imbankgroup.com/ke/accounts/fixed-deposit/')
//     await page.getByRole('link', { name: 'Fixed Deposit' }).click();
//     await expect(page.locator('h1')).toBeVisible();
//     await expect(page.locator('h1')).toContainText('Fixed Deposit');
//     await Personal_Banking_menu(page)
//     await bankaccountsfloat(page)
//     await expect(page.locator('h1')).toContainText('Fixed Deposit');
//     await expect(page.locator('#page-wrap-in')).toContainText('The deposit options are available in Kenya Shillings as well as a host of foreign currencies');
//     await expect(page.locator('li').filter({ hasText: 'High Interest Rate' }).getByRole('img')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('High Interest Rate');
//     await expect(page.locator('li').filter({ hasText: 'Available in multiple' }).locator('#Capa_1')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Available in multiple currencies');
//     await expect(page.locator('li').filter({ hasText: 'Ranging from 1 Month to 1 Year' }).locator('path')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Ranging from 1 Month to 1 Year');
//     await expect(page.locator('#overview').getByRole('heading', { name: 'Fixed Deposit' })).toBeVisible();
//     await expect(page.locator('#overview')).toContainText('Fixed-term deposits yielding high returns. I&M Bank Fixed Deposits are accounts opened for fixed contracted periods, currently ranging from 1 month to 1 year. They earn interest at attractive rates, thus providing customers with long term savings growth opportunities. Fixed Deposits can be opened in Kenya Shillings | US Dollars | Euro GB Pounds | South African Rand');
//     await expect(page.locator('#overview').getByRole('link', { name: 'VIEW RATES' })).toBeVisible();
//     await expect(page.locator('#overview')).toContainText('VIEW RATES');
//     await expect(page.getByRole('heading', { name: 'Features' })).toBeVisible();
//     await expect(page.locator('#features')).toContainText('Features');
//     await expect(page.locator('#features')).toContainText('Minimum Deposit50,000/-');
//     await expect(page.locator('#features')).toContainText('Term1 month to 1yr');
//     await expect(page.locator('#requirements')).toBeVisible();
//     await expect(page.locator('#requirements')).toContainText('Fixed Term Deposit');
//     await expect(page.locator('#requirements')).toContainText('Get attractive interest rates with our fixed-term deposits in either Kenya shillings or other popular foreign currencies.');
//     await expect(page.locator('#requirements').getByRole('link', { name: 'VIEW RATES' })).toBeVisible();
//     await expect(page.locator('#requirements')).toContainText('VIEW RATES');
//     await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Looking for a better fit' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Looking for a better fit');
//     await expect(page.locator('#page-wrap-in')).toContainText('Flexi Deposit Builder');
//     await expect(page.locator('#page-wrap-in')).toContainText('Build up savings automatically regularly and earn higher returns on them');
//     await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Are you interested?');
//     await page.goto('https://www.imbankgroup.com/ke/accounts/fixed-deposit/')
//     await fillAndSubmitForm(page)
// });



// test('test Business Solutions', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto('https://www.imbankgroup.com/ke/business/business-solutions/')
//     await page.getByRole('link', { name: 'Business Solutions -' }).click();
//     await bankmenulink(page)
//     await expect(page.locator('div').filter({ hasText: 'From SMEs to Large' }).nth(3)).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'From SMEs to Large Corporates' })).toBeVisible();
//     await expect(page.locator('h1')).toContainText('From SMEs to Large Corporates');
//     await expect(page.locator('#page-wrap-in')).toContainText('Our large range of business solutions has been tailor-made to suit the needs of individual business requirements.');
//     await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Business' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Business Solutions' }).nth(1)).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Business Solutions');
//     await expect(page.getByRole('heading', { name: 'Offering you a wide range of' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Offering you a wide range of business products to suit the needs of your organisation!');
//     await expect(page.getByRole('link', { name: 'Lipa na I&M Bank  Faster' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Faster PaybillStart receiving business payments in a matter of minutes.');
//     await expect(page.locator('div').filter({ hasText: 'Offering you a wide range of' }).nth(3)).toBeVisible();
//     await expect(page.getByRole('link', { name: 'E-Commerce  I&M Webpay Keep' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('I&M WebpayKeep your business open 24/7 with I&M Webpay');
//     await expect(page.getByRole('link', { name: 'Remote Cheque Scanning ' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Remote Cheque ScanningScan Cheques from your office');
//     await expect(page.getByRole('link', { name: 'German Desk  German Desk' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('German DeskFinancial support and solutions for East Africa exclusively at I&M Bank.');
//     await expect(page.getByRole('link', { name: 'Business Connect  Business' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Business ConnectEfficient Payments and Collections solution for your business');
//     await expect(page.getByRole('link', { name: 'Cash Management Service ' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Cash MGT ServiceSecure cash transportation.');
//     await expect(page.getByRole('link', { name: 'Direct Debit Scheme  Direct' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Direct Debit SchemeEasily collect regular payments from your customers');
//     await expect(page.getByRole('link', { name: 'API Gateway  I&M API Gateway' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('I&M API Gatewayfacilitates straight through processing (STP) of payments directly from our Customer’s ERP system');
//     await expect(page.locator('.feature-18-section > .container > .row > .col')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Salary Transfer Service');
//     await expect(page.locator('#page-wrap-in')).toContainText('Quick Transfer to EmployeeEasy ProcessMinimal Charge');
//     await expect(page.getByRole('img', { name: 'Salary Transfer Service' })).toBeVisible();
// });



// test('test Faster Paybill', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto('https://www.imbankgroup.com/ke/business-solutions/im-webpay-2/')
//     await page.getByRole('link', { name: 'Faster Paybill' }).click();
//     await bankmenulink(page)
//     await expect(page.locator('h1')).toContainText('Faster Paybill');
//     await expect(page.locator('#page-wrap-in')).toContainText('Start receiving business payments in a matter of minutes.');
//     await expect(page.locator('div').filter({ hasText: 'Faster PaybillStart receiving' }).nth(3)).toBeVisible();
//     await expect(page.locator('li').filter({ hasText: 'Instant Credit to your Account' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'Instant Credit to your Account' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Instant Credit to your Account');
//     await expect(page.locator('li').filter({ hasText: 'Free Confirmation SMSs' })).toBeVisible();
//     await expect(page.locator('li').filter({ hasText: 'Free Confirmation SMSs' }).getByRole('img')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Free Confirmation SMSs');
//     await expect(page.locator('li').filter({ hasText: 'Zero Charge to Business and' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'Zero Charge to Business and' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Zero Charge to Business and Customer');
//     await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Faster' })).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'FAST | EFFICIENT | FREE' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('FAST | EFFICIENT | FREE');
//     await expect(page.locator('#page-wrap-in')).toContainText('We offer you a personalised M-PESA Paybill Short code linked to your Bank account to facilitate receipt of payments from your customers. Payments are credited to your Bank Account instantly and an alert is sent to both yourself and your customer.Set up within a day and the service is free – no charges** Charges are subject to future Tariff reviews. We are eager to see your business take off to great heights by facilitating faster payments via M-PESA paybill. We get you set-up within a day after receiving your request.');
//     await expect(page.locator('#page-wrap-in section').filter({ hasText: 'BenefitsGet on board and' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Benefits');
//     await expect(page.locator('#page-wrap-in')).toContainText('Get on board and start enjoying a host of benefits;Zero charges to your business.Zero charges to your customers.Instant credit to your Bank accountFree confirmation SMS to your business and your customer.Get a short code (Business Number) for your business M-PESA paymentsYou can choose business number of your choice subject to availability.We can validate your customer numbers for higher accuracy e.g. student number, membership number, utility number, invoice, or payment ref. numberSet up done within 24 hours after receiving application form.Free customized reports for your business.Receive higher limits per transaction , up to Kes 150,000.');
//     await expect(page.locator('#page-wrap-in section').filter({ hasText: 'Want more information?For set' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Want more information?');
//     await expect(page.locator('#page-wrap-in')).toContainText('For set-up kindly contact your Relationship Manager or nearest I&M Bank Branch.');
//     await ApplyInPerson(page)
//     await testRequestCallback(page)
//     await applyForLoan(page)
//     await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
//     await fillAndSubmitForm(page)
// });
// test('test I&M Webpay', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto('https://www.imbankgroup.com/ke/business-solutions/im-webpay/')

//     await bankmenulink(page)

//     await page.getByRole('link', { name: 'I&M Webpay' }).click();
//     await expect(page.locator('div').filter({ hasText: 'E-Commerce | I&M WebpayKeep' }).nth(3)).toBeVisible();
//     await expect(page.locator('h1')).toContainText('E-Commerce | I&M Webpay');
//     await expect(page.locator('#page-wrap-in')).toContainText('Keep your business open 24/7 with I&M Webpay');
//     await expect(page.locator('li').filter({ hasText: 'Keep your business open 24/' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Keep your business open 24/7');
//     await expect(page.locator('li').filter({ hasText: 'Accepts Visa, MasterCard and' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Accepts Visa, MasterCard and Union Pay');
//     await expect(page.locator('li').filter({ hasText: 'Safe and Secure for Customer' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Safe and Secure for Customer and Merchant');
//     await expect(page.getByRole('img', { name: 'I&M Bank Kenya - I&M Webpay' })).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'Benefits' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Convenience; customers make payments online from the comfort of their offices, homes, mobile phones, or cyber cafes after making purchases on your website.Wider reach; away from the conventional “Brick & Mortar” setup, internet acquiring enables you as the merchant to sell your goods and services online both locally and internationally. Your online shop is also open to the whole world 24/7.In the event someone wishes to purchase your services/products for a friend or family, online payment makes it very easy.Safe & secure; better than carrying cash around for both the customer and the merchant. The service also features 3D Secure, a state-of-the-art authentication process that ensures only the authorized cardholder is making the purchase, thus reducing the chances of fraud.Shorter settlement turnaround time of 3 working days (T+3)Currency in USD Dollar or Kenya ShillingsSupports all Visa, Union Pay, and MasterCard prepaid, debit, credit cards including Visa Electron and Maestro');
//     await expect(page.getByText('3 Options for different categories of merchants: Learn More LiteThis is best')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('3 Options for different categories of merchants:');
//     await expect(page.getByRole('link', { name: 'Learn More ' }).first()).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Learn More ' }).nth(1)).toBeVisible();
//     await expect(page.getByText('Learn More LinkThe Link')).toBeVisible();
//     await expect(page.locator('.feature-49-section > .container > .row > .col')).toBeVisible();
//     await expect(page.getByRole('img', { name: 'Jambo Jet' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'Precision Air' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'Rwanda Air' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'Travel star' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'Kenya Red Cross' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'Jambopay' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'Gamewatch Safaris' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'Kicheche' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'The Tamari Group' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'GA Insurance' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'Kaps' })).toBeVisible();
//     await expect(page.getByRole('img', { name: 'chelli & peacock safaris' })).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'Want more information?' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Want more information?');
//     await expect(page.getByRole('link', { name: 'cardacquiring@imbank.co.ke' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('cardacquiring@imbank.co.ke');
//     await ApplyInPerson(page)
//     await testRequestCallback(page)
//     await applyForLoan(page)
//     await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
//     await fillAndSubmitForm(page)
// });

// test('test remote-cheque-scanning', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto('https://www.imbankgroup.com/ke/business-solutions/remote-cheque-scanning/')

//     await bankmenulink(page)

//     await page.getByRole('link', { name: 'Remote Cheque Scanning' }).click();
//     await expect(page.locator('div').filter({ hasText: 'Remote Cheque ScanningRemotely bank cheques from the comfort of your office.' }).nth(3)).toBeVisible();
//     await expect(page.locator('h1')).toContainText('Remote Cheque Scanning');
//     await expect(page.locator('#page-wrap-in')).toContainText('Remotely bank cheques from the comfort of your office.');
//     await expect(page.locator('li').filter({ hasText: 'Scan cheques form the comfort' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Scan cheques form the comfort of your office');
//     await expect(page.locator('li').filter({ hasText: 'Real-time review of your' }).first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Real-time review of your liquidity');
//     await expect(page.locator('li').filter({ hasText: 'Minimizes fraud' }).first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Minimizes fraud');
//     await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Remote' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('This solution allows your organization to scan cheques through to the bank from the comfort of your office. It enables your organization to transmit the cheque images over an encrypted internet connection to the bank for posting and clearance.');
//     await expect(page.getByRole('heading', { name: 'Features' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('One login for maker-checkersOne login to access multiple accountsAbility to capture drawers name and narrationAbility to have drawers name on the reportAbility to capture post-dated chequesReworking cheques instead of rejecting and scanning again.Option of having admin profile for user management');
//     await expect(page.getByRole('heading', { name: 'Remote Cheque Scanning Benefits' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Remote Cheque Scanning Benefits');
//     await expect(page.locator('#page-wrap-in')).toContainText('Facilitates the means to remotely bank cheques from the comfort of your office.Minimizes fraud.Saves time, offering high value to your institution.Reconciles easily to your internal ERP system.Easy track of cheque transactions.Real-time review of your liquidity.Real-time view of your cheque transaction status.');
//     await expect(page.getByRole('heading', { name: 'Security' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Security');
//     await expect(page.locator('#page-wrap-in')).toContainText('The system has maker checker principle for all transactions.System has a clear audit trail of all activities.');
//     await expect(page.getByRole('heading', { name: 'Portal' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Portal');
//     await expect(page.locator('#page-wrap-in')).toContainText('https://cts.imbank.com/');
//     await expect(page.getByRole('heading', { name: 'Want more information?' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Want more information?');
//     await expect(page.locator('#page-wrap-in')).toContainText('Click above to view the brochure. For more details on this service and how to get started, kindly contact your branch manager or your relationship manager.');
//     await expect(page.getByRole('link', { name: 'Brochure' })).toBeVisible();
//     await ApplyInPerson(page)
//     await testRequestCallback(page)
//     await applyForLoan(page)
//     await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
//     await fillAndSubmitForm(page)
// });
// test('test German Desk', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto('https://www.imbankgroup.com/ke/business-solutions/german-desk/')
//     await page.getByRole('link', { name: 'German Desk' }).click();
//     await page.locator('div').filter({ hasText: /^Error 404$/ }).nth(1).click();
//     await expect(page.getByRole('heading', { name: 'Sorry the page you are' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Sorry the page you are looking for is not found!');
//     await expect(page.locator('#page-wrap-in')).toContainText('Here are some of the helpful links instead:');
//     await expect(page.getByRole('link', { name: 'Personal Banking' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Business Banking' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Diaspora Banking' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Go to Main site' })).toBeVisible();
// });
// test('test Business Connect', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto('https://www.imbankgroup.com/ke/business-solutions/business-connect/')
//     await bankmenulink(page)

//     await page.getByRole('link', { name: 'Business Connect' }).click();
//     await expect(page.locator('p').filter({ hasText: 'Business Banking' }).locator('a')).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'Business Connect', exact: true })).toBeVisible();
//     await expect(page.locator('h1')).toContainText('Business Connect');
//     await expect(page.locator('#page-wrap-in')).toContainText('Efficient Payments and Collections solution for your business');
//     await expect(page.locator('li').filter({ hasText: 'Easy Collection and Payment' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Easy Collection and Payment');
//     await expect(page.locator('li').filter({ hasText: 'Easy Integration' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Easy Integration');
//     await expect(page.locator('li').filter({ hasText: 'Real time' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Real time');
//     await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Business' })).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'B2B API Integration' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('B2B API Integration');
//     await expect(page.locator('#page-wrap-in')).toContainText('I&M Business Connect presents an efficient and convenient way for organizations to collect and account for payments owed to them by their customers or members. As a value add, we provide you with instant payment notifications for all successful payments.');
//     await expect(page.locator('#page-wrap-in section').filter({ hasText: 'We have two options below' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('We have two options below based on your organization set-up.a) Direct integration with your Information System or Account System. This allows for real time customer details validation and subsequent update of your ERP system with successful payments collected by the Bank. Through our business connect (B2B) API integration collection solution, I&M Bank shall integrate with your ERP/system where your customers will be able to deposit cash and cheques at any of our branches or do electronic funds transfers and the payments will be updated directly into the ERP. This solution shall greatly improve the operational efficiency and eliminate the cash handling risks from your officers.b) Free Web portal and Mobile App this is available if you don’t have a system yet or your current system is not ready for integration. This will enable you access your payment reports and upload billing information.I&M Business Connect is ideal for:1. Fees collection in schools, universities, colleges, and other institutions2. Rent collections3. Membership subscriptions for clubs or professional bodies4. Utility bills collections5. Invoice/bill collections in businesses against goods/services soldKey payment channels available to our customers:1. Cash and Cheque deposits at I&M Bank branches2. Mobile Money - M-Pesa Paybill3. Pesalink4. RTGSFeatures:1. Transaction reference pre-validation Capability2. System Integration Capability3. Payments Notifications4. Reconciliation & SettlementBenefits:1. Real Time update of payments and receipts on your ERP System2. No manual/delayed upload to corporate system3. Ease of reconciliation4. Access to detailed reports for all transactions5. Validation against the unique Customer Number/Reference Number etc');
//     await expect(page.locator('#page-wrap-in')).toContainText('a) Direct integration with your Information System or Account System. This allows for real time customer details validation and subsequent update of your ERP system with successful payments collected by the Bank. Through our business connect (B2B) API integration collection solution, I&M Bank shall integrate with your ERP/system where your customers will be able to deposit cash and cheques at any of our branches or do electronic funds transfers and the payments will be updated directly into the ERP. This solution shall greatly improve the operational efficiency and eliminate the cash handling risks from your officers.b) Free Web portal and Mobile App this is available if you don’t have a system yet or your current system is not ready for integration. This will enable you access your payment reports and upload billing information.');
//     await expect(page.getByRole('heading', { name: 'I&M Business Connect is ideal' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('I&M Business Connect is ideal for:');
//     await expect(page.locator('#page-wrap-in')).toContainText('1. Fees collection in schools, universities, colleges, and other institutions2. Rent collections3. Membership subscriptions for clubs or professional bodies4. Utility bills collections5. Invoice/bill collections in businesses against goods/services sold');
//     await expect(page.getByRole('heading', { name: 'Key payment channels' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Key payment channels available to our customers:');
//     await expect(page.locator('#page-wrap-in')).toContainText('1. Cash and Cheque deposits at I&M Bank branches2. Mobile Money - M-Pesa Paybill3. Pesalink4. RTGS');
//     await expect(page.getByRole('heading', { name: 'Features:' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('1. Transaction reference pre-validation Capability2. System Integration Capability3. Payments Notifications4. Reconciliation & Settlement');
//     await expect(page.getByRole('heading', { name: 'Benefits:' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('1. Real Time update of payments and receipts on your ERP System2. No manual/delayed upload to corporate system3. Ease of reconciliation4. Access to detailed reports for all transactions5. Validation against the unique Customer Number/Reference Number etc');
//     await expect(page.getByRole('heading', { name: 'Some of the I&M Business' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Some of the I&M Business Connect Products and Services include:');
//     await expect(page.getByRole('link', { name: 'Learn More ' }).first()).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Learn More ' }).nth(1)).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Learn More ' }).nth(2)).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'Want more information?' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Want more information?');
//     await expect(page.locator('#page-wrap-in')).toContainText('Click above to view the brochure. For more details on this service and how to get started, kindly contact your branch manager or your relationship manager.');
//     await expect(page.getByRole('link', { name: 'Brochure' })).toBeVisible();
//     await ApplyInPerson(page)
//     await testRequestCallback(page)
//     await applyForLoan(page)
//     await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
//     await fillAndSubmitForm(page)
// });

// test('test Cash MGT Service', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto('https://www.imbankgroup.com/ke/business-solutions/cash-management-service/')
//     await bankmenulink(page)

//     await page.getByRole('link', { name: 'Cash MGT Service' }).click();
//     await page.locator('p').filter({ hasText: 'Business Banking' }).locator('a').click();
//     await expect(page.getByRole('heading', { name: 'Cash Management Service', exact: true })).toBeVisible();
//     await expect(page.locator('h1')).toContainText('Cash Management Service');
//     await expect(page.locator('#page-wrap-in')).toContainText('Secure cash transportation.');
//     await expect(page.locator('li').filter({ hasText: 'Lower risk as cash is secured' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Lower risk as cash is secured by armed guards');
//     await expect(page.locator('li').filter({ hasText: 'Insurance cover for Cash In' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Insurance cover for Cash In Transit');
//     await expect(page.locator('li').filter({ hasText: 'Deliver and Collection of Cash' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Deliver and Collection of Cash');
//     await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Cash MGT' })).toBeVisible();
//     await expect(page.getByRole('heading', { name: 'Secure Cash Transportation' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Secure Cash Transportation');
//     await expect(page.locator('#page-wrap-in')).toContainText('I&M Cash Management service facilitates your business to get cash to the bank or any relevant destination quickly and safely at a reasonable cost. The Bank has partnered with a leading security company to offer you Cash in Transit (CIT) Services.');
//     await expect(page.getByRole('heading', { name: 'Our Cash Management Services' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Our Cash Management Services offers:');
//     await expect(page.locator('#page-wrap-in')).toContainText('Cash collection from customer premises or other relevant points to the BankCash delivery to customer premises or other relevant locationLower risk as cash is secured by armed guardsInsurance cover for Cash In TransitProfessional due diligence when transporting cashReasonable costConvenience – no need to travel to the bank for depositAccount is credited upon confirmation of cash');
//     await expect(page.getByRole('heading', { name: 'I&M Cash Management is' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('I&M Cash Management is available in major cities and towns. Currently, the following towns are covered:');
//     await expect(page.locator('#page-wrap-in')).toContainText('Nairobi CityMombasa CityKisumu CityNakuruEldoretKisiiNyeriMeru');
//     await expect(page.getByRole('heading', { name: 'Want more information?' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Want more information?');
//     await expect(page.locator('#page-wrap-in')).toContainText('Click above to view the brochure. For more details on this service and how to get started, kindly contact your branch manager or your relationship manager.');
//     await expect(page.locator('#page-wrap-in')).toContainText('Click above to view the brochure. For more details on this service and how to get started, kindly contact your branch manager or your relationship manager.');
//     await expect(page.getByRole('link', { name: 'BROCHURE' })).toBeVisible();
//     await ApplyInPerson(page)
//     await testRequestCallback(page)
//     await applyForLoan(page)
//     await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
//     await fillAndSubmitForm(page)
// });

// test('test Direct Debit Scheme', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto('https://www.imbankgroup.com/ke/business-solutions/direct-debit-scheme/')
//     await bankmenulink(page)

//     await page.getByRole('link', { name: 'Direct Debit Scheme' }).click();
//     await expect(page.locator('h1')).toBeVisible();
//     await expect(page.locator('h1')).toContainText('Direct Debit Scheme');
//     await expect(page.locator('#page-wrap-in')).toContainText('Easily collect regular payments from your customers');
//     await expect(page.locator('li').filter({ hasText: 'Cost effective' }).first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Cost effective');
//     await expect(page.locator('li').filter({ hasText: 'Quick reconciliation using' }).first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Quick reconciliation using ready reports');
//     await expect(page.locator('li').filter({ hasText: 'Eliminates risks of cash' }).first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Eliminates risks of cash payments and cheque clearing');
//     await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Direct Debit' })).toBeVisible();
//     await expect(page.locator('div').filter({ hasText: 'Direct Debit SchemeEasily' }).nth(3)).toBeVisible();
//     await expect(page.locator('h2').filter({ hasText: 'Direct Debit Scheme' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Direct Debit Scheme');
//     await expect(page.locator('#page-wrap-in')).toContainText('Direct Debits is a service that aids businesses to collect regular payments from their customers holding accounts in various Banks.If your business/organization requires regular repetitive collections to be made ( Membership fees, rent, utility payments, insurance premium, etc), this service will enable you to directly collect the payable amounts from your customers’ bank account without them having to keep arranging for payment every time. It saves you and your customers administrative time and expenses.');
//     await expect(page.getByRole('heading', { name: 'Among other benefits that' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Among other benefits that your business and your customers will enjoy include:');
//     await expect(page.locator('#page-wrap-in')).toContainText('It is easy and convenient – the process is automated after initial set-upFree set-up for corporatesCost effectiveBetter cash flow managementQuick reconciliation using ready reportsEasy to pick and follow-up on failed paymentsEliminates risks of cash payments and cheque clearingAutomatic transfers as per desired frequency – No need for your customers to keep tracking the due dates.');
//     await expect(page.getByRole('heading', { name: 'How the Service Works' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('How the Service Works');
//     await expect(page.locator('#page-wrap-in')).toContainText('Your business, (referred to as an Originator in the Direct Debit Scheme) asks its customers (referred to as Payers) for an authority or mandate to make periodic deductions from the Payers’ Bank account being payments for a service offered. The Originator then forwards the instructions to I&M Bank to collect the monies owed as per stated frequency and credit the proceeds to the Originators Bank account at I&M Bank. Funds from other Banks are collected through the Clearing House under Kenya Bankers Association.');
//     await expect(page.getByRole('heading', { name: 'How to sign-up' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('How to sign-up');
//     await expect(page.getByRole('link', { name: 'DIRECT DEBIT SCHEME' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Download, complete and submit the DIRECT DEBIT SCHEME APPLICATION FORM to the nearest I&M Bank branch. Your I&M Bank Relationship Manager will guide you through the onboarding process. You will be required on a frequent basis to forward instructions from new customers joining your business or amendments from existing customers.');
//     await expect(page.getByRole('heading', { name: 'Service charges' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('The service will attract the following charges which will be levied from your Business Account.Transaction descriptionCharge to the I&M Bank Business customerSet-up costFreeInward Direct Debit TransferKSh 100 per transferUnpaid outward Direct Debit TransferKSh 500 per transferYour customers (the Payers) will settle their respective transaction charges as levied by their banks where the account is held.');
//     await expect(page.getByRole('heading', { name: 'Want more information?' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Click above to view the brochure. For more details on this service and how to get started, kindly contact your branch manager or your relationship manager.');
//     await expect(page.getByRole('link', { name: 'Brochure' })).toBeVisible();
//     await ApplyInPerson(page)
//     await testRequestCallback(page)
//     await applyForLoan(page)
//     await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
//     await fillAndSubmitForm(page)
// });


// test('test Trade Finance', async ({ page }) => {
//     await page.goto('https://www.imbankgroup.com/ke/');
//     await page.goto('https://www.imbankgroup.com/ke/business/trade-finance/')
//     await bankmenulink(page)
//     //await page.locator('#menu-item-16556').getByRole('link', { name: 'Trade Finance' }).click();
//     await expect(page.locator('div').filter({ hasText: 'Trade ServicesGet access to:' }).nth(3)).toBeVisible();
//     await expect(page.locator('h1')).toContainText('Trade Services');
//     await expect(page.locator('#page-wrap-in')).toContainText('Get access to:');
//     await expect(page.getByText('Quick turn around time')).toBeVisible();
//     await expect(page.locator('li').filter({ hasText: 'Quick turn around time' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Quick turn around time');
//     await expect(page.locator('li').filter({ hasText: 'Large network of' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Large network of correspondent banks');
//     await expect(page.locator('li').filter({ hasText: 'Personalised service' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Personalised service');
//     await expect(page.getByRole('img', { name: 'I&M Bank Kenya - Trade Finance' })).toBeVisible();
//     await expect(page.locator('#overview')).toBeVisible();
//     await expect(page.locator('#overview').getByRole('heading', { name: 'Trade Services' })).toBeVisible();
//     await expect(page.locator('#overview')).toContainText('Trade Services');
//     await expect(page.locator('#overview')).toContainText('We cover the full range of trade finance services from letters of credit and guarantees to  and import trading.');
//     await expect(page.locator('div').filter({ hasText: /^Our range of Trade Finance products include:$/ })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Our range of Trade Finance products include:');
//     await expect(page.locator('#page-wrap-in')).toContainText('Letters of Credit (Import & )Guarantees | Bonds | Unsecured Bid BondsDocumentary Collections (Import & )Transactions under  Credit Guarantee (GSM-102)program under United States Department of Agriculture');
//     await expect(page.locator('#page-wrap-in')).toContainText('Bill AvalizationBill/Invoice DiscountingImport Bill Refinancing2- Year LC under Global Trade Finance program(GTFP) of International Finance Corporation (IFC)');
//     await expect(page.getByText('FeaturesCapability to offer')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Features');
//     await expect(page.locator('.feature-21-body-col > .card > .card-body').first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Capability to offer trade finance services to all major financial centres worldwide through correspondent banking relationships with a host of major multinational Banks');
//     await expect(page.locator('div').filter({ hasText: /^Ability to deal in most major currencies$/ }).nth(2)).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Ability to deal in most major currencies');
//     await expect(page.locator('div:nth-child(2) > .card > .card-body').first()).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Cross-border financing arrangements through established financing lines from major worldwide correspondent Banks in several countries');
//     await expect(page.locator('div:nth-child(4) > .card > .card-body')).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('A dedicated Trade Finance Department provides very efficient processing and services.');
//     await expect(page.locator('ul').filter({ hasText: 'Visit any I&M Bank branch and' })).toBeVisible();
//     await expect(page.locator('#page-wrap-in')).toContainText('Visit any I&M Bank branch and talk to our friendly customer service representatives who will go through and understand your requirements to advise you on the most appropriate product.');
//     await expect(page.locator('#page-wrap-in')).toContainText('Take advantage of I&M Bank’s Trade Finance Solutions and expand your import and  business.');

//     await ApplyInPerson(page)
//     await testRequestCallback(page)
//     await applyForLoan(page)
//     await expect(page.getByRole('heading', { name: 'Are you interested?' })).toBeVisible();
//     await fillAndSubmitForm(page)
// });