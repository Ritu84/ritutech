import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom neon pink theme colors
        'theme-pink': {
          50: '#fff0fa',
          100: '#ffd6f5',
          200: '#ffb3ec',
          300: '#ff85e0',
          400: '#ff6ec7',
          500: '#ff4fcf',
          600: '#e60073',
          700: '#b30059',
          800: '#800040',
          900: '#4d0026',
        },
      },
    },
  },
  plugins: [],
};
export default config;
