/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "medium-persian-blue": "#0360ae",
        },
      },
      backgroundImage: {
        "chevron-down-black": "url('/images/icons/chevron-down-black.svg')",
      },
    },
  },
  plugins: [],
};
