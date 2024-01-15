import { TCard } from "../types/card.ts";

class CardParent extends HTMLElement {
	#datas = [];
	constructor() {
		super();
		this.render();
	}

	static get observedAttributes() {
		return ["datas"];
	}

	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		if (name === "datas") {
			this.datas = newValue;
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	set datas(value: any) {
		this.#datas = JSON.parse(value);
		this.render();
	}

	render() {
		this.innerHTML = `
      <div class="reviews__bottom">
        ${this.#datas.map((data: TCard) => {
		return `
            <card-component id="${data.id}" houseno="${data.housenumber}" star="${Math.trunc(Number(data.rating))}" review="${data.totalReviews}" image="${data.houseimage}" price="${Math.trunc(Number(data.price))}" location="${data.location.charAt(0).toUpperCase()+data.location.slice(1)}"></card-component>
          `;
	}).join("")}
      </div>
    `;
	}
}

customElements.define("card-parent-component", CardParent);
