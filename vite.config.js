import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: "./assets/scripts/main.js",
			},
			output: {
				entryFileNames: "script.js",
				assetFileNames: (assetInfo) => {
					const fileName = assetInfo.name || assetInfo.names[0];
					if (fileName === "style.css") {
						return "style.css";
					} else {
						return "assets/[name].[hash][extname]";
					}
				},
			},
		},
	},
	css: {
		postcss: "./postcss.config.js",
	},
});
