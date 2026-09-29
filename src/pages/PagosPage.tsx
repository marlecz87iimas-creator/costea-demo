import DemoSection from '../components/DemoSection';

export default function PagosPage() {
  return (
    <DemoSection
      kind="pagos"
      title="Pagos"
      emoji="💵"
      hint="Listado de pagos de ejemplo."
      createLabel="Nuevo pago"
      placeholder="Ej. Abono vestido"
    />
  );
}
