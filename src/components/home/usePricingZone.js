import { useRegion } from "../../context/RegionContext";
import { zonas } from "../../data/home";

// Zona a partir de la IP (país + provincia de ipapi). Si la detección falla, usa la región de la ruta.
function zonaDetectada(region, detected) {
  const pais = detected?.countryCode || (region.code === "py" ? "PY" : region.code === "global" ? "" : "AR");
  if (pais === "PY") return "paraguay";
  if (pais !== "AR") return "mundo";
  const provincia = (detected?.province || "").toLowerCase();
  return provincia.includes("formosa") ? "formosa" : "argentina";
}

// Vista previa interna: ?zona=formosa|argentina|paraguay|mundo. No hay ningún enlace visible a esto.
function zonaDeUrl() {
  try {
    const v = new URLSearchParams(window.location.search).get("zona");
    return zonas.some((z) => z.id === v) ? v : null;
  } catch {
    return null;
  }
}

/**
 * Zona de precios del visitante, resuelta solo por IP.
 * `listo` es false mientras se detecta, para no mostrar un precio que después cambia.
 */
export default function usePricingZone() {
  const { region, detected, detecting } = useRegion();
  const forzada = zonaDeUrl();
  const id = forzada || zonaDetectada(region, detected);
  return {
    zona: zonas.find((z) => z.id === id) || zonas[1],
    listo: Boolean(forzada) || !detecting,
  };
}
