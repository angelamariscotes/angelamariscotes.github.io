export default {
  theme: {
    extend: {
      keyframes: {
        "plane-fly": {
          "0%": {
            transform: "translate(-14px, 8px) rotate(-15deg)",
            opacity: "0",
          },
          "15%": {
            opacity: "1",
          },
          "70%": {
            transform: "translate(8px, -5px) rotate(-5deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(18px, -12px) rotate(5deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        "plane-fly": "plane-fly 1.2s ease-in-out infinite",
      },
    },
  },
};