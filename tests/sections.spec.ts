import { test, expect } from '@playwright/test'

test.describe('WhySitesSystems section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders glass stat cards with anchor values', async ({ page }) => {
    await expect(page.getByText('100%')).toBeVisible()
    await expect(page.getByText('Own Everything')).toBeVisible()
    await expect(page.getByText('Long-term')).toBeVisible()
  })
})

test.describe('AiAutomation section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders asymmetric split with large headline', async ({ page }) => {
    const headline = page.locator('#automation h2')
    await expect(headline).toBeVisible()
    await expect(headline).toContainText('Your website works while you sleep')
  })

  test('renders all four automation items', async ({ page }) => {
    await expect(page.getByText('Smart booking flows')).toBeVisible()
    await expect(page.getByText('CRM integration')).toBeVisible()
  })
})

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('does not show ABN placeholder', async ({ page }) => {
    await expect(page.getByText('ABN: TBD')).not.toBeVisible()
  })
})
