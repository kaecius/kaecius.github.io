import { test, expect } from '@playwright/test';

test.describe('External Links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('GitHub link has correct URL and opens in new tab', async ({ page }) => {
    const githubLink = page.locator('a[href="https://github.com/kaecius"]').first();
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('rel', /noopener/);
  });

  test('LinkedIn link has correct URL and opens in new tab', async ({ page }) => {
    const linkedinLink = page.locator('a[href="https://www.linkedin.com/in/daniel-canadillas/"]').first();
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
    await expect(linkedinLink).toHaveAttribute('rel', /noopener/);
  });

  test('email link has correct mailto', async ({ page }) => {
    const emailLink = page.locator('a[href^="mailto:"]').first();
    await expect(emailLink).toHaveAttribute('href', 'mailto:dcanadillas.github@outlook.com');
  });

});
