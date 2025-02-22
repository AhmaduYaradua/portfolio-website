/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4)2px, #f5f5f5 5px,#f5f5f5 100px);",
        circularDark:
          "repeating-radial-gradient(rgba(225,225,225,0.5)2px, #1b1b1b 8px,#1b1b1b 100px);",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media(max-width: 1535px) {...}

      xl: { max: "1279px" },
      // => @media(max-width: 1279px) {...}

      lg: { max: "1023px" },
      // => @media(max-width: 1023px) {...}

      md: { max: "767px" },
      // => @media(max-width: 767px) {...}

      sm: { max: "639px" },
      // => @media(max-width: 639px) {...}

      xs: { max: "479px" },
      // => @media(max-width: 479px) {...}
    },
  },
  plugins: [],
};
