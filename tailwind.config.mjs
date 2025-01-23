export default {
  content: ["./docs/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: '#393959',
        subHeaderPurple: '#6F6682',
        subHeaderPink: '#BD84A5',
        accentPurple: '#BCB7F4',
        accentRed: '#F2ADC9',
        accentYellow: '#FFE58F',
        accentPlum: '#BD84A5',
        accentOrange: '#FAB47E',
        accentPink: '#FACFCF',
        accentVividPurple: '#9D90DA',
        backgroundGrey: '#F5F5F5',
      }
    },
  },
  plugins: [],
};
