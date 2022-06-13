// import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import Spinner from '../templates/spinner';

const Favorite = {
  async render() {
    return `
    <div class="container">
      <h2 class="content-title">Cooming Soon Juga</h2>
      <div id="loading"></div>
      <div class="main">
        <div id="restaurants" class="restaurants post-list">
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    // const main = document.querySelector('.main');
    loading.innerHTML = Spinner();
    // const restaurantsContainer = document.querySelector('#restaurants');
    // try {
    //   const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    //   if (restaurants.length === 0) {
    //     main.innerHTML = `
    //         <center>You don't have any Favorite Cafe or Restaurant<center>
    //     `;
    //   }

    //   restaurants.forEach((restaurant) => {
    //     restaurantsContainer.innerHTML
    //       += createRestaurantItemTemplate(restaurant);
    //   });
    //   restaurantsContainer.style.display = 'grid';
    //   main.style.display = 'block';
    //   loading.style.display = 'none';
    // } catch (err) {
    //   main.style.display = 'block';
    //   loading.style.display = 'none';
    //   restaurantsContainer.innerHTML = `<center>Error: ${err}, swipe up to refresh!<center>`;
    // }
  },
};

export default Favorite;
