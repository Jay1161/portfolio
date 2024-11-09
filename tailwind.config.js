module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#6c63ff',
      },
      fontFamily: {
        'poppins': ['Poppins', 'Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        typing: 'typing 3s steps(20, end) infinite',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        }
      }
    },
  },
  plugins: [],
}