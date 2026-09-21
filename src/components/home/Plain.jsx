// Contenedores sin animación de entrada: en el home el contenido se ve de entrada.
// Los únicos momentos animados son la conversación del hero, la tubería,
// el registro de la fuga y el recorrido del diagrama.
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
