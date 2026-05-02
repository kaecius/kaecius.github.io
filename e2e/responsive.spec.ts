import { test, expect } from '@playwright/test';

test.describe('Responsive Layout', () => {
  test('mobile viewport stacks sections vertically', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check hero is visible
    const hero = page.locator('#hero');
    await expect(hero).toBeVisible();
    
    // Check no horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // Allow 1px tolerance
    
    // Check all sections are stacked (visible when scrolling)
    const sections = ['about', 'experience', 'education', 'skills', 'projects', 'contact'];
    for (const sectionId of sections) {
      const section = page.locator(`#${sectionId}`);
      await expect(section).toBeVisible();
    }
  });

  test('tablet viewport displays correctly', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    const hero = page.locator('#hero');
    await expect(hero).toBeVisible();
    
    // Check skills grid has multiple columns
    const skillsGrid = page.locator('.lang-en .skills-grid');
    const gridStyles = await skillsGrid.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        display: styles.display,
        gridTemplateColumns: styles.gridTemplateColumns,
      };
    });
    
    expect(gridStyles.display).toBe('grid');
  });

  test('desktop viewport displays correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    
    const hero = page.locator('#hero');
    await expect(hero).toBeVisible();
    
    // Check nav links are visible (not collapsed)
    const navLinks = page.locator('.nav-links');
    await expect(navLinks).toBeVisible();
  });

  test('mobile menu toggle works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Find hamburger button
    const toggleButton = page.locator('.nav-toggle');
    await expect(toggleButton).toBeVisible();
    
    // Click to open menu
    await toggleButton.click();
    
    // Check nav links are visible
    const navLinks = page.locator('.nav-links');
    await expect(navLinks).toHaveClass(/active/);
  });
});
