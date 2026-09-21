// Copy del home. Idea: "Más clientes para tu negocio. Vos delegás, nosotros nos encargamos."
// Todo el texto del home vive acá; los componentes solo lo pintan.

// Una etiqueta por intención, igual en toda la página.
export const ctas = {
  auditoria: "Quiero mi auditoría gratis",
  auditoriaCorta: "Auditoría gratis",
  whatsapp: "Escribir por WhatsApp",
};

export const hero = {
  title: "Más clientes para tu negocio.",
  lead: "Nosotros hacemos los anuncios, los pautamos en Instagram y Facebook y medimos cuánto te cuesta cada cliente. Vos usás ese tiempo para atender y hacer crecer tu negocio.",
  nota: "Auditoría de 30 minutos por videollamada. Sin compromiso.",
  imagen: { src: "/img/hero.webp", alt: "Dueña de una peluquería atendiendo a una clienta en su local", w: 1200, h: 1600 },
  // Tarjetas flotantes sobre la foto. Son ejemplos del tipo de aviso que recibe el cliente.
  avisos: [
    { hora: "09:14", texto: "Nueva consulta desde tu anuncio: “¿Tienen turno el sábado?”" },
    { hora: "09:32", texto: "Nueva consulta desde tu anuncio: “¿Cuánto sale el alisado?”" },
  ],
  metrica: { valor: "38", label: "consultas esta semana", nota: "ejemplo" },
  pruebas: [
    { valor: "−40%", label: "costo por cliente", quien: "Clínica Estética Aura" },
    { valor: "+48%", label: "consultas en 30 días", quien: "Silvia Moreira, seguros" },
    { valor: "24/7", label: "atención en WhatsApp", quien: "Robson Peluquero" },
  ],
};

export const rubros = {
  title: "Trabajamos con negocios como el tuyo.",
  items: [
    { nombre: "Clínicas y estética", src: "/img/clinica.webp", alt: "Esteticista conversando con una paciente antes de un tratamiento" },
    { nombre: "Peluquerías", src: "/img/hero.webp", alt: "Peluquera peinando a una clienta" },
    { nombre: "Gastronomía", src: "/img/restaurante.webp", alt: "Chef emplatando en la cocina de un restaurante" },
    { nombre: "Inmobiliarias", src: "/img/inmobiliaria.webp", alt: "Agente inmobiliario mostrando un departamento a una pareja" },
    { nombre: "Comercios", src: "/img/boutique.webp", alt: "Dueña de una tienda de ropa entregando una compra a una clienta" },
  ],
};

export const paraVos = {
  title: "Esto es para vos si…",
  imagen: { src: "/img/noche.webp", alt: "Dueño de un negocio cansado frente a la computadora a la noche", w: 1200, h: 1600 },
  puntos: [
    { t: "Publicás en redes y los clientes no llegan por ahí.", d: "Tenés seguidores y likes, pero el WhatsApp no suena." },
    { t: "Probaste “promocionar” publicaciones y no sabés si sirvió.", d: "Pusiste plata en Instagram y nadie te mostró qué volvió." },
    { t: "Se te van las noches haciendo posteos.", d: "Horas que podrías usar para descansar o planificar tu negocio." },
  ],
};

export const delega = {
  title: "Vos atendés tu negocio. Del resto nos encargamos.",
  lead: "Hacer contenido, pautar y responder mensajes te puede llevar horas por semana. Esas horas vuelven a tu negocio.",
  imagen: { src: "/img/boutique.webp", alt: "Dueña de una tienda atendiendo a una clienta con una sonrisa", w: 1200, h: 1600 },
  nosotros: [
    "Pensar qué publicar cada semana",
    "Diseñar y editar reels, carruseles y piezas",
    "Armar y ajustar las campañas en Meta",
    "Revisar los números y decidir qué anuncio sigue",
    "Contestar consultas a toda hora, si sumás el bot",
  ],
  vos: [
    "Atender a tus clientes",
    "Cerrar las ventas que llegan",
    "Mejorar tu producto o servicio",
    "Tu equipo y tu local",
    "Tus tiempos y tu familia",
  ],
};

export const pasos = {
  title: "Cómo te conseguimos clientes.",
  items: [
    {
      n: "1",
      titulo: "Hacemos los anuncios",
      desc: "Reels, carruseles y piezas pensadas para vender lo que ofrecés. Grabamos, diseñamos y editamos nosotros.",
      src: "/img/rodaje.webp",
      alt: "Creador de contenido grabando un video con el celular en un café",
    },
    {
      n: "2",
      titulo: "Los pautamos en Meta",
      desc: "Los mostramos en Instagram y Facebook a la gente de tu zona que puede comprarte, y ajustamos cada semana.",
      src: "/img/feed.webp",
      alt: "Persona mirando publicaciones de Instagram en el celular",
    },
    {
      n: "3",
      titulo: "Te llegan consultas",
      desc: "La gente te escribe al WhatsApp. Cada semana te mostramos cuántas consultas llegaron y cuánto costó cada una.",
      src: "/img/panaderia.webp",
      alt: "Dueño de una panadería leyendo mensajes nuevos en su celular",
    },
  ],
};

export const casosIntro = {
  title: "Negocios reales, resultados reales.",
  // Orden de aparición; el primero va destacado.
  orden: ["Clínica Estética Aura", "Silvia Moreira", "Robson Peluquero"],
};

export const oferta = {
  title: "Un plan, todo incluido.",
  nombre: "Performance Meta",
  precio: "USD 540",
  periodo: "por mes + 20% de la pauta",
  desc: "Tus anuncios de Instagram y Facebook, hechos y manejados por el estudio.",
  incluye: [
    "Estrategia y campañas en Meta Ads",
    "Anuncios diseñados y editados por nosotros",
    "Píxel instalado para medir cada consulta",
    "Optimización y pruebas cada semana",
    "Reporte con cuánto te costó cada cliente",
  ],
  garantia: {
    titulo: "Garantía de 90 días",
    texto: "Si en 90 días no hay consultas medibles, seguimos trabajando sin cobrarte honorario.",
    // TODO: confirmar condiciones con Franco.
    condicion: "Con una inversión en pauta desde Gs. 1.000.000 por mes.",
  },
  cupos: "Tomamos 3 negocios nuevos por mes.",
  nota: "Precios en USD. La inversión en anuncios la pagás vos desde tu cuenta publicitaria. Al arrancar se cobra un mes de honorario como implementación. Permanencia mínima de 6 meses.",
};

export const extras = {
  title: "Podés sumar",
  items: [
    { nombre: "Gestión de redes", precio: "desde USD 340/mes", desc: "Posteos, reels, historias y respuesta a comentarios para que tu perfil se vea activo." },
    { nombre: "Bot de WhatsApp con IA", precio: "USD 600 + USD 145/mes", desc: "Contesta, filtra y agenda las consultas que traen tus anuncios, también de noche." },
  ],
};

export const estudioCopy = {
  title: "Hablás con quien hace el trabajo.",
  body: [
    "GAUDIAN es un estudio de Clorinda que trabaja con negocios de Asunción y del NEA argentino. Lo dirige Franco Gaudino, licenciado en Diseño Gráfico y Multimedia.",
    "Franco diseña los anuncios y maneja las campañas, así que la persona de la primera reunión es la misma que después mira tus números.",
  ],
  firma: "Franco Gaudino · fundador",
};

export const faqIntro = {
  title: "Preguntas frecuentes.",
};

export const faqs = [
  {
    q: "¿Cuánto tengo que invertir en publicidad?",
    a: "Recomendamos arrancar con Gs. 1.000.000 por mes como mínimo. Esa plata va directo a Meta desde tu cuenta; nuestro honorario va aparte.",
  },
  {
    q: "¿La inversión en anuncios está incluida en el plan?",
    a: "No. El plan cubre estrategia, anuncios, gestión y reporte. La pauta se paga desde tu cuenta, así que la plata es tuya y ves cada movimiento.",
  },
  {
    q: "¿Cuándo llegan las primeras consultas?",
    a: "Depende de tu rubro y de tu presupuesto. En la auditoría te damos una estimación para tu caso antes de arrancar.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Una auditoría gratis de 30 minutos. Revisamos tu Instagram y tu cuenta publicitaria, si tenés, y te decimos qué haríamos.",
  },
  {
    q: "¿Por qué hay permanencia mínima?",
    a: "Las campañas necesitan semanas para aprender qué anuncio funciona mejor. Por eso trabajamos con un mínimo de 6 meses.",
  },
  {
    q: "¿Cómo se paga desde Paraguay?",
    a: "Por dLocal Go: tarjetas (Visa, Mastercard, Bancard), transferencia bancaria paraguaya, billeteras (Tigo Money, Zimple, Billetera Personal) o efectivo. Precios en USD, con factura de exportación.",
  },
];

export const cierre = {
  title: "Pedí tu auditoría gratis.",
  body: "En 30 minutos te mostramos qué haríamos con tu cuenta, cuántos clientes podés esperar y cuánto tiempo te sacás de encima.",
  imagen: { src: "/img/videollamada.webp", alt: "Dueña de un negocio en una videollamada tomando notas", w: 1600, h: 900 },
};
