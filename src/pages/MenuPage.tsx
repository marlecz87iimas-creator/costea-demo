import { Link } from 'react-router-dom';
import { DEMO_LIMIT, useDemo } from '../data/store';

const MENU = [
  { to: '/citas', label: 'Citas', emoji: '📅', hint: 'Agenda y horarios', accent: '#7C3AED' },
  { to: '/pagos', label: 'Pagos', emoji: '💵', hint: 'Abonos y liquidaciones', accent: '#059669' },
  { to: '/proyectos', label: 'Proyectos', emoji: '📁', hint: 'Costos y producción', accent: '#9333EA' },
  { to: '/cotizaciones', label: 'Cotizaciones', emoji: '📋', hint: 'Presupuestos', accent: '#DB2777' },
  { to: '/inventario', label: 'Inventario', emoji: '📦', hint: 'Vista de stock (ejemplo)', accent: '#6366F1' },
] as const;

export default function MenuPage() {
  const { citas, pagos, proyectos, cotizaciones } = useDemo();

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Hola, Demo</h1>
          <p>
            Recorrido visual de Costea. Sin cuenta, sin API y sin guardar datos.
            Máximo {DEMO_LIMIT} ítems por sección.
          </p>
          <div className="sync-pill warn" style={{ marginTop: '0.5rem' }}>
            Demo visual · los datos se pierden al cerrar
          </div>
        </div>
      </div>

      <div className="alert alert-info" style={{ marginBottom: '1rem' }}>
        Esta demo solo muestra pantallas. No calcula costos ni se conecta a Hildra o Stockea.
      </div>

      <div className="stats-row">
        <div className="stat-card"><div className="label">Citas</div><div className="value">{citas.length}/{DEMO_LIMIT}</div></div>
        <div className="stat-card"><div className="label">Pagos</div><div className="value">{pagos.length}/{DEMO_LIMIT}</div></div>
        <div className="stat-card"><div className="label">Proyectos</div><div className="value">{proyectos.length}/{DEMO_LIMIT}</div></div>
        <div className="stat-card"><div className="label">Cotizaciones</div><div className="value">{cotizaciones.length}/{DEMO_LIMIT}</div></div>
      </div>

      <div className="menu-grid">
        {MENU.map((item) => (
          <Link key={item.to} to={item.to} className="menu-card">
            <div className="menu-card-icon" style={{ background: `${item.accent}18` }}>
              <span>{item.emoji}</span>
            </div>
            <h3 style={{ color: item.accent }}>{item.label}</h3>
            <p>{item.hint}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
