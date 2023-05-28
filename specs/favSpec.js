import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

const puppeteer = require('puppeteer');

describe('Favorite Restaurants List', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display the list of favorite restaurants', async () => {
    // Simulate that the user has liked several restaurants
    await FavoriteRestaurantIdb.putRestaurant({ id: 1, name: 'Restaurant A' });
    await FavoriteRestaurantIdb.putRestaurant({ id: 2, name: 'Restaurant B' });
    await FavoriteRestaurantIdb.putRestaurant({ id: 3, name: 'Restaurant C' });

    // Visit the favorite restaurants page
    await page.goto('/favorite');

    // Verify that the list of favorite restaurants is displayed correctly
    expect(await page.$$eval('.restaurant-item', (elements) => elements.length)).toEqual(3);
    expect(await page.$eval('#restaurant-1', (element) => element.textContent)).toContain('Restaurant A');
    expect(await page.$eval('#restaurant-2', (element) => element.textContent)).toContain('Restaurant B');
    expect(await page.$eval('#restaurant-3', (element) => element.textContent)).toContain('Restaurant C');
  });
});
