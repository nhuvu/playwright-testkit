import {test,expect} from '@playwright/test';

test('User can sign up', async ({ page }) => {
    await page.goto('/signup');
    await page.getByLabel('Username').fill('newuser');
    await page.getByLabel('Email').fill('newuser@example.com');
    await page.getByLabel('Password').fill('StrongPass123!');
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page.locator('.success-message')).toHaveText('Welcome!');
  });