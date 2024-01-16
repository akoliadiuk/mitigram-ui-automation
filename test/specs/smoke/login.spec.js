import { expect } from '@playwright/test';
import { test } from '../../../pages/fixtures';

test.describe.configure({ mode: 'serial' });

const PAGE_TITLE = 'Mitigram';

let loginPage;

test.beforeAll('Open Login page', async ({ loginPageFixture }) => {
    loginPage = await loginPageFixture.open();
});

test.afterAll('Close Login page', async () => {
    await loginPage.close();
});

test('has title @smoke @critical', async () => {
    await expect(loginPage.page).toHaveTitle(PAGE_TITLE);
});

test('has header logo @smoke @critical', async () => {
    await expect(loginPage.headerLogo).toBeVisible();
});

test('has login form inputs ready to use @smoke @critical', async () => {
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

test('requires email @smoke @critical', async () => {
    await loginPage.loginButton.click();
    await expect(loginPage.validationError).toBeVisible();
    await expect(loginPage.validationError).toHaveText('Email is required The Email field is not a valid e-mail address.');
});

test('requires password @smoke @critical', async ({ user }) => {
    await loginPage.emailField.fill(user.email);
    await loginPage.loginButton.click();
    await expect(loginPage.validationError).toBeVisible();
    await expect(loginPage.validationError).toHaveText('Password is required');
});

test('validates credentials @smoke @critical', async ({ user }) => {
    await loginPage.emailField.fill(user.email);
    await loginPage.passwordField.fill(user.password);
    await loginPage.loginButton.click();
    await expect(loginPage.validationError).toHaveText('Invalid login attempt.');
});

test.skip('successfully logs in @smoke @critical', async ({ user }) => {
    await loginPage.emailField.fill(user.email);
    await loginPage.passwordField.fill(user.password);
    await loginPage.loginButton.click();
    // await homePage.waitForLoaded();
    // await expect(homePage.page).toHaveURL(homePage.url);
});
