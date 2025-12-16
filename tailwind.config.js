module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        xceed: {
          DEFAULT: '#0f172a',
          accent: '#0ea5a4'
        }
      },
      spacing: {
        header: '72px'
      }
    }
  },
  plugins: []
};
