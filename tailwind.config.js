/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     
    extend: {
        colors: {
        'Orange':'var(--Orange)',
        'Pale_Orange':'var(--Pale_Orange)',
        'Very_Dark_Blue':'var(--Very_Dark_Blue)',
        'Dark_Grayish_Blue':'var(--Dark_Grayish_Blue)',
        'Grayish_Blue':'var(--Grayish_Blue)',
        'White':'var(--White)',
        'Black':'var(--Black)',
      },
    },
  },
  plugins: [],
}