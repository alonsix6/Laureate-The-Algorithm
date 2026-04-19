/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta C — "Amber & Ink" — UPN/Laureate
        fitzone: {
          // Accent principal — Amber-700 (AA con blanco: 4.95:1 ✅)
          purple: '#B45309',        // Amber-700 — accent principal (AA con white)
          darkPurple: '#92400E',    // Amber-800 — hover state
          lightPurple: '#FEF3C7',   // Amber-100 — solo sobre fondos oscuros

          // Superficies — cálido, editorial
          charcoal: '#FAFAF8',      // Fondo de página (warm off-white)
          slate: '#FFFFFF',         // Cards / superficies blancas
          darkSlate: '#F5F4F0',     // Superficie alternativa cálida
          surface: '#EEECEA',       // Superficie terciaria

          // Texto
          navy: '#1A1A2E',          // Texto principal near-black (15.5:1 AAA ✅)
          darkText: '#1C2B4A',      // Ink navy — nav/header

          // Bordes
          border: '#E4E4E7',        // Zinc-200 — borde suave

          // Datos / info
          cyan: '#0284C7',          // Sky-600 — datos (4.68:1 AA ✅, más vibrante)
          electric: '#0EA5E9',      // Sky-500 — datos secundarios

          // Aliases
          orange: '#B45309',
          darkOrange: '#92400E',
          lime: '#0284C7',

          // Éxito
          emerald: '#16A34A',       // Green-600 — positivo (3.59:1 AA large ✅, más vibrante)
          green: '#22C55E',         // Green-500 — secundario

          // Alerta
          red: '#B91C1C',           // Red-700
          amber: '#D97706',         // Amber-600 — advertencia

          // Neutros
          white: '#FFFFFF',
          lightGray: '#3F3F46',     // Zinc-700 — body text (10.7:1 AAA ✅)
          textGray: '#52525B',      // Zinc-600 — texto muted (5.9:1 AA ✅)
          mediumGray: '#71717A',    // Zinc-500
        },
        // Platform brand colors (Simple Icons official)
        platform: {
          google: '#1A73E8',   // Google Blue — Google Trends (4.34:1 AA ✅)
          tiktok: '#010101',   // TikTok Black (21:1 AAA ✅)
          meta: '#1877F2',     // Meta Blue (4.17:1 AA ✅)
          ga4: '#E37400',      // Google Analytics Orange (large text ✅)
        },
        // UPN Brand — Ink Navy header
        upn: {
          navy: '#1C2B4A',          // Ink navy — header/nav
          amber: '#F59E0B',         // UPN lúcuma claro (solo sobre fondos oscuros)
          darkNavy: '#0F1D35',      // Sub-nav más profundo
          lightNavy: '#2E4170',     // Hover en nav
          deepNavy: '#0A1527',      // Footer
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
