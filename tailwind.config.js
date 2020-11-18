const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const colors = require("tailwindcss/colors");
module.exports = {
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
    typography: (theme) => ({
      default: {
        css: {
          "code::after": {
            content: "none",
          },
          "code::before": {
            content: "none",
          },
          "pre code::after": {
            content: "none",
          },
          code: {
            backgroundColor: theme("colors.gray.200"),
            color: theme("colors.gray.700"),
            padding: "4px",
            borderRadius: rem(2),
          },
          blockquote: {
            quotes: "none",
          },
        },
      },
    }),
  },
  variants: {
    display: ["responsive", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
};
