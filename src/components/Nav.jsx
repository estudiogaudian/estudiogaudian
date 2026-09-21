import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { List, X, ArrowRight } from "@phosphor-icons/react";
import { brand, nav, waLink } from "../data/site";
import { ctas } from "../data/home";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 16));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
          scrolled || open ? "border-hairline bg-canvas/85 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between gap-6">
          <Link to="/" className="font-sans text-[19px] font-semibold tracking-[0.14em] text-fg" aria-label="GAUDIAN, inicio">
            GAUDIAN
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={`/${n.href}`} className="text-[14px] text-fg-muted transition-colors hover:text-fg">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href={brand.calendly} target="_blank" rel="noopener noreferrer" className="cta-primary !min-h-0 !py-2.5 !text-[14px]">
              {ctas.auditoriaCorta}
              <ArrowRight size={16} weight="bold" className="cta-arrow" aria-hidden />
            </a>
          </div>

          <button
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-fg lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </header>

      {open && (
        <motion.div
          id="menu-movil"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 top-16 z-[45] flex flex-col bg-canvas px-5 pb-8 pt-6 lg:hidden"
        >
          <nav aria-label="Menú móvil" className="flex flex-col">
            {nav.map((n) => (
              <a
                key={n.href}
                href={`/${n.href}`}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-4 text-[28px] font-semibold tracking-[-0.02em] text-fg"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <a href={brand.calendly} target="_blank" rel="noopener noreferrer" className="cta-primary w-full">{ctas.auditoria}</a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="cta-ghost w-full">{ctas.whatsapp}</a>
          </div>
        </motion.div>
      )}
    </>
  );
}
