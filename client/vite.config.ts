import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/resi-review/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				detail: resolve(__dirname, "src/views/details/index.html"),
				login: resolve(__dirname, "src/views/login/index.html"),
				nested: resolve(__dirname, "src/views/signup/index.html"),
			},
		},
	},
});
