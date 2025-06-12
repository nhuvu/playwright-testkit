import {test,expect} from '@playwright/test';


test('Pause for debugging', async ({ page }) => {
    await page.goto('/sandbox');
    await page.pause(); // opens Playwright Inspector
  });

// run with trace: npx playwright test --trace on
