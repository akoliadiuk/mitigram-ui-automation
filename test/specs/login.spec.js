/* eslint-disable playwright/expect-expect */
/* eslint-disable playwright/no-skipped-test */
import { expect } from '@playwright/test';
import { test } from '../../pages/fixtures';
import { LOGIN_VALIDATION_ERRORS } from '../data/errors';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const ivalidEmails = parse(fs.readFileSync(path.join(__dirname, '../data/invalid-emails.csv')),
  { columns: true, relax_quotes: true });

const PAGE_TITLE = 'Mitigram';

let loginPage;

const verifyErrorMessage = async (errorMessage) => {
  await expect(loginPage.validationError).toBeInViewport();
  await expect(loginPage.validationError).toHaveText(errorMessage);
};

test.beforeAll('Open Login page', async ({ loginPageFixture }) => {
  loginPage = await loginPageFixture.open();
});

test.afterAll('Close Login page', async () => {
  await loginPage.close();
});

test('has title @critical', async () => {
  await expect(loginPage.page).toHaveTitle(PAGE_TITLE);
});

test('has header logo @critical', async () => {
  await expect(loginPage.headerLogo).toBeVisible();
});

test('has login form inputs ready to use @critical', async () => {
  for (const field of [loginPage.emailField, loginPage.passwordField]) {
    await expect(field).toBeInViewport();
    await expect(field).toBeEditable();
    await expect(field).toBeEmpty();
  }
  for (const button of [loginPage.loginButton, loginPage.forgotPasswordLink]) {
    await expect(button).toBeInViewport();
    await expect(button).toBeEnabled();
  }
});

test('requires email @critical', async () => {
  await loginPage.loginButton.click();
  await verifyErrorMessage(LOGIN_VALIDATION_ERRORS.EMAIL_REQUIRED);
});

test('requires password @critical', async ({ user }) => {
  await loginPage.emailField.fill(user.email);
  await loginPage.loginButton.click();
  await verifyErrorMessage(LOGIN_VALIDATION_ERRORS.PASSWORD_REQUIRED);
});

test('validates credentials @critical', async ({ user }) => {
  await loginPage.emailField.fill(user.email);
  await loginPage.passwordField.fill(user.password);
  await loginPage.loginButton.click();
  await verifyErrorMessage(LOGIN_VALIDATION_ERRORS.INVALID_LOGIN_ATTEMPT);
});

test.fixme('successfully logs in @critical', async ({ user }) => {
  await loginPage.emailField.fill(user.email);
  await loginPage.passwordField.fill(user.password);
  await loginPage.loginButton.click();
  // await homePage.waitForLoaded();
  // await expect(homePage.page).toHaveURL(homePage.url);
});

test('requires email to be valid: @high', async () => {
  for (const email of ivalidEmails) {
    await test.step(`${email.description}`, async () => {
      await loginPage.emailField.fill(email.value);
      await loginPage.loginButton.click();
      await verifyErrorMessage(LOGIN_VALIDATION_ERRORS.EMAIL_INVALID);
    });
  }
});

test.fixme('has app store badges visible and clickable @high', async () => { });

test.fixme('displays other UI elements @medium', async () => { });

test.fixme('has correct hover state for buttons and links @medium', async () => { });

test.fixme('handles window resizing so that all UI elements are reachable @medium',
  async () => { });

test.fixme('handles different error states when API call fails @medium', async () => { });

test.fixme('displays loading state before data loads @low', async () => { });
