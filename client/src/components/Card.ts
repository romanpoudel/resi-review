class Card extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
    <div class="card">
						<figure class="card__image">
							<img src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house image" />
						</figure>
						<div class="card__desc">
							<h2 class="card__desc--title">Amsterdam</h2>
							<div class="card__desc--info">
								<div class="card__desc--rating">
									<i class="bi bi-star-half card__desc--star"></i>
									  <span class="card__desc--rating-value">4.5</span>
									  <p class="card__desc--reviews">(93 Reviews)</p>
								</div>
								<div class="card__desc--price">$156,000USD</div>
							</div>
						</div>
					</div>
  `;
	}
}

customElements.define("card-component", Card);
