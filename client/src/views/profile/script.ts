import api from "../../api/config.ts";
import { checkAuth } from "../../utils/auth.ts";

window.onload = async () => {
	await checkAuth();
};

const logoutBtn = document.getElementById("logout-btn") as HTMLElement;

logoutBtn.addEventListener("click", async () => {
	try {
		const response = await api.post("/auth/logout");
		console.log(response);
		window.location.href = "/";
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		console.log(err.response.data.message);
	}
});

const profileImage = document.getElementById(
	"profile-image"
) as HTMLInputElement;
const form = document.getElementById("profile-form") as HTMLFormElement;

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const formData = new FormData();
	formData.append("profileimage", profileImage?.files?.[0] || "");
	const requestOptions = {
		method: "POST",
		url: "/users/update-profile",
		data: formData,
		headers: {
			"Content-Type": "multipart/form-data",
		},
	};

	try{
		const response = await api(requestOptions);
		console.log(response);
		if (response.status === 201) {
			window.location.reload();
		}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	}catch(err:any){
		console.log(err.response.data.message);
	}
});
