import {test,expect} from '@playwright/test';

test('Click a button and verify effect', async ({ page }) => {
    await page.goto('/settings');
    await page.getByRole('button', { name: 'Enable Feature' }).click();
    await expect(page.locator('.feature-status')).toHaveText('Enabled');
  });