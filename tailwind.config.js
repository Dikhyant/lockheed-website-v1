/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        din: ["DIN W01 Regular", "Arial", "sans-serif"],
        "din-med": ["DIN OT-Medium-KzgHMRnb", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          "medium-persian-blue": "#0360ae",
          concrete: "#f2f2f2",
          "pastel-grey": "#cccccc",
        },
      },
      backgroundImage: {
        "chevron-down-black": "url('/images/icons/chevron-down-black.svg')",
        "arrow-right-thinner-gray":
          "url('/images/icons/arrow-right-thinner-gray.svg')",
        "arrow-left-thinner-black":
          "url('/images/icons/arrow-left-thinner-black.svg')",
        "custom-hamburger": "url('/images/icons/custom-hamburger.svg')",
        "custom-close": "url('/images/icons/custom-close.svg')",
        "search-thinner-black": "url('/images/icons/search-thinner-black.svg')",
      },
    },
  },
  plugins: [],
};
