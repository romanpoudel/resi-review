import api from "../api/config.ts";

class Review extends HTMLElement {
	constructor() {
		super();
		this.render();
	}

	static get observedAttributes() {
		return [
			"reviewId",
			"author",
			"timestamp",
			"text",
			"likes",
			"estimation",
			"rating",
			"anonymous",
			"owner",
		];
	}

	attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
		if (oldValue !== newValue) {
			this.render();
		}
	}
	connectedCallback() {
		this.render();
		(async () => {
			const apiResponse = await api.post(
				`/like/check-user?review_id=${this.getAttribute("reviewId")}`
			);
			const iconTag = this.querySelector(
				".review__likes--icon i"
			) as HTMLElement;
			if (
				apiResponse.data.data.user
			) {
				iconTag.classList.remove("bi-hand-thumbs-up");
				iconTag.classList.add("bi-hand-thumbs-up-fill");
			} else {
				iconTag.classList.remove("bi-hand-thumbs-up-fill");
				iconTag.classList.add("bi-hand-thumbs-up");
			}
		})();
		this.querySelector(".review__likes--icon i")?.addEventListener(
			"click",
			(event) => {
				// Handle the click event here
				const target = event.target as HTMLElement;
				if (target.classList.contains("bi-hand-thumbs-up")) {
					target.classList.remove("bi-hand-thumbs-up");
					target.classList.add("bi-hand-thumbs-up-fill");
					//api call to update likes
					(async () => {
						await api.post(
							`/like?review_id=${this.getAttribute(
								"reviewId"
							)}&add=true`
						);
					})();
				} else {
					target.classList.add("bi-hand-thumbs-up");
					target.classList.remove("bi-hand-thumbs-up-fill");
					(async () => {
						await api.post(
							`/like?review_id=${this.getAttribute(
								"reviewId"
							)}`
						);
					})();
				}
				console.log("Likes icon clicked!");
			}
		);
	}
	render() {
		this.innerHTML = `
      <div class="review">
      <div class="review--left">
        <div class="review__top">
          <div class="review__header">
          <h4 class="review__author">${this.getAttribute("author")} ${
	this.getAttribute("owner") === "true" ? "(owner)" : ""
}</h4>
            <span class="review__bullet">&bullet;</span>
            <p class="review__timestamp">${this.getAttribute("timestamp")}</p>
          </div>
          <div class="review__content">
            <p class="review__text">
              ${this.getAttribute("text")}...<span>Read more</span>
            </p>
          </div>
        </div>
        <div class="review__bottom">
          <div class="review__likes">
            <div class="review__likes--icon">
              <i class="bi bi-hand-thumbs-up"></i>
            </div>
            <p class="review__likes--count">Liked (${this.getAttribute(
		"likes"
	)})</p>
          </div>
        </div>
      </div>
      <div class="review--right">
        <div class="review__star">
          <i class="bi bi-star-fill"></i>
          <span>${this.getAttribute("rating")}</span>
        </div>
        <div class="review__price">$${this.getAttribute("estimation")}</div>
      </div>
    </div>
    `;
	}
}

customElements.define("review-component", Review);
