/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // Iskljucuje Tailwind dark varijante
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // UKLANJAMO custom varijable jer prate dark mode kroz .dark klasu
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
    },
  },
  plugins: [],
};
