import MainMenu from '../views/pages/main-menu';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': MainMenu, // default page
  '/main-menu': MainMenu,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
