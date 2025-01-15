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
        poppins: ["Rubik", "sans-serif"],
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
        twinkle1: {
          "5%, 20%": {
            opacity: "0",
            transform: "scale(0) rotate(90deg)",
          },
          "25%, 100%": {
            opacity: "1",
            transform: "scale(1) rotate(180deg)",
          },
        },
        twinkle2: {
          "0%, 60%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
          },
          "65%, 70%": {
            opacity: "0",
            transform: "scale(0) rotate(90deg)",
          },
          "75%, 100%": {
            opacity: "1",
            transform: "scale(1) rotate(180deg)",
          },
        },
      },
    },
  },
  plugins: [],
};