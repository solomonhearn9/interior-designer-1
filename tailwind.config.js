/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F3EF',
        sand: '#E8E4DC',
        taupe: '#C8BFB0',
        offwhite: '#FAF9F7',
        charcoal: '#2C2C2C',
        mutedblack: '#1A1A1A',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}

