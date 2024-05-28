/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				gothic: ['"Bold Ayres"', '"Segoe UI"'],
				heading: ['"Bodoni Elegant"', '"Segoe UI"'],
				paragraph: ['Kievit Serif', '"Segoe UI"'],
				title: ['"Bodoni Elegant"', '"Segoe UI"'],

			},
		},
	},
	plugins: [],
};
