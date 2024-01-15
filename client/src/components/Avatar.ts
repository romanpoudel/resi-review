class Avatar extends HTMLElement {
	constructor() {
		super();
		this.render();
	}

	static get observedAttributes() {
		return ["src"];
	}

	attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
		if (oldValue !== newValue) {
			this.render();
		}
	}

	render() {
		this.innerHTML = `
      <div class="avatar">
        <img
          src="${this.getAttribute("src")}"
          alt="avatar"
        />
      </div>
    `;
	}
}

customElements.define("avatar-component", Avatar);
