/* eslint-disable playwright/expect-expect */
import { expect } from '@playwright/test';
import { test } from '../../pages/fixtures';

test.describe.configure({ mode: 'serial' });

const PAGE_TITLE = 'Careers';

let careersPage;

test.beforeAll('Open Careers page', async ({ careersPageFixture }) => {
  careersPage = await careersPageFixture.open();
});

test.afterAll('Close Careers page', async () => {
  await careersPage.close();
});

test('has title @high', async () => {
  await expect(careersPage.page).toHaveTitle(PAGE_TITLE);
});

test('has header logo @high', async () => {
  await expect(careersPage.headerLogo).toBeVisible();
});

test('has "Open Positions" button visible and clickable @high', async () => {
  await expect(careersPage.openPositionsAnchor).toBeInViewport();
  await expect(careersPage.openPositionsAnchor).toBeEnabled();
});

test('has footer section visible @high', async () => {
  await expect(careersPage.footerContainer).toBeVisible();
});

test.fixme('has footer section visible in viewport, once scrolled @high', async () => {});

test('policy links are visible and clickable @high', async () => {
  await careersPage.footerContainer.scrollIntoViewIfNeeded();
  await expect(careersPage.privacyPolicyLink).toBeVisible();
  await expect(careersPage.cookiePolicyLink).toBeVisible();
});

test.fixme('has footer address fields visible @high', async () => {});
test.fixme('has footer "Solutions" links visible and clickable @high', async () => {});
test.fixme('has footer "Platform" links visible and clickable @high', async () => {});
test.fixme('has footer "Company" links visible and clickable @high', async () => {});
test.fixme('has footer social media links visible and clickable @high', async () => {});

test('scrolls to open positions once "Open Positions" button clicked @high', async () => {
  await careersPage.openPositionsAnchor.click();
  await expect(careersPage.openPositionsFilters).toBeInViewport();
  // TODO mock the response to have at least one position for sure
  await expect(careersPage.openPositionsItem.first()).toBeInViewport();
});

test.fixme('allows filtering positions by location @high', async () => {});
test.fixme('preserves filter on page navigation @high', async () => {});
test.fixme('has all the links navigate to correct pages @high', async () => {});

test.fixme('displays empty state list if no positions matches filter @medium', async () => {});
test.fixme('displays empty state list when no positions found @medium', async () => {});

test.fixme('has all the buttons on the page clickable @medium', async () => {});
test.fixme('displays other UI elements @medium', async () => {});

test.fixme('has correct hover state for buttons and links @medium', async () => {});

test.fixme('handles window resizing so that all UI elements are reachable @medium', async () => {});

test.fixme('handles different error states when API call fails @medium', async () => {});

test.fixme('displays loading state before data loads @low', async () => {});
