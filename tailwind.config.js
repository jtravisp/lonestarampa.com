/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './app/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './content/**/*.{md,mdx}',
    ],
  
    theme: {
      extend: {
        colors: {
          tpatch: '#533117',
          odgreen: '#43624F',
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  };
