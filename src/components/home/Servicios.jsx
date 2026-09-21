import { Check, MetaLogo, WhatsappLogo, CalendarDots, FilmStrip, Cards, ImageSquare } from "@phosphor-icons/react";
import { servicios, demoChat } from "../../data/home";

const FORMATO_ICON = { Reel: FilmStrip, Carrusel: Cards, "Estática": ImageSquare };

function Precio({ children }) {
  return <p className="font-mono text-[12px] text-accent-text tnum">{children}</p>;
}

// Árbol campaña > conjuntos > anuncios, como se ve en el Administrador de Anuncios.
function Estructura({ e }) {
  return (
    <figure className="mt-10 rounded-inner border border-hairline bg-canvas/60 p-5">
      <figcaption className="sr-only">Ejemplo de estructura de una cuenta publicitaria</figcaption>
      <p className="font-mono text-[12.5px] text-fg">{e.campana}</p>
      <ul className="mt-3 grid gap-3 border-l border-hairline-strong pl-4">
        {e.conjuntos.map((c) => (
          <li key={c.nombre}>
            <p className="font-mono text-[12px] text-fg-muted">{c.nombre}</p>
            <ul className="mt-2 grid gap-1.5 border-l border-hairline pl-4">
              {c.anuncios.map((a) => (
                <li key={a} className="font-mono text-[12px] text-accent-text">{a}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[12px] text-fg-subtle">Ejemplo de estructura</p>
    </figure>
  );
}

function MetaCell() {
  const m = servicios.meta;
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-panel border border-primary/50 bg-surface-2 p-7 md:p-10">
      <span className="flex h-11 w-11 items-center justify-center rounded-inner bg-primary text-white">
        <MetaLogo size={24} weight="bold" aria-hidden />
      </span>
      <h3 className="mt-8 text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-fg">{m.titulo}</h3>
      <p className="t-body mt-4 max-w-[52ch]">{m.desc}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {m.items.map((i) => (
          <li key={i} className="flex gap-2.5 text-[15px] text-fg">
            <Check size={17} weight="bold" className="mt-0.5 shrink-0 text-accent-text" aria-hidden />
            {i}
          </li>
        ))}
      </ul>
      <Estructura e={m.estructura} />
      <div className="flex-1" />
      <div className="mt-8 border-t border-hairline pt-5"><Precio>{m.precio}</Precio></div>
    </article>
  );
}

function ContenidoCell() {
  const c = servicios.contenido;
  return (
    <article className="panel flex h-full flex-col p-7 md:p-8">
      <div className="flex items-end gap-3" aria-hidden>
        {c.formatos.map((f) => (
          <div key={f.f} className="flex-1">
            {(() => {
              const Icon = FORMATO_ICON[f.f];
              return (
                <div className={`${f.aspect} flex w-full items-center justify-center rounded-inner border border-hairline-strong bg-surface-3 text-fg-subtle`}>
                  <Icon size={22} />
                </div>
              );
            })()}
            <p className="mt-2 font-mono text-[11px] text-fg-subtle">{f.f} {f.r}</p>
          </div>
        ))}
      </div>
      <h3 className="t-h3 mt-8">{c.titulo}</h3>
      <p className="t-body mt-3">{c.desc}</p>
    </article>
  );
}

function RedesCell() {
  const r = servicios.redes;
  return (
    <article className="panel flex h-full flex-col p-7 md:p-8">
      <CalendarDots size={28} className="text-fg-muted" aria-hidden />
      <h3 className="t-h3 mt-6">{r.titulo}</h3>
      <p className="t-body mt-3">{r.desc}</p>
      <div className="flex-1" />
      <div className="mt-6"><Precio>{r.precio}</Precio></div>
    </article>
  );
}

function BotCell() {
  const b = servicios.bot;
  return (
    <article className="panel grid h-full gap-8 p-7 md:grid-cols-[1fr_1.1fr] md:p-8">
      <div className="flex flex-col">
        <WhatsappLogo size={28} className="text-fg-muted" aria-hidden />
        <h3 className="t-h3 mt-6">{b.titulo}</h3>
        <p className="t-body mt-3">{b.desc}</p>
        <div className="flex-1" />
        <div className="mt-6"><Precio>{b.precio}</Precio></div>
      </div>
      <div className="flex flex-col justify-end gap-2.5 rounded-inner bg-canvas p-4" aria-label="Ejemplo de conversación con el bot">
        {demoChat.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.who === "ai" ? "items-end" : "items-start"}`}>
            <p
              className={`max-w-[88%] rounded-inner px-3 py-2 text-[13.5px] leading-snug ${
                m.who === "ai" ? "rounded-br-chip bg-primary text-white" : "rounded-bl-chip bg-surface-3 text-fg"
              }`}
            >
              {m.text}
            </p>
            <span className="mt-1 font-mono text-[10.5px] text-fg-subtle tnum">{m.t}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="border-t border-hairline py-24 lg:py-36">
      <div className="wrap">
        <h2 className="t-h2 max-w-[18ch]">{servicios.title}</h2>
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:row-span-2"><MetaCell /></div>
          <div className="lg:col-span-5"><ContenidoCell /></div>
          <div className="lg:col-span-5"><RedesCell /></div>
          <div className="lg:col-span-12"><BotCell /></div>
        </div>
      </div>
    </section>
  );
}
