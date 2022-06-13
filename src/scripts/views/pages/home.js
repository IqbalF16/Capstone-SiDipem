// import RestaurantResource from '../../data/hospital-source';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import Spinner from '../templates/spinner';

const Home = {
  async render() {
    return `
        <div class="container">
          <h2 class="content-title">Cooming Soon</h2>
          <div id="loading">
        
          </div>
          <div class="main">
            <section id="post-list" class="post-list">

            </section>
          </div>
        </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
    loading.innerHTML = Spinner();
    main.style.display = 'none';
    // const restaurantsList = document.querySelector('#post-list');
    // try {
    //   const restaurants = await RestaurantResource.getRestaurants();
    //   restaurants.forEach((hospitals) => {
    //     restaurantsList.innerHTML += createRestaurantItemTemplate(hospitals);
    //   });
    //   restaurantsList.style.display = 'grid';
    //   main.style.display = 'block';
    //   loading.style.display = 'none';
    // } catch (err) {
    //   main.style.display = 'block';
    //   loading.style.display = 'none';
    //   restaurantsList.innerHTML = `<center>Error: ${err}, swipe up to refresh!</center>`;
    // }
  },
};

export default Home;
