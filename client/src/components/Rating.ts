class Rating extends HTMLElement {
	constructor() {
		super();
		this.render();
	}

	static get observedAttributes() {
		return ["review","star","price"];
	}

	attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
		if ( oldValue !== newValue) {
			this.render();
		}
	}

	render() {
		this.innerHTML = `
    <div class="card__desc--info">
    <div class="card__desc--rating">
      <i class="bi bi-star-half card__desc--star"></i>
        <span class="card__desc--rating-value">${this.getAttribute(
		"star"
	)}</span>
        <p class="card__desc--reviews">(${this.getAttribute(
		"review"
	)} Reviews)</p>
    </div>
    <div class="card__desc--price">$${this.getAttribute("price")}</div>
  </div>
    `;
	}
}

customElements.define("rating-component", Rating);
