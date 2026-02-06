import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#2979FF',
          50: '#E3F0FF',
          100: '#B3D4FF',
          200: '#80B8FF',
          300: '#4D9CFF',
          400: '#2979FF',
          500: '#2979FF',
          600: '#1565E0',
          700: '#0D47A1',
          800: '#0A3880',
          900: '#072960',
        },
        secondary: {
          DEFAULT: '#00BCD4',
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00BCD4',
          600: '#00ACC1',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064',
        },
        // Status colors
        success: {
          DEFAULT: '#00E676',
          light: '#69F0AE',
          dark: '#00C853',
        },
        warning: {
          DEFAULT: '#FF9100',
          light: '#FFAB40',
          dark: '#FF6D00',
        },
        error: {
          DEFAULT: '#FF3D00',
          light: '#FF6E40',
          dark: '#DD2C00',
        },
        // Background colors
        background: '#F5F5F5',
        surface: '#FFFFFF',
        // Text colors
        text: {
          primary: '#212121',
          secondary: '#616161',
          disabled: '#9E9E9E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
