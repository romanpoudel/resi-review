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
