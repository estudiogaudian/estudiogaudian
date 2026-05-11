// Configuración por región. Cada región tiene su moneda, precios, copy y locales.
// La región se detecta automáticamente por IP (ipapi.co) o por ruta /ar /py /global.

export const REGIONS = {
  ar: {
    code: "ar",
    countryCode: "AR",
    name: "Argentina",
    flag: "🇦🇷",
    locale: "es-AR",
    currency: "ARS",
    currencySymbol: "$",
    phone: "+543178615261",
    phoneDisplay: "+54 3718 615261",
    location: "Clorinda · Formosa, Argentina",
    locationShort: "Clorinda",
    heroEyebrow: "Estudio boutique · Argentina",
    heroTitle: {
      l1: "Construimos marcas",
      l2: "visibles, profesionales",
      l3a: "y ",
      l3b: "memorables.",
    },
    heroSubtitle:
      "Comunicación estratégica, diseño con visión y performance digital para marcas premium en Argentina. Sin rodeos. Solo resultados.",
    metaTitle:
      "GAUDIAN · Estudio boutique de comunicación, diseño y publicidad en Argentina",
    metaDescription:
      "Estudio boutique de diseño y marketing digital en Clorinda, Formosa. Branding, web y performance para marcas premium argentinas.",
    plans: [
      { precio: "$370.000", periodo: "/mes ARS" },
      { precio: "$590.000", periodo: "/mes ARS" },
      { precio: "$890.000", periodo: "/mes ARS" },
    ],
    bandera: "🇦🇷",
  },
  py: {
    code: "py",
    countryCode: "PY",
    name: "Paraguay",
    flag: "🇵🇾",
    locale: "es-PY",
    currency: "PYG",
    currencySymbol: "₲",
    phone: "+543178615261",
    phoneDisplay: "+54 3718 615261",
    location: "Asunción, Paraguay",
    locationShort: "Asunción",
    heroEyebrow: "Estudio boutique · Paraguay",
    heroTitle: {
      l1: "Construimos marcas",
      l2: "visibles, profesionales",
      l3a: "y ",
      l3b: "memorables.",
    },
    heroSubtitle:
      "Comunicación estratégica, diseño con visión y performance digital para marcas paraguayas que buscan liderar su categoría.",
    metaTitle:
      "GAUDIAN · Estudio de diseño y marketing digital en Paraguay",
    metaDescription:
      "Estudio boutique especializado en branding, diseño web y campañas Meta para marcas premium en Asunción y todo Paraguay.",
    plans: [
      { precio: "₲ 2.700.000", periodo: "/mes PYG" },
      { precio: "₲ 4.300.000", periodo: "/mes PYG" },
      { precio: "₲ 6.500.000", periodo: "/mes PYG" },
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
    phone: "+543178615261",
    phoneDisplay: "+54 3718 615261",
    location: "Atención remota internacional",
    locationShort: "Internacional",
    heroEyebrow: "Boutique studio · Worldwide",
    heroTitle: {
      l1: "Brands that look",
      l2: "premium, sound clear",
      l3a: "and ",
      l3b: "actually convert.",
    },
    heroSubtitle:
      "Estudio boutique de comunicación, diseño y performance. Trabajamos remoto con marcas hispanohablantes en cualquier parte del mundo.",
    metaTitle:
      "GAUDIAN · Boutique brand & performance studio for premium Spanish-speaking brands",
    metaDescription:
      "Boutique communication, design and digital performance studio for premium brands worldwide. Remote-first.",
    plans: [
      { precio: "US$ 370", periodo: "/month" },
      { precio: "US$ 590", periodo: "/month" },
      { precio: "US$ 890", periodo: "/month" },
    ],
    bandera: "🌐",
  },
};

export function pickRegion(code) {
  if (!code) return REGIONS.ar;
  return REGIONS[code.toLowerCase()] || REGIONS.ar;
}

export function regionFromCountryCode(cc) {
  const u = (cc || "").toUpperCase();
  if (u === "AR") return REGIONS.ar;
  if (u === "PY") return REGIONS.py;
  if (!u) return REGIONS.ar;
  return REGIONS.global;
}
