/* eslint-disable playwright/expect-expect */
import { expect } from '@playwright/test';
import { test } from '../../pages/fixtures';

const PAGE_TITLE = 'Careers';

let careersPage;

test.beforeAll('Open Careers page', async ({ careersPageFixture }) => {
  careersPage = await careersPageFixture.open();
});

test.afterAll('Close Careers page', async () => {
  await careersPage.close();
});

test('has title @critical', async () => {
  await expect(careersPage.page).toHaveTitle(PAGE_TITLE);
});

test('has header logo @critical', async () => {
  await expect(careersPage.headerLogo).toBeVisible();
});

test('has "Open Positions" button visible and clickable @critical', async () => {
  await expect(careersPage.openPositionsAnchor).toBeInViewport();
  await expect(careersPage.openPositionsAnchor).toBeEnabled();
});

test('has header section visible @critical', async () => {
  await expect(careersPage.headerMenu.headerContainer).toBeInViewport();
});

test('has footer section visible @critical', async () => {
  await expect(careersPage.footer.footerContainer).toBeVisible();
});

test.fixme('navigates "Request Demo" link @high', async () => { });
test.fixme('navigates "Log In" link @high', async () => { });
test.fixme('navigates other links from header @high', async () => { });

test.fixme('has footer section visible in viewport, once scrolled @high', async () => { });

test('policy links are visible and clickable @high', async () => {
  await careersPage.footer.footerContainer.scrollIntoViewIfNeeded();
  await expect(careersPage.footer.privacyPolicyLink).toBeVisible();
  await expect(careersPage.footer.cookiePolicyLink).toBeVisible();
});

test('scrolls to open positions once "Open Positions" button clicked @high', async () => {
  await careersPage.openPositionsAnchor.click();
  await expect(careersPage.openPositionsFilters).toBeInViewport();
  // TODO mock the response to have at least one position for sure
  await expect(careersPage.openPositionsItem.first()).toBeInViewport();
});

test.fixme('expands position accordion on click @high', async () => { });
test.fixme('collapses position accordion on click @high', async () => { });
test.fixme('collapses position accordion once another position is clicked @high', async () => { });
test.fixme('navigates "Learn more" link @high', async () => { });
test.fixme('navigates "Apply for this position" link @high', async () => { });

test.fixme('has footer address fields visible @high', async () => { });
test.fixme('has footer "Solutions", "Platform" and "Company" links visible and clickable @high',
  async () => { });
test.fixme('has footer social media links visible and clickable @high', async () => { });

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
