import {test,expect} from '@playwright/test';

test('Submit form with missing fields shows error', async ({ page }) => {
    await page.goto('/contact');
  await page.locator('#name').fill('Jane Doe');
  await page.locator('#email').fill('jane@example.com');
  await page.locator('#message').fill('Hello from Playwright!');
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('.success')).toHaveText('Thanks for your message!');
  });