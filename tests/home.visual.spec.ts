import { test, expect } from '@playwright/test';

test('home page matches approved visual baseline', async ({ page }) => {
  await page.goto(process.env.BASE_URL ?? 'https://example.com');
  await expect(page).toHaveScreenshot('home.png', { fullPage: true, maxDiffPixelRatio: 0.01 });
});
