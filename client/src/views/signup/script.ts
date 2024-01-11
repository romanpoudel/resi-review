import api from "../../api/config.ts";

const username = document.getElementById("username") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const confirmPassword = document.getElementById(
	"confirmPassword"
) as HTMLInputElement;
const form = document.getElementById("auth-form") as HTMLFormElement;
const icon = document.getElementsByTagName(
	"i"
) as HTMLCollectionOf<HTMLElement>;
const checkbox = document.getElementById("checkbox") as HTMLInputElement;
const submit = document.getElementById("submit") as HTMLButtonElement;

checkbox.addEventListener("change", function() {
	if (this.checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
});


for (let i = 0; i < icon.length; i++) {
	icon[i].addEventListener("click", () => {
		if (password.type === "password") {
			if (i === 0) {
				password.type = "text";
			} else {
				confirmPassword.type = "text";
			}
			icon[i].className = "bi bi-eye-slash";
		} else {
			if (i === 0) {
				password.type = "password";
			} else {
				confirmPassword.type = "password";
			}
			icon[i].className = "bi bi-eye";
		}
	});
}

form?.addEventListener("submit", async (e) => {
	e.preventDefault();

	//give data to backend
	const requestOptions = {
		method: "POST",
		url: "/auth/signup",
		data: {
			username: username.value.trim(),
			email: email.value.trim(),
			password: password.value.trim(),
			confirmPassword: confirmPassword.value.trim(),
		},
	};

	try {
		const response = await api(requestOptions);
		console.log(response);
		window.location.href = "../login/index.html";
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		console.log(err);
		const error = document.getElementById("error") as HTMLDivElement;
		error.innerText = err.response.data.message;
		error.classList.add("error");
	}
});
