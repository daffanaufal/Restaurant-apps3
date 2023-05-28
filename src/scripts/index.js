import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './app-bar';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const buttonHamburger = document.querySelector('#menu a');
buttonHamburger.addEventListener('click', (e) => {
  e.preventDefault();
});

document.body.innerHTML += `<img class="lazyload" data-src="${restaurant.pictureId}" alt="dummy images"><br>`;
