// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss(),],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

const customTailwindTheme = {
  theme: {
    extend: {
      colors: {
        maroon: '#5B0A0A',
        cream: '#F5EDE0',
        primary: '#C62828',
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'serif'],
      },
    },
  },
}

export default defineConfig({
  plugins: [react(), tailwindcss({ config: customTailwindTheme })],
})
