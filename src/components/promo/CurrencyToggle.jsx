// Toggle de moneda con default detectado por IP / región global.
import { useRegion } from "../../context/RegionContext";

const OPTIONS = [
  { code: "ars", flag: "🇦🇷", label: "ARS" },
  { code: "pyg", flag: "🇵🇾", label: "PYG" },
  { code: "usd", flag: "🌎", label: "USD" },
];

export default function CurrencyToggle({ value, onChange }) {
  const { region } = useRegion();
  return (
    <div className="inline-flex border border-border-soft">
      {OPTIONS.map((o) => {
        const active = value === o.code;
        return (
          <button
            key={o.code}
            onClick={() => onChange(o.code)}
            className={`flex items-center gap-2 px-4 py-2.5 font-sans uppercase transition-colors border-r border-border-soft last:border-r-0 ${
              active ? "bg-cream text-ink" : "text-muted hover:text-cream"
            }`}
            style={{ fontSize: "10px", letterSpacing: "0.18em", fontWeight: active ? 500 : 400 }}
          >
            <span>{o.flag}</span>
            <span>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// Mapea la región a la moneda inicial.
export function defaultCurrencyForRegion(regionCode) {
  if (regionCode === "ar") return "ars";
  if (regionCode === "py") return "pyg";
  return "usd";
}
