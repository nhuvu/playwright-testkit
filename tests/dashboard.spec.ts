import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

test('Dashboard is visible after login', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await page.goto('/dashboard');
  await dashboard.isLoaded();
});
