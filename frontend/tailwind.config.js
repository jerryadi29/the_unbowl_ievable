module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7f1',
          100: '#ffe8d0',
          300: '#ff9800',
          500: '#ff7a00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial']
      },
      boxShadow: {
        card: '0 8px 24px rgba(2,6,23,0.06)'
      }
    }
  },
  plugins: []
}
