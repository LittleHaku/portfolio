/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-400': '#0C0D0E',
				'secondary-100': '#F7F7F7',
				'secondary-200': '#CCCCCC',
				'secondary-300': '#878787',
				'highlight': '#E93C3C',
				'red-300': '#FF887A'

			}
		},
	},
	plugins: [],
}
