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
        "din-light": ["DIN W01-Light", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          "medium-persian-blue": "#0360ae",
          "medium-teal-blue": "#0260AF",
          concrete: "#f2f2f2",
          "pastel-grey": "#cccccc",
          silver: "c9c9c9",
          granite: "#808080",
          seashell: "#f1f1f1",
        },
      },
      backgroundImage: {
        "chevron-down-black": "url('/images/icons/chevron-down-black.svg')",
        "arrow-right-thinner-gray":
          "url('/images/icons/arrow-right-thinner-gray.svg')",
        "arrow-right-solid-white":
          "url('/images/icons/arrow-right-solid-white.svg')",
        "arrow-right-solid-blue":
          "url('/images/icons/arrow-right-solid-blue.svg')",
        "arrow-left-thinner-black":
          "url('/images/icons/arrow-left-thinner-black.svg')",
        "arrow-left-solid-white":
          "url('/images/icons/arrow-left-solid-white.svg')",
        "arrow-left-solid-blue":
          "url('/images/icons/arrow-left-solid-blue.svg')",
        "custom-hamburger": "url('/images/icons/custom-hamburger.svg')",
        "custom-close": "url('/images/icons/custom-close.svg')",
        "search-thinner-black": "url('/images/icons/search-thinner-black.svg')",
        "Employer-Band-Canberra-home-1920":
          "url('/images/Employer-Band-Canberra-home-1920.jpg')",
        "plus-solid": "url('/images/icons/plus-solid.svg')",
        "minus-solid": "url('/images/icons/minus-solid.svg')",
      },
    },
  },
  plugins: [],
};
