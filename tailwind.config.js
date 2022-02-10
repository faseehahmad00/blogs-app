module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
