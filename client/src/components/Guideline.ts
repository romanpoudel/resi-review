import { TGuideline } from "../types/guidline.ts";

class Guideline extends HTMLElement {
	#datas: TGuideline[];

	constructor() {
		super();
		this.#datas = JSON.parse(this.getAttribute("datas") || "[]");
		this.render();
	}

	static get observedAttributes() {
		return ["datas"];
	}

	attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
		if (oldValue !== newValue) {
			this.#datas = JSON.parse(newValue || "[]");
			this.render();
		}
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <style>
        .guideline__heading {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        .guideline--item {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        .guideline__container {
          padding-bottom: 1rem;
        }
      </style>
      ${
	this.#datas.length > 0
		? `
            <h4 class="guideline__heading">Guidelines</h4>
            <div class="guideline__container">
              ${this.#datas
		.map((data) => `<p class="guideline--item">${data.rule}</p>`)
		.join("")}
            </div>`
		: ""
}
    `;
	}
}

customElements.define("guideline-component", Guideline);
