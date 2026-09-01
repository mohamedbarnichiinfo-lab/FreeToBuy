/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ftbGreen: '#00DFA2',
        ftbGreenDark: '#00A375',
        ftbCyan: '#1AFFCC',
        ftbGold: '#F5A623',
        ftbDiamond: '#1AFFCC',
        ftbBg: '#0A0B0D',
        ftbBgSecondary: '#121418',
        ftbBgTertiary: '#1C1F26',
        ftbBorder: '#262B34',
        ftbText: '#E6EDF3',
        ftbTextSecondary: '#8B949E',
        ftbRed: '#F85149',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
