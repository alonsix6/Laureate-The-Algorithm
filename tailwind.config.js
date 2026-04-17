/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // UPN / Laureate Brand Colors — Light Mode
        fitzone: {
          // Primarios — Lúcuma (dorado-ámbar institucional UPN)
          purple: '#F5A623',        // Lúcuma principal (brand UPN)
          darkPurple: '#D4890A',    // Lúcuma oscuro (hover)
          lightPurple: '#FDD07A',   // Lúcuma claro (acentos)

          // Superficies Light Mode
          charcoal: '#F4F7FF',      // Fondo de página (azul-blanco muy claro)
          slate: '#FFFFFF',         // Cards / superficies blancas
          darkSlate: '#EEF3FF',     // Fondo secundario sutil
          surface: '#E8EFF8',       // Superficie terciaria

          // Texto oscuro (reemplaza los dark-navy de fondo)
          navy: '#0B1629',          // Texto near-black (heading)
          darkText: '#1E3A5F',      // Texto dark secondary

          // Bordes
          border: '#D4DCF0',        // Borde claro para cards

          // Acentos tech/datos
          cyan: '#0891B2',          // Cyan (datos, tech) — más oscuro para contraste
          electric: '#06B6D4',      // Cyan brillante (gráficos)

          // Brand navy UPN (acento institucional)
          orange: '#F5A623',        // Alias lúcuma (compatibilidad)
          darkOrange: '#D4890A',    // Alias lúcuma oscuro
          lime: '#06B6D4',          // Alias electric cyan

          // Éxito/Positivo
          emerald: '#059669',       // Esmeralda (éxito, crecimiento) — más oscuro
          green: '#16A34A',         // Verde (positivo)

          // Alerta/Negativo
          red: '#DC2626',           // Rojo (alerta)
          amber: '#D97706',         // Ámbar (advertencia) — más oscuro para contraste

          // Neutros light mode
          white: '#FFFFFF',
          lightGray: '#374151',     // Texto cuerpo (oscuro para light mode)
          textGray: '#6B7280',      // Texto muted
          mediumGray: '#6B7280',
        },
        // UPN Brand — colores directos para uso explícito
        upn: {
          navy: '#003087',
          amber: '#F5A623',
          darkNavy: '#001F5B',
          lightNavy: '#0D3B8F',
          deepNavy: '#071325',
        },
        // Semantic colors
        success: '#059669',
        warning: '#D97706',
        error: '#DC2626',
        info: '#0891B2',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        // Gradientes UPN / Laureate
        'gradient-fitzone': 'linear-gradient(135deg, #F5A623 0%, #D4890A 100%)',
        'gradient-fitzone-dark': 'linear-gradient(135deg, #003087 0%, #001F5B 100%)',
        'gradient-fitzone-energy': 'linear-gradient(135deg, #F5A623 0%, #059669 100%)',
        'gradient-fitzone-tech': 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
        'gradient-fitzone-premium': 'linear-gradient(135deg, #0B1629 0%, #003087 50%, #0D3B8F 100%)',
        'gradient-hero': 'linear-gradient(180deg, #001F5B 0%, #003087 100%)',
        'gradient-upn': 'linear-gradient(135deg, #003087 0%, #F5A623 100%)',
      },
      boxShadow: {
        // Multi-layer shadows per design guide §5
        'fitzone': '0 1px 2px rgba(11,22,41,0.06), 0 4px 12px rgba(11,22,41,0.08), 0 12px 32px rgba(245,166,35,0.08)',
        'fitzone-lg': '0 1px 3px rgba(11,22,41,0.08), 0 6px 20px rgba(11,22,41,0.10), 0 20px 48px rgba(245,166,35,0.12)',
        'fitzone-glow': '0 0 0 1px rgba(245,166,35,0.15), 0 4px 16px rgba(245,166,35,0.25)',
        'card': '0 1px 2px rgba(11,22,41,0.06), 0 4px 12px rgba(11,22,41,0.06), 0 12px 32px rgba(11,22,41,0.04)',
        'card-hover': '0 1px 3px rgba(11,22,41,0.08), 0 8px 24px rgba(11,22,41,0.10), 0 24px 48px rgba(245,166,35,0.10)',
        'nav': '0 1px 0 rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.3)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slideIn': 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slideUp': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-12px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 16px rgba(245, 166, 35, 0.2)' },
          '50%': { boxShadow: '0 0 32px rgba(245, 166, 35, 0.45)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      transitionTimingFunction: {
        'enter': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'leave': 'cubic-bezier(0.5, 0, 0.75, 0)',
      },
    },
  },
  plugins: [],
}
