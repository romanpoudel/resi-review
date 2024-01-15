class Guideline extends HTMLElement {
	#datas: string[];

	constructor() {
		super();
		this.#datas = JSON.parse(this.getAttribute("datas") || "[]");
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
    <style>
      .guideline__heading {
        font-size: 1.5rem;
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
		.map((data: string) => {
			return `
                <p class="guideline--item">- ${data}</p>
              `;
		})
		.join("")}
          </div>
        `
		: ""
}
    `;
	}
}

customElements.define("guideline-component", Guideline);
