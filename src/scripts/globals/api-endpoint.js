import CONFIG from './config';

const API_ENDPOINT = {
  MAIN_MENU: `${CONFIG.BASE_URL}list`,
  FAVORITE: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
