import { test as baseTest } from '@playwright/test';
import LoginPage from './LoginPage';

export const test = baseTest.extend({
  loginPageFixture: async ({ browser }, use) => {
    setUpPage(browser, use, LoginPage);
  },
});


const setUpPage = async (browser, useFn, classType) => {
    const page = await browser.newPage();
    const newPage = new classType(page);
    await newPage.open();
    await useFn(newPage);
}
