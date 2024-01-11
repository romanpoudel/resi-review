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
	"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const avatar = document.querySelector("avatar-component") as HTMLElement;
avatar.setAttribute("src", src);

try {
	const response = await api(requestOptions);
	console.log("hey", response);
	if (response.status === 200) {
		header_right.style.display = "flex";
		header_loggedin.style.display = "none";
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err: any) {
	console.log(err);
	header_right.style.display = "none";
	header_loggedin.style.display = "flex";
}
