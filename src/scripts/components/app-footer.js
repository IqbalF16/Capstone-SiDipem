class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer id="footer">
                Copyright © 2022 - CPSG-16
            </footer>
        `;
  }
}

customElements.define('app-footer', AppFooter);
