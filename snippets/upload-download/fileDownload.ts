import {test,expect} from '@playwright/test';

test('Download report', async ({ page }) => {
    await page.goto('/reports');
    const [ download ] = await Promise.all([
      page.waitForEvent('download'),
      page.click('text=Download Report'),
    ]);
    const path = await download.path();
    expect(path).toBeTruthy();
  });