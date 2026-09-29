import { NavLink, Outlet } from 'react-router-dom';
import CosteaLogo from './CosteaLogo';
import { DEMO_LIMIT, useDemo } from '../data/store';

const NAV = [
  { to: '/', label: 'Inicio', emoji: '🏠' },
  { to: '/citas', label: 'Citas', emoji: '📅' },
  { to: '/pagos', label: 'Pagos', emoji: '💵' },
  { to: '/proyectos', label: 'Proyectos', emoji: '📁' },
  { to: '/cotizaciones', label: 'Cotizaciones', emoji: '📋' },
  { to: '/inventario', label: 'Inventario', emoji: '📦' },
] as const;

export default function Layout() {
  const { reset } = useDemo();

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <CosteaLogo variant="full" className="costea-sidebar-logo" />
          <div className="brand-sub"><strong>Modo demo</strong></div>
          <div className="sync-pill warn">Solo visual · máx. {DEMO_LIMIT} por sección</div>
        </div>
        <nav>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              <span className="nav-emoji">{item.emoji}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ width: '100%' }}
            onClick={() => {
              reset();
              window.location.assign(`${import.meta.env.BASE_URL}`);
            }}
          >
            Reiniciar demo
          </button>
        </div>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
