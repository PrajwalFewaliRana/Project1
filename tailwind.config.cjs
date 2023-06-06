/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl':{'max':'1263px'},
      'eg':{'max':'1240px'},
      'ex':{'max':'1200px'},
      'lg': {'max': '1159px'},
      'md': {'max': '1050px'},
      'sm': {'max': '910px'},
      'xsm': {'max': '767px'},
      '1xsm':{'max':'600px'},
      'xxsm': {'max':'490px'}
    }
  },
  plugins: [],
}
