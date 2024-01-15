import api from "./api/config.ts";

const header_right = document.querySelector(".header__right") as HTMLElement;
const header_loggedin = document.querySelector(
	".header__loggedin"
) as HTMLElement;

const requestOptions = {
	method: "GET",
	url: "/users/me",
};

//user profile picture
const src =
	"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1705308724~exp=1705309324~hmac=ac7aafaafc00d05d849fdfa70311d0ed9547c6bba58414cda9ca3de7f3e9135a";
const avatar = document.querySelector("avatar-component") as HTMLElement;
const parentComponent = document.querySelector("card-parent-component") as HTMLElement;

try {
	const response = await api(requestOptions);
	if (response.status === 200) {
		console.log("user", response.data.data.imageUrl);
		response.data.data.imageUrl
			? avatar.setAttribute("src", response.data.data.imageUrl)
			: avatar.setAttribute("src", src);

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
	const response = await api.get("/all-house-reviews");
	console.log(response.data.data);
	parentComponent.setAttribute("datas",JSON.stringify(response.data.data));
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err: any) {
	console.log(err.response.data.message);
}
