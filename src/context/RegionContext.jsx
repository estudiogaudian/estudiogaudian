import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { REGIONS, pickRegion, regionFromCountryCode } from "../data/regions";

const RegionContext = createContext({
  region: REGIONS.ar,
  setRegion: () => {},
  detected: null,
  loading: true,
});

const STORAGE_KEY = "gaudian_region";

export function RegionProvider({ children, fixed }) {
  // si la ruta fija una región (ej. /py), respetarla
  const initial = fixed ? pickRegion(fixed) : null;

  const [region, setRegionState] = useState(
    initial || (() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return pickRegion(saved);
      } catch {}
      return REGIONS.ar;
    })
  );
  const [detected, setDetected] = useState(null);
  const [loading, setLoading] = useState(!initial);

  useEffect(() => {
    if (fixed) {
      setRegionState(pickRegion(fixed));
      setLoading(false);
      return;
    }
    let abort = false;
    const run = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/", {
          signal: AbortSignal.timeout(5000),
        });
        const data = await res.json();
        if (abort) return;
        const cc = (data.country_code || "").toUpperCase();
        const r = regionFromCountryCode(cc);
        setDetected({ countryCode: cc, city: data.city, country: data.country_name });
        // Solo cambiar si el usuario no eligió manualmente otra
        const saved = (() => {
          try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
        })();
        if (!saved) setRegionState(r);
      } catch {
        // fallback silencioso → AR
      } finally {
        if (!abort) setLoading(false);
      }
    };
    run();
    return () => { abort = true; };
  }, [fixed]);

  const setRegion = (code) => {
    const r = pickRegion(code);
    setRegionState(r);
    try { localStorage.setItem(STORAGE_KEY, r.code); } catch {}
  };

  const value = useMemo(
    () => ({ region, setRegion, detected, loading }),
    [region, detected, loading]
  );

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
}

export const useRegion = () => useContext(RegionContext);
