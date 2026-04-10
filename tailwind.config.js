/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50:  '#fdf2f4',
          100: '#fce7ec',
          200: '#f9cfda',
          300: '#f4a8be',
          400: '#eb6f96',
          500: '#de3f6f',
          600: '#c42050',
          700: '#a41540',
          800: '#800020',
          900: '#6b001c',
          950: '#3d000f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
