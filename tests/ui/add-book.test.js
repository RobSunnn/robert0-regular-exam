const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto('http://localhost:8081/add-book');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  