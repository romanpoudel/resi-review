import"./Rating-ULrbUqxg.js";/* empty css             */class i extends HTMLElement{constructor(){super();this.innerHTML=`
    <div class="card">
		<a href="src/views/details/index.html?${this.getAttribute("city")}">
						<figure class="card__image">
							<img src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house image" />
						</figure>
						<div class="card__desc">
							<h2 class="card__desc--title">${this.getAttribute("city")}</h2>
							<rating-component star="${this.getAttribute("star")}" review="${this.getAttribute("review")}" price="${this.getAttribute("price")}"></rating-component>
						</div>
						</a>
					</div>
  `}}customElements.define("card-component",i);
