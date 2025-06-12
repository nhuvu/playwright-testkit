import {test,expect} from '@playwright/test';

test('Table contains correct data', async ({ page }) => {
    await page.goto('/orders');
    const rows = page.locator('table tbody tr');
    await expect(rows).toHaveCount(5);
    await expect(rows.nth(0)).toContainText('Order #123');
  });