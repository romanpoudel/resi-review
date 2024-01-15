import api from "./api/config.ts";

const header_right = document.querySelector(".header__right") as HTMLElement;
const header_loggedin = document.querySelector(
	".header__loggedin"
) as HTMLElement;

const requestOptions = {
	method: "GET",
	url: "/users/me",
};

const avatar = document.querySelector("avatar-component") as HTMLElement;
const parentComponent = document.querySelector(
	"card-parent-component"
) as HTMLElement;

avatar.addEventListener("click", () => {
	window.location.href = "/src/views/profile/index.html";
});

try {
	const response = await api(requestOptions);
	if (response.status === 200) {
		header_right.style.display = "none";
		header_loggedin.style.display = "flex";
		avatar.setAttribute("title", response.data.data.username);
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err: any) {
	header_right.style.display = "flex";
	header_loggedin.style.display = "none";
}

//get data for card from backend
try {
	const response = await api.get("/house/all-house-reviews");
	parentComponent.setAttribute("datas", JSON.stringify(response.data.data));
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err: any) {
	console.log(err.response.data.message);
}

//listening to input data
const searchComponent = document.querySelector(
	"search-component"
) as HTMLElement;
searchComponent?.addEventListener("searchInput", async (event: Event) => {
	const customEvent = event as CustomEvent<string>;
	try {
		const response = await api.get(
			`/house/all-house-reviews?location=${customEvent.detail}`
		);
		parentComponent.setAttribute("datas", JSON.stringify(response.data.data));
	} catch (err) {
		console.log(err);
	}
});

//filter data by category
const selectElement = document.getElementById("category") as HTMLSelectElement;
selectElement.addEventListener("change", async () => {
	try {
		const response = await api.get(
			`/house/filter?category=${selectElement.value}`
		);
		parentComponent.setAttribute("datas", JSON.stringify(response.data.data));
	} catch (err) {
		console.log(err);
	}
});
