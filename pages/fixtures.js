import { test as baseTest } from '@playwright/test';
import LoginPage from './LoginPage';
import CareersPage from './CareersPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import HomePage from './HomePage';

export const test = baseTest.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
  },
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  },
  homePageFixture: async ({ page }, use) => {
    setUpPage(page, use, HomePage);
  },
  loginPageFixture: async ({ page }, use) => {
    setUpPage(page, use, LoginPage);
  },
  careersPageFixture: async ({ page }, use) => {
    setUpPage(page, use, CareersPage);
  },
  forgotPasswordPageFixture: async ({ page }, use) => {
    setUpPage(page, use, ForgotPasswordPage);
  },
  user: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  },
});


const setUpPage = async (page, useFn, classType) => {
  const newPage = new classType(page);
  await useFn(newPage);
}
