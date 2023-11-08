import aspectRatioPlugin from '@tailwindcss/aspect-ratio';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#001432',
        secondary: '#000E23',
      },
    },
  },
  plugins: [
    aspectRatioPlugin,
    // 스크롤바 숨김 기능을 위한 플러그인 추가
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', // Internet Explorer 10+
          'scrollbar-width': 'none', // Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // Chrome, Safari, Opera
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
