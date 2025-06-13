/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        primary: {
          DEFAULT: '#003422',
          light: '#287756',
          dark: '#13231E',
        },
        accent: {
          DEFAULT: '#00B774',
          light: '#60CE88',
        },
        neutral: {
          DEFAULT: '#2D2D2D',
        },
        text: {
          primary: '#13231E',    // Corresponds to the darkest green
          secondary: '#2D2D2D', // Corresponds to the dark grey
        },
        background: {
          primary: '#FFFFFF',   // Standard white background
          secondary: '#f3f4f6', // Standard light grey background
          teal: '#008080',
        },
      }
    },
  },
  plugins: [],
}