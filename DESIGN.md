---
version: alpha
name: GAUDIAN — La fuga, en vivo
description: "Sitio de GAUDIAN (Marketing · IA · Automatización). Lienzo negro profundo, paneles hairline y una sola tubería de color: el degradado de marca azul→violeta→cyan recorre la página como el camino que hace un lead desde el anuncio hasta el turno agendado. Inter para la voz, JetBrains Mono para los datos del sistema."

colors:
  primary: "#2563EB"
  on-primary: "#FFFFFF"
  primary-hover: "#1D4ED8"
  accent-text: "#60A5FA"
  live: "#22D3EE"
  on-live: "#050505"
  violet: "#A855F7"
  canvas: "#050505"
  surface-1: "#0C0D12"
  surface-2: "#12141B"
  surface-3: "#181B24"
  hairline: "#1F2330"
  hairline-strong: "#2E3446"
  ink: "#F4F6FB"
  ink-muted: "#B9C2D4"
  ink-subtle: "#8C95A8"
  inverse: "#F4F6FB"
  on-inverse: "#050505"
  success: "#34D399"
  danger: "#F87171"

typography:
  display-xl:
    fontFamily: Inter
    fontSize: 88px
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -0.035em
  display-md:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.025em
  headline:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.005em
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.2
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.04em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum' 1"
  metric:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.04em
    fontFeature: "'tnum' 1"

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 20px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  section: 144px
  gutter: 20px

components:
  page:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 14px 22px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-inverse:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.on-inverse}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 14px 22px
  panel:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.lg}"
    padding: 32px
  panel-raised:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  chip-live:
    backgroundColor: "{colors.live}"
    textColor: "{colors.on-live}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.xs}"
  label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.mono-label}"
  accent-link:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.accent-text}"
  bubble-in:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  bubble-ai:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  metric-block:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.metric}"
  status-ok:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.success}"
  status-lost:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.danger}"
  divider:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.ink-subtle}"
  divider-strong:
    backgroundColor: "{colors.hairline-strong}"
    textColor: "{colors.ink}"
  pipe:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.on-live}"
---

# GAUDIAN — La fuga, en vivo

## Overview

GAUDIAN vende un sistema: pauta que trae personas, IA que las atiende en WhatsApp y un tablero que muestra qué pasó. El sitio se comporta como ese sistema. Cada sección es una etapa del recorrido de un lead (el anuncio, el mensaje de las 23:47, la respuesta en segundos, la calificación, el turno agendado) y los datos aparecen con marcas de hora en mono, como un registro.

Personalidad: técnico, directo, con calma. Nada de euforia de agencia. La autoridad sale de mostrar el mecanismo, no de adjetivos. Público: dueños de pymes de Paraguay y el NEA argentino (clínicas, peluquerías, inmobiliarias, gastronomía) que hoy pierden consultas por no responder a tiempo.

## Colors

- **Canvas (#050505):** negro de marca. Toda la página vive sobre él; no hay secciones claras sueltas.
- **Surfaces (#0C0D12 → #181B24):** tres niveles de panel, apenas azulados, para jerarquía sin sombras.
- **Hairline (#1F2330 / #2E3446):** los bordes definen la estructura, como en un tablero.
- **Ink (#F4F6FB) / Muted (#B9C2D4) / Subtle (#8C95A8):** blanco frío para titulares, gris azulado para texto corrido, gris más bajo solo para etiquetas mono.
- **Primary (#2563EB):** el azul de marca oscurecido para que el texto blanco pase AA. Es el único color de acción: botones primarios y la burbuja de la IA.
- **Accent text (#60A5FA):** azul claro para links y palabras marcadas sobre oscuro.
- **Live (#22D3EE):** cyan reservado para "el sistema está actuando": puntos pulsantes, estado en vivo, el instante en que la IA responde.
- **Violet (#A855F7):** no se usa solo. Existe dentro del degradado de marca.
- **La tubería:** `linear-gradient(180deg, #3B82F6, #A855F7, #22D3EE)`. Aparece en un único elemento: la línea vertical que recorre la página y se va "llenando" con el scroll. Si el degradado aparece en otro lado, está mal usado.
- **Success / Danger:** verde y rojo suaves solo para estados de datos (lead atendido / lead perdido).

## Typography

Inter es la tipografía de marca y se usa con carácter: titulares en 600, tracking negativo fuerte y line-height por debajo de 1 en tamaños display. JetBrains Mono es la voz del sistema y solo aparece en datos: horas, precios, estados y el orden de las etapas. Nunca como etiqueta decorativa sobre un titular.

Números con cifras tabulares siempre. Párrafos con `text-wrap: pretty` y máximo 62 caracteres de ancho.

## Layout

Mobile first. Contenedor de 1240px con gutter de 20px en mobile y 40px desde 1024px. La línea de la tubería vive en una columna fija a la izquierda (desde 1024px) y todo el contenido se alinea a su derecha. En mobile la tubería pasa a ser un indicador fino en el borde izquierdo.

Ritmo: secciones de 144px verticales en desktop y 96px en mobile, con el padding inferior un poco mayor que el superior. Composición asimétrica: titulares a 7 columnas, apoyos a 4-5, nunca todo centrado.

## Elevation & Depth

Sin sombras negras genéricas ni halos de color sin desplazamiento. La profundidad sale de tres niveles de superficie, hairlines y una única sombra azulada con offset (`0 30px 80px -40px rgba(37,99,235,0.45)`) bajo el panel de conversación del hero. Grano sutil fijo sobre toda la página (opacidad 0.035) para que el negro no se vea plano.

## Shapes

Paneles con 20px de radio, elementos internos con 12px, chips de estado con 4px. Botones en píldora. El contraste de radios (panel suave, chip seco) es intencional.

## Components

- **Botón primario:** píldora azul `primary` con texto blanco. Hover: `primary-hover` más una flecha que se desplaza 3px. Presionado: `scale(0.98)`. Foco: anillo de 2px en `accent-text` con 3px de separación.
- **Botón inverso:** píldora blanca con texto negro, para el CTA de WhatsApp en el hero.
- **Panel:** `surface-1`, borde hairline, radio lg. Se ilumina el borde bajo el cursor (spotlight) solo en desktop.
- **Burbujas:** entrante en `surface-3`, respuesta de la IA en `primary`. Hora en mono debajo.
- **Chip live:** cyan con texto negro, mono, radio xs, con punto pulsante (se desactiva con reduced motion).
- **Sin etiquetas sobre los titulares:** ni eyebrows ni números de sección. El titular se sostiene solo; la mono se reserva para datos (horas, precios, estados, orden de etapas).
- **Métrica:** Inter 600 grande con cifras tabulares y etiqueta mono debajo.

## Do's and Don'ts

- Hacé que cada sección muestre una parte real del mecanismo (conversación, tabla, trace).
- Usá cyan solo cuando algo esté pasando en vivo.
- Escribí con datos concretos y con los casos reales que existen.
- No uses el degradado como fondo, en textos ni en botones.
- No uses fotos de stock de oficinas ni equipos.
- No repitas grillas de cards iguales; si hay pasos, van en diagrama.
- No uses popups al entrar a la página.
- No animes la entrada de cada sección. Los momentos en movimiento son la conversación del hero, la tubería, el registro de la fuga y el recorrido del diagrama.
- No uses emojis como íconos.
