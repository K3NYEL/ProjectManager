/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        secondary: '#1f2937',
      },
      spacing: {
        '17': '4.25rem',
        '370': '23.125rem',
        '155': '9.6875rem',
      },
      height: {
        '155': '9.6875rem',
      },
      width: {
        '370': '23.125rem',
      },
    },
  },
  plugins: [],
};
