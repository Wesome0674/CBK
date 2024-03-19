
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      linear:
        "linear-gradient(90deg, rgba(113,88,226,1) 5%, rgba(205,132,241,1) 50%)",
    },
    borderRadius: {
      DEFAULT: '6px',
      'full': '9999px',
      'lg' : '15px',
      'md': '12px'
    },
    fontSize: {
      "4xl": [
        "64px",
        {
          lineHeight: '75px',
          fontWeight: "600",
        },
      ],
      "3.5xl": [
        "40px",
        {
          lineHeight: '55px',
          fontWeight: "600",
        },
      ],
      "3xl": [
        "40px",
        {
          fontWeight: "600",
        },
      ],
      "2xl": [
        "24px",
        {
          fontWeight: "600",
        },
      ],
      xl: [
        "24px",
        {
          fontWeight: "500",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      bold: [
        "16px",
        {
          fontWeight: "700",
        },
      ],
      sm: [
        "14px",
        {
          fontWeight: "500",
        },
      ],
      pre: [
        "10px",
        {
          letterSpacing: "3%",
          fontWeight: "600",
        },
      ],
      button: [
        "10px",
        {
          letterSpacing: "3%",
          fontWeight: "600",
        },
      ],
      link: [
        "16px",
        {
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        white: "#fff",
        success: "#46D5B3",
        red: "#FF4848",
        cloud: "#fafce",
        light: "#FBFCFE",
        primary: "#ae51ff",
        secondary: "#2b394d",
        tercery: "#556070",
        bleu: "#4093EF",
        pink: "#D15584"
      },
      dropShadow: {
        'lg': '8px 9px 4px rgba(0, 0, 0, 0.25)',
        'md': '0px 36px 105px rgba(43, 56, 76, 0.10)'
      },
    },
  },
  plugins: [],
};
