import {test, expect, Locator} from '@playwright/test';

test.only('Verify playwright locators', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title');
    
    const logo: Locator = page.getByAltText('nopCommerce demo store');
    await logo.click();
    await expect(logo).toBeVisible();

    const header_page: Locator = page.getByRole('heading', {name: 'Welcome to our store'});
    await expect(header_page).toBeVisible();

    const text: Locator = page.getByText('Do you like nopCommerce?');
    await expect(text).toBeVisible();

    const register_link: Locator = page.getByRole('link', {name: 'Register'});
    await register_link.click();
    await expect(page.getByRole('heading', {name: 'Register'})).toBeVisible();

    await page.getByLabel('First name').fill('Nutty');
    await page.getByLabel('Last name').fill('Tester');
    await page.getByLabel('Email').fill('nutty.tester@example.com');

    await page.getByPlaceholder('Search store').fill('Apple Macbook Pro');
});
