import {test,expect} from '@playwright/test';

test('Wait for API call after clicking button', async ({ page }) => {
    await page.goto('/products');
    const response = await Promise.all([
      page.waitForResponse(resp => resp.url().includes('/api/products') && resp.status() === 200),
      page.getByRole('button', { name: 'Load Products' }).click()
    ]);
    expect(await response[0].json()).toBeDefined();
  });