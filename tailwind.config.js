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
    display: ["group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
};
