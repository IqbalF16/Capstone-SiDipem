class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="app-bar__brand">
        <a href="/"><img src="images/logo.png" class="navbar_brand" alt=""></a>
        </div>
        <div class="app-bar__menu">
          <button id="menu-button" aria-label="navigation-menu">☰</button>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/konsultasi">Konsultasi</a></li>
            <li><a href="#/rekomendasi">Rekomendasi</a></li>
            <li><a target="_blank" rel="noopener" href="https://github.com/IqbalF16">About Us</a></li>
          </ul>
        </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
