const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './src/components/*.{html,jsx}',
        './src/pages/*.{html,jsx}',
        './src/*.{html,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                ...colors,
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
