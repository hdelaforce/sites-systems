import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('#contact')
  })

  test('shows validation errors on empty submit', async ({ page }) => {
    await page.click('#contact-submit')
    await expect(page.locator('#name-error')).toBeVisible()
    await expect(page.locator('#email-error')).toBeVisible()
    await expect(page.locator('#message-error')).toBeVisible()
  })

  test('shows email error on invalid email', async ({ page }) => {
    await page.fill('#contact-name', 'Jane')
    await page.fill('#contact-email', 'not-an-email')
    await page.fill('#contact-message', 'Hello, this is a test message.')
    await page.click('#contact-submit')
    await expect(page.locator('#email-error')).toBeVisible()
    await expect(page.locator('#email-error')).toContainText('valid email')
  })

  test('happy path shows success message', async ({ page }) => {
    await page.route('**/api/contact', (route) =>
      route.fulfill({ status: 200, body: JSON.stringify({ ok: true }) })
    )
    await page.fill('#contact-name', 'Jane Smith')
    await page.fill('#contact-email', 'jane@example.com')
    await page.fill(
      '#contact-message',
      'Hello, I am interested in a new website for my cafe.'
    )
    await page.click('#contact-submit')
    await expect(page.locator('#contact-success')).toBeVisible()
    await expect(page.locator('#contact-success')).toContainText("We'll be in touch")
  })
})
