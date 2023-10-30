/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#005487',
        secondary: '#36bfc7',
        bgYellow: '#ffaf14',
        bgOrange: '#ff9314',
        bgRed: '#ff5d5d',
        lightGreen: '#eaf8f9',
        textColor: '#6f767e'
      },
      fontSize: {
        20: '20px',
        40: '40px'
      }
    }
  },
  plugins: []
}
