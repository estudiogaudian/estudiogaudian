/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta cálida editorial (de la original)
        ink: "#0c0c0b",
        graphite: "#111110",
        graphite2: "#161614",
        cream: "#ede9e0",
        warm: "#c8c2b4",
        muted: "#7a7670",
        gold: "#b8a882",
        "gold-deep": "#a8956d",
        // Aliases retro-compatibles
        bone: "#ede9e0",
        paper: "#ede9e0",
        smoke: "#7a7670",
        ash: "#7a7670",
        "gold-soft": "#c8c2b4",
        // bordes
        "border-soft": "rgba(237,233,224,0.10)",
        "border-mid": "rgba(237,233,224,0.22)",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "system-ui", "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "Inter", "system-ui", "sans-serif"],
        mono: ['"DM Sans"', "system-ui", "monospace"],
      },
      letterSpacing: {
        brand: "0.18em",
        wider2: "0.22em",
      },
      maxWidth: {
        prose: "65ch",
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
