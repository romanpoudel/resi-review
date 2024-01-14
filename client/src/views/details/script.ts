import { checkAuth } from "../../utils/auth.ts";
import api  from "../../api/config.ts";
import { showToast } from "../../utils/toast.ts";


const value = document.getElementById("estimate-value") as HTMLSpanElement;
const slider = document.getElementById("estimate") as HTMLInputElement;

//price is not required to send as it automatically goes when form is submitted
// let price;
slider.addEventListener("input", function () {
	value.textContent = "$" + this.value + "*";
	// price = parseInt(this.value);
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

form.addEventListener("submit", async (e)=> {
	e.preventDefault();
	checkAuth();
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
	const urlQuery = new URLSearchParams(window.location.search);

	//pass data to server
	const requestOptions = {
		method: "POST",
		url: "/users/house-review",
		data:{
			...data,
			house_id: urlQuery.get("id")
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
