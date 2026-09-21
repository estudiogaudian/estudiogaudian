// Configuración por región. Cada región tiene su moneda, precios, copy y locales.
// La región se detecta automáticamente por IP (ipapi.co) o por ruta /ar /py /global.
// GAUDIAN 2.0 — foco principal: Paraguay (Asunción). Precios en USD en todas las regiones.

export const REGIONS = {
  ar: {
    code: "ar",
    countryCode: "AR",
    name: "Argentina",
    flag: "🇦🇷",
    locale: "es-AR",
    currency: "USD",
    currencySymbol: "US$",
    phone: "+5493718615261",
    phoneDisplay: "+54 3718 615261",
    location: "Clorinda · Formosa, Argentina",
    locationShort: "Clorinda",
    heroEyebrow: "Marketing · AI · Automation · Argentina",
    heroTitle: {
      l1: "Sistemas que generan",
      l2: "clientes, optimizan procesos",
      l3a: "y ",
      l3b: "hacen crecer tu negocio.",
    },
    heroSubtitle:
      "Marketing Performance, chatbots con IA y automatización para negocios argentinos que quieren crecer con tecnología, no con promesas.",
    metaTitle:
      "GAUDIAN · Especialistas en Meta Ads y contenido para redes en Argentina",
    metaDescription:
      "Estudio especialista en Meta Ads. Hacemos reels, carruseles y piezas para tus redes, los pautamos en Facebook e Instagram y medimos cuál vende. También bots de WhatsApp con IA.",
    plans: [
      { precio: "US$ 250", periodo: "/mes" },
      { precio: "US$ 650", periodo: "/mes" },
      { precio: "US$ 1.200", periodo: "/mes" },
    ],
    bandera: "🇦🇷",
  },
  py: {
    code: "py",
    countryCode: "PY",
    name: "Paraguay",
    flag: "🇵🇾",
    locale: "es-PY",
    currency: "USD",
    currencySymbol: "US$",
    phone: "+5493718615261",
    phoneDisplay: "+54 3718 615261",
    location: "Asunción, Paraguay",
    locationShort: "Asunción",
    heroEyebrow: "Marketing · AI · Automation · Paraguay",
    heroTitle: {
      l1: "Sistemas que generan",
      l2: "clientes, optimizan procesos",
      l3a: "y ",
      l3b: "hacen crecer tu negocio.",
    },
    heroSubtitle:
      "Campañas que traen leads calificados a tu WhatsApp y una IA que los atiende 24/7. Marketing, Inteligencia Artificial y Automatización para negocios de Asunción y todo Paraguay.",
    metaTitle:
      "GAUDIAN · Meta Ads y contenido para redes en Asunción, Paraguay",
    metaDescription:
      "Especialistas en Meta Ads para negocios de Paraguay. Reels, carruseles y piezas estáticas pensadas para anunciar, gestión de redes y bots de WhatsApp con IA.",
    plans: [
      { precio: "US$ 250", periodo: "/mes" },
      { precio: "US$ 650", periodo: "/mes" },
      { precio: "US$ 1.200", periodo: "/mes" },
    ],
    bandera: "🇵🇾",
  },
  global: {
    code: "global",
    countryCode: "XX",
    name: "Global",
    flag: "🌐",
    locale: "es",
    currency: "USD",
    currencySymbol: "US$",
    phone: "+5493718615261",
    phoneDisplay: "+54 3718 615261",
    location: "Atención remota internacional",
    locationShort: "Internacional",
    heroEyebrow: "Marketing · AI · Automation · Worldwide",
    heroTitle: {
      l1: "Growth systems:",
      l2: "marketing, AI agents",
      l3a: "and ",
      l3b: "automation that converts.",
    },
    heroSubtitle:
      "Marketing Performance, chatbots con IA y automatización de ventas. Trabajamos remoto con negocios hispanohablantes en cualquier parte del mundo.",
    metaTitle:
      "GAUDIAN · Meta Ads y contenido para redes",
    metaDescription:
      "Estudio especialista en Meta Ads y contenido para redes. Trabajamos remoto con negocios hispanohablantes: reels, carruseles, pauta en Facebook e Instagram y bots de WhatsApp.",
    plans: [
      { precio: "US$ 250", periodo: "/month" },
      { precio: "US$ 650", periodo: "/month" },
      { precio: "US$ 1.200", periodo: "/month" },
    ],
    bandera: "🌐",
  },
};

export function pickRegion(code) {
  if (!code) return REGIONS.py;
  return REGIONS[code.toLowerCase()] || REGIONS.py;
}

export function regionFromCountryCode(cc) {
  const u = (cc || "").toUpperCase();
  if (u === "AR") return REGIONS.ar;
  if (u === "PY") return REGIONS.py;
  if (!u) return REGIONS.py;
  return REGIONS.global;
}
