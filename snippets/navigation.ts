import {test,expect} from '@playwright/test';

test('Navigate to homepage and check URL', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveURL('https://example.com/');
  });
