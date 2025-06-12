import {test,expect} from '@playwright/test';

test('Select an option from dropdown', async ({ page }) => {
    await page.goto('/profile');
    await page.selectOption('#country', 'US');
    await expect(page.locator('#country')).toHaveValue('US');
  });