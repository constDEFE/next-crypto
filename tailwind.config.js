/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./shared/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				"2xs": "400px",
				xs: "480px"
			},
			minHeight: {
				withoutHeader: "calc(100vh - 72px)"
			},
			colors: {
				border: {
					sm: "#374151",
					lg: "#9CA3AF"
				},
				accent: {
					light: "#1d7ee0",
					dark: "#0c5196"
				},
				text: {
					light: "#D1D5DB",
					dark: "#4E5869"
				}
			}
		}
	}
};
