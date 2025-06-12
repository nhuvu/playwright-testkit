import {test,expect} from '@playwright/test';

test('Mock user API', async ({ page }) => {
    await page.route('**/api/user', route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ name: 'Mock User' }),
      })
    );
    await page.goto('/profile');
    await expect(page.locator('.username')).toHaveText('Mock User');
  });