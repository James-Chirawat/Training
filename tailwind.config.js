/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./app/**/*.{js,jsx,ts,tsx}", // ถ้าใช้ Expo Router
    "./components/**/*.{js,jsx,ts,tsx}" // หรือโฟลเดอร์อื่นๆ ที่คุณเก็บ Component
  ], 
  theme: {
    extend: {},
  },
  plugins: [],
}
