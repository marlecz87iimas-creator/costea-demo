import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DemoProvider } from './data/store';
import Layout from './components/Layout';
import MenuPage from './pages/MenuPage';
import CitasPage from './pages/CitasPage';
import PagosPage from './pages/PagosPage';
import ProyectosPage from './pages/ProyectosPage';
import CotizacionesPage from './pages/CotizacionesPage';
import InventarioPage from './pages/InventarioPage';

export default function App() {
  return (
    <DemoProvider>
      <BrowserRouter basename="/costea-demo">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<MenuPage />} />
            <Route path="citas" element={<CitasPage />} />
            <Route path="pagos" element={<PagosPage />} />
            <Route path="proyectos" element={<ProyectosPage />} />
            <Route path="cotizaciones" element={<CotizacionesPage />} />
            <Route path="inventario" element={<InventarioPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </DemoProvider>
  );
}
