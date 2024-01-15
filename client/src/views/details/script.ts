import { checkAuth } from "../../utils/auth.ts";
import api from "../../api/config.ts";
import { showToast } from "../../utils/toast.ts";


const urlQuery = new URLSearchParams(window.location.search);
const title = document.getElementById("house-title") as HTMLInputElement;
const houseImage = document.getElementById("house-image") as HTMLImageElement;
const locationImage = document.getElementById(
	"location-image"
) as HTMLImageElement;
const ratingComponent = document.querySelector(
	"rating-component"
) as HTMLImageElement;

//get data from server of selected house
try {
	const response = await api.get(`/house/house-detail/${urlQuery.get("id")}`);
	title.textContent = response.data.housenumber;
	const { rating, totalReviews, price, houseimage, locationimage } =
		response.data.data;
	const star = Math.trunc(rating);
	const review = Math.trunc(totalReviews);
	const avgPrice = Math.trunc(price);
	houseImage.setAttribute("src", houseimage);
	locationImage.setAttribute("src", locationimage);
	ratingComponent.setAttribute("star", star.toString());
	ratingComponent.setAttribute("price", avgPrice.toString());
	ratingComponent.setAttribute("review", review.toString());
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err) {
	console.log(err);
}

const reviewParent=document.querySelector("review-parent-component") as HTMLElement;
//get reviews of selected house
try {
	const response = await api.get(`/house/reviews/${urlQuery.get("id")}`);
	reviewParent.setAttribute("datas",JSON.stringify(response.data.data));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err: any) {
	console.log(err.response.data.message);
}

const value = document.getElementById("estimate-value") as HTMLSpanElement;
const slider = document.getElementById("estimate") as HTMLInputElement;

slider.addEventListener("input", function () {
	value.textContent = "$" + this.value + "*";
});

//user review form
const form = document.getElementById("user-review") as HTMLFormElement;
// Get all the radio buttons
const radios = document.querySelectorAll("input[type='radio'][name='rating']");

let rating: number;
// Add an event listener to each radio button
radios.forEach((radio) => {
	radio.addEventListener("change", function (this: HTMLInputElement) {
		rating = 5 - parseInt(this.id.split("-")[1]) + 1;
	});
});

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	await checkAuth();
	const error = document.getElementById("error") as HTMLDivElement;
	if (!rating) {
		error.innerHTML = "Please select a rating";
		return;
	} else {
		error.innerHTML = "";
	}
	const formData = new FormData(form);
	formData.append("rating", rating.toString());
	const data = Object.fromEntries(formData.entries());

	//pass data to server
	const requestOptions = {
		method: "POST",
		url: "/users/house-review",
		data: {
			...data,
			house_id: urlQuery.get("id"),
		},
	};
	try {
		const response = await api(requestOptions);
		console.log(response);
		showToast("Data added successfully", true);
		window.location.reload();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		console.log("error", err);
		showToast("Review creation failed", false);
		const error = document.getElementById("error") as HTMLDivElement;
		error.innerText = err.response.data.message;
		error.classList.add("error");
	}
});


const parentComponent = document.querySelector(
	"card-parent-component"
) as HTMLElement;

//listening to input data
const searchComponent = document.querySelector(
	"search-component"
) as HTMLElement;
searchComponent?.addEventListener("searchInput", async (event: Event) => {
	const customEvent = event as CustomEvent<string>;
	console.log(customEvent.detail);
	try {
		const response = await api.get(
			`/house/all-house-reviews?location=${customEvent.detail}`
		);
		parentComponent.setAttribute("datas", JSON.stringify(response.data.data));
		console.log(response);
	} catch (err) {
		console.log(err);
	}
});