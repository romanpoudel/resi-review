class Review extends HTMLElement {
	constructor() {
		super();
		this.render();
	}

	static get observedAttributes() {
		return ["author", "timestamp", "text", "likes","estimation","rating"];
	}

	attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
		if (oldValue !== newValue) {
			this.render();
		}
	}
	render(){
		this.innerHTML = `
      <div class="review">
      <div class="review--left">
        <div class="review__top">
          <div class="review__header">
            <h4 class="review__author">${this.getAttribute("author")}</h4>
            <span class="review__bullet">&bullet;</span>
            <p class="review__timestamp">${this.getAttribute("timestamp")}</p>
          </div>
          <div class="review__content">
            <p class="review__text">
              ${this.getAttribute("text")}...<span>Read more</span>
            </p>
          </div>
        </div>
        <div class="review__bottom">
          <div class="review__likes">
            <i class="bi bi-hand-thumbs-up"></i>
            <p class="review__likes--count">Liked (${this.getAttribute("likes")})</p>
          </div>
        </div>
      </div>
      <div class="review--right">
        <div class="review__star">
          <i class="bi bi-star-fill"></i>
          <span>${this.getAttribute("rating")}</span>
        </div>
        <div class="review__price">$${this.getAttribute("estimation")}</div>
      </div>
    </div>
    `;
	}
}

customElements.define("review-component", Review);
