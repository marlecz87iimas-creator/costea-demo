const SAMPLE = [
  { sku: 'TEL-001', name: 'Tela satín', category: 'Telas', qty: '25 m', status: 'OK' },
  { sku: 'FLO-010', name: 'Pétalos eternas', category: 'Flores', qty: '120 pza', status: 'OK' },
  { sku: 'CRO-005', name: 'Hilo crochet', category: 'Crochet', qty: '8 ovillos', status: 'Bajo' },
];

export default function InventarioPage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1>Inventario</h1>
          <p>Tabla de ejemplo. No hay conexión a Stockea.</p>
        </div>
      </div>

      <div className="alert alert-info" style={{ marginBottom: '1rem' }}>
        Datos fijos de demostración. Los movimientos no están disponibles en esta demo.
      </div>

      <div className="stats-row">
        <div className="stat-card"><div className="label">Productos</div><div className="value">3</div></div>
        <div className="stat-card"><div className="label">Bajo stock</div><div className="value" style={{ color: 'var(--warning)' }}>1</div></div>
      </div>

      <div className="panel">
        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Stock</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE.map((row) => (
                <tr key={row.sku}>
                  <td><code>{row.sku}</code></td>
                  <td><strong>{row.name}</strong></td>
                  <td>{row.category}</td>
                  <td>{row.qty}</td>
                  <td>
                    <span className={`badge ${row.status === 'Bajo' ? 'badge-warning' : 'badge-success'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
