const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/*.{html,jsx}",
    "./src/pages/*.{html,jsx}",
    "./src/*.{html,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
