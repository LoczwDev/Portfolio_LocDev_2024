/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        btn_mb: "rgb(255, 223, 168)",
      },
      colors: {
        accent: "#9E5CF2",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(-20deg)" },
          "20%": { transform: "rotate(8deg)" },
          "30%": { transform: "rotate(-20deg)" },
          "40%": { transform: "rotate(4deg)" },
        },
      },
      animation: {
        wave: "wave 1.5s infinite",
      },
      screens:{
        "900px":"900px"
      }
    },
  },
  plugins: [],
};
