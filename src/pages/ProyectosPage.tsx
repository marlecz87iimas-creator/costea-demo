import DemoSection from '../components/DemoSection';

export default function ProyectosPage() {
  return (
    <DemoSection
      kind="proyectos"
      title="Proyectos"
      emoji="📁"
      hint="Tarjetas de proyecto (sin cálculo de costos)."
      createLabel="Nuevo proyecto"
      placeholder="Ej. Vestido de novia"
    />
  );
}
