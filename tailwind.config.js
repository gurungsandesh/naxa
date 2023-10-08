/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFDC1C",
        darkyellow: "#e5c619",
        blue: "#124AF4",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        image: 'url("./src/assets/naxa-bg.svg")',
        footerImage: 'url("./src/assets/footer-img.svg")',
      },
      animation: {
        moveleft: "moveleftkey 0.5s ease-in-out  forwards",
        moveright: "moverightkey 0.5s ease-in-out forwards",
        rotatetop: "rotatettopkey 0.5s ease-in-out forwards",
        rotatebottom: "rotatebottomkey 0.5s ease-in-out forwards",
        drawerSlide: "drawerKey 1s ease-in-out forwards",
        sekeletonanimation: " skeletonKey 1s linear infinite alternate ",
      },
      keyframes: {
        moveleftkey: {
          "0%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(-10px)" },
        },
        moverightkey: {
          "0%": { transform: "translateX(-10px)", opacity: 10 },
          "100%": { transform: "translateX(10px)", opacity: 100 },
        },
        rotatettopkey: {
          "0%": { transform: "rotate(0deg)", position: "absolute", top: "50%" },
          "100%": {
            transform: "rotate(45deg)",
            position: "absolute",
            top: "50%",
          },
        },
        rotatebottomkey: {
          "0%": {
            transform: "rotate(0deg)",
            position: "absolute",
            top: "50%",
          },
          "100%": {
            transform: "rotate(-45deg)",
            position: "absolute",
            top: "50%",
          },
        },
        drawerKey: {
          "0%": {
            top: 0,
            bottom: 0,
            left: "100vw",
            opacity: 0,
          },
          "100%": {
            left: "30vw",
            opacity: 1,
            position: "fixed",
          },
        },
        skeletonKey: {
          "0%": {
            backgroundColor: "hsl(200, 20%, 80%)",
          },
          "100%": {
            backgroundColor: "hsl(200, 20%, 95%)",
          },
        },
      },
      boxShadow: {
        cardShadow: "0 5px 15px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
