import {test,expect} from '@playwright/test';

test('Upload a profile picture', async ({ page }) => {
    await page.goto('/profile');
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('tests/files/avatar.jpg');
    await expect(page.locator('.upload-success')).toBeVisible();
  });