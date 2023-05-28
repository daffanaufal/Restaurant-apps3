import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate, createLikeButtonTemplate, createRestaurantReviewTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <hr>
      <div id="restaurant-detail" class="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    restaurant.customerReviews.forEach((review) => {
      restaurantContainer.innerHTML += createRestaurantReviewTemplate(review);
    });
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
