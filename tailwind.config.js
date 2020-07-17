module.exports = {
  purge: ["./src/**/*.html"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")({
    // layout: 'sidebar' // Breakpoints for Sidebar layouts
  })],
};
