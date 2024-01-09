class Rating extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
    <div class="card__desc--info">
    <div class="card__desc--rating">
      <i class="bi bi-star-half card__desc--star"></i>
        <span class="card__desc--rating-value">${this.getAttribute("star")}</span>
        <p class="card__desc--reviews">(${this.getAttribute("review")} Reviews)</p>
    </div>
    <div class="card__desc--price">$${this.getAttribute("price")} USD</div>
  </div>
    `;
	}
}

customElements.define("rating-component", Rating);
