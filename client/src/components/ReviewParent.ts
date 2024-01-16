import { TReview } from "../types/review.ts";
import {format} from "timeago.js";

class ReviewParent extends HTMLElement {
	#datas = [];
	constructor() {
		super();
		this.render();
	}

	static get observedAttributes() {
		return ["datas"];
	}

	attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
		if (name === "datas") {
			this.datas = newValue;
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	set datas(value: any) {
		this.#datas = JSON.parse(value);
		this.render();
	}

	render() {
		this.innerHTML = `
      <div class="reviews-container">
        ${this.#datas.map((data: TReview) => {
		return `
            <review-component author="${data.anonymous?data.userId:data.username}" timestamp="${format(data.updatedAt)}" text="${data.review}" likes="${data.likes}" estimation="${data.price}" rating="${data.rating}" anonymous="${data.anonymous}" owner="${data.owner}"></review-component>
          `;
	}).join("")}
      </div>
    `;
	}
}

customElements.define("review-parent-component", ReviewParent);
