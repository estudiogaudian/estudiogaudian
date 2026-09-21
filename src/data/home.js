// Copy del home (rediseño "La fuga, en vivo"). Ver DESIGN.md.
// Todo el texto del home vive acá; los componentes solo lo pintan.

export const hero = {
  label: "estudio de marketing, IA y automatización",
  title: "Tu WhatsApp pierde clientes de noche.",
  lead:
    "Armamos anuncios en Meta que traen consultas y una IA que las contesta en segundos, filtra y agenda.",
};

// Una etiqueta por intención, igual en toda la página.
export const ctas = {
  auditoria: "Auditoría gratis",
  whatsapp: "Escribir por WhatsApp",
  cotizar: "Cotizar",
};

// Conversación demo del hero. Es un ejemplo del flujo, se muestra rotulado como demo.
export const demoChat = [
  { t: "23:47:02", who: "sys", text: "Entra desde anuncio · Turnos de alisado" },
  { t: "23:47:02", who: "in", text: "Hola, cuánto sale el alisado? tienen lugar el sábado?" },
  { t: "23:47:06", who: "ai", text: "¡Hola! El alisado lleva unas 3 horas. Para el sábado me quedan 9:00 y 14:30. ¿Cuál te queda mejor?" },
  { t: "23:48:15", who: "in", text: "14:30 dale" },
  { t: "23:48:18", who: "ai", text: "Listo, te agendé el sábado a las 14:30. El viernes te mando un recordatorio." },
  { t: "23:48:18", who: "sys", text: "Turno agendado · aviso enviado al equipo" },
];

export const fuga = {
  label: "la fuga",
  title: "La consulta llega a las 22:31. Vos la ves a las 9 de la mañana.",
  body: [
    "Pagás anuncios para que la gente te escriba. Si contestás tres horas después, esa persona ya le preguntó a dos negocios más y reservó con el que respondió primero.",
    "Ahí se va la plata de la pauta. En la auditoría te mostramos cuántas consultas se te enfriaron el último mes.",
  ],
  logTitle: "Un martes atendiendo el WhatsApp a mano",
  log: [
    { in: "09:12", q: "Consulta por precio", out: "11:40", status: "Sin respuesta del cliente", lost: true },
    { in: "13:05", q: "¿Tienen turno hoy?", out: "18:20", status: "Ya reservó en otro lado", lost: true },
    { in: "16:48", q: "Pide ubicación", out: "16:55", status: "Vino", lost: false },
    { in: "22:31", q: "Llega desde un anuncio", out: "09:03", status: "No volvió a escribir", lost: true },
    { in: "23:47", q: "¿Cuánto sale?", out: "--:--", status: "Nadie contestó", lost: true },
  ],
  logNote: "Ejemplo ilustrativo armado con los patrones que vemos en auditorías.",
};

export const sistema = {
  label: "el sistema",
  title: "Cuatro etapas, conectadas entre sí.",
  lead:
    "Cada etapa le pasa el lead a la siguiente sin que nadie copie datos a mano. Vos intervenís cuando hace falta una persona.",
  etapas: [
    {
      n: "01",
      k: "atraer",
      titulo: "Anuncios que traen conversaciones",
      desc: "Campañas en Meta, y en TikTok o Google si tu rubro lo pide, con creativos hechos para tu negocio. Medimos costo por conversación y por turno.",
      dato: "Meta · TikTok · Google Ads",
    },
    {
      n: "02",
      k: "responder",
      titulo: "Una IA que contesta en segundos",
      desc: "La entrenamos con tus precios, horarios y las preguntas que te hacen todos los días. Contesta a las 3 de la tarde y a las 3 de la mañana con el mismo tono.",
      dato: "WhatsApp 24/7",
    },
    {
      n: "03",
      k: "filtrar",
      titulo: "Separa al que compra del que mira",
      desc: "Hace las preguntas que harías vos antes de dar un turno. Si la consulta es delicada o el cliente pide una persona, te pasa la conversación.",
      dato: "Calificación + derivación",
    },
    {
      n: "04",
      k: "agendar y medir",
      titulo: "Turno cargado, número a la vista",
      desc: "Deja la cita agendada y te avisa. Cada semana ves cuántas consultas entraron, cuántas se atendieron y cuánto te costó cada cliente.",
      dato: "Tablero semanal",
    },
  ],
  extras: {
    title: "También hacemos, por separado",
    items: ["Gestión de redes con dirección de arte", "Automatizaciones a medida en n8n", "CRM de leads con alertas"],
  },
};

export const casosIntro = {
  label: "casos",
  title: "Negocios reales, números de cada uno.",
};

export const planesIntro = {
  label: "planes",
  title: "Empezá por el escalón que te sirva.",
  lead:
    "Si dudás, bajás de escalón. El precio no se negocia porque el trabajo es el mismo para todos.",
  nota:
    "Precios en USD. La inversión en anuncios la pagás vos desde tu cuenta publicitaria. Al arrancar se cobra un mes de honorario como implementación. Tomamos 3 implementaciones nuevas por mes.",
};

export const escalones = [
  {
    nombre: "Auditoría de Fuga de Ventas",
    precio: "Gratis",
    periodo: "30 min",
    desc: "Revisamos tu pauta, tu perfil y cómo se contestan tus mensajes. Te llevás el diagnóstico aunque no trabajemos juntos.",
    cta: "Auditoría gratis",
    href: "calendly",
  },
  {
    nombre: "Piloto IA",
    precio: "USD 197",
    periodo: "14 días",
    desc: "Ponemos una IA a responder tu WhatsApp durante dos semanas. Si seguís con el sistema, se descuenta del setup.",
    cta: "Escribir por WhatsApp",
    href: "whatsapp",
  },
  {
    nombre: "Performance Meta",
    precio: "USD 540",
    periodo: "/mes",
    desc: "Campañas, creativos y reporte semanal. Se suma un 20% sobre la inversión en pauta.",
    cta: "Cotizar",
    href: "cotizar",
  },
  {
    nombre: "Sistema de Clientes",
    precio: "USD 780",
    periodo: "/mes",
    destacado: true,
    badge: "el que más recomendamos",
    desc: "Performance Meta más el calificador con IA en tu WhatsApp y el tablero de resultados.",
    incluye: [
      "Campañas en Meta con creativos propios",
      "IA que responde, filtra y agenda 24/7",
      "Tablero con consultas, turnos y costo por cliente",
      "Si en 90 días no hay leads medibles, seguimos sin cobrar honorario",
    ],
    cta: "Cotizar",
    href: "cotizar",
  },
  {
    nombre: "Máquina de Crecimiento",
    precio: "USD 1.440",
    periodo: "/mes",
    desc: "Meta, TikTok y Google, chatbot con CRM y gestión de redes. Para negocios que ya facturan y quieren crecer en su categoría.",
    cta: "Cotizar",
    href: "cotizar",
  },
];

export const estudioCopy = {
  label: "el estudio",
  title: "Hablás con quien hace el trabajo.",
  body: [
    "GAUDIAN es un estudio chico con base en Clorinda, Formosa. Trabajamos con clínicas, peluquerías, inmobiliarias y comercios de Asunción y del NEA argentino.",
    "Lo dirige Franco Gaudino, licenciado en Diseño Gráfico y Multimedia. Franco diseña las campañas y arma los bots, así que la persona de la primera reunión es la misma que después mira tus números.",
  ],
  firma: "Franco Gaudino · fundador",
};

export const faqIntro = {
  label: "preguntas",
  title: "Lo que nos preguntan antes de arrancar.",
};

export const cierre = {
  label: "siguiente paso",
  title: "Te mostramos dónde se te van las ventas.",
  body:
    "Treinta minutos por videollamada. Revisamos tu pauta, tu perfil y cómo se contestan tus mensajes. Si no podemos ayudarte, te lo decimos y te sugerimos a dónde apuntar.",
};
