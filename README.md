# I-M-Website-Test-Automation

Below is a README document detailing the tasks for Playwright tests along with instructions on how to run the tests using Playwright:

---

# Playwright Test Tasks

## Navigation Automation

### Description:
Navigate through all the headers available on the i&M Bank Kenya homepage.

### Test Files:
- `navigation.spec.ts`
- `nav_business.spec.ts`
- `nav_diaspora.spec.ts`
- `about_us.spec.ts`
- `form_automation.spec.ts`
- `online_services.spec.ts`
- `menuicon.spec.ts`

## Credit Card Menu Interaction

### Description:
Perform interactions related to the credit card section of the website.

### Tasks:
1. Visit the cards > credit card section of the website.
2. Scroll down to the bottom of the credit card page.
3. Click on `im-visa-international-gold-card`.

### Test File:
- `credit_card.spec.ts`

## Terms and Conditions Expansion

### Description:
Expand the 'Terms and Conditions' accordion on the credit card page.

### Test File:
- `terms_and_conditions.spec.ts`

## Form Automation

### Description:
Automate form filling for the credit card application.

### Tasks:
1. Identify the form requesting user information.
2. Fill in all the necessary information in the form fields.

### Test File:
- `form_automation.spec.ts`
 **How to Run Tests**
1. Install Node.js and npm if not already installed on your machine.

2. Clone this repository to your local machine:
   ```
   git clone <repository_url>
   ```

3. Navigate to the project directory:
   ```
   cd <project_directory>
   ```

4. Install dependencies:
   ```
   npm install   

5. Run the tests using Playwright:   ```
   npx playwright test
   ```

   You can also specify specific test files to run:
   ```
   npx playwright test navigation.spec.ts
   ```

   Replace `navigation.spec.ts` with the desired test file(s).

---

This README document provides an overview of the tasks covered by the Playwright tests in this repository. It also includes instructions on how to install dependencies and run the tests using Playwright. Adjust the instructions as per your project structure and requirements.
