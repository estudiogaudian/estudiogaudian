import { useState } from "react";
import { faqs } from "../data/site";
import Reveal from "./motion/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-ink py-32 lg:py-40">
      <div className="container-x grid lg:grid-cols-12 gap-16">
        <Reveal className="lg:col-span-4">
          <div className="s-label">08 — FAQ</div>
          <h2 className="s-h2">Preguntas<br/>frecuentes</h2>
          <p className="font-serif italic text-warm mt-6 max-w-sm" style={{ fontSize: "1.1rem", fontWeight: 300 }}>
            Lo que probablemente te estés preguntando.
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          <div className="border-t border-border-soft">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-border-soft">
                  <button
                    className="w-full flex items-center justify-between text-left py-6 group"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="font-display uppercase pr-6 group-hover:text-gold transition text-cream" style={{ fontSize: "1.1rem", letterSpacing: "0.05em" }}>
                      {f.q}
                    </span>
                    <span className={`text-2xl font-display font-light transition-transform duration-300 ${isOpen ? "rotate-45 text-gold" : "text-muted"}`}>
                      +
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
                    <p className="text-warm font-light leading-[1.75] max-w-prose" style={{ fontSize: "14px" }}>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
