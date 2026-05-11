import { useState } from "react";
import { useRegion } from "../context/RegionContext";
import { REGIONS } from "../data/regions";
import { useNavigate } from "react-router-dom";

export default function RegionSwitcher({ inverted = false }) {
  const { region, setRegion } = useRegion();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const choose = (code) => {
    setRegion(code);
    setOpen(false);
    navigate(code === "ar" ? "/ar" : code === "py" ? "/py" : "/global");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="font-sans uppercase flex items-center gap-2 text-muted hover:text-cream transition"
        style={{ fontSize: "10px", letterSpacing: "0.18em" }}
        aria-label="Cambiar región"
      >
        <span>{region.flag}</span>
        <span>{region.name}</span>
        <span className="text-[8px] opacity-50">▼</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-3 min-w-[180px] border border-border-soft bg-graphite shadow-2xl z-50">
          {Object.values(REGIONS).map((r) => (
            <button
              key={r.code}
              onClick={() => choose(r.code)}
              className={`w-full text-left px-4 py-3 font-sans uppercase flex items-center gap-3 transition ${r.code === region.code ? "text-gold bg-cream/5" : "text-muted hover:text-cream"}`}
              style={{ fontSize: "10px", letterSpacing: "0.18em" }}
            >
              <span>{r.flag}</span>
              <span>{r.name}</span>
              {r.code === region.code && <span className="ml-auto text-gold">●</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
