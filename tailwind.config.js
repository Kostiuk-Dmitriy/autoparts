/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        accent: '#2563EB',
        surface: '#F8FAFC',
        'text-primary': '#0F172A',
        'text-secondary': '#64748B',
        border: '#E2E8F0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
