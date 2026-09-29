# COSTEA Demo

Demo **solo visual** del portal Costea. Igual que `demo_stockea`: sin backend.

- Sin login
- Sin API / Hildra / Stockea
- Sin cálculo de costos ni lógica de negocio
- Máximo 2 ítems por sección (citas, pagos, proyectos, cotizaciones)
- Los datos viven en memoria y se pierden al cerrar o recargar

## Inicio

```bash
npm install
npm run dev
```

Abre http://localhost:5176/costea-demo/

En producción la ruta es `/costea-demo` (ej. https://costea-demo-production.up.railway.app/costea-demo).
