// Contenedores sin animación de entrada: en el home el contenido se ve de entrada.
// Los únicos momentos animados son el reporte del hero, la tubería,
// la tabla comparativa y el recorrido del diagrama.
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
