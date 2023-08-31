import { type Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		// https://htmlcolorcodes.com/colors/
		colors: {
			"baby-blue": "#89cff0",
			"denim": "#6f8faf",
			"jade": "#00a36c",
			"periwinkle": "	#ccccff",
			"platinum": "#e5e4e2"
		}
	},
	plugins: []
};

export default config;
