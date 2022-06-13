/* eslint-disable import/no-cycle */
import Swal from 'sweetalert2';
import HospitalSource from '../data/hospital-source';
import { createSearchResultTemplate } from '../views/templates/template-creator';
import Spinner from '../views/templates/spinner';

const SearchButtonInitiator = {
  init({ buttonContainer }) {
    this._buttonContainer = buttonContainer;

    this._renderButton();
  },
  _renderButton() {
    this._buttonContainer.innerHTML = `
      <button class="btn btn-danger btn-cari w-100" tabindex="0" id="btn-cari-rs">Cari 
        <span class="iconify ml-2"data-icon="fa-solid:search" style="color: white;" data-width="15">
        </span>
      </button>
    `;
    const loading = document.querySelector('#loading');
    const searchButton = document.querySelector('#btn-cari-rs');
    searchButton.addEventListener('click', async (event) => {
      event.stopPropagation();
      loading.innerHTML = Spinner();
      const selectProvinceElemVal = document.querySelector('#province').value;
      const selectCityElemVal = document.querySelector('#city').value;

      if (selectProvinceElemVal && selectCityElemVal) {
        loading.innerHTML = Spinner();
        const cardHasilElem = document.querySelector('.card-hasil');
        const hospitalsList = await HospitalSource.getHospitals(
          selectProvinceElemVal,
          selectCityElemVal,
        );
        cardHasilElem.innerHTML = '';
        cardHasilElem.appendChild(
          createSearchResultTemplate(hospitalsList.hospitals),
        );
        loading.style.display = 'none';
      } else {
        loading.innerHTML = Spinner();
        Swal.fire({
          title: 'Warning!',
          text: 'Pilihan Provinsi dan Kota/Kab Harus diisi dulu',
          icon: 'warning',
          confirmButtonText: 'Ok',
        });
        loading.style.display = 'none';
      }
    });
  },
};

export default SearchButtonInitiator;
