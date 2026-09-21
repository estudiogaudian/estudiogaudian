// Contenedores sin animación de entrada: en el home el contenido se ve de entrada.
// Los únicos momentos animados son las tarjetas del hero y la tubería.
export function Reveal({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
export function RevealStagger({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
export function RevealItem({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
export default Reveal;
