/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "indigo-night": "#2A1A6F",
        "tranquil-violet": "#6C4DC1",
        "soft-lavender": "#BDA8F3",
        "mindful-aqua": "#9FE7E4",
        "primary-blue": "#3652E3",
        // Supporting Neutrals
        "mist-grey": "#F5F6FA",
        "soft-charcoal": "#444444",
      },
      fontFamily: {
        sen: ["Sen", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/src/assets/hero-bg.svg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
