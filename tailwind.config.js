/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 2px rgba(0, 0, 0, 0.4)',
        'md': '3px 3px 3px rgba(0, 0, 0, 0.4)',
        'lg': '4px 4px 4px rgba(0, 0, 0, 0.4)',

      },
      dropShadow: {
        'custom': '2px 2px 2px rgba(0, 0, 0, 0.4)',
        'custom-md': '3px 3px 3px rgba(0, 0, 0, 0.4)',
        'custom-lg': '4px 4px 4px rgba(0, 0, 0, 0.4)',
      },
      colors: {
        'blue-kz': '#5278C3'
      }
      
    },

    fontFamily: {
      'sedgwick-ave-display': ['Sedgwick Ave Display', 'cursive'],
      'itim-regular': ['Itim', 'cursive'],
      'molle-regular-italic': ['Molle', 'cursive'],
      // 'marko-one-regular': ["Marko One", 'serif'],
      'spicy-rice-regular': ["Spicy Rice", 'serif'],
      'ga-maamli-regular': ["Ga Maamli", 'sans-serif'],
      'montserrat': ["Montserrat", 'sans-serif'],
      'signika': ["Signika", 'sans-serif'],
      'aclonica-regular': ["Aclonica", 'sans-serif'],
      'sonsie-one-regular': ["Sonsie One", 'system-ui'],
      'akaya-telivigala-regular': ["Akaya Telivigala", 'system-ui'],
      'aladin-regular': ["Aladin", 'system-ui'],
      'fruktur-regular': ["Fruktur", 'system-ui'],
      'ceviche-one-regular': ["Ceviche One", 'system-ui'],
      
    }
  },
  variants: {
    dropShadow: ['responsive', 'hover', 'focus'],
  },
  plugins: [
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
    }

    addUtilities(newUtilities, ['responsive', 'hover'])
  }],
}