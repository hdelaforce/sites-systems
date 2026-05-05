import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('#contact')
  })

  test('renders pageclip form attributes', async ({ page }) => {
    const form = page.locator('form.pageclip-form')
    await expect(form).toHaveAttribute(
      'action',
      'https://send.pageclip.co/Ph9Rz1zy6qCJqcwCPhUkRextPgPvtUwt/contact-form'
    )
    await expect(form).toHaveAttribute('method', 'post')
  })

  test('includes named fields for Pageclip', async ({ page }) => {
    await expect(page.locator('#contact-name')).toHaveAttribute('name', 'name')
    await expect(page.locator('#contact-email')).toHaveAttribute('name', 'email')
    await expect(page.locator('#contact-message')).toHaveAttribute('name', 'message')
  })

  test('uses Pageclip submit button styling', async ({ page }) => {
    const submit = page.locator('#contact-submit')
    await expect(submit).toHaveClass(/pageclip-form__submit/)
    await expect(submit.locator('span')).toHaveText('Send')
  })
})
