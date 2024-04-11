import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      spacing: {
        '2cm': '2cm',
        '3cm': '3cm',
        '4cm': '4cm',
        '5cm': '5cm'
      }
    }
  },
  plugins: [forms]
}
