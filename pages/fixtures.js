import { test as baseTest } from '@playwright/test';
import LoginPage from './LoginPage';
import CareersPage from './CareersPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import HomePage from './HomePage';

if (!(process.env.EMAIL && process.env.PASSWORD)) {
  throw new Error('Email and Password env variables were not set! Please, fill the ".env" file!');
}

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
    await setUpPage(page, use, HomePage);
  },
  loginPageFixture: async ({ page }, use) => {
    await setUpPage(page, use, LoginPage);
  },
  careersPageFixture: async ({ page }, use) => {
    await setUpPage(page, use, CareersPage);
  },
  forgotPasswordPageFixture: async ({ page }, use) => {
    await setUpPage(page, use, ForgotPasswordPage);
  },
  user: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  },
});


const setUpPage = async (page, useFn, ClassType) => {
  const newPage = new ClassType(page);
  await useFn(newPage);
};
