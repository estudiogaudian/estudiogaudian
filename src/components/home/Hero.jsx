import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import { brand, waLink } from "../../data/site";
import { hero, ctas } from "../../data/home";
import ChatDemo from "./ChatDemo";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay) =>
    reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease } };

  return (
    <section className="relative overflow-hidden pb-20 pt-28 lg:min-h-[100dvh] lg:pb-24 lg:pt-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.h1 {...enter(0.08)} className="t-display max-w-[12ch]">
            {hero.title}
          </motion.h1>
          <motion.p {...enter(0.18)} className="t-lead mt-7 max-w-[44ch]">
            {hero.lead}
          </motion.p>
          <motion.div {...enter(0.26)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={brand.calendly} target="_blank" rel="noopener noreferrer" className="cta-primary">
              {ctas.auditoria}
              <ArrowRight size={18} weight="bold" className="cta-arrow" aria-hidden />
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="cta-ghost">
              <WhatsappLogo size={20} aria-hidden />
              {ctas.whatsapp}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-5"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          <ChatDemo />
        </motion.div>
      </div>
    </section>
  );
}
