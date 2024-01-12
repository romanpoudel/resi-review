import api from "../api/config.ts";

const requestOptions = {
	method: "GET",
	url: "/users/me",
};

(async () => {
	try {
		await api(requestOptions);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		window.location.href = "/src/views/login/index.html";
	}
})();
