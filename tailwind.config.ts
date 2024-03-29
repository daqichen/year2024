import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
        gsans: ['g-sans', 'sans']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(#01415b 20%, #54819f);',
        'gradient-conic':
          'conic-gradient(180deg, black 20%, #3c5e6d 35%, #f4310e, #f58308 80%, black);',
      },
      colors:{
        'primaryColor':'#151411',
        'black':'#151411',
        'lightsilver':'#D9D9D9',
        'beige': '#dfddd0',
        'deepkelp': '#01415b',
        'ocean': '#54819f',
        'midnight': '#15203f',
        'template': '#002926',
        'organism': '#006D5D',
        'molecule': '#00D5BA',
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
export default withMT(config)
