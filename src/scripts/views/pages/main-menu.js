import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const MainMenu = {
  async render() {
    return `
      <div class="content">
        <h2 class="main-title" tabindex="0">Daftar Restoran</h2>
        <div id="restaurants" class="list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.mainMenuRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default MainMenu;
