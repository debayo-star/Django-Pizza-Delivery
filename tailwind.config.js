/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "store/templates/store/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "dimly-blue": "#e8f9fd",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
