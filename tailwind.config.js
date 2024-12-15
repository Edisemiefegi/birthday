/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        loveRed: "#ff5c5c",
        softPink: "#ffe4e6",
        romanticBlue: "#cce7ff",
        goldenGlow: "#ffd700",
      },
      fontFamily: {
        romantic: ['"Dancing Script"', "cursive"],
        sans: ["Inter", "sans-serif"],
      },
      perspective: {
        // Define custom perspective values
        none: "none",
        sm: "500px",
        md: "1000px",
        lg: "1500px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
      });
    },
  ],
};
