/** @type {import('tailwindcss').Config} */
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
    flex: {
      '50': '0 0 50%'
    },
    backgroundImage: {
      'hero-image': "url('../img/classmates-friends-bag-school-educationcopy.webp')",
      'section-2': "url('../img/section-2.webp')",
    }
  },
  plugins: [],
}

