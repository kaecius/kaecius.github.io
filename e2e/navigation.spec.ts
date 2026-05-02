import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('clicking nav links scrolls to correct section', async ({ page }) => {
    const sections = ['about', 'experience', 'education', 'skills', 'projects', 'contact'];
    
    for (const sectionId of sections) {
      // On mobile, open the menu first
      const navToggle = page.locator('.nav-toggle');
      const isToggleVisible = await navToggle.isVisible().catch(() => false);
      
      if (isToggleVisible) {
        await navToggle.click();
        await page.waitForTimeout(200);
      }
      
      // Click the nav link
      const navLink = page.locator(`a[href="#${sectionId}"]`).first();
      await navLink.click();
      
      // Wait for smooth scroll
      await page.waitForTimeout(500);
      
      // Check that the section is in viewport
      const section = page.locator(`#${sectionId}`);
      await expect(section).toBeInViewport();
    }
  });

  test('nav is sticky at top', async ({ page }) => {
    const nav = page.locator('nav.nav');
    await expect(nav).toHaveCSS('position', 'fixed');
    
    // Scroll down and verify nav is still visible
    await page.evaluate(() => window.scrollTo(0, 500));
    await expect(nav).toBeInViewport();
  });

  test('brand link scrolls to top', async ({ page }) => {
    // Scroll down first
    await page.evaluate(() => window.scrollTo(0, 500));
    
    // Click brand link
    const brandLink = page.locator('a.nav-brand');
    await brandLink.click();
    
    // Check we're at top
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });
});
