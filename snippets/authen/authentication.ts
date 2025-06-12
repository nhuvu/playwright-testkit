import {test,expect} from '@playwright/test';

test('Authenticate and save storage', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill('user@example.com');
    await page.getByLabel('Password').fill('Password123!');
    await page.click('button:has-text("Login")');
    await page.context().storageState({ path: 'storageState.json' });
  });