import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          primary: '#0F0E47',    // Headers, active states
          secondary: '#272757',  // Buttons, links, focus
          accent: '#505081',     // Charts, cards, dividers
          muted: '#8686AC',      // Placeholders, subtle UI
        },
        // Light mode backgrounds
        light: {
          bg: '#F5F5F5',
          surface: '#FFFFFF',
        },
        // Dark mode backgrounds
        dark: {
          bg: '#0A0A1F',
          surface: '#12122B',
          card: '#1A1A3E',
        },
        // Text colors
        text: {
          primary: '#212121',
          secondary: '#616161',
          muted: '#9E9E9E',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(15, 14, 71, 0.08)',
        'card-hover': '0 8px 24px rgba(15, 14, 71, 0.12)',
        'card-dark': '0 2px 8px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
