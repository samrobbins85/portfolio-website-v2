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
  },
  variants: {},
  plugins: [],
};
