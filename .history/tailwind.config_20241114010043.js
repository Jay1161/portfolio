// module.exports = {
//   darkMode: "class",
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   theme: {
//     extend: {
//       colors: {
//         "custom-purple": "#6c63ff",
//       },
//       fontFamily: {
//         poppins: ["Poppins", "Inter", "Segoe UI", "Roboto", "sans-serif"],
//       },
//       animation: {
//         typing: "typing 3s steps(20, end) infinite",
//         "slide-up": "slideUp 60s linear infinite",
//         twinkle: "twinkle 5s ease-in-out infinite",
//         starMove: "starMove linear infinite",
//         animStar: "animStar linear infinite"
//       },
//       keyframes: {
//         typing: {
//           from: { width: "0" },
//           to: { width: "100%" },
//         },
//         twinkle: {
//           "0%, 100%": { opacity: 0.2 },
//           "50%": { opacity: 1 },
//         },
//         animStar: {
//           from: { transform: "translateY(0)" },
//           to: { transform: "translateY(-2000px)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {

      colors: {
        "custom-purple": "#6c63ff",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      transitionDuration: {
        400: "400ms",
      },

      animation: {
        typing: "typing 3s steps(20, end) infinite",
        twinkle: "twinkle 5s ease-in-out infinite",
        starMove: "starMove linear infinite",
        animStar: "animStar linear infinite",
      },

      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },

        twinkle: {
          "0%": { opacity: 0.2, transform: "translateY(0)" },
          "50%": { opacity: 1 },
          "100%": { opacity: 0.2, transform: "translateY(-100vh)" },
        },

        animStar: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-2000px)" },
        },

        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },

        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};