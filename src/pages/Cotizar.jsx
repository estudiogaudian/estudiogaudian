import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand, waLink } from "../data/site";
import { QUIZ_STEPS, recommendPlan, PLAN_DETAILS } from "../data/quiz";
import { useRegion } from "../context/RegionContext";
import Reveal from "../components/motion/Reveal";
import MagneticButton from "../components/motion/MagneticButton";
import SEOHead from "../components/SEOHead";

const FORMSPREE = "https://formspree.io/f/xzzbbkqo";
const HERO_IMG = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=75&auto=format&fit=crop";

export default function Cotizar() {
  const { region } = useRegion();
  const [step, setStep] = useState(0); // 0 = intro, 1..N = pasos del quiz, N+1 = resultado
  const [answers, setAnswers] = useState({});
  const [scenarios, setScenarios] = useState([]); // presupuestos previos enviados en esta sesión
  const [savedEmail, setSavedEmail] = useState("");
  const [savedNombre, setSavedNombre] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const total = QUIZ_STEPS.length;
  const isIntro = step === 0;
  const isResult = step > total;
  const currentStep = !isIntro && !isResult ? QUIZ_STEPS[step - 1] : null;
  const progress = !isIntro && !isResult ? ((step - 1) / total) * 100 : (isResult ? 100 : 0);

  const recommendedPlan = useMemo(() => recommendPlan(answers), [answers]);
  const plan = PLAN_DETAILS[recommendedPlan];

  // ---------------- handlers ----------------
  const updateAnswer = (id, value) => setAnswers((a) => ({ ...a, [id]: value }));

  const canAdvance = () => {
    if (!currentStep) return true;
    const v = answers[currentStep.id];
    if (currentStep.tipo === "input-chips") return !!v && v.trim().length > 1;
    if (currentStep.tipo === "single") return !!v;
    if (currentStep.tipo === "multi") return Array.isArray(v) && v.length >= (currentStep.min || 1);
    if (currentStep.tipo === "form") {
      return currentStep.campos.every(
        (c) => !c.required || (v && v[c.key] && v[c.key].trim().length > 1)
      );
    }
    return false;
  };

  const next = async () => {
    if (!canAdvance()) return;
    if (step === total) {
      // submit
      await submit();
    } else {
      setStep(step + 1);
    }
  };
  const prev = () => setStep(Math.max(0, step - 1));

  const submit = async () => {
    setLoading(true);
    setError("");
    try {
      const datos = answers.datos || {};
      const payload = {
        _subject: `Nuevo presupuesto solicitado · ${datos.nombre || "Sin nombre"} (${datos.negocio || "—"})`,
        source: "cotizador",
        plan_recomendado: recommendedPlan,
        ...datos,
        respuestas: answers,
        region: region.code,
        scenarios_previos: scenarios.length,
      };
      const r = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error("send fail");
      setSavedEmail(datos.email || "");
      setSavedNombre(datos.nombre || "");
      setScenarios((s) => [...s, { plan: recommendedPlan, objetivo: answers.objetivo, necesidades: answers.necesidades }]);
      setStep(total + 1);
    } catch {
      setError("No pudimos enviar tu solicitud. Probá nuevamente o escribinos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const startNewScenario = () => {
    // reset answers manteniendo email + nombre + negocio + whatsapp
    const datos = answers.datos || {};
    setAnswers({ datos: { nombre: datos.nombre, email: datos.email, negocio: datos.negocio, whatsapp: datos.whatsapp } });
    setStep(1);
  };

  // ---------------- render ----------------
  return (
    <>
      <SEOHead
        title="Solicitá tu presupuesto · GAUDIAN"
        description="Respondé 8 preguntas y recibí en tu email un presupuesto personalizado para tu marca. Branding, web, redes y Meta Ads para PyMEs en Argentina, Paraguay y Latam."
        canonical="https://estudiogaudian.com/cotizar"
        region={region}
      />

      <CotizarNav />

      {/* PROGRESS BAR */}
      <div className="fixed top-12 left-0 right-0 z-30 h-px bg-border-soft">
        <motion.div
          className="h-full bg-gold origin-left"
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <main className="bg-ink min-h-screen pt-12">
        <AnimatePresence mode="wait">
          {isIntro && <Intro key="intro" onStart={() => setStep(1)} />}
          {currentStep && (
            <StepView
              key={`step-${step}`}
              step={currentStep}
              stepNumber={step}
              total={total}
              answers={answers}
              updateAnswer={updateAnswer}
              next={next}
              prev={prev}
              canAdvance={canAdvance()}
              loading={loading}
              error={error}
              isLast={step === total}
            />
          )}
          {isResult && (
            <Result
              key="result"
              plan={plan}
              planKey={recommendedPlan}
              email={savedEmail}
              nombre={savedNombre}
              scenarios={scenarios}
              onAnother={startNewScenario}
            />
          )}
        </AnimatePresence>
      </main>

      <CotizarFooter />
    </>
  );
}

// ---------------- componentes ----------------

function CotizarNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-12 px-[5vw] flex items-center justify-between bg-ink/90 backdrop-blur-xl border-b border-border-soft">
      <a href="/" className="font-display text-cream" style={{ fontSize: "20px", letterSpacing: "0.15em" }}>
        GAUDIAN
      </a>
      <a href="/" className="font-sans uppercase text-muted hover:text-cream transition" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
        ← Volver al sitio
      </a>
    </header>
  );
}

function CotizarFooter() {
  return (
    <footer className="bg-ink border-t border-border-soft px-[5vw] py-6 text-muted" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-3">
        <span>© {new Date().getFullYear()} GAUDIAN · Tus datos están protegidos</span>
        <div className="flex gap-4">
          <a href="/terminos" className="hover:text-cream">Términos</a>
          <a href="/privacidad" className="hover:text-cream">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

function Intro({ onStart }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-[90vh] flex items-center px-[5vw] py-20 overflow-hidden"
    >
      <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(.32) saturate(.7)" }} fetchPriority="high" />
      <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(12,12,11,1) 0%, rgba(12,12,11,.55) 70%, rgba(12,12,11,.2) 100%)" }} />

      <div className="relative max-w-[900px] mx-auto w-full">
        <Reveal>
          <div className="s-label">Presupuesto personalizado</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-cream" style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)", lineHeight: 0.88, letterSpacing: "0.025em" }}>
            Armemos tu<br/>
            <span className="font-serif italic font-light text-gold" style={{ fontSize: "0.9em" }}>plan a medida.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-light text-warm leading-[1.7] mt-8 max-w-2xl" style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}>
            Cada marca es distinta y por eso no publicamos precios genéricos.
            Respondé 8 preguntas (toma 2 minutos) y te enviamos por email un presupuesto detallado, adaptado a tu rubro, etapa y objetivos.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <MagneticButton as="button" onClick={onStart} className="btn-p">
              Empezar cotización →
            </MagneticButton>
            <span className="font-sans uppercase text-muted" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
              ⏱ ~2 minutos · Sin compromiso
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 grid sm:grid-cols-3 gap-px border border-border-soft bg-border-soft max-w-2xl">
            {[
              { n: "01", t: "Contestás", d: "8 preguntas rápidas sobre tu marca" },
              { n: "02", t: "Calculamos", d: "Recomendación de plan + entregables" },
              { n: "03", t: "Recibís", d: "PDF detallado en tu email en <24 hs" },
            ].map((b) => (
              <div key={b.n} className="bg-ink p-5">
                <div className="font-display text-gold" style={{ fontSize: "1.6rem", letterSpacing: "0.04em" }}>{b.n}</div>
                <div className="font-display uppercase text-cream mt-2" style={{ fontSize: "0.95rem", letterSpacing: "0.05em" }}>{b.t}</div>
                <div className="font-light text-muted mt-1 leading-[1.5]" style={{ fontSize: "11px" }}>{b.d}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </motion.section>
  );
}

function StepView({ step, stepNumber, total, answers, updateAnswer, next, prev, canAdvance, loading, error, isLast }) {
  const value = answers[step.id];
  return (
    <motion.section
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="px-[5vw] py-20 lg:py-28 min-h-[90vh] flex items-center"
    >
      <div className="max-w-[900px] mx-auto w-full">
        <div className="flex items-baseline justify-between mb-6">
          <div className="font-sans uppercase text-gold" style={{ fontSize: "10px", letterSpacing: "0.22em" }}>
            Paso {stepNumber} de {total}
          </div>
          <div className="font-sans uppercase text-muted" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
            {Math.round((stepNumber / total) * 100)}%
          </div>
        </div>

        <h2 className="font-display text-cream" style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.05, letterSpacing: "0.02em" }}>
          {step.pregunta}
        </h2>
        {step.sub && (
          <p className="font-serif italic text-warm mt-3" style={{ fontSize: "1.05rem", fontWeight: 300 }}>
            {step.sub}
          </p>
        )}

        <div className="mt-12">
          {step.tipo === "input-chips" && <InputChips step={step} value={value} onChange={(v) => updateAnswer(step.id, v)} />}
          {step.tipo === "single" && <SingleSelect step={step} value={value} onChange={(v) => updateAnswer(step.id, v)} />}
          {step.tipo === "multi" && <MultiSelect step={step} value={value || []} onChange={(v) => updateAnswer(step.id, v)} />}
          {step.tipo === "form" && <FormFields step={step} value={value || {}} onChange={(v) => updateAnswer(step.id, v)} />}
        </div>

        {error && (
          <div className="mt-6 p-4 border border-red-500/30 bg-red-500/5 text-red-300 font-light" style={{ fontSize: "13px" }}>
            {error}
          </div>
        )}

        <div className="mt-12 flex items-center justify-between gap-4">
          <button
            onClick={prev}
            disabled={stepNumber === 1}
            className="font-sans uppercase text-muted hover:text-cream disabled:opacity-30 disabled:cursor-not-allowed transition"
            style={{ fontSize: "11px", letterSpacing: "0.18em" }}
          >
            ← Atrás
          </button>
          <button
            onClick={next}
            disabled={!canAdvance || loading}
            className="btn-p disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando…" : isLast ? "Enviar mi presupuesto →" : "Siguiente →"}
          </button>
        </div>
      </div>
    </motion.section>
  );
}

function InputChips({ step, value, onChange }) {
  return (
    <div>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={step.placeholder}
        className="w-full bg-transparent border-0 border-b-2 border-border-soft py-4 focus:outline-none focus:border-gold transition placeholder:text-muted text-cream font-sans"
        style={{ fontSize: "1.4rem", fontWeight: 300 }}
      />
      <div className="mt-6 flex flex-wrap gap-2">
        {step.chips.map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`px-4 py-2 border font-sans uppercase transition ${value === c ? "border-gold text-gold bg-gold/5" : "border-border-soft text-muted hover:border-border-mid hover:text-cream"}`}
            style={{ fontSize: "10px", letterSpacing: "0.15em" }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

function SingleSelect({ step, value, onChange }) {
  return (
    <div className="grid gap-3">
      {step.opciones.map((o) => {
        const active = value === o.value;
        return (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            className={`text-left p-5 border-2 transition group ${active ? "border-gold bg-gold/5" : "border-border-soft hover:border-border-mid"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className={`font-display uppercase ${active ? "text-gold" : "text-cream"}`} style={{ fontSize: "1.1rem", letterSpacing: "0.04em" }}>
                  {o.label}
                </div>
                {o.desc && (
                  <div className="font-light text-muted mt-1.5 leading-[1.55]" style={{ fontSize: "12.5px" }}>
                    {o.desc}
                  </div>
                )}
              </div>
              <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${active ? "border-gold" : "border-border-mid"}`}>
                {active && <div className="w-2 h-2 rounded-full bg-gold" />}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function MultiSelect({ step, value, onChange }) {
  const toggle = (v) => {
    if (value.includes(v)) onChange(value.filter((x) => x !== v));
    else onChange([...value, v]);
  };
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {step.opciones.map((o) => {
        const active = value.includes(o.value);
        return (
          <button
            key={o.value}
            onClick={() => toggle(o.value)}
            className={`text-left p-4 border-2 transition flex items-start gap-3 ${active ? "border-gold bg-gold/5" : "border-border-soft hover:border-border-mid"}`}
          >
            <div className={`w-5 h-5 border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${active ? "border-gold bg-gold" : "border-border-mid"}`}>
              {active && <span className="text-ink font-bold leading-none" style={{ fontSize: "12px" }}>✓</span>}
            </div>
            <span className={`font-sans ${active ? "text-cream" : "text-warm"}`} style={{ fontSize: "13px", fontWeight: 400 }}>
              {o.label}
            </span>
          </button>
        );
      })}
      <p className="sm:col-span-2 font-sans uppercase text-muted mt-2" style={{ fontSize: "10px", letterSpacing: "0.15em" }}>
        Seleccionados: {value.length} · Mínimo {step.min || 1}
      </p>
    </div>
  );
}

function FormFields({ step, value, onChange }) {
  const update = (k, v) => onChange({ ...value, [k]: v });
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {step.campos.map((c) => (
        <div key={c.key} className={c.key === "email" || c.key === "nombre" ? "sm:col-span-1" : "sm:col-span-1"}>
          <label className="block font-sans uppercase text-muted mb-2" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
            {c.label} {c.required && <span className="text-gold">*</span>}
          </label>
          <input
            type={c.type}
            value={value[c.key] || ""}
            onChange={(e) => update(c.key, e.target.value)}
            placeholder={c.placeholder}
            required={c.required}
            className="w-full bg-transparent border-0 border-b border-border-soft py-3 focus:outline-none focus:border-gold transition placeholder:text-muted/60 text-cream font-sans"
            style={{ fontSize: "1rem", fontWeight: 300 }}
          />
        </div>
      ))}
    </div>
  );
}

function Result({ plan, planKey, email, nombre, scenarios, onAnother }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="px-[5vw] py-20 lg:py-28 min-h-[90vh] flex items-center"
    >
      <div className="max-w-[900px] mx-auto w-full">
        {/* Confirmación */}
        <Reveal>
          <div className="s-label text-gold">✓ Solicitud recibida</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-cream" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 0.95, letterSpacing: "0.02em" }}>
            Gracias{nombre ? `, ${nombre.split(" ")[0]}` : ""}.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-serif italic text-gold mt-3 mb-10" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 300 }}>
            Nos contactaremos a la inmediatez con vos.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="border-l-2 border-gold pl-6 py-2 max-w-2xl">
            <p className="font-light text-warm leading-[1.8]" style={{ fontSize: "1.05rem" }}>
              Recibimos tu solicitud y la estamos revisando. En las próximas horas vas a tener noticias nuestras{email ? <> en <strong className="text-cream font-normal">{email}</strong></> : ""} con una propuesta a medida.
            </p>
          </div>
        </Reveal>

        {/* Acciones */}
        <Reveal delay={0.5}>
          <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-3">
            <MagneticButton as="button" onClick={onAnother} className="btn-p">
              + Cotizar otro proyecto
            </MagneticButton>
            <MagneticButton href={waLink} target="_blank" rel="noopener noreferrer" className="btn-o">
              Adelantar por WhatsApp
            </MagneticButton>
            <MagneticButton href={brand.calendly} target="_blank" rel="noopener noreferrer" className="btn-o">
              Agendar reunión 20 min
            </MagneticButton>
          </div>
        </Reveal>

        {scenarios.length > 1 && (
          <Reveal delay={0.6}>
            <p className="mt-10 font-sans uppercase text-muted" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
              Solicitudes enviadas en esta sesión: {scenarios.length}
            </p>
          </Reveal>
        )}

        <Reveal delay={0.7}>
          <p className="mt-8 font-light text-muted max-w-xl leading-[1.6]" style={{ fontSize: "12px" }}>
            ¿Tenés más de un proyecto? Solicitá tantos presupuestos como quieras — todos llegan al mismo email y los agrupamos en una sola conversación.
          </p>
        </Reveal>
      </div>
    </motion.section>
  );
}
