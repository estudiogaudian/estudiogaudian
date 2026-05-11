export default function Logo({ className = "h-7 w-auto", invert = false }) {
  return (
    <img
      src="/logo.png"
      alt="GAUDIAN — Estudio boutique de comunicación"
      className={`${className} ${invert ? "invert brightness-0" : ""}`}
      width="320"
      height="56"
      loading="eager"
      decoding="async"
    />
  );
}
