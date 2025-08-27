import type { Config } from 'tailwindcss'
// Passo 1: Importe o plugin usando a sintaxe moderna 'import'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Cores personalizadas baseadas na identidade "Maranatha"
      colors: {
        'maranatha-blue': '#063c8f',
        'maranatha-red': '#cf0707',
        'maranatha-beige': '#f5eee6',
        'maranatha-beige-dark': '#e8d9c5',
      },
      // Configuração de fontes para uma tipografia profissional
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      // ... (o restante das suas configurações 'extend' fica aqui) ...
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #063c8f 0%, #0a56d6 100%)',
        'beige-gradient': 'linear-gradient(to bottom, #f5eee6, #e8d9c5)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'maranatha': '0 4px 15px rgba(0, 0, 0, 0.1)',
        'maranatha-lg': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'maranatha-red': '0 4px 15px rgba(207, 7, 7, 0.4)',
      }
    },
  },
  // Passo 2: Use a variável importada 'forms' aqui
  plugins: [
    forms,
  ],
}
export default config