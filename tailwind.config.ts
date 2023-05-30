import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
};

export default tailwindConfig;
