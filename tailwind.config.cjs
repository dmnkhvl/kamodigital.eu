/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "kamo-gray": "#A3A8C3",
        "kamo-gray-alt": "#737373",
        "kamo-black": "#0B0E11",
        "kamo-black-alt": "#14191E",
        "kamo-white": "#FAFAFA",
        "kamo-white-alt": "#E3E3E3",
        "kamo-green": "#2fea64",
        "kamo-green-alt": "#08f24a",
        "kamo-green-dark": "#3D8734",
        "kamo-button": "#2fea64",
        "kamo-button-alt": "#50FF82",
      },
    },
  },
  plugins: [],
};
