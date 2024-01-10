import { resolve } from "path";
import { defineConfig } from "vite";
// import "dotenv/config";

// const isGitHubPages =
// process.env.NODE_ENV === "production" && process.env.GITHUB_PAGES === "true";

export default defineConfig({
	// base: isGitHubPages ? "/resi-review/" : "/",
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
