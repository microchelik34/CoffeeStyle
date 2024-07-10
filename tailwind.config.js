/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens:{
      xl:{max:'1280px'},
      lg:{max:'1024px'},
      md:{max:'829.99px'},
      sm:{max:'610.99px'},
    },
    extend: {
      fontFamily:{
        Karla:['Karla', 'sans-serif']
      },
      colors: {
        brownSale: '#A25F4B',
        standardColor: '#1D1F2E',
        standardLightColor: 'rgba(29,31,46,0.7)',
        standardLighterColor: 'rgba(29,31,46,0.4)',
        saleColor: 'rgba(29,31,46,0.3)',
        borderColor: '#2F303E',
      },
      letterSpacing: {
        widest: '.17em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

