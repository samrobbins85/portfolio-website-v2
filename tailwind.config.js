module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      "./themes/tailwind-developer-website/layouts/**/*.html",
      "./data/*.yml",
    ],
  },
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter var", "Inter"],
    },
    borderWidth: {
      default: "1px",
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
    typography: {
      default: {
        css: {
          pre: {
            code: {
              "&:after": { content: "none !important" },
            },
          },
        },
      },
    },
  },
  variants: {
    display: ["responsive", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
};
