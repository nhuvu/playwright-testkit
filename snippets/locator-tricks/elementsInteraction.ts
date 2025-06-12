import {test,expect} from '@playwright/test';

test('Click checkbox and verify', async ({ page }) => {
  await page.goto('/settings');
  const checkbox = page.getByLabel('Enable Notifications');
  await checkbox.check();
  await expect(checkbox).toBeChecked();
  });