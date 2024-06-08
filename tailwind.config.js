const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		flowbite.content(),
	],
	plugins: [
		// ...
		flowbite.plugin(),
	],
	theme: {
		colors: {
			primary: "#191919",
			secondary: "#750E21",
			accent: "#E3651D",
			last: "#BED754",
		},
	},
};
