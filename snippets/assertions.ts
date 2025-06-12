import {test,expect} from '@playwright/test';

test('UI feedback appears after action', async ({ page }) => {
    await page.goto('/dashboard');
    await page.getByRole('button', { name: 'Refresh Data' }).click();
    await expect(page.locator('.notification')).toHaveText(/Updated successfully/);
  });