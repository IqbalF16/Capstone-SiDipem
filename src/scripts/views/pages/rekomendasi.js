import {
  createSearchBarTemplate,
  createSearchResultTemplate,
} from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import HospitalSource from '../../data/hospital-source';

const Rekomendasi = {
  async render() {
    return `
      <section class="pencarian-rs">
      
      </section>
      <section class="hasil-pencarian">
        <div class="container">
            <h2 class="heading-2 text-center" tabindex="0">Daftar Rumah Sakit</span></h2>
            <br>
            <div id="loading">
        
            </div>
            <div class="card-hasil">

            </div>
        </div>   
      </section>
    `;
  },

  async afterRender() {
    const searchHospitalBarContainer = document.querySelector('.pencarian-rs');
    const cardHasilElem = document.querySelector('.card-hasil');

    searchHospitalBarContainer.innerHTML = createSearchBarTemplate();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idProv = url.id;
    const idCity = url.second_id;
    const hospitalsList = await HospitalSource.getHospitals(
      idProv,
      idCity,
    );
    cardHasilElem.innerHTML = '';
    cardHasilElem.appendChild(
      createSearchResultTemplate(hospitalsList.hospitals),
    );
  },
};

export default Rekomendasi;
