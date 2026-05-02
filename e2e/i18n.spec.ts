import { test, expect } from '@playwright/test';

test.describe('Internationalization', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('defaults to English', async ({ page }) => {
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
  });

  test('language switcher is present in header', async ({ page }) => {
    const langButtons = page.locator('.nav-lang button');
    await expect(langButtons).toHaveCount(2);
    
    const enButton = page.locator('button[data-lang="en"]');
    const esButton = page.locator('button[data-lang="es"]');
    
    await expect(enButton).toBeVisible();
    await expect(esButton).toBeVisible();
  });

  test('switching to Spanish updates text content', async ({ page }) => {
    // Click Spanish button
    const esButton = page.locator('button[data-lang="es"]');
    await esButton.click();
    
    // Wait for language change
    await page.waitForTimeout(300);
    
    // Check HTML lang attribute
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'es');
    
    // Check that some text has changed
    const aboutTitle = page.locator('#about h2');
    await expect(aboutTitle).toHaveText('Sobre mí');
    
    const experienceTitle = page.locator('#experience h2');
    await expect(experienceTitle).toHaveText('Experiencia Laboral');
  });

  test('language preference persists across reload', async ({ page }) => {
    // Switch to Spanish
    const esButton = page.locator('button[data-lang="es"]');
    await esButton.click();
    await page.waitForTimeout(300);
    
    // Reload page
    await page.reload();
    await page.waitForTimeout(300);
    
    // Check language is still Spanish
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'es');
    
    const aboutTitle = page.locator('#about h2');
    await expect(aboutTitle).toHaveText('Sobre mí');
  });
});
