/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'nature': "linear-gradient(to top, #277e1c, transparent), url('./assets/bgblur.png')",
      },
      colors: {
        colorNature: "#277e1c"
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar-hide')
  ],
}

