import api from "../api/config.ts";

const src =
	"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1705308724~exp=1705309324~hmac=ac7aafaafc00d05d849fdfa70311d0ed9547c6bba58414cda9ca3de7f3e9135a";
const avatar = document.querySelector("avatar-component") as HTMLElement;

const requestOptions = {
	method: "GET",
	url: "/users/me",
};

try {
	const response = await api(requestOptions);
	response.data.data.imageUrl
		? avatar.setAttribute("src", response.data.data.imageUrl)
		: avatar.setAttribute("src", src);
	avatar.setAttribute("title", response.data.data.username);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err: any) {
	console.log(err);
}
