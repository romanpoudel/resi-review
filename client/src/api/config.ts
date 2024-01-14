import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:3000/api/v1",
	withCredentials: true,
	timeout:10000,
	headers: {
		"Content-Type": "application/json",
	},
});

//for refreshing access token
instance.interceptors.request.use(
	async (config) => {
		return config;
	},
	(err) => {
		console.log("errr");
		return Promise.reject(err);
	}
);

instance.interceptors.response.use(
	async (response) => {
		return response;
	},
	async (err) => {
		const originalRequest = err.config;
		if (
			err.response.status === 500 &&
			!originalRequest._retry 
		) {
			originalRequest._retry = true;
			try {
				const res = await instance.post("/auth/refresh-token");
				if (res.status === 200) {
					return instance(originalRequest);
				} else{
					console.error("Unexpected status during token refresh:", res.status);
				}
			} catch (error) {
				console.error("Error refreshing token:", error);
				return Promise.reject(err);
			}
		}
		return Promise.reject(err);
	}
);


export default instance;