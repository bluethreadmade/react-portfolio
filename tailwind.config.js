const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Arimo'],
            serif: ['"IBM  Plex Serif"'],
        },

        extend: {
            screens: {
                xs: "425px",
            },
            colors: {
                primary: '#7A9E9F',
                textLight: '#EEF5DB',
                accent: '#FF715B',
                background: '#F1EFEB',
                gunmetal: "#143642",
                "french-gray": "#BFCCD8",
                "reseda-green": "#798E7B",
            },
            darkMode: 'selector',
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
