import {test,expect} from '@playwright/test';

test('Page looks correct', async ({ page }) => {
    await page.goto('/landing');
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
  });