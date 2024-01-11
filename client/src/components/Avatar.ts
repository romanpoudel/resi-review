class Avatar extends HTMLElement {
	constructor() {
		super();
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
