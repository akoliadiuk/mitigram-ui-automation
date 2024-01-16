import { expect } from '@playwright/test';
import { test } from '../../../pages/fixtures';

test.describe.configure({ mode: 'serial' });

let homePage;
let loginPage;
let forgotPasswordPage;
const RETURN_URL_PART = '?ReturnUrl=%2F'; // '%2F' equivalent to '/' path

test.beforeAll('Set up pages', async ({ loginPageFixture, forgotPasswordPageFixture,
        homePageFixture }) => {
    homePage = homePageFixture;
    loginPage = loginPageFixture;
    forgotPasswordPage = forgotPasswordPageFixture;
});

test.afterAll('Close page', async () => {
    await loginPage.close();
});

test('navigates to Login page from Home page @smoke @critical', async () => {
    await homePage.open();
    await homePage.logInButton.click();
    await loginPage.waitForLoaded();
    await expect(loginPage.page).toHaveURL(loginPage.url + RETURN_URL_PART);
});

test('follows "Forgot your password?" link @smoke @critical', async () => {
    await loginPage.open();
    await loginPage.forgotPasswordLink.click();
    await forgotPasswordPage.waitForLoaded();
    await expect(forgotPasswordPage.page).toHaveURL(forgotPasswordPage.url);
});

test('follows back with "I already have an account" link @smoke @high', async () => {
    await forgotPasswordPage.open();
    await forgotPasswordPage.alreadyHaveAccountLink.click();
    await loginPage.waitForLoaded();
    await expect(loginPage.page).toHaveURL(loginPage.url);
});

test('follows back with browser back button @smoke @high', async () => {
    await loginPage.open();
    await loginPage.forgotPasswordLink.click();
    await forgotPasswordPage.waitForLoaded();
    await forgotPasswordPage.goBack();
    await loginPage.waitForLoaded();
    await expect(loginPage.page).toHaveURL(loginPage.url);
});