/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import '../styles/responsive.scss';
import '../styles/custom.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'bootstrap';
import '@iconify/iconify';
import './components/app-bar';
import './components/app-footer';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  menuButton: document.querySelector('#menu-button'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
