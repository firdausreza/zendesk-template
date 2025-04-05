import { defineConfig } from "vite";

export default defineConfig({
	build: {
		outDir: "./",
		rollupOptions: {
			input: {
				main: "./assets/scripts/main.js",
			},
			output: {
				entryFileNames: "script.js",
			},
		},
	},
	css: {
		postcss: {
			plugins: "./postcss.config.js",
		},
	},
});
