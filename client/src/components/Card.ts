class Card extends HTMLElement {
	constructor() {
		super();
		this.render();
	}

	static get observedAttributes() {
		return ["id", "houseno", "star", "review","image", "price","location"];
	}

	attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
		if (oldValue !== newValue) {
			this.render();
		}
	}

	render() {
		this.innerHTML = `
      <div class="card">
        <a href="/src/views/details/index.html?id=${this.getAttribute("id")}">
          <figure class="card__image">
            <img src="${this.getAttribute("image")}" alt="house image" />
          </figure>
          <div class="card__desc">
					<div class="card__desc--title">
					<h3 >${this.getAttribute("houseno")}</h3>
					<h3>${this.getAttribute("location")}</h3>
					</div>
            <rating-component star="${this.getAttribute("star")}" review="${this.getAttribute("review")}" price="${this.getAttribute("price")}"></rating-component>
          </div>
        </a>
      </div>
    `;
	}
}

customElements.define("card-component", Card);
