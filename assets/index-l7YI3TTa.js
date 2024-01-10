(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();class n extends HTMLElement{constructor(){super(),this.innerHTML=`
    <div class="header__logo">
    <i class="bi bi-house-fill header__logo--icon"></i>
    <span class="header__logo--text">Resi-Review</span>
    </div>
  `}}customElements.define("logo-component",n);class a extends HTMLElement{constructor(){super(),this.innerHTML=`
    <div class="search-section">
        <i class="bi bi-geo-alt search-section__location"></i>
				<input
					type="text"
					class="search-section__input"
					placeholder="Enter a city..."
				/>
				<i class="bi bi-search search-section__search"></i>
		</div>
  `}}customElements.define("search-component",a);class l extends HTMLElement{constructor(){super(),this.innerHTML=`
    <div class="card">
		<a href="/src/views/details/index.html?${this.getAttribute("city")}">
						<figure class="card__image">
							<img src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="house image" />
						</figure>
						<div class="card__desc">
							<h2 class="card__desc--title">${this.getAttribute("city")}</h2>
							<rating-component star="${this.getAttribute("star")}" review="${this.getAttribute("review")}" price="${this.getAttribute("price")}"></rating-component>
						</div>
						</a>
					</div>
  `}}customElements.define("card-component",l);class d extends HTMLElement{constructor(){super(),this.innerHTML=`
    <footer class=" footer">
			<div class="container footer-content">
				<p>&copy; 2024 Resi-Review. All rights reserved.</p>
				<p>Contact us: <a href="mailto:romanpoudel325@gmail.com">contactus@gmail.com</a></p>
			</div>
		</footer>
  `}}customElements.define("footer-component",d);class u extends HTMLElement{constructor(){super(),this.innerHTML=`
    <div class="card__desc--info">
    <div class="card__desc--rating">
      <i class="bi bi-star-half card__desc--star"></i>
        <span class="card__desc--rating-value">${this.getAttribute("star")}</span>
        <p class="card__desc--reviews">(${this.getAttribute("review")} Reviews)</p>
    </div>
    <div class="card__desc--price">$${this.getAttribute("price")} USD</div>
  </div>
    `}}customElements.define("rating-component",u);
