module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          10:'#000000',
          50: '#fff7f1',
          100: '#ffe8d0',
          300: '#ff9800',
          500: '#ff7a00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial','Serif','Shadows Into Light']
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        "h1": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "h2": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "h3": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "h4": ["20px", { lineHeight: "28px", fontWeight: "500" }],

        "body": ["16px", { lineHeight: "24px" }],
        "body-sm": ["14px", { lineHeight: "20px" }],
        "body-xs": ["12px", { lineHeight: "18px" }],

        "button": ["15px", { lineHeight: "22px", fontWeight: "600" }],
      },
      boxShadow: {
        card: '0 8px 24px rgba(2,6,23,0.06)'
      }
    }
  },
  plugins: []
}
