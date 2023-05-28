import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <hr>
    <div class="content">
    <h2 class="main-title">Restoran Favorite Mu!</h2>
    <div id="restaurants" class="list">
    </div>
  </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<p class="kosong-favorite">Belum ada restaurant favorite</p>';
      return;
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
