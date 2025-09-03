import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // Colores de la paleta - principales
        primary: {
          black: '#1C1C1C',
          'dark-gray': '#363636', 
          'dim-gray': '#696969',
          gray: '#808080',
          'dark-gray-alt': '#A9A9A9',
          silver: '#C0C0C0',
          'light-gray': '#D3D3D3',
          gainsboro: '#DCDCDC',
          'white-smoke': '#F5F5F5',
          white: '#FFFFFF',
        },
        
        // Colores vibrantes de la paleta
        palette: {
          // Blues
          blue: '#0000FF',
          'dodger-blue': '#1E90FF',
          'steel-blue': '#4682B4',
          'cadet-blue': '#5F9EA0',
          'sky-blue': '#87CEEB',
          
          // Greens  
          'dark-green': '#008000',
          'lime-green': '#32CD32',
          lime: '#00FF00',
          'green-yellow': '#ADFF2F',
          'lawn-green': '#7CFC00',
          
          // Purples
          purple: '#800080',
          'dark-violet': '#9400D3',
          'blue-violet': '#8A2BE2',
          'dark-orchid': '#9932CC',
          'medium-orchid': '#BA55D3',
          
          // Reds
          red: '#FF0000',
          'crimson': '#DC143C',
          'fire-brick': '#B22222',
          
          // Oranges
          'dark-orange': '#FF8C00',
          orange: '#FFA500',
          'sandy-brown': '#FFB347',
          'peach-puff': '#FFC87C',
          
          // Yellows
          yellow: '#FFFF00',
          gold: '#FFD700',
          
          // Pinks
          'hot-pink': '#FF69B4',
          'deep-pink': '#FF1493',
          'medium-violet-red': '#C71585',
          'pale-violet-red': '#DB7093',
          'light-pink': '#FFB6C1',
          pink: '#FFC0CB',
          
          // Cyans
          cyan: '#00FFFF',
          'dark-turquoise': '#00CED1',
          turquoise: '#40E0D0',
          'aquamarine': '#7FFFD4',
          'pale-turquoise': '#AFEEEE',
          'light-cyan': '#E0FFFF',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
