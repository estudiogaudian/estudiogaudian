import { useEffect } from "react";

export default function SEOHead({ title, description, canonical, region }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
      }
      m.setAttribute("content", description);
    }
    if (canonical) {
      let c = document.querySelector('link[rel="canonical"]');
      if (!c) {
        c = document.createElement("link");
        c.setAttribute("rel", "canonical");
        document.head.appendChild(c);
      }
      c.setAttribute("href", canonical);
    }
    if (region) {
      document.documentElement.setAttribute("lang", region.locale || "es-AR");
    }
  }, [title, description, canonical, region]);
  return null;
}
