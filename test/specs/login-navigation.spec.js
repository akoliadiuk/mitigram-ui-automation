import { expect } from '@playwright/test';
import { test } from '../../pages/fixtures';
import HomePage from '../../pages/HomePage';

test.describe.configure({ mode: 'serial' });

let homePage;
let loginPage;
let forgotPasswordPage;
let newTabHomePage;
const RETURN_URL_PART = '?ReturnUrl=%2F'; // '%2F' equivalent to '/' path
const CONTACT_ANCHOR_URL_PART = '#contact';

test.beforeAll('Set up pages', async ({ loginPageFixture, forgotPasswordPageFixture,
  homePageFixture }) => {
  homePage = await homePageFixture;
  loginPage = await loginPageFixture;
  forgotPasswordPage = await forgotPasswordPageFixture;
});

test.afterAll('Close page', async () => {
  await newTabHomePage.close();
  await loginPage.close();
});

test('navigates to Login page from Home page @critical', async () => {
  await homePage.open();
  await homePage.logInButton.click();
  await expect(loginPage.page).toHaveURL(loginPage.url + RETURN_URL_PART);
});

test('follows "Forgot your password?" link @critical', async () => {
  await loginPage.open();
  await loginPage.forgotPasswordLink.click();
  await expect(forgotPasswordPage.page).toHaveURL(forgotPasswordPage.url);
});

test('follows back with "I already have an account" link @high', async () => {
  await forgotPasswordPage.open();
  await forgotPasswordPage.alreadyHaveAccountLink.click();
  await expect(loginPage.page).toHaveURL(loginPage.url);
});

test('follows back with browser back button @high', async () => {
  await loginPage.open();
  await loginPage.forgotPasswordLink.click();
  await forgotPasswordPage.waitForLoaded();
  await forgotPasswordPage.goBack();
  await expect(loginPage.page).toHaveURL(loginPage.url);
});

test('opens "Contact us" link in a new tab @high', async () => {
  await loginPage.open();
  // eslint-disable-next-line require-await
  newTabHomePage = await loginPage.openInNewTab(async () => loginPage.contactUsLink.click(),
      loginPage.page.context(), HomePage);
  await expect(newTabHomePage.page).toHaveURL(newTabHomePage.url + CONTACT_ANCHOR_URL_PART);
});
