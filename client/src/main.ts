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
