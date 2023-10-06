/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        'sm-m': '320px',
      },
      colors: {
        black: {
          400: "#4D4D4D",
          500: "#212121",
          600:'#1E1E1E'
        },
        grey: {
          50: "#FFFFFF",
          600: "#E4E4E4",
        },
        green: {
          500: "#43A047",
        },
        blueGrey: {
          200: "#F6F8F9",
          800: "#828385",
        },
        red:{
          500:'#E53935'
        }
      },
      padding: {
        "10px": "10px",
        "15px": "15px",
        "5px": "5px",
        "20px": "20px",
        "25px": "25px",
        "70px": "70px",
      },
      gap: {
        "15px": "15px",
        "10px": "10px",
        "5px": "5px",
      },
      width: {
        15: "15px",
        200:'200px',
        90:"90px"
      },
      height: {
        250: "250px",
        15: "15px",
        550:'550px',
        500:'500px',
        450:'450px'
      },
      boxShadow: {
        one: "0px 1px 4px 0px #BABABA;",
      },
      spacing: {
        "15px": "15px",
        "5px":'5px'
      },
      fontSize: {
        "p-lg": [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],
        "p-lg-bold": [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        "p-lg-medium": [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "500",
          },
        ],
        "p-md": [
          "11px",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],
        "p-md-bold": [
          "11px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        "p-md-medium": [
          "11px",
          {
            lineHeight: "normal",
            fontWeight: "500",
          },
        ],
        "p-sm": [
          "9px",
          {
            lineHeight: "normal",
            fontWeight: "400",
          },
        ],
        "p-sm-bold": [
          "9px",
          {
            lineHeight: "normal",
            fontWeight: "700",
          },
        ],
        "p-sm-medium": [
          "9px",
          {
            lineHeight: "normal",
            fontWeight: "500",
          },
        ],
      },
    },

  },
  plugins: [],
};
