/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // GAUDIAN 2.0 — Marketing · AI · Automation (brand guide 2026)
        // Se conservan los NOMBRES de tokens 1.0 remapeados a la nueva paleta
        // para que todos los componentes existentes se rebrandeen sin tocarlos.
        ink: "#050505", // negro principal
        graphite: "#0B0B10",
        graphite2: "#10101a",
        cream: "#F4F6FB", // texto principal (blanco frío)
        warm: "#B9C2d4", // texto secundario
        muted: "#7d8598", // texto apagado
        gold: "#3B82F6", // acento principal → AZUL IA
        "gold-deep": "#2563EB",
        // Nuevos tokens 2.0
        "ai-blue": "#3B82F6",
        "ai-violet": "#A855F7",
        "ai-cyan": "#22D3EE",
        // Aliases retro-compatibles
        bone: "#F4F6FB",
        paper: "#F4F6FB",
        smoke: "#7d8598",
        ash: "#7d8598",
        "gold-soft": "#B9C2D4",
        // bordes
        "border-soft": "rgba(244,246,251,0.10)",
        "border-mid": "rgba(244,246,251,0.22)",
      },
      fontFamily: {
        display: ['"Inter"', "system-ui", "sans-serif"],
        serif: ['"Inter"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"Inter"', "system-ui", "monospace"],
      },
      letterSpacing: {
        brand: "0.18em",
        wider2: "0.22em",
      },
      maxWidth: {
        prose: "65ch",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(90deg, #3B82F6 0%, #A855F7 50%, #22D3EE 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        "scroll-pulse": "scrollPulse 2.2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(16px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        pulseSoft: { "0%,100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.04)" } },
        scrollPulse: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(8px)" } },
      },
    },
  },
  plugins: [],
};
