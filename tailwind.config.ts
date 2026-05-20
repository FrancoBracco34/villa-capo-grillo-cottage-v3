import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#E8D8BD',
        ocean: '#0E4C67',
        volcanic: '#252525',
        terracotta: '#B76E4C',
        cream: '#FAF7F0'
      },
      boxShadow: {
        soft: '0 24px 70px rgba(20, 31, 43, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
