const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#7A9E9F',
                textLight: '#EEF5DB',
                accent: '#49306B',
                background: '#b8d8d8',
                headerBackground: '#92c3c3'
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            darkMode: 'selector',
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
