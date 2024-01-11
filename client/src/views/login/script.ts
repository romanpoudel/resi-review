import api from "../../api/config.ts";

const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const form = document.getElementById("auth-form") as HTMLFormElement;
const icon = document.getElementsByTagName(
	"i"
) as HTMLCollectionOf<HTMLElement>;

icon[0].addEventListener("click", () => {
	if (password.type === "password") {
		password.type = "text";
		icon[0].className = "bi bi-eye-slash";
	} else {
		password.type = "password";
		icon[0].className = "bi bi-eye";
	}
});

form?.addEventListener("submit", async (e) => {
	e.preventDefault();

	//give data to backend
	const requestOptions = {
		method: "POST",
		url: "/auth/login",
		data: {
			email: email.value.trim(),
			password: password.value.trim(),
		},
	};

	try {
		const response = await api(requestOptions);
		console.log(response);
		window.location.href = "/";
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		console.log(err.response.data.message);
		const error = document.getElementById("error") as HTMLDivElement;
		error.innerText = err.response.data.message;
		error.classList.add("error");
	}
});
