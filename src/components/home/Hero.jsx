import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, WhatsappLogo, ChatCircleText } from "@phosphor-icons/react";
import { brand, waLink } from "../../data/site";
import { hero, ctas } from "../../data/home";

const ease = [0.16, 1, 0.3, 1];

function Aviso({ aviso, delay, reduce, className }) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease }}
      className={`flex w-[270px] items-start gap-3 rounded-inner border border-hairline-strong bg-surface-2 p-3.5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)] ${className}`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ok/15 text-ok">
        <WhatsappLogo size={20} weight="fill" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="flex items-center justify-between gap-2 text-[12px] text-fg-subtle">
          <span className="font-medium text-fg">WhatsApp</span>
          <span className="font-mono tnum">{aviso.hora}</span>
        </p>
        <p className="mt-0.5 text-[13.5px] leading-snug text-fg-muted">{aviso.texto}</p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay) =>
    reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease } };
  const { imagen, avisos, metrica, pruebas } = hero;

  return (
    <section className="relative overflow-hidden pb-20 pt-28 lg:pb-28 lg:pt-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:col-span-6 xl:col-span-7">
          <motion.h1 {...enter(0.05)} className="t-display max-w-[11ch]">
            {hero.title}
          </motion.h1>
          <motion.p {...enter(0.15)} className="t-lead mt-7 max-w-[46ch]">
            {hero.lead}
          </motion.p>
          <motion.div {...enter(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={brand.calendly} target="_blank" rel="noopener noreferrer" className="cta-primary">
              {ctas.auditoria}
              <ArrowRight size={18} weight="bold" className="cta-arrow" aria-hidden />
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="cta-ghost">
              <WhatsappLogo size={20} aria-hidden />
              {ctas.whatsapp}
            </a>
          </motion.div>
          <motion.p {...enter(0.3)} className="mt-4 text-[13.5px] text-fg-subtle">{hero.nota}</motion.p>

          <motion.dl {...enter(0.36)} className="mt-12 grid grid-cols-3 gap-4 border-t border-hairline pt-8 sm:gap-8">
            {pruebas.map((p) => (
              <div key={p.quien} className="min-w-0">
                <dt className="sr-only">{p.label}</dt>
                <dd className="text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] font-semibold leading-none tracking-[-0.03em] text-fg tnum">{p.valor}</dd>
                <dd className="mt-2 text-[13px] leading-snug text-fg-muted">{p.label}</dd>
                <dd className="mt-1 text-[12px] leading-snug text-fg-subtle">{p.quien}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative mx-auto w-full max-w-[460px] lg:col-span-6 lg:max-w-none xl:col-span-5">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease }}
            className="overflow-hidden rounded-panel border border-hairline"
          >
            <img
              src={imagen.src}
              alt={imagen.alt}
              width={imagen.w}
              height={imagen.h}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-[60%_30%]"
            />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            className="absolute right-3 top-3 rounded-inner border border-hairline-strong bg-surface-2 px-4 py-3 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)] sm:-right-5 sm:top-8"
          >
            <p className="flex items-center gap-2 text-[12px] text-fg-subtle">
              <ChatCircleText size={16} className="text-accent-text" aria-hidden />
              {metrica.label}
            </p>
            <p className="mt-1 flex items-baseline gap-2">
              <span className="text-[30px] font-semibold leading-none tracking-[-0.03em] text-fg tnum">{metrica.valor}</span>
              <span className="font-mono text-[11px] text-fg-subtle">{metrica.nota}</span>
            </p>
          </motion.div>

          <div className="absolute -bottom-6 left-3 grid gap-3 sm:-left-8 sm:bottom-10">
            {avisos.map((a, i) => (
              <Aviso key={a.hora} aviso={a} delay={1 + i * 0.5} reduce={reduce} className={i === 1 ? "sm:ml-10" : ""} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
