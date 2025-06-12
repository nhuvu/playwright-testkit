import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login redirects to dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('test@example.com', 'Password123!');
  await expect(page).toHaveURL(/dashboard/);
});
