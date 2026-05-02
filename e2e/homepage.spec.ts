import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads successfully and hero title is visible', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/\/dev\/daniel/);
    
    // Check hero title is visible within 2 seconds
    const heroTitle = page.locator('h1.hero-title');
    await expect(heroTitle).toBeVisible({ timeout: 2000 });
    await expect(heroTitle).toHaveText('Daniel Cañadillas');
  });

  test('all major sections are visible', async ({ page }) => {
    await page.goto('/');
    
    const sections = [
      { id: 'hero', name: 'Hero' },
      { id: 'about', name: 'About' },
      { id: 'experience', name: 'Experience' },
      { id: 'education', name: 'Education' },
      { id: 'skills', name: 'Skills' },
      { id: 'projects', name: 'Projects' },
      { id: 'contact', name: 'Contact' },
    ];
    
    for (const section of sections) {
      const element = page.locator(`#${section.id}`);
      await expect(element, `${section.name} section should be visible`).toBeVisible();
    }
  });

  test('has correct meta tags', async ({ page }) => {
    await page.goto('/');
    
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /Daniel Cañadillas/);
    
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /\/dev\/daniel/);
  });
});
