/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        bounce_slow: 'boounce_slow 3s ease-in-out infinite',
      },
      keyframes: {
        bounce_slow: {
          '0%, 100%': {
            transform: 'translateY(-55%)'
          },
          '50%' : {
            transform: 'translateY(0)'
          }
        }
      }
    },
  },
  plugins: [],
}
