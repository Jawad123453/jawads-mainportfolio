import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2.5rem',
        lg: '5rem',
        xl: '7rem',
        '2xl': '8rem',
      },
    },
    extend: {},
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}