/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#0C0C0C',
        card: '#131313',
        button: '#1A1A1A',
        text: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
