import aspectRatioPlugin from '@tailwindcss/aspect-ratio';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        web: '500px',
      },
      colors: {
        primary: '#001432',
        secondary: '#000E23',
        dim: 'rgba(34, 34, 34, 0.50)',
        'button-opacity': 'rgba(248, 44, 71, 0.60)',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            // 2줄 말줄임표를 위한 커스텀 클래스
            '.line-clamp-2': {
              display: '-webkit-box',
              '-webkit-line-clamp': '2',
              '-webkit-box-orient': 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          },
        },
      }),
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-out',
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
