/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
       slider: {
          '0%': {
            transform: "translateX(0px)"
          },
          '100%': {
            transform: 'translateX(-1400px)'
          }
        },
      },
      animation: {
      	slider: "slider 5s linear infinite"
      }
    },
  }
}
