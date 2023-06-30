module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slider: {
          '0%': {
            transform: 'translateX(0px)'
          },
          '50%': {
            transform: 'translateX(-450px)'
          },
          '100%': {
            transform: 'translateX(-900px)'
          },
          '150%': {
            transform: 'translateX(-1350px)'
          },
          '200%': {
            transform: 'translateX(-1830px)'
          },
        },
      },
      animation: {
        slider: 'slider 10s linear infinite'
      }
    },
  },
  plugins: [],
}
