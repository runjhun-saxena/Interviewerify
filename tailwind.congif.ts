/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // for App Router projects
    "./pages/**/*.{js,ts,jsx,tsx}", // for Pages Router projects
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"), // ✅ add this plugin here
  ],
};
