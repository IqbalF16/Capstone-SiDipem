/* eslint-disable import/no-cycle */
import OptionElementInitiator from '../utils/option-element-initiator';
import SearchButtonInitiator from '../utils/search-button-initiator';

class SearchBarContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container">
      <div class="col-12 col-md-10 mx-auto">
      <h2 class="text-center heading-2" tabindex="0">Cek Rekomendasi Rumah Sakit</h1>
      <div
        class="container-search d-flex flex-column flex-lg-row justify-content-between align-items-center text-center">
        <div class="col-12 col-md-6 p-0">
          <div class="dropdown-rs d-flex flex-column flex-lg-row justify-content-center justify-content-md-between">
            <select class="custom-select border-0 mr-2 mb-4 mb-lg-0" id="province">
              <option selected>Pilih Provinsi ...</option>
            </select>
            <select class="custom-select border-0 mb-4 mb-lg-0" id="city">
              <option selected>Pilih Kabupaten / Kota ...</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-md-2 px-0" id="btn-search-container">

        </div>
      </div>
      </div>    
    </div>
    `;

    OptionElementInitiator.init({
      selectProvinceElem: this.querySelector('#province'),
      selectCityElem: this.querySelector('#city'),
    });

    SearchButtonInitiator.init({
      buttonContainer: this.querySelector('#btn-search-container'),
    });
  }
}

customElements.define('search-bar-content', SearchBarContent);
