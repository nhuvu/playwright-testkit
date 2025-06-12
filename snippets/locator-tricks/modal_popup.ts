import {test,expect} from '@playwright/test';

test('Open modal and submit form inside', async ({ page }) => {
    await page.goto('/feedback');
    await page.click('text=Leave Feedback');
    const modal = page.locator('.modal');
    await expect(modal).toBeVisible();
    await modal.locator('textarea').fill('Great service!');
    await modal.locator('button[type="submit"]').click();
    await expect(modal).toBeHidden();
  });