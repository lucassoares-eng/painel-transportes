module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        "screen-80": "80vh",
        "screen-90": "90vh",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
