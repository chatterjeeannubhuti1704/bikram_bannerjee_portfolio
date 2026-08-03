/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0E14',
        surface: '#12161F',
        surface2: '#161B26',
        brass: '#C9A468',
        brassdim: '#8A7550',
        slate: '#8B93A7',
        hairline: '#232838',
        paper: '#EDEFF4',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        widish: '0.08em',
        wideish: '0.16em',
      },
    },
  },
  plugins: [],
}
