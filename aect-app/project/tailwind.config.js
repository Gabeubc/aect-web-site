/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-bg': '#F9F5E8',
        'basic-text-color': '#3A3A3A',
        'custom-green': '#00715d',
        'custom-orange': '#E17153',
        'custom-orange-dark': '#C15439'
      },
      fontFamily: {
        'basic-font-family': ['Plus Jakarta Sans'],
        'title-font-family': ['Rubik']
      },
      width: {
        200:'200px'
      },
      height: {
        500:'200px'
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'textarea': {
          'resize': 'none',  // Disable resize if needed
        },
      });
    },
  ],
};
