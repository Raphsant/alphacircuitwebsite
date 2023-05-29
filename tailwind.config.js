module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./node_modules/flowbite/**/*.js",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        kenburns: {
          '0%': {
            transform: 'scale(1) translate(0%, 0%)',
          },
          '50%': {
            transform: 'scale(1.1) translate(-2%, -2%)',
          },
          '100%': {
            transform: 'scale(1) translate(0%, 0%)',
          },
        },
      },
      animation: {
        kenburns: 'kenburns 6000ms',
        fadeInDown: 'fadeInDown 0.5s'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px'
      },
      colors: {
        darkGreen: {
          300: "#010A0A",
          500: "#43A375",
          700: "#02706F",
          900: "#013C3C",
        },
        lightGreen: {
          50: "#E2F0EC",
          100: "#98DDBB",
          300: "#548A70",
          500: "#43A375",
          600: "rgba(84, 198, 142, 0) 100%)",
          700: "rgba(84, 198, 142, 0.6)",
        },
        neutrals: {
          100: "#F6F6F6",
          150: "#b0d2cb",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          550: "#D9D9D9",
          600: "#475569",
          700: "#1E29EB",
          800: "#0F172A",
        },
      },
      height: {
        50: "50px",
        75: "75px",
        100: "100px",
        150: "150px",
        200: "200px",
        250: "250px",
        300: "300px",
        350: "350px",
        375: "375px",
        400: "400px",
        475: "475px",
        550: "550px",
        575: "575px",
        600: "600px",
        625: "625px"
      },
      width: {
        50: "50px",
        100: "100px",
        150: "150px",
        200: "200px",
        250: "250px",
        300: "300px",
        350: "350px",
        400: "400px",
        425: "425px",
        525: "525px",
        550: "550px",
        575: "575px",
        600: "600px",
        625: "625px",
        1100: "1100px"
      },
      top: {
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
      },
      left: {
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms"), require('tailwind-clip-path')],
};
