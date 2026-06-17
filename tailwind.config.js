/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          1: '#10312c',
          2: '#ff4510',
          3: '#00A661',
          4: '#EDEAE4',
        }
      },
      container: {
        center: true,
        padding: '2rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1024px',
        '2xl': '1280px',
      }
    },
  },
  plugins: [],
}
