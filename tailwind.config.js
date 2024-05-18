/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // JIT modunu etkinleştirin
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Dosya yollarını güncelleyin
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        '9p': '9%',  
        '7p': '7%'
      },
      width: {
        '80p' : '80%'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      inset: {
        '5p': '5%',
        '6p': '6%',
      },
      boxShadow: {
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.5)', // Daha koyu ve belirgin bir gölge
      },
    },
  },
  plugins: [],
};
