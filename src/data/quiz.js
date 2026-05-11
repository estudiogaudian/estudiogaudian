// Quiz de cotización personalizada — 8 pasos
// Cada paso tiene: id, tipo, pregunta, opciones (opcional), required

export const QUIZ_STEPS = [
  {
    id: "rubro",
    tipo: "input-chips",
    pregunta: "¿Cuál es el rubro de tu negocio?",
    sub: "Esto nos ayuda a entender el contexto y la competencia.",
    placeholder: "Ej: Concesionaria, Estudio jurídico, Inmobiliaria…",
    chips: ["Emprendimiento", "Odontólogo", "Concesionaria", "Inmobiliaria", "Estudio jurídico", "Salud / Estética", "Comercio retail", "Gastronomía", "Construcción", "Profesional independiente", "Otro"],
    required: true,
  },
  {
    id: "etapa",
    tipo: "single",
    pregunta: "¿En qué etapa está tu marca?",
    sub: "No hay respuesta correcta. Solo queremos ubicarte.",
    opciones: [
      { value: "nueva", label: "Recién empezamos", desc: "Sin marca formal o con identidad muy básica" },
      { value: "renovar", label: "Tenemos marca pero hay que renovar", desc: "Logo y comunicación quedaron viejos" },
      { value: "consolidada", label: "Marca consolidada queremos escalar", desc: "Identidad sólida, falta crecimiento" },
      { value: "redes", label: "Redes Sociales", desc: "Queremos tener más clientes por redes sociales" },
    ],
    required: true,
  },
  {
    id: "necesidades",
    tipo: "multi",
    pregunta: "¿Qué necesitás?",
    sub: "Marcá todo lo que aplique. Vamos a armar un plan integral.",
    opciones: [
      { value: "branding", label: "Branding & Identidad" },
      { value: "web", label: "Diseño Web" },
      { value: "redes", label: "Gestión de Redes Sociales" },
      { value: "ads", label: "Meta Ads / Google Ads" },
      { value: "contenido", label: "Contenido editorial (Reels, Carruseles)" },
      { value: "estrategia", label: "Estrategia de comunicación" },
      { value: "fotos", label: "Producción fotográfica" },
      { value: "drone", label: "Fotografía / Video con Drone" },
      { value: "otro", label: "Otro servicio" },
    ],
    required: true,
    min: 1,
  },
  {
    id: "objetivo",
    tipo: "single",
    pregunta: "¿Cuál es tu objetivo principal en los próximos 6 meses?",
    sub: "Una sola respuesta — la que más te urge.",
    opciones: [
      { value: "ventas", label: "Más clientes / más ventas", desc: "Necesitás resultados de pipeline ya" },
      { value: "autoridad", label: "Autoridad y posicionamiento", desc: "Querés ser referente en tu rubro" },
      { value: "lanzamiento", label: "Lanzamiento de producto / negocio", desc: "Estás abriendo o relanzando algo nuevo" },
      { value: "rebrand", label: "Rebranding completo", desc: "La marca ya no representa lo que sos" },
    ],
    required: true,
  },
  {
    id: "pais",
    tipo: "single",
    pregunta: "¿Desde dónde nos contactás?",
    sub: "Para adaptar precios, ejemplos y casos.",
    opciones: [
      { value: "ar_local", label: "🇦🇷 Argentina — Clorinda o Formosa", desc: "Clientes locales del NEA" },
      { value: "ar_resto", label: "🇦🇷 Argentina — Resto del país", desc: "CABA, Córdoba, Rosario, interior" },
      { value: "py", label: "🇵🇾 Paraguay", desc: "Asunción, Ciudad del Este, Encarnación" },
      { value: "latam", label: "🌎 LATAM", desc: "Chile, Uruguay, Perú, Colombia, Ecuador, Venezuela" },
      { value: "norteam", label: "🇺🇸 EEUU y Norteamérica", desc: "USA, México y otros" },
      { value: "europa", label: "🇪🇺 Europa", desc: "Unión Europea" },
    ],
    required: true,
  },
  {
    id: "presupuesto",
    tipo: "single",
    pregunta: "¿Qué inversión mensual estimás para comunicación?",
    sub: "Sin pauta publicitaria. Solo el servicio del estudio.",
    opciones: [
      { value: "menor150", label: "US$ 150 / mes", desc: "Equiv. AR$ 187k · ₲ 1.1M" },
      { value: "150_300", label: "US$ 150 — 300 / mes", desc: "Equiv. AR$ 187k–375k · ₲ 1.1–2.2M" },
      { value: "300_600", label: "US$ 300 — 600 / mes", desc: "Equiv. AR$ 375k–750k · ₲ 2.2–4.4M" },
      { value: "600_1000", label: "US$ 600 — 1.000 / mes", desc: "Equiv. AR$ 750k–1.25M · ₲ 4.4–7.3M" },
      { value: "mayor1000", label: "Más de US$ 1.000 / mes", desc: "Cuentas premium" },
      { value: "noseasi", label: "No estoy seguro / quiero que me orienten", desc: "Te asesoramos sin compromiso" },
    ],
    required: true,
  },
  {
    id: "plazo",
    tipo: "single",
    pregunta: "¿Cuándo te gustaría empezar?",
    sub: "Esto define cómo organizamos los cupos del mes.",
    opciones: [
      { value: "ya", label: "Lo antes posible", desc: "Esta semana o la próxima" },
      { value: "2sem", label: "En las próximas 2-4 semanas" },
      { value: "mes", label: "El próximo mes" },
      { value: "explorar", label: "Solo estoy explorando opciones", desc: "Quiero comparar antes de decidir" },
    ],
    required: true,
  },
  {
    id: "datos",
    tipo: "form",
    pregunta: "¿A dónde te enviamos el presupuesto?",
    sub: "Te llega un PDF detallado a tu email en menos de 24 hs hábiles.",
    campos: [
      { key: "nombre", label: "Tu nombre", type: "text", required: true, placeholder: "María Pérez" },
      { key: "email", label: "Email", type: "email", required: true, placeholder: "tu@email.com" },
      { key: "negocio", label: "Nombre del negocio o marca", type: "text", required: false, placeholder: "Estudio Jurídico Pérez" },
      { key: "whatsapp", label: "WhatsApp (opcional)", type: "tel", required: false, placeholder: "+54 9 3718 615261" },
    ],
    required: true,
  },
];

// Recomendación de plan según respuestas
export function recommendPlan(answers) {
  const necesidades = answers.necesidades || [];
  const presupuesto = answers.presupuesto;
  const objetivo = answers.objetivo;
  const etapa = answers.etapa;

  let score = 0;
  // Múltiples necesidades suben el plan
  score += necesidades.length;
  // Algunos servicios requieren plan más alto
  if (necesidades.includes("ads")) score += 1;
  if (necesidades.includes("contenido")) score += 1;
  if (necesidades.includes("fotos")) score += 2;
  if (necesidades.includes("drone")) score += 2;
  // Presupuesto alto sube
  if (presupuesto === "mayor1000") score += 4;
  else if (presupuesto === "600_1000") score += 3;
  else if (presupuesto === "300_600") score += 2;
  else if (presupuesto === "150_300") score += 1;
  else if (presupuesto === "menor150") score += 0;
  else if (presupuesto === "noseasi") score += 1;
  // Objetivos complejos suben
  if (objetivo === "rebrand" || objetivo === "lanzamiento") score += 2;
  if (objetivo === "autoridad") score += 1;
  // Marca consolidada en general necesita más
  if (etapa === "consolidada") score += 1;

  if (score >= 9) return "imperio";
  if (score >= 5) return "autoridad";
  return "esencial";
}

export const PLAN_DETAILS = {
  esencial: {
    nombre: "Esencial",
    para: "Para empezar con dirección.",
    descripcion: "Plan boutique de entrada. Perfecto si recién consolidás tu presencia digital o necesitás un piso de calidad sostenible.",
    incluye: [
      "Dirección de marca aplicada a piezas mensuales",
      "8 piezas mensuales para redes sociales",
      "1 reel editorial mensual",
      "Calendario de publicaciones",
      "Reporte mensual de métricas",
      "Atención por WhatsApp en horario comercial",
    ],
    color: "warm",
  },
  autoridad: {
    nombre: "Autoridad",
    para: "Para crecer con estrategia.",
    descripcion: "Nuestro plan más elegido. Combina contenido editorial premium con campañas Meta gestionadas y reporting transparente.",
    incluye: [
      "16 piezas mensuales premium (Instagram + Facebook)",
      "3 reels editoriales mensuales",
      "Campaña Meta Ads gestionada (creatividad + optimización)",
      "Estrategia trimestral documentada",
      "Reuniones quincenales de seguimiento",
      "Reporte mensual con recomendaciones",
      "Soporte prioritario WhatsApp",
    ],
    color: "gold",
    destacado: true,
  },
  imperio: {
    nombre: "Imperio",
    para: "Para dominar tu categoría.",
    descripcion: "El plan más completo. Para marcas consolidadas que quieren liderar su mercado regional con dirección creativa permanente.",
    incluye: [
      "24 piezas mensuales premium con identidad propia",
      "5 reels editoriales mensuales",
      "Producción fotográfica trimestral",
      "Campañas Meta Ads + Google Ads integradas",
      "Dirección de marca permanente",
      "Director de cuenta dedicado",
      "Acceso directo al equipo (Slack/WhatsApp)",
      "Manual de estilo visual + guidelines",
    ],
    color: "cream",
  },
};
