import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('theme toggle button is visible', async ({ page }) => {
    const toggle = page.locator('#theme-toggle');
    await expect(toggle).toBeVisible();
  });

  test('defaults to light theme', async ({ page }) => {
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'light');
  });

  test('clicking toggle switches to dark theme', async ({ page }) => {
    const toggle = page.locator('#theme-toggle');
    await toggle.click();
    await page.waitForTimeout(200);
    
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
  });

  test('clicking toggle again switches back to light', async ({ page }) => {
    const toggle = page.locator('#theme-toggle');
    
    // Switch to dark
    await toggle.click();
    await page.waitForTimeout(200);
    
    // Switch back to light
    await toggle.click();
    await page.waitForTimeout(200);
    
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'light');
  });

  test('theme preference persists across reload', async ({ page }) => {
    const toggle = page.locator('#theme-toggle');
    
    // Switch to dark
    await toggle.click();
    await page.waitForTimeout(200);
    
    // Reload
    await page.reload();
    await page.waitForTimeout(200);
    
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'dark');
  });
});
