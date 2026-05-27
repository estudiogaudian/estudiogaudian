import { useState, useEffect, useRef } from "react";

const FORMSPREE_ID = "xykvbbga";

function SectionHeader({ num, label }) {
  return (
    <div className="flex items-center gap-3 mb-7">
      <span className="font-sans text-[10px] tracking-wider2 uppercase text-gold">{num}</span>
      <span className="font-sans text-[10px] tracking-wider2 uppercase text-muted">{label}</span>
      <div className="flex-1 h-px bg-border-soft" />
    </div>
  );
}

function QLabel({ children }) {
  return <label className="block font-sans text-[13px] font-medium text-cream mb-1.5 leading-snug">{children}</label>;
}

function QHint({ children }) {
  return <p className="text-[11px] text-muted italic mb-2">{children}</p>;
}

function TextInput({ name, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full bg-graphite2 border border-border-soft text-cream font-sans text-[13px] px-3 py-2.5 rounded focus:outline-none focus:border-gold placeholder:text-muted/40 transition-colors"
    />
  );
}

function TextArea({ name, placeholder }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={3}
      className="w-full bg-graphite2 border border-border-soft text-cream font-sans text-[13px] px-3 py-2.5 rounded focus:outline-none focus:border-gold placeholder:text-muted/40 transition-colors resize-y"
    />
  );
}

function Select({ name, options }) {
  return (
    <select
      name={name}
      className="w-full bg-graphite2 border border-border-soft text-cream font-sans text-[13px] px-3 py-2.5 rounded focus:outline-none focus:border-gold transition-colors appearance-none"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237a7670' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", paddingRight: "34px" }}
    >
      {options.map(o => <option key={o} value={o} className="bg-graphite2">{o}</option>)}
    </select>
  );
}

function RadioGroup({ name, options }) {
  return (
    <div className="flex flex-col gap-2">
      {options.map(opt => (
        <label key={opt} className="flex items-center gap-3 text-[13px] text-warm cursor-pointer px-3 py-2 bg-graphite2 border border-border-soft rounded hover:border-gold/30 hover:text-cream transition-colors">
          <input type="radio" name={name} value={opt} className="accent-gold w-3.5 h-3.5 flex-shrink-0" />
          {opt}
        </label>
      ))}
    </div>
  );
}

function PillGroup({ name, options }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <label key={opt} className="inline-flex items-center text-[12px] bg-graphite2 border border-border-soft rounded-full px-3.5 py-1.5 cursor-pointer text-muted hover:border-gold/40 hover:text-warm transition-colors has-[:checked]:border-gold has-[:checked]:text-gold has-[:checked]:bg-gold/10">
          <input type="checkbox" name={name} value={opt} className="hidden" />
          {opt}
        </label>
      ))}
    </div>
  );
}

function PackCard({ value, name, price, desc, selected, onClick }) {
  return (
    <label
      onClick={onClick}
      className={`cursor-pointer bg-graphite2 rounded p-4 text-center border transition-colors ${selected ? "border-gold bg-gold/5" : "border-border-soft hover:border-gold/30"}`}
    >
      <input type="radio" name="pack_contratado" value={value} checked={selected} onChange={() => {}} className="hidden" />
      <p className={`font-sans text-[11px] tracking-brand uppercase font-medium mb-1.5 ${selected ? "text-gold" : "text-muted"}`}>{name}</p>
      <p className="font-display text-2xl text-gold mb-1">{price}</p>
      <p className="text-[11px] text-muted leading-tight">{desc}</p>
      {selected && (
        <div className="w-4 h-4 rounded-full bg-gold mx-auto mt-3 flex items-center justify-center">
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="#0c0c0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      )}
    </label>
  );
}

export default function Onboarding() {
  const [selectedPack, setSelectedPack] = useState("activacion");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [progress, setProgress] = useState(0);
  const formRef = useRef(null);

  useEffect(() => {
    document.title = "Onboarding — Gaudián Estudio";
  }, []);

  function updateProgress() {
    if (!formRef.current) return;
    const inputs = formRef.current.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], textarea");
    const selects = formRef.current.querySelectorAll("select");
    const radiosChecked = formRef.current.querySelectorAll("input[type='radio']:checked");
    let filled = 0;
    inputs.forEach(i => { if (i.value.trim()) filled++; });
    selects.forEach(s => { if (s.value) filled++; });
    filled += radiosChecked.length;
    const radioNames = new Set([...formRef.current.querySelectorAll("input[type='radio']")].map(r => r.name));
    const total = inputs.length + selects.length + radioNames.size;
    setProgress(Math.min(100, Math.round((filled / total) * 100)));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(formRef.current);
    data.set("pack_contratado", selectedPack);
    const checkboxes = [...formRef.current.querySelectorAll("input[type='checkbox']:checked")].map(c => c.value);
    if (checkboxes.length) data.set("tono_visual", checkboxes.join(", "));
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-14 h-14 rounded-full border border-gold mx-auto mb-6 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b8a882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="font-display text-4xl text-cream mb-3">Recibimos todo.</h1>
          <p className="text-[14px] text-muted leading-relaxed">
            Gracias por completar el formulario. Te contactamos en <span className="text-gold">menos de 24 horas</span> para coordinar el arranque de tu campaña.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink text-cream">
      {/* Progress bar sticky */}
      <div className="sticky top-0 z-50 h-0.5 bg-graphite2">
        <div className="h-full bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      {/* Hero */}
      <header className="max-w-2xl mx-auto px-6 pt-16 pb-10 border-b border-border-soft">
        <p className="font-sans text-[10px] tracking-wider2 uppercase text-gold mb-3">Gaudián Estudio — Formulario de inicio</p>
        <h1 className="font-display text-5xl md:text-6xl text-cream mb-4">Bienvenido<br />al equipo.</h1>
        <p className="text-[14px] text-muted leading-relaxed max-w-md">
          Completá este formulario para que podamos arrancar con todo. Cuanto más detalle nos des, mejor vamos a trabajar tu campaña.
        </p>
      </header>

      {/* Pack selector */}
      <section className="max-w-2xl mx-auto px-6 py-10 border-b border-border-soft">
        <p className="font-sans text-[10px] tracking-wider2 uppercase text-gold mb-1">Pack contratado</p>
        <p className="text-[11px] text-muted italic mb-4">Confirmá el plan que cerraste con nosotros</p>
        <div className="grid grid-cols-3 gap-3">
          <PackCard value="activacion" name="Activación" price="$180k" desc="2 campañas Meta Ads · 4 piezas publicitarias" selected={selectedPack === "activacion"} onClick={() => setSelectedPack("activacion")} />
          <PackCard value="presencia" name="Presencia" price="$270k" desc="8 publicaciones + reels · 1 campaña incluida" selected={selectedPack === "presencia"} onClick={() => setSelectedPack("presencia")} />
          <PackCard value="autoridad" name="Autoridad" price="$370k" desc="12 publicaciones + 4 reels · estrategia completa" selected={selectedPack === "autoridad"} onClick={() => setSelectedPack("autoridad")} />
        </div>
      </section>

      {/* Form */}
      <form ref={formRef} onSubmit={handleSubmit} onChange={updateProgress} className="max-w-2xl mx-auto px-6 pb-20">

        {/* 01 Datos del negocio */}
        <section className="py-10 border-b border-border-soft">
          <SectionHeader num="01" label="Datos del negocio" />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><QLabel>Nombre del negocio / marca</QLabel><TextInput name="nombre_negocio" placeholder="Ej: Ferretería El Clavo" /></div>
            <div><QLabel>Nombre del titular / responsable</QLabel><TextInput name="titular" placeholder="Tu nombre completo" /></div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><QLabel>WhatsApp de contacto</QLabel><TextInput name="whatsapp" type="tel" placeholder="+54 3718 000000" /></div>
            <div><QLabel>Email de contacto</QLabel><TextInput name="email" type="email" placeholder="tu@email.com" /></div>
          </div>
          <div className="mb-4">
            <QLabel>Rubro / industria</QLabel>
            <Select name="rubro" options={["Seleccioná tu rubro","Comercio / retail","Gastronomía","Salud / estética","Construcción / inmobiliario","Educación / academia","Automotriz","Servicios profesionales","Moda / indumentaria","Tecnología","Agro / campo","Otro"]} />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><QLabel>Ciudad / localidad</QLabel><TextInput name="ciudad" placeholder="Ej: Clorinda, Formosa" /></div>
            <div>
              <QLabel>¿Atendés en Paraguay también?</QLabel>
              <RadioGroup name="paraguay" options={["Sí, clientes paraguayos","No, solo Argentina","Ambos por igual"]} />
            </div>
          </div>
          <div className="mb-4">
            <QLabel>¿Tenés local físico, virtual o ambos?</QLabel>
            <RadioGroup name="local" options={["Solo local físico","Solo online / delivery","Físico + online"]} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><QLabel>Dirección del local (si aplica)</QLabel><TextInput name="direccion" placeholder="Calle, número, ciudad" /></div>
            <div><QLabel>Página web (si tenés)</QLabel><TextInput name="web" placeholder="www.tuempresa.com" /></div>
          </div>
        </section>

        {/* 02 Presencia en redes */}
        <section className="py-10 border-b border-border-soft">
          <SectionHeader num="02" label="Presencia en redes" />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><QLabel>Usuario de Instagram</QLabel><TextInput name="instagram" placeholder="@tuusuario" /></div>
            <div><QLabel>Página de Facebook</QLabel><TextInput name="facebook" placeholder="facebook.com/tupagina" /></div>
          </div>
          <div className="mb-4">
            <QLabel>¿Tenés cuenta de Business Manager / Meta?</QLabel>
            <QHint>La necesitamos para configurar las campañas</QHint>
            <RadioGroup name="business_manager" options={["Sí, y la tengo configurada","Sí, pero no sé cómo funciona","No tengo"]} />
          </div>
          <div className="mb-4">
            <QLabel>¿Tenés Pixel de Meta instalado en tu web?</QLabel>
            <RadioGroup name="pixel" options={["Sí, ya está instalado","No tengo web","No sé / no estoy seguro"]} />
          </div>
          <div className="mb-4">
            <QLabel>¿Hiciste publicidad en Meta Ads antes?</QLabel>
            <RadioGroup name="ads_previos" options={["Sí, con buenos resultados","Sí, pero sin resultados claros","No, es la primera vez"]} />
          </div>
          <div>
            <QLabel>Si publicaste antes, ¿cuánto invertiste mensualmente?</QLabel>
            <QHint>Dejá en blanco si no aplica</QHint>
            <TextInput name="inversion_previa" placeholder="Ej: $30.000 ARS / mes" />
          </div>
        </section>

        {/* 03 Objetivo y campaña */}
        <section className="py-10 border-b border-border-soft">
          <SectionHeader num="03" label="Objetivo y campaña" />
          <div className="mb-4">
            <QLabel>¿Cuál es el objetivo principal de tu publicidad?</QLabel>
            <RadioGroup name="objetivo" options={["Conseguir más consultas / mensajes","Aumentar ventas directas","Generar visitas al local","Crecer en seguidores / visibilidad","Promocionar un evento o lanzamiento","Otro"]} />
          </div>
          <div className="mb-4">
            <QLabel>¿Qué producto o servicio querés promocionar primero?</QLabel>
            <QHint>El que más ventas genera o el que más te urge vender</QHint>
            <TextArea name="producto_principal" placeholder="Ej: servicio de plomería urgente, ropa de temporada, hamburguesas para delivery..." />
          </div>
          <div className="mb-4">
            <QLabel>¿Tenés alguna oferta, promoción o gancho para arrancar?</QLabel>
            <RadioGroup name="tiene_oferta" options={["Sí, ya tengo algo definido","Tengo una idea pero no la definí","No, vendo al precio normal"]} />
          </div>
          <div className="mb-4">
            <QLabel>Describí la oferta (si la tenés)</QLabel>
            <TextArea name="descripcion_oferta" placeholder="Ej: 20% de descuento los fines de semana, envío gratis comprando desde $X..." />
          </div>
          <div className="mb-4">
            <QLabel>¿A dónde querés que vaya la gente cuando haga clic en el anuncio?</QLabel>
            <RadioGroup name="destino_clic" options={["WhatsApp (para consultar)","Web / tienda online","Formulario de contacto","Perfil de Instagram","Llamada telefónica","Lo definimos juntos"]} />
          </div>
          <div className="mb-4">
            <QLabel>Número de WhatsApp para la campaña (si aplica)</QLabel>
            <TextInput name="whatsapp_campana" type="tel" placeholder="+54 3718 000000" />
          </div>
          <div>
            <QLabel>¿Con qué temporada o estacionalidad trabaja tu negocio?</QLabel>
            <QHint>Nos ayuda a planificar picos y bajas</QHint>
            <TextArea name="estacionalidad" placeholder="Ej: mucho movimiento en diciembre, baja en julio..." />
          </div>
        </section>

        {/* 04 Público objetivo */}
        <section className="py-10 border-b border-border-soft">
          <SectionHeader num="04" label="Público objetivo" />
          <div className="mb-4">
            <QLabel>¿Quién es tu cliente ideal?</QLabel>
            <QHint>Pensá en la persona que más compra o te consulta</QHint>
            <TextArea name="cliente_ideal" placeholder="Ej: mujeres de 25 a 45 años, profesionales que buscan practicidad y precio justo..." />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <QLabel>Rango de edad del cliente ideal</QLabel>
              <Select name="rango_edad" options={["13 – 17 años","18 – 24 años","25 – 34 años","35 – 44 años","45 – 54 años","55 – 65 años","Todos los rangos"]} />
            </div>
            <div>
              <QLabel>Género predominante</QLabel>
              <Select name="genero" options={["Principalmente mujeres","Principalmente hombres","Mitad y mitad","No aplica / indistinto"]} />
            </div>
          </div>
          <div className="mb-4">
            <QLabel>Zona geográfica de la campaña</QLabel>
            <QHint>¿A qué ciudades o radios apuntamos?</QHint>
            <TextInput name="zona_geografica" placeholder="Ej: Clorinda, Formosa capital, Alberdi (PY)" />
          </div>
          <div className="mb-4">
            <QLabel>¿Tenés competidores que ya hacen publicidad en redes?</QLabel>
            <RadioGroup name="competencia" options={["Sí, varios","Sí, 1 o 2 que noto","No conozco ninguno"]} />
          </div>
          <div>
            <QLabel>¿Podés nombrar algún competidor o referente del rubro?</QLabel>
            <QHint>Nombre, @usuario o link. No para copiarlos, sino para entender el mercado</QHint>
            <TextArea name="competidores" placeholder="Ej: @ferreteria_tal · instagram.com/ejemplo" />
          </div>
        </section>

        {/* 05 Materiales y visual */}
        <section className="py-10 border-b border-border-soft">
          <SectionHeader num="05" label="Materiales y visual" />
          <div className="mb-4">
            <QLabel>¿Tenés logo en alta calidad?</QLabel>
            <RadioGroup name="logo" options={["Sí, en formato PNG o SVG","Solo en JPG o baja calidad","No tengo logo"]} />
          </div>
          <div className="mb-4">
            <QLabel>¿Tenés fotos o videos del producto/servicio para los anuncios?</QLabel>
            <RadioGroup name="material_visual" options={["Sí, fotos y videos de buena calidad","Solo fotos (no videos)","Tengo pocas y son de baja calidad","No tengo, necesito que lo resuelvan"]} />
          </div>
          <div className="mb-4">
            <QLabel>¿Tenés colores o tipografías definidas de tu marca?</QLabel>
            <RadioGroup name="tiene_branding" options={["Sí, tengo manual o guía de marca","Sí, pero solo los conozco yo (no están escritos)","No tengo nada definido"]} />
          </div>
          <div className="mb-4">
            <QLabel>¿Qué colores representan tu marca? (si los sabés)</QLabel>
            <TextInput name="colores_marca" placeholder="Ej: rojo y blanco, azul oscuro, verde..." />
          </div>
          <div className="mb-4">
            <QLabel>¿Cómo definirías el tono visual de tu marca?</QLabel>
            <QHint>Podés elegir más de uno</QHint>
            <PillGroup name="tono_visual" options={["Elegante / sobrio","Enérgico / llamativo","Amigable / cercano","Profesional / serio","Moderno / minimalista","Económico / accesible","Premium / exclusivo","Tradicional / clásico"]} />
          </div>
          <div>
            <QLabel>¿Hay alguna marca cuyo diseño te guste? (de cualquier rubro)</QLabel>
            <QHint>Para entender qué estética te atrae</QHint>
            <TextInput name="referencia_marca" placeholder="Ej: Nike, alguna tienda local, lo que sea" />
          </div>
        </section>

        {/* 06 Presupuesto publicitario */}
        <section className="py-10 border-b border-border-soft">
          <SectionHeader num="06" label="Presupuesto publicitario" />
          <div className="mb-4">
            <QLabel>¿Cuánto vas a invertir mensualmente en pauta (aparte del servicio)?</QLabel>
            <QHint>Este dinero va directo a Meta/Facebook. Recomendamos desde $45.000 ARS/mes.</QHint>
            <Select name="presupuesto_pauta" options={["$45.000 – $70.000 ARS","$70.000 – $120.000 ARS","$120.000 – $200.000 ARS","Más de $200.000 ARS","Todavía no lo tengo definido"]} />
          </div>
          <div className="mb-4">
            <QLabel>¿Preferís que manejemos el presupuesto nosotros o lo controlás vos?</QLabel>
            <RadioGroup name="control_presupuesto" options={["Lo manejan ustedes, les doy acceso","Lo cargo yo, me guían","No lo tengo claro, definimos juntos"]} />
          </div>
          <div>
            <QLabel>¿Tenés tarjeta o forma de pago cargada en Meta?</QLabel>
            <RadioGroup name="pago_meta" options={["Sí, ya tengo","No, necesito ayuda para configurarlo"]} />
          </div>
        </section>

        {/* 07 Comunicación */}
        <section className="py-10 border-b border-border-soft">
          <SectionHeader num="07" label="Comunicación y proceso" />
          <div className="mb-4">
            <QLabel>¿Por dónde preferís comunicarte con nosotros?</QLabel>
            <RadioGroup name="canal_comunicacion" options={["WhatsApp (mensajes)","Email","Videollamada puntual","WhatsApp + videollamada cuando sea necesario"]} />
          </div>
          <div className="mb-4">
            <QLabel>¿Con qué rapidez solés responder mensajes de trabajo?</QLabel>
            <RadioGroup name="velocidad_respuesta" options={["En el momento, estoy siempre disponible","En el mismo día","En 24-48 horas","Soy irregular, avísenme si hay urgencia"]} />
          </div>
          <div className="mb-4">
            <QLabel>¿Querés revisar y aprobar las piezas antes de que se activen?</QLabel>
            <RadioGroup name="aprobacion_piezas" options={["Sí, quiero ver todo antes","Solo si hay algo importante que validar","Confío en el criterio del estudio"]} />
          </div>
          <div>
            <QLabel>¿Hay algo que definitivamente NO queremos mostrar en los anuncios?</QLabel>
            <QHint>Precios que no querés publicar, stock limitado, temas sensibles, etc.</QHint>
            <TextArea name="restricciones" placeholder="Ej: no mostrar precios, no mencionar competencia..." />
          </div>
        </section>

        {/* 08 Contexto final */}
        <section className="py-10">
          <SectionHeader num="08" label="Contexto final" />
          <div className="mb-4">
            <QLabel>¿Por qué decidiste contratar gestión de publicidad en este momento?</QLabel>
            <QHint>Nos ayuda a entender tu motivación real</QHint>
            <TextArea name="motivacion" placeholder="Ej: quiero crecer antes del verano, un local nuevo abrió cerca, no tengo tiempo..." />
          </div>
          <div className="mb-4">
            <QLabel>¿Qué resultado concreto esperás en los primeros 30 días?</QLabel>
            <TextArea name="expectativas_30dias" placeholder="Ej: conseguir 10 consultas nuevas por semana, llenar el local los fines de semana..." />
          </div>
          <div className="mb-4">
            <QLabel>¿Hubo algo que te frenó antes de contratar este servicio?</QLabel>
            <QHint>Opcional. Tu honestidad nos ayuda a mejorar.</QHint>
            <TextArea name="freno_previo" placeholder="Ej: el precio me parecía alto, no sabía si funcionaría para mi rubro..." />
          </div>
          <div>
            <QLabel>¿Hay algo más que quieras contarnos sobre tu negocio?</QLabel>
            <TextArea name="notas_adicionales" placeholder="Lo que quieras que sepamos antes de arrancar..." />
          </div>
        </section>

        {/* Submit */}
        <div className="text-center pt-4">
          <p className="text-[12px] text-muted mb-5">Una vez que enviés, te contactamos en menos de 24 horas para coordinar el arranque.</p>
          {status === "error" && (
            <p className="text-[12px] text-red-400 mb-4">Hubo un error al enviar. Verificá tu conexión e intentá de nuevo.</p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2.5 bg-gold text-ink font-sans font-semibold text-[12px] tracking-brand uppercase px-9 py-4 rounded hover:bg-gold-deep transition-colors disabled:opacity-50"
          >
            {status === "sending" ? (
              <>Enviando...</>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Enviar formulario
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
