(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();class n extends HTMLElement{constructor(){super(),this.innerHTML=`
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
    <footer class=" footer">
			<div class="container footer-content">
				<p>&copy; 2024 Resi-Review. All rights reserved.</p>
				<p>Contact us: <a href="mailto:romanpoudel325@gmail.com">contactus@gmail.com</a></p>
			</div>
		</footer>
  `}}customElements.define("footer-component",l);class d extends HTMLElement{constructor(){super(),this.innerHTML=`
    <div class="card__desc--info">
    <div class="card__desc--rating">
      <i class="bi bi-star-half card__desc--star"></i>
        <span class="card__desc--rating-value">${this.getAttribute("star")}</span>
        <p class="card__desc--reviews">(${this.getAttribute("review")} Reviews)</p>
    </div>
    <div class="card__desc--price">$${this.getAttribute("price")} USD</div>
  </div>
    `}}customElements.define("rating-component",d);
