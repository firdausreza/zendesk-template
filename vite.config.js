import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

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
