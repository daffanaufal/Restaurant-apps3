import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-thumbnail">
  <picture>
        <source type="image/webp" srcset="${CONFIG.IMAGE_URL.LARGE + restaurant.pictureId}.webp">
        <source type="image/jpeg" srcset="${CONFIG.IMAGE_URL.LARGE + restaurant.pictureId}.jpg">
  </picture>
    <img class="restaurant__poster" src="${CONFIG.IMAGE_URL.LARGE + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" />
  </div>
  <div class="restaurant__info">
    <h2 class="restaurant__name" tabindex="0">${restaurant.name}</h2>
    <h3 tabindex="0">Rating: <i class="fa fa-star" style="font-size:24px;color:#ffb300"></i> ${restaurant.rating}</h3>
    <p tabindex="0"><i class="fa fa-map-marker" style="font-size:24px"></i> ${restaurant.address}</p>
    <h3 tabindex="0">Kategori: </h3><p tabindex="0">${restaurant.categories.map((n) => n.name)}</p>
    <h3 tabindex="0">Makanan: </h3><p tabindex="0">${restaurant.menus.foods.map((n) => n.name)}</p>
    <h3 tabindex="0">Minuman: </h3><p tabindex="0">${restaurant.menus.drinks.map((n) => n.name)}</p>
  </div>
  <div class="restaurant__description">
    <h3 tabindex="0">Description</h3>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  <h3 class="customer-review" tabindex="0">Customer Reviews</h3>
`;

const createRestaurantReviewTemplate = (review) => `
  <div class="review-detail">
    <div class="review-main">
      <i class="fa fa-user-circle" style="font-size: 40px"></i>
      <h4 tabindex="0">${review.name}</h4>
      <p tabindex="0">${review.date}</p>
    </div>
    <p tabindex="0">${review.review}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="list_item">
  <div>
  <picture>
        <source type="image/webp" srcset="${CONFIG.IMAGE_URL.SMALL + restaurant.pictureId}.webp">
        <source type="image/jpeg" srcset="${CONFIG.IMAGE_URL.SMALL + restaurant.pictureId}.jpg">
  </picture>
  <img class="list_thumbnail" src="${CONFIG.IMAGE_URL.SMALL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}" crossorigin="anonymous">
  <div class="Kota">Kota : ${restaurant.city}</div>
  </div>
  <div class="list_content">
    <div class=".list_item_rating">Rating : ${restaurant.rating}</div>
    <h2 class="list_item_title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h2><br><br>
    <div class="list_item_desc">Deskripsi :${restaurant.description.slice(0, 111)}...</div>
  </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
