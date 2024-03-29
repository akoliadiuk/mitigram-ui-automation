import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export const BASE_URL = 'https://mitigram.com';

const DEFAULT_VIEWPORT = Object.freeze({
  width: 1920,
  height: 1080,
});

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './test/specs',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : 5,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [['list']] : [['list'], ['html']],
  /* Shared settings for all the projects below.
  See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: DEFAULT_VIEWPORT,
      },
      screenshot: true,
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: DEFAULT_VIEWPORT,
      },
      screenshot: true,
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: DEFAULT_VIEWPORT,
      },
      screenshot: true,
    },
  ],
});
