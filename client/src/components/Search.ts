class Search extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
    <div class="search-section">
        <i class="bi bi-geo-alt search-section__location"></i>
				<input
					type="text"
					class="search-section__input"
					id="search"
					placeholder="Enter a city..."
				/>
				<i class="bi bi-search search-section__search"></i>
		</div>
  `;
		this.querySelector("#search")?.addEventListener("input", this.handleInput);
	}
	handleInput = (event: Event) => {
		const inputValue = (event.target as HTMLInputElement).value.toLocaleLowerCase();
		this.dispatchEvent(new CustomEvent("searchInput", { detail: inputValue }));
	};
}

customElements.define("search-component", Search);
