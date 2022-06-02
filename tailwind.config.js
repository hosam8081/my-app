module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js}"],
  purge:["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'menu': '#0c8195',
      'white' : '#fff',
      'gray': "#ddd",
      'muted': "#999"
    },
    extend: {},
  },
  plugins: [],
}
