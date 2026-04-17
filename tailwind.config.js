/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // UPN / Laureate Brand Colors
        fitzone: {
          // Primarios — Lúcuma (dorado-ámbar institucional UPN)
          purple: '#F5A623',        // Lúcuma principal (brand UPN)
          darkPurple: '#D4890A',    // Lúcuma oscuro (hover)
          lightPurple: '#FDD07A',   // Lúcuma claro (acentos)

          // Secundarios — Navy profundo (fondos premium)
          charcoal: '#0B1629',      // Navy oscuro (fondo principal)
          slate: '#132244',         // Navy slate (cards)
          darkSlate: '#071020',     // Navy más oscuro (contraste)

          // Acentos tech/datos
          cyan: '#06B6D4',          // Cyan (datos, tech)
          electric: '#22D3EE',      // Cyan brillante (gráficos)

          // Brand navy UPN (acento institucional)
          orange: '#F5A623',        // Alias lúcuma (compatibilidad)
          darkOrange: '#D4890A',    // Alias lúcuma oscuro
          lime: '#22D3EE',          // Alias electric cyan

          // Éxito/Positivo
          emerald: '#10B981',       // Esmeralda (éxito, crecimiento)
          green: '#22C55E',         // Verde (positivo)

          // Alerta/Negativo
          red: '#EF4444',           // Rojo (alerta)
          amber: '#F59E0B',         // Ámbar (advertencia)

          // Neutros
          white: '#FFFFFF',
          lightGray: '#F5F5F7',
          textGray: '#9CA3AF',
          mediumGray: '#6B7280',
        },
        // UPN Brand — colores directos para uso explícito
        upn: {
          navy: '#003087',
          amber: '#F5A623',
          darkNavy: '#001F5B',
          lightNavy: '#0D3B8F',
        },
        // Semantic colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        // Gradientes UPN / Laureate
        'gradient-fitzone': 'linear-gradient(135deg, #F5A623 0%, #D4890A 100%)',
        'gradient-fitzone-dark': 'linear-gradient(135deg, #132244 0%, #0B1629 100%)',
        'gradient-fitzone-energy': 'linear-gradient(135deg, #F5A623 0%, #10B981 100%)',
        'gradient-fitzone-tech': 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
        'gradient-fitzone-premium': 'linear-gradient(135deg, #0B1629 0%, #132244 50%, #003087 100%)',
        'gradient-hero': 'linear-gradient(180deg, #0B1629 0%, #132244 100%)',
        'gradient-upn': 'linear-gradient(135deg, #003087 0%, #F5A623 100%)',
      },
      boxShadow: {
        'fitzone': '0 20px 50px rgba(245, 166, 35, 0.15)',
        'fitzone-lg': '0 30px 60px rgba(245, 166, 35, 0.25)',
        'fitzone-glow': '0 0 30px rgba(245, 166, 35, 0.4)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 30px rgba(245, 166, 35, 0.2)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideIn': 'slideIn 0.4s ease-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 166, 35, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(245, 166, 35, 0.6)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
