const colors = require("tailwindcss/colors");
module.exports = {
  presets: [require("@samrobbins/typography")],
  purge: {
    content: [
      "./themes/tailwind-developer-website/layouts/**/*.html",
      "./data/*.yml",
      "./content/**/*.md",
      "./layouts/**/*.html",
    ],
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        orange: colors.orange,
        gray: colors.gray,
        "cool-gray": colors.coolGray,
      },
    },

    fontFamily: {
      sans: ["Inter var", "Inter"],
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      16: "4rem",
    },
  },
  variants: {
    display: ["responsive", "group-hover"],
  },
};
