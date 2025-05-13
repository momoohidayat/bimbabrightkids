/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'xxs': '320px',
      // => @media (min-width: 320px) { ... }

      'xs': '375px',
      // => @media (min-width: 375px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      // you can configure the container to be centered
      center: true,
      screens: {
        'xxs': '100%',
        'xs': '100%',
        sm: '100%',
        md: '720px',
        lg: '940px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    flex: {
      '50': '0 0 50%'
    },
    backgroundImage: {
      'hero-image': "url('../img/classmates-friends-bag-school-educationcopy.webp')",
      'section-highlight': "url('../img/section-2.webp')",
      'section-about': "url('../img/class-2.webp')",
      'programs': "url('../img/programs.webp')",
      'franchise': "url('../img/franchise-bg.webp')",
      'section-franchise-branch': "url('../img/branch.webp')",
    },
    extend: {
      textShadow: {
        sm: '0 1px 1px var(--tw-shadow-color)',
        DEFAULT: '0 1px 2px var(--tw-shadow-color)',
        md: '0 4px 3px var(--tw-shadow-color)',
        lg: '0 4px 10px var(--tw-shadow-color)',
        xl: '0 8px 13px var(--tw-shadow-color)',
      },
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

