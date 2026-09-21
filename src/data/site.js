// Datos centralizados de la marca y contenido. Editar aquí actualiza toda la web.
// GAUDIAN 2.0 — Marketing · AI · Automation (brand guide 2026)

export const brand = {
  name: "GAUDIAN",
  tagline: "Marketing · AI · Automation",
  claim: "Transformamos negocios mediante Marketing, Inteligencia Artificial y Automatización.",
  phone: "+5493718615261",
  phoneDisplay: "+54 3718 615261",
  whatsapp: "5493718615261",
  email: "lic.gaudinofranco@gmail.com",
  calendly: "https://calendly.com/gaudian/reunion1",
  instagram: "https://www.instagram.com/estudiogaudian/",
  url: "https://estudiogaudian.com",
  hours: "Solo con cita previa",
  locations: ["Asunción, Paraguay", "Clorinda · Formosa, Argentina"],
};

export const waMessage = encodeURIComponent(
  "Hola Franco, vi la web de GAUDIAN y quiero una auditoría gratis de mi pauta y mis redes."
);
export const waLink = `https://wa.me/${brand.whatsapp}?text=${waMessage}`;

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Trabajo", href: "#trabajo" },
  { label: "Casos", href: "#casos" },
  { label: "Planes", href: "#planes" },
  { label: "Preguntas", href: "#faq" },
];

export const servicios = [
  {
    n: "01",
    titulo: "Marketing Performance",
    desc: "Campañas de Meta Ads, TikTok Ads y Google Ads que generan clientes medibles, no likes. Embudos, creativos y optimización semanal con reporting claro.",
    items: ["Meta Ads (IG/FB)", "TikTok & Google Ads", "Embudos + tracking + reporting"],
  },
  {
    n: "02",
    titulo: "Automatización con IA",
    desc: "Sistemas inteligentes que atienden tu WhatsApp 24/7: responden consultas, califican leads y agendan citas mientras vos te ocupás del negocio.",
    items: ["Chatbots IA para WhatsApp", "Calificadores de leads", "CRM y flujos automatizados"],
  },
  {
    n: "03",
    titulo: "Gestión de Redes Sociales",
    desc: "Contenido estratégico con dirección de arte propia. Reels, carruseles y calendario editorial que sostienen tu autoridad mientras el sistema vende.",
    items: ["Calendario editorial", "Reels & carruseles", "Community management"],
  },
  {
    n: "04",
    titulo: "Sistema de Clientes",
    desc: "El producto insignia: pauta que trae leads calificados + IA que los atiende y agenda. El circuito completo de captación funcionando solo.",
    items: ["Performance + IA integrados", "Dashboard de resultados en vivo", "Garantía de leads a 90 días"],
  },
];

export const proceso = [
  { n: "01", titulo: "Auditoría", desc: "Detectamos dónde tu negocio pierde ventas: tu pauta, tu perfil y tu WhatsApp. Diagnóstico gratuito y sin compromiso." },
  { n: "02", titulo: "Estrategia", desc: "Diseñamos tu sistema de crecimiento: qué campañas, qué automatizaciones y qué contenido. Una hoja de ruta clara." },
  { n: "03", titulo: "Implementación", desc: "Montamos campañas, bots e integraciones. Todo probado y funcionando antes de escalar la inversión." },
  { n: "04", titulo: "Optimización", desc: "Medimos, testeamos y mejoramos cada semana. Reportamos con métricas reales: leads, costo por lead y retorno." },
];

export const casos = [
  {
    cliente: "Robson Peluquero",
    rubro: "Peluquería premium · Paraguay",
    metrica: "24/7",
    metricaLabel: "atención automática en WhatsApp",
    resumen: "Bot de ventas con IA que responde consultas, informa servicios y agenda clientes mientras el equipo trabaja. Implementado sobre WhatsApp con inteligencia artificial entrenada con el negocio.",
    real: true,
  },
  {
    cliente: "Silvia Moreira",
    rubro: "Productora de Seguros · Clorinda",
    metrica: "+48%",
    metricaLabel: "consultas en 30 días",
    resumen: "Rebranding integral, sistema de contenido para Instagram y campaña de captación local. Pasó de un perfil sin identidad a referente local del sector.",
    real: true,
  },
  {
    cliente: "Clínica Estética Aura",
    rubro: "Estética & Salud · Asunción",
    metrica: "-40%",
    metricaLabel: "costo por lead calificado",
    resumen: "Campañas en Meta Ads con creativos propios y un calificador de leads con IA en WhatsApp. Los curiosos se filtran solos y la agenda se llena con pacientes listos para reservar.",
    real: true,
  },
];

export const planes = [
  {
    nombre: "Redes Esencial",
    precio: "USD 250",
    periodo: "/mes",
    para: "Negocios que necesitan presencia profesional constante en redes.",
    incluye: [
      "8 posts + 4 reels editados por mes",
      "Calendario editorial y copies",
      "Gestión de comunidad básica",
      "Reporte mensual",
      "Atención por WhatsApp en horario comercial",
    ],
    cta: "Comenzar con Redes",
    destacado: false,
  },
  {
    nombre: "Sistema de Clientes",
    precio: "USD 650",
    periodo: "/mes",
    para: "Negocios que quieren leads calificados llegando a su WhatsApp todos los días.",
    incluye: [
      "Campañas Meta Ads gestionadas por especialista",
      "Calificador de leads con IA en WhatsApp 24/7",
      "Creativos de anuncio profesionales",
      "Dashboard de resultados en vivo",
      "Auditoría inicial de embudo incluida",
      "Garantía: leads medibles en 90 días o seguimos sin honorario",
    ],
    cta: "Quiero el Sistema",
    destacado: true,
    badge: "Producto estrella",
  },
  {
    nombre: "Máquina de Crecimiento",
    precio: "USD 1.200",
    periodo: "/mes",
    para: "Negocios que ya facturan y quieren dominar su categoría.",
    incluye: [
      "Performance Full: Meta + TikTok + Google Ads",
      "Chatbot IA + CRM automatizado",
      "Redes Esencial incluido",
      "Landing de conversión + tracking completo",
      "Testing creativo continuo",
      "Acceso directo a Franco (WhatsApp prioritario)",
    ],
    cta: "Escalar mi negocio",
    destacado: false,
  },
];

export const planesNota =
  "Precios en USD, pago mensual adelantado vía dLocal Go (tarjetas, transferencia, billeteras). Fee de implementación equivalente a un mes, junto al inicio. Inversión publicitaria no incluida. Solo 3 implementaciones nuevas por mes.";

export const testimonios = [
  {
    nombre: "Silvia Moreira",
    cargo: "Productora de Seguros · Clorinda",
    quote: "Pasamos de un Instagram sin identidad a uno que la gente recuerda. Las consultas por WhatsApp aumentaron un 48% el primer mes.",
  },
  {
    nombre: "Robson",
    cargo: "Robson Peluquero · Paraguay",
    quote: "El bot atiende, informa y agenda solo. Antes perdíamos mensajes todos los días; ahora ningún cliente queda sin respuesta, ni a las 2 de la mañana.",
  },
  {
    nombre: "Dra. Alonso",
    cargo: "Clínica Estética · Asunción",
    quote: "Antes la secretaria respondía cuando podía y perdíamos consultas. Ahora la IA filtra, informa y agenda; nosotros solo atendemos pacientes confirmados.",
  },
];

export const faqs = [
  {
    q: "¿Qué es exactamente el Sistema de Clientes?",
    a: "Es la combinación de campañas de pauta (Meta Ads) que atraen personas interesadas + una IA en tu WhatsApp que las atiende, filtra a los curiosos y te entrega leads listos para cerrar. Vos ves todo en un dashboard en vivo.",
  },
  {
    q: "¿La IA de verdad puede atender a mis clientes?",
    a: "Sí. La entrenamos con la información real de tu negocio: servicios, precios, horarios y las preguntas que tus clientes hacen todos los días. Responde 24/7 y deriva a un humano cuando la consulta lo amerita. Pedinos una demo con tu propio negocio.",
  },
  {
    q: "¿Por qué hay permanencia mínima?",
    a: "Porque los sistemas de crecimiento necesitan tiempo para optimizarse: las campañas aprenden, la IA se ajusta y los resultados compuestos llegan con consistencia. Planes de entrada: 6 meses. Planes completos: 12 meses.",
  },
  {
    q: "¿La inversión publicitaria está incluida en el plan?",
    a: "No. El plan cubre estrategia, gestión, creatividad, automatización y reporting. La inversión en Meta, TikTok o Google se paga directo desde tu cuenta publicitaria, así que la plata de pauta es tuya y la ves vos.",
  },
  {
    q: "¿Cómo se paga desde Paraguay?",
    a: "Por dLocal Go: tarjetas (Visa/Mastercard/Bancard), transferencia bancaria paraguaya, billeteras (Tigo Money, Zimple, Billetera Personal) o efectivo en puntos habilitados. Precios en USD, con factura de exportación de servicios.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Una Auditoría de Fuga de Ventas gratuita de 30 minutos. Te mostramos dónde estás perdiendo ventas hoy y qué sistema conviene. Te llevás el diagnóstico aunque no trabajemos juntos.",
  },
];
