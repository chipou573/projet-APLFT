/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aplftBlue: '#7EC8E3',   // Bleu clair
          aplftGreen: '#52B788',  // Vert doux
        aplftBlack: '#1C1C1C',  // Texte & contrastes
        aplftWhite: '#F7F9FA',  // Fond neutre
      },
    },
  },
  plugins: [],
};
