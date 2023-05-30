const assert = require('assert');

Feature('Liking Retaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.list_content a', 10);
  I.seeElement('.list_content a');

  const firstRestaurant = locate('.list_content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');
  const likedRestaurantTitle = await I.grabTextFrom('.list_content a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.waitForElement('.list_content a', 10);
  I.seeElement('.list_content a');

  const firstRestaurant = locate('.list_content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list_item');
  const likedRestaurantTitle = await I.grabTextFrom('.list_content a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.seeElement('.list_content a');
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.kosong-favorite', 10);
  const kosongFavorite = await I.grabTextFrom('.kosong-favorite');
  assert.strictEqual(kosongFavorite, 'Belum ada restaurant favorite');
});
