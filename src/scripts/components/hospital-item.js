class HospitalItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set hospital(hospital) {
    this._hospital = hospital;
    this.render();
  }

  render() {
    this.setAttribute('class', 'col mb-4');
    if (this._hospital) {
      this.innerHTML = `
      <div class="card h-100 card-kamar">
        <div class="card-body p-4 p-md-5 text-center text-md-left" id="as-btn-detail-container">
          <h3 class="card-title nama-rs" tabindex="0">${this._hospital.name}</h3>
          <p class="card-text alamat-rs" tabindex="0">${this._hospital.address}</p>
        </div>
        <div class="card-footer text-center align-items-center">
          <a class="btn btn-success btn-lokasi w-100 text-center" target="_blank" rel="noopener" href="https://www.google.com/maps/search/${this._hospital.name}">Lihat Lokasi</a> 
            <span data-icon="fa-solid:location-arrow" style="color: white;" data-width="15">
            </span>
        </div>
      </div>
      `;
    }
  }
}

customElements.define('hospital-item', HospitalItem);
