import DemoSection from '../components/DemoSection';

export default function CotizacionesPage() {
  return (
    <DemoSection
      kind="cotizaciones"
      title="Cotizaciones"
      emoji="📋"
      hint="Presupuestos de ejemplo."
      createLabel="Nueva cotización"
      placeholder="Ej. Ramo eterno"
    />
  );
}
