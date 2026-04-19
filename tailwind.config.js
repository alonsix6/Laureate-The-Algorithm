/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta — "Laureate Orange & Warm Ink"
        fitzone: {
          // Accent principal — Laureate Orange
          purple: '#F15A22',        // Laureate Orange — accent principal
          darkPurple: '#C94A18',    // Hover / dark variant (4.5:1 AA ✅ sobre blanco)
          lightPurple: '#FEE9E0',   // Tint cálido — solo sobre fondos oscuros

          // Superficies — warm white (no pure #fff)
          charcoal: '#FBF7F5',      // Fondo de página (warm off-white)
          slate: '#FFF9F7',         // Cards (warm white)
          darkSlate: '#F5EDE8',     // Superficie alternativa cálida
          surface: '#EDE4DF',       // Superficie terciaria

          // Texto — warm neutral (sin azul frío)
          navy: '#1C1410',          // Texto principal warm near-black (16:1 AAA ✅)
          darkText: '#1C1410',

          // Bordes — warm
          border: '#E8DDD9',        // Warm border suave

          // Datos / info
          cyan: '#0284C7',          // Sky-600 — datos (4.68:1 AA ✅)
          electric: '#0EA5E9',      // Sky-500 — datos secundarios

          // Aliases
          orange: '#F15A22',
          darkOrange: '#C94A18',
          lime: '#0284C7',

          // Éxito
          emerald: '#16A34A',       // Green-600 — positivo
          green: '#22C55E',         // Green-500 — secundario

          // Alerta
          red: '#B91C1C',           // Red-700
          amber: '#D97706',         // Amber-600 — advertencia

          // Neutros
          white: '#FFF9F7',         // Warm white
          lightGray: '#3D3530',     // Warm body text (12:1 AAA ✅)
          textGray: '#6B5E58',      // Warm muted text (5.2:1 AA ✅)
          mediumGray: '#9C8F89',    // Warm medium
        },
        // Platform brand colors (Simple Icons official)
        platform: {
          google: '#1A73E8',   // Google Blue — Google Trends (4.34:1 AA ✅)
          tiktok: '#010101',   // TikTok Black (21:1 AAA ✅)
          meta: '#1877F2',     // Meta Blue (4.17:1 AA ✅)
          ga4: '#E37400',      // Google Analytics Orange (large text ✅)
        },
        // Laureate/Reset Brand — Warm Charcoal header (reemplaza navy azul frío)
        upn: {
          navy: '#1A1410',          // Warm charcoal — header/nav
          amber: '#F59E0B',         // Acento lúcuma (sobre fondos oscuros)
          darkNavy: '#120E0A',      // Sub-nav profundo
          lightNavy: '#2C2018',     // Hover en nav
          deepNavy: '#0E0B08',      // Footer
        },
        // Semantic
        success: '#166534',
        warning: '#D97706',
        error: '#B91C1C',
        info: '#0D7490',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-fitzone': 'linear-gradient(135deg, #B45309 0%, #92400E 100%)',
        'gradient-fitzone-dark': 'linear-gradient(135deg, #1C2B4A 0%, #0F1D35 100%)',
        'gradient-fitzone-energy': 'linear-gradient(135deg, #B45309 0%, #166534 100%)',
        'gradient-fitzone-tech': 'linear-gradient(135deg, #0D7490 0%, #0EA5E9 100%)',
        'gradient-fitzone-premium': 'linear-gradient(135deg, #0A1527 0%, #1C2B4A 50%, #2E4170 100%)',
        'gradient-hero': 'linear-gradient(180deg, #0F1D35 0%, #1C2B4A 100%)',
        'gradient-upn': 'linear-gradient(135deg, #1C2B4A 0%, #B45309 100%)',
      },
      boxShadow: {
        // Multi-layer shadows con color hints cálidos
        'fitzone': '0 1px 2px rgba(28,43,74,0.06), 0 4px 12px rgba(28,43,74,0.08), 0 12px 32px rgba(180,83,9,0.06)',
        'fitzone-lg': '0 1px 3px rgba(28,43,74,0.08), 0 6px 20px rgba(28,43,74,0.10), 0 20px 48px rgba(180,83,9,0.10)',
        'fitzone-glow': '0 0 0 1px rgba(180,83,9,0.15), 0 4px 16px rgba(180,83,9,0.20)',
        'card': '0 1px 2px rgba(28,43,74,0.05), 0 4px 12px rgba(28,43,74,0.05), 0 12px 32px rgba(28,43,74,0.03)',
        'card-hover': '0 1px 3px rgba(28,43,74,0.07), 0 8px 24px rgba(28,43,74,0.09), 0 24px 48px rgba(180,83,9,0.08)',
        'nav': '0 1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.25)',
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
          '0%, 100%': { boxShadow: '0 0 16px rgba(180, 83, 9, 0.2)' },
          '50%': { boxShadow: '0 0 32px rgba(180, 83, 9, 0.40)' },
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
