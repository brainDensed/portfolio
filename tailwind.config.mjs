/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a2e',
        'dark-primary': '#16213e',
        'dark-secondary': '#0f3460',
        'dark-accent': '#e94560',
        'dark-text': '#eaeaea',
      },
    },
  },
  plugins: [],
};
