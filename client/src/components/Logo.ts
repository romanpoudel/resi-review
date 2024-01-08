class Logo extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
    <div class="header__logo">
    <i class="bi bi-house-fill header__logo--icon"></i>
    <span class="header__logo--text">Resi-Review</span>
    </div>
  `;
	}
}

customElements.define("logo-component", Logo);
