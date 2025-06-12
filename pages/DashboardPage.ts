import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {
    
  }

  async isLoaded() {
    await expect(this.page.locator('h1')).toContainText('Dashboard');
  }
}
