/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'baybayin': ['Hiraya Baybayin'],
        'techno': ['Neuropol']
      },
      boxShadow: {
        all: [
          "0px 5px 10px",
          "0px 0px 10px"
        ]
      },
    },
  },
  plugins: [],
}

