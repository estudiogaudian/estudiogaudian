// Copy del home. Concepto: "La pieza y la pauta, en el mismo equipo". Ver DESIGN.md.
// Todo el texto del home vive acá; los componentes solo lo pintan.

// Una etiqueta por intención, igual en toda la página.
export const ctas = {
  auditoria: "Auditoría gratis",
  whatsapp: "Escribir por WhatsApp",
  cotizar: "Cotizar",
};

export const hero = {
  title: "Diseñamos la pieza y la pautamos en Meta.",
  lead: "Reels, carruseles y estáticas hechos para anunciar. Los publicamos, los pautamos en Meta Ads y te mostramos cuál vendió.",
};

// Panel del hero con forma de reporte. Números de ejemplo, se muestran rotulados como tales.
export const adsPanel = {
  campana: "Turnos de septiembre",
  objetivo: "Mensajes a WhatsApp",
  filas: [
    { formato: "Reel", ratio: "9:16", pieza: "Antes y después", resultado: 128, costo: "1,84", estado: "ganadora" },
    { formato: "Carrusel", ratio: "4:5", pieza: "5 dudas antes de reservar", resultado: 74, costo: "2,61", estado: "activa" },
    { formato: "Estática", ratio: "1:1", pieza: "Promo de apertura", resultado: 31, costo: "4,90", estado: "pausada" },
  ],
  nota: "Ejemplo de reporte. La pieza que rinde se vuelve a producir; la que no, se pausa esa semana.",
};

export const problema = {
  title: "Tu contenido y tus anuncios los hacen dos equipos que no se hablan.",
  body: [
    "La agencia de redes entrega posteos que se ven bien y nadie sabe si vendieron. El traffiker pauta lo que encuentra en tu perfil y, cuando no funciona, le echa la culpa al creativo.",
    "En GAUDIAN la misma persona piensa la pieza, arma la campaña y lee los números.",
  ],
  columnas: ["", "Por separado", "Con GAUDIAN"],
  filas: [
    ["Quién hace el contenido", "Una agencia de redes", "Nosotros, pensado como anuncio"],
    ["Quién pauta", "Un traffiker aparte", "Nosotros, con la pieza que hicimos"],
    ["Qué se mide", "Likes y seguidores", "Conversaciones y costo por cliente"],
    ["Lo que no rinde", "Se sigue publicando", "Se pausa y se reemplaza esa semana"],
  ],
};

export const servicios = {
  title: "Meta Ads en el centro, y todo lo que la alimenta.",
  meta: {
    titulo: "Pauta en Meta Ads",
    desc: "Somos especialistas en anuncios de Facebook e Instagram. Armamos la estructura de campañas y audiencias, instalamos el píxel y la API de conversiones, y optimizamos cada semana mirando el costo por conversación.",
    items: [
      "Campañas de mensajes, clientes potenciales y ventas",
      "Píxel y API de conversiones",
      "Pruebas de creativos todas las semanas",
      "Reporte con costo por conversación y por cliente",
    ],
    precio: "desde USD 540/mes",
    // Ejemplo de estructura de cuenta que se muestra en la celda.
    estructura: {
      campana: "Campaña: mensajes a WhatsApp",
      conjuntos: [
        { nombre: "Público nuevo, 25 a 45 años, 15 km", anuncios: ["Reel: antes y después", "Carrusel: 5 dudas"] },
        { nombre: "Remarketing, interacción 30 días", anuncios: ["Estática: promo de apertura"] },
      ],
    },
  },
  contenido: {
    titulo: "Contenido que se puede pautar",
    desc: "Reels, carruseles y estáticas con dirección de arte propia. Cada pieza sale lista para tu perfil y para correr como anuncio.",
    formatos: [
      { f: "Reel", r: "9:16", aspect: "aspect-[9/16]" },
      { f: "Carrusel", r: "4:5", aspect: "aspect-[4/5]" },
      { f: "Estática", r: "1:1", aspect: "aspect-square" },
    ],
  },
  redes: {
    titulo: "Gestión de redes",
    desc: "Calendario mensual, copies, historias y respuesta a comentarios. Tu perfil sigue activo mientras la pauta trae gente nueva.",
    precio: "desde USD 340/mes",
  },
  bot: {
    titulo: "Bot de WhatsApp con IA",
    desc: "Los anuncios de mensajes terminan en tu WhatsApp. Un bot entrenado con tu negocio contesta en segundos, filtra y agenda, también de noche.",
    precio: "setup USD 600 + USD 145/mes",
  },
};

// Conversación corta para la celda del bot. Es un ejemplo del flujo.
export const demoChat = [
  { t: "23:47", who: "in", text: "Hola, vi el anuncio. ¿Tienen lugar el sábado?" },
  { t: "23:47", who: "ai", text: "¡Hola! El sábado me quedan 9:00 y 14:30. ¿Cuál te queda mejor?" },
  { t: "23:48", who: "in", text: "14:30 dale" },
];

export const proceso = {
  title: "Así viaja una pieza, del diseño al cliente.",
  lead: "Cada semana repetimos el ciclo con lo que aprendimos de la anterior.",
  etapas: [
    {
      n: "01",
      k: "crear",
      titulo: "Piezas pensadas como anuncio",
      desc: "Partimos de lo que tu cliente pregunta antes de comprar. Con eso escribimos el guion del reel, el carrusel o la estática.",
      dato: "guion, diseño y edición",
    },
    {
      n: "02",
      k: "pautar",
      titulo: "Campañas en Meta Ads",
      desc: "Probamos varias piezas con el mismo presupuesto y dejamos que los números elijan. La pauta sale de tu cuenta y la ves vos.",
      dato: "Facebook e Instagram",
    },
    {
      n: "03",
      k: "atender",
      titulo: "Conversaciones en tu WhatsApp",
      desc: "Las campañas de mensajes llevan a la gente a tu WhatsApp. Contestás vos, tu equipo o un bot con IA si lo sumás.",
      dato: "WhatsApp e Instagram Direct",
    },
    {
      n: "04",
      k: "medir",
      titulo: "Un reporte que se entiende",
      desc: "Cada semana ves cuántas conversaciones trajo cada pieza y cuánto costó cada una. Lo que funciona se vuelve a producir.",
      dato: "reporte semanal",
    },
  ],
};

export const trabajo = {
  title: "Algunas piezas que hicimos.",
  lead: "Identidad de marca, campañas y contenido para redes, en el portfolio completo.",
  cta: "Ver portfolio",
  // TODO: reemplazar cada slot por una pieza real exportada desde el Canva del portfolio
  // (poner el archivo en /public/piezas/ y completar src + alt).
  piezas: [
    { f: "Reel", r: "9:16", aspect: "aspect-[9/16]", src: null, alt: "" },
    { f: "Carrusel", r: "4:5", aspect: "aspect-[4/5]", src: null, alt: "" },
    { f: "Estática", r: "1:1", aspect: "aspect-square", src: null, alt: "" },
    { f: "Reel", r: "9:16", aspect: "aspect-[9/16]", src: null, alt: "" },
    { f: "Carrusel", r: "4:5", aspect: "aspect-[4/5]", src: null, alt: "" },
  ],
};

export const casosIntro = {
  title: "Negocios reales, números de cada uno.",
  // Orden de aparición; el primero va destacado.
  orden: ["Clínica Estética Aura", "Silvia Moreira", "Robson Peluquero"],
};

export const planesIntro = {
  title: "Empezá por la pauta. Sumá lo que te falte.",
  lead: "Performance Meta es el servicio central. Contenido, redes y bot se suman según lo que tu negocio ya tenga resuelto.",
  nota: "Precios en USD. La inversión en anuncios la pagás vos desde tu cuenta publicitaria (recomendamos arrancar con Gs. 1.000.000 por mes como mínimo). Al arrancar se cobra un mes de honorario como implementación. Permanencia mínima de 6 meses.",
};

export const destacado = {
  nombre: "Performance Meta",
  precio: "USD 540",
  periodo: "/mes + 20% de la pauta",
  badge: "servicio principal",
  desc: "Tus campañas de Facebook e Instagram en manos de especialistas, con creativos producidos por el estudio.",
  incluye: [
    "Estrategia y estructura de campañas y audiencias",
    "Creativos de anuncio producidos por nosotros",
    "Píxel y API de conversiones instalados",
    "Optimización y pruebas de creativos cada semana",
    "Reporte con costo por conversación y por cliente",
  ],
};

export const escalones = [
  {
    nombre: "Auditoría de pauta y redes",
    precio: "Gratis",
    periodo: "30 min",
    desc: "Revisamos tu cuenta publicitaria y tu Instagram. Te llevás qué pausar, qué mantener y qué probar, trabajemos juntos o no.",
    cta: "Auditoría gratis",
    href: "calendly",
  },
  {
    nombre: "Redes Esencial",
    precio: "USD 340",
    periodo: "/mes",
    desc: "8 posts y 4 reels editados por mes, calendario, copies y respuesta a comentarios.",
    cta: "Cotizar",
    href: "cotizar",
  },
  {
    nombre: "Redes Pro",
    precio: "USD 600",
    periodo: "/mes",
    desc: "12 posts y 8 reels por mes, una cobertura mensual en tu local, historias diarias e informe.",
    cta: "Cotizar",
    href: "cotizar",
  },
  {
    nombre: "Bot de WhatsApp con IA",
    precio: "USD 600",
    periodo: "setup + USD 145/mes",
    desc: "Contesta, filtra y agenda las conversaciones que traen tus anuncios. Podés probarlo 14 días por USD 197.",
    cta: "Escribir por WhatsApp",
    href: "whatsapp",
  },
  {
    nombre: "Máquina de Crecimiento",
    precio: "USD 1.440",
    periodo: "/mes",
    desc: "Meta, TikTok y Google Ads, bot con IA y Redes Esencial en un solo plan.",
    cta: "Cotizar",
    href: "cotizar",
  },
];

export const estudioCopy = {
  title: "Hablás con quien diseña y pauta.",
  body: [
    "GAUDIAN es un estudio chico con base en Clorinda, Formosa. Trabajamos con clínicas, peluquerías, inmobiliarias, gastronomía y comercios de Asunción y del NEA argentino.",
    "Lo dirige Franco Gaudino, licenciado en Diseño Gráfico y Multimedia. Franco diseña las piezas y maneja las campañas en Meta, así que la persona de la primera reunión es la misma que después mira tus números.",
  ],
  firma: "Franco Gaudino · fundador",
};

export const faqIntro = {
  title: "Lo que nos preguntan antes de arrancar.",
};

export const faqs = [
  {
    q: "¿Cuánto tengo que invertir en publicidad?",
    a: "Recomendamos arrancar con Gs. 1.000.000 por mes como mínimo. Esa plata va directo a Meta desde tu cuenta publicitaria; nuestro honorario va aparte.",
  },
  {
    q: "¿La inversión en anuncios está incluida en el plan?",
    a: "No. El plan cubre estrategia, creativos, gestión y reporte. La pauta se paga desde tu cuenta, así que la plata es tuya y ves cada movimiento.",
  },
  {
    q: "¿Quién hace el contenido?",
    a: "Nosotros. Guion, diseño y edición salen del estudio. Si necesitás grabar en tu local, Redes Pro incluye una cobertura por mes.",
  },
  {
    q: "¿Puedo contratar solo las redes o solo el bot?",
    a: "Sí, cada servicio se contrata por separado. Si tenés que elegir uno, empezá por la pauta: es lo que trae clientes nuevos.",
  },
  {
    q: "¿Por qué hay permanencia mínima?",
    a: "Las campañas necesitan semanas para aprender y las pruebas de creativos rinden con el tiempo. La permanencia es de 6 meses en los planes de entrada y de 12 en Máquina de Crecimiento.",
  },
  {
    q: "¿Cómo se paga desde Paraguay?",
    a: "Por dLocal Go: tarjetas (Visa, Mastercard, Bancard), transferencia bancaria paraguaya, billeteras (Tigo Money, Zimple, Billetera Personal) o efectivo en puntos habilitados. Precios en USD, con factura de exportación de servicios.",
  },
];

export const cierre = {
  title: "Te mostramos qué está funcionando en tu cuenta de Meta.",
  body: "Treinta minutos por videollamada. Revisamos tus campañas, tus creativos y tu Instagram, y te decimos qué pausar, qué mantener y qué probar. Si no podemos ayudarte, te lo decimos.",
};
