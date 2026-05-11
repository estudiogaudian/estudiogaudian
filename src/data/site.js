// Datos centralizados de la marca y contenido. Editar aquí actualiza toda la web.

export const brand = {
  name: "GAUDIAN",
  tagline: "Estudio boutique de comunicación",
  claim: "Imagen que convierte.",
  phone: "+543178615261",
  phoneDisplay: "+54 3718 615261",
  whatsapp: "543178615261",
  email: "lic.gaudinofranco@gmail.com",
  calendly: "https://calendly.com/gaudian/reunion1",
  instagram: "https://www.instagram.com/estudiogaudian/",
  url: "https://estudiogaudian.com",
  hours: "Solo con cita previa",
  locations: ["Clorinda · Formosa, Argentina", "Asunción, Paraguay"],
};

export const waMessage = encodeURIComponent(
  "Hola Franco, vi la web de GAUDIAN y quiero coordinar una reunión."
);
export const waLink = `https://wa.me/${brand.whatsapp}?text=${waMessage}`;

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos", href: "#casos" },
  { label: "Planes", href: "#planes" },
  { label: "Estudio", href: "#estudio" },
  { label: "Contacto", href: "#contacto" },
];

export const servicios = [
  {
    n: "01",
    titulo: "Branding & Identidad",
    desc: "Sistemas de marca completos: estrategia, naming, logotipo, paleta, tipografía y manual de uso. Diseñados para construir autoridad.",
    items: ["Estrategia de marca", "Sistema de logotipo", "Brand guide editorial"],
  },
  {
    n: "02",
    titulo: "Diseño Web Premium",
    desc: "Sitios y landings con foco en conversión, performance y SEO técnico. Velocidad, claridad y narrativa visual.",
    items: ["Web institucional", "Landing pages", "E-commerce boutique"],
  },
  {
    n: "03",
    titulo: "Contenido para Redes",
    desc: "Sistemas de contenido coherentes para Instagram y LinkedIn. Reels, carruseles y piezas que sostienen la percepción premium.",
    items: ["Calendario editorial", "Reels & carruseles", "Dirección visual"],
  },
  {
    n: "04",
    titulo: "Performance & Ads",
    desc: "Campañas Meta y Google con creatividad de marca y métricas claras. Inversión que se mide.",
    items: ["Meta Ads (FB/IG)", "Google Ads & SEM", "Reporting mensual"],
  },
];

export const proceso = [
  { n: "01", titulo: "Diagnóstico", desc: "Auditamos tu marca, tu mercado y tu competencia. Definimos qué falta para que vendas más." },
  { n: "02", titulo: "Estrategia", desc: "Posicionamiento, mensajes clave y plan visual. Una hoja de ruta clara, no un PDF de 40 páginas." },
  { n: "03", titulo: "Ejecución", desc: "Producimos identidad, web y contenido con dirección de arte propia. Sin amateurismos." },
  { n: "04", titulo: "Crecimiento", desc: "Activamos contenido y campañas. Reportamos resultados con métricas reales cada mes." },
];

export const casos = [
  {
    cliente: "Silvia Moreira",
    rubro: "Productora de Seguros · Clorinda",
    metrica: "+48%",
    metricaLabel: "consultas en 30 días",
    resumen: "Rebranding integral, sistema de contenido para Instagram y campaña de captación local. Pasó de un perfil sin identidad a referente local del sector.",
    real: true,
  },
  {
    cliente: "Estudio Vértice",
    rubro: "Arquitectura · Asunción",
    metrica: "x3",
    metricaLabel: "leads cualificados",
    resumen: "Dirección de marca y nueva web institucional. Lanzamiento acompañado de Reels editoriales y campaña Meta segmentada a alto poder adquisitivo.",
    real: false,
  },
  {
    cliente: "Marengo Automotores",
    rubro: "Concesionaria · Formosa",
    metrica: "+62%",
    metricaLabel: "consultas WhatsApp",
    resumen: "Identidad refinada, plantillas de contenido y campaña permanente de unidades nuevas. Posicionamiento como concesionaria premium del NEA.",
    real: false,
  },
];

export const planes = [
  {
    nombre: "Esencial",
    precio: "$370.000",
    periodo: "/mes",
    para: "Marcas que recién consolidan su presencia digital.",
    incluye: [
      "8 piezas mensuales para redes",
      "1 reel editorial / mes",
      "Calendario de publicaciones",
      "Reporting mensual básico",
      "Atención por WhatsApp en horario comercial",
    ],
    cta: "Comenzar Esencial",
    destacado: false,
  },
  {
    nombre: "Autoridad",
    precio: "$590.000",
    periodo: "/mes",
    para: "Marcas que necesitan posicionamiento premium y crecer en conversiones.",
    incluye: [
      "16 piezas mensuales premium",
      "3 reels editoriales / mes",
      "Gestión de comunidad",
      "Campaña Meta Ads (gestión + creatividad)",
      "Reporting mensual con métricas y recomendaciones",
      "Reunión estratégica trimestral",
    ],
    cta: "Quiero Autoridad",
    destacado: true,
    badge: "Más elegido",
  },
  {
    nombre: "Imperio",
    precio: "$890.000",
    periodo: "/mes",
    para: "Marcas que ya facturan y quieren liderar su categoría.",
    incluye: [
      "24 piezas mensuales premium",
      "5 reels editoriales / mes",
      "Producción fotográfica trimestral",
      "Campañas Meta + Google Ads",
      "Dirección de marca permanente",
      "Acceso directo al equipo (Slack/WhatsApp)",
    ],
    cta: "Construir Imperio",
    destacado: false,
  },
];

export const planesNota = "Permanencia mínima 6 meses. Inversión publicitaria no incluida.";

export const testimonios = [
  {
    nombre: "Silvia Moreira",
    cargo: "Productora de Seguros · Clorinda",
    quote: "Pasamos de un Instagram sin identidad a uno que la gente recuerda. Las consultas por WhatsApp aumentaron un 48% el primer mes.",
  },
  {
    nombre: "Carlos Ibáñez",
    cargo: "Director · Estudio Vértice (Asunción)",
    quote: "GAUDIAN entendió la categoría premium en la que jugamos. La nueva imagen nos abrió puertas que antes tocábamos sin que nos atiendan.",
  },
  {
    nombre: "M. Marengo",
    cargo: "Concesionaria · Formosa",
    quote: "Profesionalismo y resultados. Cada pieza comunica lo que necesitamos y la inversión publicitaria está justificada con datos.",
  },
];

export const faqs = [
  {
    q: "¿Por qué la permanencia mínima es de 6 meses?",
    a: "Porque construir percepción de marca y obtener resultados sostenibles requiere consistencia. En menos de 6 meses no podemos garantizar el nivel de calidad y posicionamiento que prometemos.",
  },
  {
    q: "¿Trabajan con marcas fuera de Clorinda y Asunción?",
    a: "Sí. Operamos 100% remoto con clientes en toda Argentina y Paraguay. Las reuniones se coordinan vía Calendly y la entrega es por canales digitales seguros.",
  },
  {
    q: "¿La inversión publicitaria está incluida en el plan?",
    a: "No. El plan cubre la gestión, creatividad y reporting. La inversión en Meta o Google Ads se acuerda por separado según objetivos y mercado.",
  },
  {
    q: "¿Qué necesitan de mí para empezar?",
    a: "Una reunión inicial de 30 minutos (gratuita) por Calendly. Luego coordinamos un onboarding donde definimos accesos, tono y prioridades.",
  },
  {
    q: "¿Producen el contenido o lo tengo que hacer yo?",
    a: "Lo producimos nosotros. En el plan Imperio incluso coordinamos producciones fotográficas trimestrales. Vos aportás materia prima estratégica; nosotros la transformamos en marca.",
  },
  {
    q: "¿Puedo cambiar de plan más adelante?",
    a: "Sí. Podés escalar a un plan superior en cualquier momento. Para bajar de plan o cancelar, se aplica el período de permanencia acordado.",
  },
];
