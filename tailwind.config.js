/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',

      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         textShadow: {
            default: '2px 2px 2px rgba(0, 0, 0, 0.4)',
            md: '3px 3px 3px rgba(0, 0, 0, 0.4)',
            lg: '4px 4px 4px rgba(0, 0, 0, 0.4)',
         },
         dropShadow: {
            custom: '2px 2px 2px rgba(0, 0, 0, 0.4)',
            'custom-md': '3px 3px 3px rgba(0, 0, 0, 0.4)',
            'custom-lg': '4px 4px 4px rgba(0, 0, 0, 0.4)',
         },
         // colors: {
         //    'blue-kz': '#5278C3',
         //    'primary-100': '#5477d1',
         //    'primary-200': '#6b85d6',
         //    'primary-300': '#7f93dc',
         //    'primary-400': '#92a2e1',
         //    'primary-500': '#a5b1e6',
         //    'primary-600': '#b7c0eb',
         //    'surface-100': '#121212',
         //    'surface-200': '#282828',
         //    'surface-300': '#3f3f3f',
         //    'surface-400': '#575757',
         //    'surface-500': '#717171',
         //    'surface-600': '#8b8b8b',
         //    'surface-mixed-100': '#1a1b22',
         //    'surface-mixed-200': '#2f3037',
         //    'surface-mixed-300': '#45464c',
         //    'surface-mixed-400': '#5d5e64',
         //    'surface-mixed-500': '#76777c',
         //    'surface-mixed-600': '#909094',
         // },
         colors: {
            'blue-kz': '#5278C3',
            'primary-100': '#2863fa',
            'primary-200': '#5573fb',
            'primary-300': '#7283fd',
            'primary-400': '#8a93fe',
            'primary-500': '#a0a5fe',
            'primary-600': '#b5b6ff',
            'surface-100': '#121212',
            'surface-200': '#282828',
            'surface-300': '#3f3f3f',
            'surface-400': '#575757',
            'surface-500': '#717171',
            'surface-600': '#8b8b8b',
            'surface-mixed-100': '#1a1a26',
            'surface-mixed-200': '#2f2f3a',
            'surface-mixed-300': '#464550',
            'surface-mixed-400': '#5d5d67',
            'surface-mixed-500': '#76767e',
            'surface-mixed-600': '#909097',
         },
      },

      fontFamily: {
         'sedgwick-ave-display': ['Sedgwick Ave Display', 'cursive'],
         'itim-regular': ['Itim', 'cursive'],
         'molle-regular-italic': ['Molle', 'cursive'],
         // 'marko-one-regular': ["Marko One", 'serif'],
         'spicy-rice-regular': ['Spicy Rice', 'serif'],
         'ga-maamli-regular': ['Ga Maamli', 'sans-serif'],
         montserrat: ['Montserrat', 'sans-serif'],
         signika: ['Signika', 'sans-serif'],
         'aclonica-regular': ['Aclonica', 'sans-serif'],
         'sonsie-one-regular': ['Sonsie One', 'system-ui'],
         'akaya-telivigala-regular': ['Akaya Telivigala', 'system-ui'],
         'aladin-regular': ['Aladin', 'system-ui'],
         'fruktur-regular': ['Fruktur', 'system-ui'],
         'ceviche-one-regular': ['Ceviche One', 'system-ui'],
      },
   },
   variants: {
      dropShadow: ['responsive', 'hover', 'focus'],
   },
   plugins: [
      require('tailwind-scrollbar-hide'),
      function ({ addUtilities }) {
         const newUtilities = {
            '.text-shadow': {
               textShadow: '2px 2px 2px rgba(0, 0, 0, 0.4)',
            },
            '.text-shadow-md': {
               textShadow: '3px 3px 3px rgba(0, 0, 0, 0.4)',
            },
            '.text-shadow-lg': {
               textShadow: '4px 4px 4px rgba(0, 0, 0, 0.4)',
            },
            '.drop-shadow-custom': {
               filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))',
            },
            '.drop-shadow-custom-md': {
               filter: 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.4))',
            },
            '.drop-shadow-custom-lg': {
               filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.4))',
            },
         };

         addUtilities(newUtilities, ['responsive', 'hover']);
      },
   ],
};
