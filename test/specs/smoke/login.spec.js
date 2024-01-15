import { expect } from '@playwright/test';
import { test } from '../../../pages/fixtures';

test.describe.configure({ mode: 'serial' });

const PAGE_TITLE = 'Mitigram';

let loginPage;

test.beforeAll('Open Login page', async ({ loginPageFixture }) => {
    loginPage = loginPageFixture;
});

test.afterAll('Close Login page', async () => {
    await loginPage.close();
});

test('has title @smoke', async () => {
    await expect(loginPage.page).toHaveTitle(PAGE_TITLE);
});

test('has header logo @smoke', async () => {
    await expect(loginPage.headerLogo).toBeVisible();
});

test('has login form inputs ready to use @smoke', async () => {
    for (const field of [loginPage.emailField, loginPage.passwordField]) {
        await expect(field).toBeInViewport();
        await expect(field).toBeEditable();
        await expect(field).toBeEmpty();
    }
});

test('has login buttton visible and clickable @smoke', async () => {
    await expect(loginPage.loginButton).toBeInViewport();
    await expect(loginPage.loginButton).toBeEnabled();
});