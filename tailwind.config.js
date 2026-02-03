/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			colors: {
        bg: {
          0: "#070815",
          1: "#0B0D1D",
          2: "#11142A",
          3: "#181C38"
        },
        border: {
          subtle: "#23284D",
          strong: "#2F3570"
        },
        text: {
          primary: "#F7EBFF",
          secondary: "#DBDEFF",
          muted: "#9AA0D1",
          faint: "#7A80B5"
        },
        primary: {
          400: "#8B5CF6",
          500: "#7C3AED",
          600: "#6D28D9",
          glow: "#A78BFA"
        },
        secondary: {
          400: "#60A5FA",
          500: "#3B82F6"
        },
        status: {
          success: "#34D399",
          warning: "#FBBF24",
          danger: "#FB7185"
        }
      },
		},
	},
  plugins: [],
}

