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
const parentComponent = document.querySelector("card-parent-component") as HTMLElement;

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
	console.log(response.data.data);
	parentComponent.setAttribute("datas",JSON.stringify(response.data.data));
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err: any) {
	console.log(err.response.data.message);
}
