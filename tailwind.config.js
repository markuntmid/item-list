/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "3xl": ["32px", "40px"]
    },
    extend: {
      backgroundImage: (theme) => ({
        "share-icon": "url('./share.svg')",
        "facebook-icon": "url('./facebook.svg')",
        "x-icon": "url('./twitter.svg')",
        "check-icon": "url('./check.svg')",
        "avatar": "url('./Avatar.png')",
      }),
      colors: {
        ...colors
      },
    },
  },
  plugins: [],
};
