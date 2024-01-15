import api from "../../api/config.ts";
import { checkAuth } from "../../utils/auth.ts";

//check as soon as page loads
window.onload = async () => {
	await checkAuth();
};

const src =
	"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const avatar = document.querySelector("avatar-component") as HTMLElement;
avatar.setAttribute("src", src);

const form = document.getElementById("review-form") as HTMLFormElement;

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const formData = new FormData();

	// Append text fields to FormData
	formData.append(
		"housenumber",
		(document.getElementById("house-number") as HTMLInputElement).value.trim()
	);
	formData.append(
		"location",
		(document.getElementById("house-location") as HTMLInputElement).value.trim()
	);
	formData.append(
		"guidelines",
		(
			document.getElementById("house-guidlines") as HTMLTextAreaElement
		).value.trim()
	);
	formData.append(
		"price",
		(document.getElementById("house-price") as HTMLInputElement).value.trim()
	);
	formData.append(
		"category",
		(document.getElementById("house-category") as HTMLInputElement).value.trim()
	);
	formData.append(
		"contact",
		(document.getElementById("house-contact") as HTMLInputElement).value.trim()
	);

	// Append file fields to FormData
	const houseImageInput = document.getElementById(
		"house-image"
	) as HTMLInputElement;
	const locationImageInput = document.getElementById(
		"location-image"
	) as HTMLInputElement;

	formData.append("houseimage", houseImageInput?.files?.[0] || "");

	formData.append("locationimage", locationImageInput?.files?.[0] || "");

	// Append checkbox values to FormData
	formData.append(
		"facilities[wifi]",
		(document.getElementById("wifi") as HTMLInputElement).checked.toString()
	);
	formData.append(
		"facilities[water]",
		(document.getElementById("water") as HTMLInputElement).checked.toString()
	);
	formData.append(
		"facilities[security]",
		(document.getElementById("security") as HTMLInputElement).checked.toString()
	);
	formData.append(
		"facilities[parking]",
		(document.getElementById("parking") as HTMLInputElement).checked.toString()
	);
	formData.append(
		"facilities[furniture]",
		(
			document.getElementById("furniture") as HTMLInputElement
		).checked.toString()
	);
	formData.append(
		"facilities[open247]",
		(
			document.getElementById("open-24-7") as HTMLInputElement
		).checked.toString()
	);
	formData.append(
		"facilities[separatewashroom]",
		(document.getElementById("washroom") as HTMLInputElement).checked.toString()
	);
	formData.append(
		"facilities[sunlight]",
		(document.getElementById("sunlight") as HTMLInputElement).checked.toString()
	);

	const requestOptions = {
		method: "POST",
		url: "/create-review",
		data: formData,
		headers: {
			"Content-Type": "multipart/form-data",
		},
	};

	try {
		const response = await api(requestOptions);
		console.log(response);
		if (response.status === 201) {
			window.location.href = "/";
			console.log(response.data.data);
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		const error = document.getElementById("error") as HTMLDivElement;
		error.innerText = err.response?.data?.message || "An error occurred.";
		error.classList.add("error");
	}
});
