import API_ENDPOINT from '../globals/api-endpoint';
import Loader from '../utils/loading-animation';

class RestaurantDbSource {
  static async mainMenuRestaurants() {
    const response = await fetch(API_ENDPOINT.MAIN_MENU);
    const loaderInner = '<div id="loading"></div>';
    document.getElementById('restaurants').innerHTML = loaderInner;
    const loader = document.getElementById('loading');
    Loader.displayLoading(loader);
    const responseJson = await response.json();
    Loader.hideLoading(loader);
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const loaderInner = '<div id="loading"></div>';
    document.getElementById('restaurant-detail').innerHTML = loaderInner;
    const loader = document.getElementById('loading');
    Loader.displayLoading(loader);
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDbSource;
