/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'hsl(var(--border))', // Add this if using shadcn/ui
      },
    },
  },
  plugins: [],
}