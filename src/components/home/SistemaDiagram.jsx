import { motion, useReducedMotion } from "framer-motion";

// Diagrama de proceso: 4 etapas en línea, 1 nodo focal (responder = la IA),
// derivación a "vos" desde filtrar y retorno punteado medir → atraer.
// Colores: tokens de DESIGN.md. Conectores ortogonales con esquinas r=8.

const C = {
  bg: "#0C0D12",
  node: "#12141B",
  stroke: "#2E3446",
  line: "#8C95A8",
  text: "#F4F6FB",
  sub: "#8C95A8",
  focal: "#2563EB",
  focalTint: "#0F1B3D",
  live: "#22D3EE",
};

const NODES_H = [
  { k: "atraer", sub: "anuncio Meta", x: 24 },
  { k: "responder", sub: "IA en WhatsApp", x: 272, focal: true },
  { k: "filtrar", sub: "preguntas clave", x: 520 },
  { k: "agendar y medir", sub: "turno + tablero", x: 768 },
];

function Node({ x, y, w, h, k, sub, focal }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={C.bg} />
      <rect x={x} y={y} width={w} height={h} rx="8" fill={focal ? C.focalTint : C.node} stroke={focal ? C.focal : C.stroke} strokeWidth="1" />
      <text x={x + w / 2} y={y + h / 2 - 2} fill={C.text} fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
        {k}
      </text>
      <text x={x + w / 2} y={y + h / 2 + 17} fill={focal ? "#93C5FD" : C.sub} fontSize="11" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
        {sub}
      </text>
    </g>
  );
}

function Traveler({ path, reduce }) {
  if (reduce) return null;
  return (
    <circle r="4" fill={C.live}>
      <animateMotion dur="5s" repeatCount="indefinite" path={path} />
    </circle>
  );
}

export function DiagramHorizontal() {
  const reduce = useReducedMotion();
  const W = 1000;
  const y = 64;
  const nw = 208;
  const nh = 72;
  const mid = y + nh / 2;
  const main = `M ${24 + nw} ${mid} H ${768}`;
  return (
    <svg viewBox={`0 0 ${W} 260`} role="img" aria-labelledby="sistema-h-title sistema-h-desc" className="h-auto w-full">
      <title id="sistema-h-title">El recorrido de un lead en el sistema GAUDIAN</title>
      <desc id="sistema-h-desc">
        Un anuncio de Meta trae la consulta, la IA la responde en WhatsApp, la filtra con preguntas clave y deja el turno agendado y medido. Las consultas delicadas pasan a una persona y los datos del tablero vuelven a ajustar los anuncios cada semana.
      </desc>
      <defs>
        <marker id="sh-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={C.line} />
        </marker>
      </defs>

      {/* conectores principales */}
      {NODES_H.slice(0, 3).map((n) => (
        <line key={n.k} x1={n.x + nw} y1={mid} x2={n.x + 248 - 2} y2={mid} stroke={C.line} strokeWidth="1.2" markerEnd="url(#sh-arrow)" />
      ))}

      {/* derivación filtrar → vos */}
      <path d={`M ${520 + nw / 2} ${y + nh} V ${y + nh + 60}`} stroke={C.line} strokeWidth="1.2" fill="none" strokeDasharray="4,3" markerEnd="url(#sh-arrow)" />
      <rect x={520 + nw / 2 + 10} y={y + nh + 18} width="118" height="16" rx="2" fill={C.bg} />
      <text x={520 + nw / 2 + 14} y={y + nh + 30} fill={C.sub} fontSize="10.5" fontFamily="'JetBrains Mono', monospace">si es delicada</text>
      <rect x={520 + nw / 2 - 72} y={y + nh + 64} width="144" height="44" rx="8" fill={C.bg} stroke={C.stroke} strokeDasharray="4,3" />
      <text x={520 + nw / 2} y={y + nh + 91} fill={C.text} fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">vos o tu equipo</text>

      {/* retorno medir → atraer (optimización semanal) */}
      <path
        d={`M ${768 + nw / 2} ${y} V ${y - 28} Q ${768 + nw / 2} ${y - 36} ${768 + nw / 2 - 8} ${y - 36} H ${24 + nw / 2 + 8} Q ${24 + nw / 2} ${y - 36} ${24 + nw / 2} ${y - 28} V ${y - 2}`}
        stroke={C.line}
        strokeWidth="1.2"
        fill="none"
        strokeDasharray="5,4"
        markerEnd="url(#sh-arrow)"
      />
      <rect x={W / 2 - 120} y={y - 60} width="240" height="16" rx="2" fill={C.bg} />
      <text x={W / 2} y={y - 48} fill={C.sub} fontSize="10.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
        cada semana: ajuste de anuncios
      </text>

      <Traveler path={main} reduce={reduce} />

      {NODES_H.map((n) => (
        <Node key={n.k} x={n.x} y={y} w={nw} h={nh} {...n} />
      ))}
    </svg>
  );
}

export function DiagramVertical() {
  const reduce = useReducedMotion();
  const x = 40;
  const nw = 220;
  const nh = 64;
  const gap = 48;
  const ys = [40, 40 + nh + gap, 40 + 2 * (nh + gap), 40 + 3 * (nh + gap)];
  const cx = x + nw / 2;
  const main = `M ${cx} ${ys[0] + nh} V ${ys[3]}`;
  const labels = [
    ["atraer", "anuncio Meta"],
    ["responder", "IA en WhatsApp", true],
    ["filtrar", "preguntas clave"],
    ["agendar y medir", "turno + tablero"],
  ];
  return (
    <svg viewBox="0 0 340 540" role="img" aria-labelledby="sistema-v-title sistema-v-desc" className="mx-auto h-auto w-full max-w-[380px]">
      <title id="sistema-v-title">El recorrido de un lead en el sistema GAUDIAN</title>
      <desc id="sistema-v-desc">
        Un anuncio de Meta trae la consulta, la IA la responde en WhatsApp, la filtra y deja el turno agendado y medido. Las consultas delicadas pasan a una persona.
      </desc>
      <defs>
        <marker id="sv-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={C.line} />
        </marker>
      </defs>
      {ys.slice(0, 3).map((y0) => (
        <line key={y0} x1={cx} y1={y0 + nh} x2={cx} y2={y0 + nh + gap - 2} stroke={C.line} strokeWidth="1.2" markerEnd="url(#sv-arrow)" />
      ))}
      {/* derivación lateral desde filtrar */}
      <path d={`M ${x + nw} ${ys[2] + nh / 2} H ${x + nw + 36}`} stroke={C.line} strokeWidth="1.2" strokeDasharray="4,3" markerEnd="url(#sv-arrow)" />
      <rect x={x + nw + 38} y={ys[2] + nh / 2 - 20} width="40" height="40" rx="8" fill={C.bg} stroke={C.stroke} strokeDasharray="4,3" />
      <text x={x + nw + 58} y={ys[2] + nh / 2 + 4} fill={C.text} fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">vos</text>
      <Traveler path={main} reduce={reduce} />
      {ys.map((y0, i) => (
        <Node key={y0} x={x} y={y0} w={nw} h={nh} k={labels[i][0]} sub={labels[i][1]} focal={labels[i][2]} />
      ))}
    </svg>
  );
}

export default function SistemaDiagram() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="panel px-4 py-6 md:px-8 md:py-10"
    >
      <div className="hidden lg:block"><DiagramHorizontal /></div>
      <div className="lg:hidden"><DiagramVertical /></div>
    </motion.div>
  );
}
