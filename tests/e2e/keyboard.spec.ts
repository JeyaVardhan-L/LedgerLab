import { test, expect } from '@playwright/test';

test('onboarding stage cards are buttons reachable by keyboard', async ({ page }) => {
  await page.goto('/');
  const blockStage = page.getByRole('button', { name: /Block Structure/ });
  await expect(blockStage).toBeVisible();
  await blockStage.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#block-card')).toBeVisible();
  await expect(page.locator('#tab-block')).toHaveAttribute('aria-current', 'page');
});
