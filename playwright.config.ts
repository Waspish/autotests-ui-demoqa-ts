import 'dotenv/config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    [
      'allure-playwright',
      {
        resultsDir: process.env.ALLURE_RESULTS_DIR,
      },
    ],
  ],

  use: {
    baseURL: process.env.APP_URL,
    headless: process.env.HEADLESS === 'true',
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
  },
});
