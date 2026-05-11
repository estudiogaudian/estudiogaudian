// Datos de la landing /promo — tráfico de Meta Ads / Google Ads.
// Precios coherentes con análisis financiero (TC mayo 2026, USD/ARS 1.250, USD/PYG 7.300).

export const PROMO_TOPBAR = "Cupos limitados de mayo · Tomamos 4 marcas nuevas por mes";

export const PROMO_HERO = {
  eyebrow: "Estudio boutique · Meta Ads",
  h1Line1: "Más clientes.",
  h1Line2: "Menos ruido.",
  sub: "Estrategia publicitaria, dirección de arte y gestión de Meta Ads para marcas premium en Argentina y Paraguay. Sin permanencia obligatoria. Sin promesas vacías.",
  ctaPrimary: "Solicitar propuesta",
  ctaSecondary: "Agendar diagnóstico (20 min)",
};

export const PROMO_MANIFIESTO = [
  "Pensamos como marca, no como agencia.",
  "Cerramos el cupo en cuatro marcas por mes para garantizar atención real y resultados medibles. No vendemos clics: construimos percepción duradera.",
  "Si tu negocio busca dejar de parecerse al resto y empezar a venderse desde la autoridad, este es tu lugar.",
];

export const PROMO_RAZONES = [
  {
    n: "01",
    titulo: "Pensamos como marca",
    desc: "Cada decisión publicitaria nace de una estrategia de identidad. No vendemos clics: construimos percepción duradera.",
  },
  {
    n: "02",
    titulo: "Trabajamos con pocos, profundo",
    desc: "Cerramos el cupo en cuatro marcas nuevas por mes. Atención real, sin ser un número en una planilla.",
  },
  {
    n: "03",
    titulo: "Estética que vende",
    desc: "Unimos dirección de arte con performance. Las creatividades de GAUDIAN se reconocen antes del copy: eso baja el CPC.",
  },
  {
    n: "04",
    titulo: "Conocemos el territorio",
    desc: "Operamos entre Formosa, Clorinda y Asunción. Entendemos el consumidor regional y los tiempos comerciales de pautar en dos países.",
  },
];

// Precios alineados con análisis Financial Analyst.
// Tipo de cambio referencial mayo 2026: USD/ARS 1.250 · USD/PYG 7.300
export const PROMO_PLANES = [
  {
    nombre: "Esencial",
    para: "Para empezar con dirección.",
    descripcion: "Ideal para emprendimientos y profesionales que necesitan presencia publicitaria sólida desde el primer día.",
    precios: {
      ars: "$ 300.000",
      pyg: "₲ 1.750.000",
      usd: "US$ 240",
    },
    periodo: "/mes · sin permanencia obligatoria",
    incluye: [
      "Configuración profesional de Meta Ads Manager",
      "1 campaña activa optimizada mensualmente",
      "2 creatividades estáticas por mes",
      "Segmentación geográfica y por intereses",
      "Reporte mensual de performance",
      "Soporte por WhatsApp en horario comercial",
    ],
    cta: "Empezar Esencial",
    destacado: false,
  },
  {
    nombre: "Autoridad",
    para: "Para crecer con estrategia.",
    descripcion: "Para marcas que ya facturan y quieren escalar con método, no improvisación.",
    precios: {
      ars: "$ 450.000",
      pyg: "₲ 2.350.000",
      usd: "US$ 360",
    },
    periodo: "/mes · sin permanencia obligatoria",
    incluye: [
      "Todo lo del plan Esencial",
      "Estrategia publicitaria trimestral documentada",
      "Hasta 3 campañas simultáneas (conversión, tráfico, reconocimiento)",
      "6 creatividades mensuales (estáticas + reels editados)",
      "Testing A/B continuo de copies y públicos",
      "Reuniones quincenales de seguimiento",
      "Optimización semanal de pauta",
    ],
    cta: "Quiero Autoridad",
    destacado: true,
    badge: "Recomendado",
  },
  {
    nombre: "Imperio",
    para: "Para dominar tu categoría.",
    descripcion: "Para PyMEs consolidadas que quieren liderar su mercado regional.",
    precios: {
      ars: "$ 650.000",
      pyg: "₲ 3.300.000",
      usd: "US$ 520",
    },
    periodo: "/mes · sin permanencia obligatoria",
    incluye: [
      "Todo lo del plan Autoridad",
      "Gestión integral de redes (Instagram + Facebook)",
      "12 publicaciones mensuales con identidad propia",
      "Calendario editorial y community management",
      "Producción de reels y contenido de marca",
      "Manual de estilo visual para tu marca",
      "Director de cuenta dedicado",
    ],
    cta: "Construir Imperio",
    destacado: false,
  },
];

export const PROMO_NOTA = "La inversión publicitaria (presupuesto en Meta) no está incluida — se gestiona en tu propia cuenta y la definimos juntos según objetivos. Sugerimos un compromiso inicial de 3 meses para que el trabajo rinda; después, mes a mes.";

export const PROMO_CASO = {
  cliente: "Silvia Moreira",
  rubro: "Productora de Seguros · Clorinda, Formosa",
  metrica: "+48%",
  metricaLabel: "consultas por WhatsApp en 30 días",
  texto: "Pasamos de un Instagram sin identidad a uno que la gente recuerda. Reposicionamos la marca, lanzamos una campaña Meta segmentada al NEA y armamos el sistema de respuesta. Las consultas crecieron casi un 50% el primer mes.",
};

export const PROMO_FAQS = [
  {
    q: "¿En cuánto tiempo veo resultados?",
    a: "Las primeras métricas relevantes aparecen entre los días 14 y 30. La consolidación real ocurre del segundo mes en adelante, cuando el algoritmo de Meta tiene data suficiente para optimizar.",
  },
  {
    q: "¿La inversión publicitaria está incluida en el precio?",
    a: "No. El honorario corresponde a gestión, estrategia y creatividad. La pauta se carga directamente en tu propia cuenta de Meta Business y la definimos según tus objetivos. Esto te da control total y transparencia.",
  },
  {
    q: "Ya probé Meta Ads y no me funcionó. ¿Por qué sería distinto?",
    a: "Porque la mayoría de las campañas fallan por falta de estrategia y por creatividades débiles, no por la plataforma. Antes de proponer un plan, auditamos qué falló y por qué.",
  },
  {
    q: "¿Trabajan con marcas fuera de Formosa o Asunción?",
    a: "Sí. Operamos 100% remoto con clientes de toda Argentina, Paraguay y LATAM. La sede es regional, pero el alcance no.",
  },
  {
    q: "¿Hay permanencia mínima?",
    a: "No te pedimos permanencia obligatoria. Sugerimos un compromiso inicial de 3 meses para que el trabajo rinda y veas resultados sólidos. Después, podés cancelar mes a mes con 15 días de aviso.",
  },
  {
    q: "¿Necesito tener marca o logo previo?",
    a: "No. Si tu identidad necesita rediseño, lo planteamos antes de pautar. Pautar sobre una marca débil multiplica el costo por resultado.",
  },
];

export const PROMO_CTA_FINAL = {
  h1: "¿Empezamos?",
  sub: "Respondemos en menos de 24 horas hábiles. Sin formularios eternos, sin compromiso. Una charla de 20 minutos para evaluar si podemos ayudarte.",
  cta: "Solicitar propuesta",
};

export const PROMO_CUPOS = {
  total: 4,
  ocupados: 2, // editar manualmente cada mes
  mes: "mayo 2026",
};
