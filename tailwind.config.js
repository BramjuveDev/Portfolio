const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundOpacity: {
                15: '0.15'
            },
            colors: {
                gray: {
                    50: '#f9fafb',
                    100: '#eaeaeb',
                    200: '#cacbcd',
                    300: '#a7a9ac',
                    400: '#696c71',
                    500: '#282d34',
                    600: '#24292f',
                    700: '#181b20',
                    800: '#121518',
                    900: '#0c0e10'
                },
                primary: {
                    50: '#15dc9b',
                    100: '#15dc9b',
                    200: '#15dc9b',
                    300: '##15dc9b',
                    400: '#15dc9b',
                    500: '#15dc9b',
                    600: '#15dc9b',
                    700: '#15dc9b',
                    800: '#15dc9b9',
                    900: '#15dc9b'
                }
            },
            fontFamily: {
                inter: [
                    'Inter',
                    ... defaultTheme.fontFamily.sans
                ]
            }
        }
    },
    variants: {},
    plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')]
};
