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
        primary: '#F02E35',
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        100: '28rem',
        104: '30rem',
        108: '32rem',
      },
    },
  },
  plugins: [],
}
