/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
        // Using modern `rgb`
        "primary-yellow": '#4a411e',
        "secondary-yellow": '#fedf6f',
        "primary-purple": '#52225e',
        "secondary-purple": '#c3b2e7',
        "primary-pink": '#52225e',
        "secondary-pink": '#f682a5',
        "primary-green": '#1c471f',
        "secondary-green": '#c9da8f',
        "primary-blue": '#184363',
        "secondary-blue": '#b8cedc',
        "primary-orange": '#582614',
        "secondary-orange": '#f9a474',
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
          "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },

        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
