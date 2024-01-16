/* eslint-disable playwright/expect-expect */
/* eslint-disable playwright/no-skipped-test */
import { expect } from '@playwright/test';
import { test } from '../../pages/fixtures';

test.describe.configure({ mode: 'serial' });

const PAGE_TITLE = 'Mitigram';

let loginPage;

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
  await expect(loginPage.validationError).toBeVisible();
  await expect(loginPage.validationError)
      .toHaveText('Email is required The Email field is not a valid e-mail address.');
});

test('requires password @critical', async ({ user }) => {
  await loginPage.emailField.fill(user.email);
  await loginPage.loginButton.click();
  await expect(loginPage.validationError).toBeVisible();
  await expect(loginPage.validationError).toHaveText('Password is required');
});

test('validates credentials @critical', async ({ user }) => {
  await loginPage.emailField.fill(user.email);
  await loginPage.passwordField.fill(user.password);
  await loginPage.loginButton.click();
  await expect(loginPage.validationError).toHaveText('Invalid login attempt.');
});

test.skip('successfully logs in @critical', async ({ user }) => {
  await loginPage.emailField.fill(user.email);
  await loginPage.passwordField.fill(user.password);
  await loginPage.loginButton.click();
  // await homePage.waitForLoaded();
  // await expect(homePage.page).toHaveURL(homePage.url);
});
test.fixme('has app store badges visible and clickable @high', async () => { });
test.fixme('has footer "Solutions" links visible and clickable @high', async () => { });
test.fixme('has footer "Platform" links visible and clickable @high', async () => { });
test.fixme('has footer "Company" links visible and clickable @high', async () => { });
test.fixme('has footer social media links visible and clickable @high', async () => { });

test('scrolls to open positions once "Open Positions" button clicked @high', async () => {
  await careersPage.openPositionsAnchor.click();
  await expect(careersPage.openPositionsFilters).toBeInViewport();
  // TODO mock the response to have at least one position for sure
  await expect(careersPage.openPositionsItem.first()).toBeInViewport();
});

test.fixme('allows filtering positions by location @high', async () => { });
test.fixme('preserves filter on page navigation @high', async () => { });
test.fixme('has all the links navigate to correct pages @high', async () => { });

test.fixme('displays empty state list if no positions matches filter @medium', async () => { });
test.fixme('displays empty state list when no positions found @medium', async () => { });

test.fixme('has all the buttons on the page clickable @medium', async () => { });
test.fixme('displays other UI elements @medium', async () => { });

test.fixme('has correct hover state for buttons and links @medium', async () => { });

test.fixme('handles window resizing so that all UI elements are reachable @medium',
    async () => { });

test.fixme('handles different error states when API call fails @medium', async () => { });

test.fixme('displays loading state before data loads @low', async () => { });
