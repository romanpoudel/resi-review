import api from "../../api/config.ts";

const src =
	"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const avatar = document.querySelector("avatar-component") as HTMLElement;
avatar.setAttribute("src", src);

//form data
const housenumber = document.getElementById("house-number") as HTMLInputElement;
const houseimage = document.getElementById("house-image") as HTMLInputElement;
const location = document.getElementById("house-location") as HTMLInputElement;
const locationimage = document.getElementById(
	"location-image"
) as HTMLInputElement;
const guidelines = document.getElementById(
	"house-guidlines"
) as HTMLTextAreaElement;
const price = document.getElementById("house-price") as HTMLInputElement;
const category = document.getElementById("house-category") as HTMLInputElement;
//individual facility
const wifi = document.getElementById("wifi") as HTMLInputElement;
const water = document.getElementById("water") as HTMLInputElement;
const security = document.getElementById("security") as HTMLInputElement;
const parking = document.getElementById("parking") as HTMLInputElement;
const furniture = document.getElementById("furniture") as HTMLInputElement;
const open247 = document.getElementById("open-24-7") as HTMLInputElement;
const separatewashroom = document.getElementById("washroom") as HTMLInputElement;
const rooftopaccess = document.getElementById("rooftop") as HTMLInputElement;

const contact = document.getElementById("house-contact") as HTMLInputElement;
const form = document.getElementById("review-form") as HTMLFormElement;

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const data = {
		housenumber: housenumber.value.trim(),
		houseimage: houseimage.value,
		location: location.value.trim(),
		locationimage: locationimage.value,
		guidelines: guidelines.value.trim(),
		price: Number(price.value.trim()),
		category: category.value.trim(),
		facilities: {
			wifi: wifi.checked,
			water: water.checked,
			security: security.checked,
			parking: parking.checked,
			furniture: furniture.checked,
			open247: open247.checked,
			separatewashroom: separatewashroom.checked,
			rooftopaccess: rooftopaccess.checked,
		},
		contact: contact.value.trim(),
	};
	console.log( data);
	const requestOptions = {
		method: "POST",
		url: "/create-review",
		data: data,
		headers: {
			"Content-Type": "multipart/form-data",
		},
	};
	try {
		const response = await api(requestOptions);
		console.log(response);
		if (response.status === 200) {
			window.location.href = "/";
			console.log(response.data.data);
		}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		console.log(err);
		const error = document.getElementById("error") as HTMLDivElement;
		error.innerText = err.response.data.message;
		error.classList.add("error");
	}
});
