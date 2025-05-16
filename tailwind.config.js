// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   content: ["./index.html",
// //     "./src/**/*.{js,ts,jsx,tsx}"
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }



// /**  @type {import('tailwindcss').Config} */

// Module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx,html}', 
//     './public/index.html'
//   ],
//   darkMode: 'class', 
//   theme: {
//     extend: {
//       colors: {
//         primary: '#dc2626',     
//         darkBg: '#0f172a',       
//         lightBg: '#f8fafc',      
//       },
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//         heading: ['Poppins', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/typography'),
//     require('@tailwindcss/aspect-ratio'),
//     require('tailwind-scrollbar')({ nocompatible: true }),
//   ],
// };


// tailwind.config.js







/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        nameMove: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        slowPing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.7' },
        },
      },
      animation: {
        nameMove: 'nameMove 3s ease-in-out infinite',
        slowPing: 'slowPing 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
