import {test, expect} from '@playwright/test';

test('Verify page title', async ({page}) => {
    await page.goto('https://unsplash.com/');

    const title: string = await page.title();
    console.log('Title: ', title);

    await expect(page).toHaveTitle('Beautiful Free Images & Pictures | Unsplash');
});


