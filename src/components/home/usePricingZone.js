import { useState } from "react";
import { useRegion } from "../../context/RegionContext";
import { zonas } from "../../data/home";

const STORAGE_KEY = "gaudian_zona_precios";

// Zona sugerida a partir de la región detectada (país + provincia de ipapi).
function zonaSugerida(region, detected) {
  if (region.code === "py") return "paraguay";
  if (region.code === "global") return "mundo";
  const provincia = (detected?.province || "").toLowerCase();
  return provincia.includes("formosa") ? "formosa" : "argentina";
}

function leerGuardada() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return zonas.some((z) => z.id === v) ? v : null;
  } catch {
    return null;
  }
}

/** Zona de precios activa. La elección manual del visitante gana sobre la detección. */
export default function usePricingZone() {
  const { region, detected } = useRegion();
  const [elegida, setElegida] = useState(leerGuardada);
  const sugerida = zonaSugerida(region, detected);

  const elegir = (id) => {
    setElegida(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // Sin almacenamiento: la elección vale solo para esta visita.
    }
  };

  const id = elegida || sugerida;
  return { zona: zonas.find((z) => z.id === id) || zonas[1], elegir };
}
