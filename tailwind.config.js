/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightRed: 'hsl(0, 100%, 67%)',
        orangeyYellow: "hsl(39, 100%, 56%)",
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',
        lightSlateBlue: 'hsl(252, 100%, 67%)', // background
        lightRoyalBlue: 'hsl(241, 81%, 54%)', // background
        violetBlue: 'sla(256, 72%, 46%, 1)', //circle
        persianBlue: 'hsla(241, 72%, 46%, 0)', //circle
        paleBlue: 'hsl(221, 100%, 96%)',
        lightLavender: 'hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
      }
    },
    fontFamily: {
      Hanken: ['Hanken Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
}

