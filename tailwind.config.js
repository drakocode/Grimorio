/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Fonte serifada medieval/cinematográfica (Ex: Cinzel ou Cormorant Garamond)
        serif: ['"Cinzel"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        abyss: '#030303',       // Preto absoluto de fundo
        cathedral: '#0a0a0f',   // Cinza carvão/púrpura profundo das estruturas
        wine: '#4a0610',        // Vermelho vinho base
        crimson: '#8c0d1e',     // Vermelho sangue brilhante para detalhes
        arcane: '#1a0b2e',      // Roxo místico de fundo
        gold: {
          venerable: '#b89742', // Dourado envelhecido ritualístico
          faded: '#8a7132',     // Dourado fosco para subtextos
        },
        silver: '#a3a3a3',      // Prata fosca para legibilidade
      },
      boxShadow: {
        'crimson-glow': '0 0 25px rgba(140, 13, 30, 0.25)',
        'gold-glow': '0 0 20px rgba(184, 151, 66, 0.15)',
        'inner-dark': 'inset 0 2px 10px rgba(0, 0, 0, 0.9)',
      }
    },
  },
  plugins: [],
}