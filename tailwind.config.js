/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				lightBg: "var(--color-light-bg)",
        skyBg: "var(--color-sky-bg)"
			},
		},
	},
  plugins: [
    require('daisyui'),
  ],
}

