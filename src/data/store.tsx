import { createContext, useContext, useState, type ReactNode } from 'react';

export const DEMO_LIMIT = 2;

export type DemoKind = 'citas' | 'pagos' | 'proyectos' | 'cotizaciones';

export interface DemoItem {
  id: string;
  title: string;
  subtitle: string;
}

interface DemoStore {
  citas: DemoItem[];
  pagos: DemoItem[];
  proyectos: DemoItem[];
  cotizaciones: DemoItem[];
  canAdd: (kind: DemoKind) => boolean;
  add: (kind: DemoKind, title: string) => boolean;
  remove: (kind: DemoKind, id: string) => void;
  reset: () => void;
}

const DemoContext = createContext<DemoStore | null>(null);

function id() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

const EMPTY = {
  citas: [] as DemoItem[],
  pagos: [] as DemoItem[],
  proyectos: [] as DemoItem[],
  cotizaciones: [] as DemoItem[],
};

export function DemoProvider({ children }: { children: ReactNode }) {
  const [citas, setCitas] = useState<DemoItem[]>([]);
  const [pagos, setPagos] = useState<DemoItem[]>([]);
  const [proyectos, setProyectos] = useState<DemoItem[]>([]);
  const [cotizaciones, setCotizaciones] = useState<DemoItem[]>([]);

  const lists = { citas, pagos, proyectos, cotizaciones };
  const setters = {
    citas: setCitas,
    pagos: setPagos,
    proyectos: setProyectos,
    cotizaciones: setCotizaciones,
  };

  const canAdd = (kind: DemoKind) => lists[kind].length < DEMO_LIMIT;

  const add = (kind: DemoKind, title: string) => {
    if (!canAdd(kind)) return false;
    const name = title.trim() || 'Sin nombre';
    const item: DemoItem = {
      id: id(),
      title: name,
      subtitle: 'Solo visual · se borra al cerrar',
    };
    setters[kind]((prev) => [item, ...prev]);
    return true;
  };

  const remove = (kind: DemoKind, itemId: string) => {
    setters[kind]((prev) => prev.filter((x) => x.id !== itemId));
  };

  const reset = () => {
    setCitas(EMPTY.citas);
    setPagos(EMPTY.pagos);
    setProyectos(EMPTY.proyectos);
    setCotizaciones(EMPTY.cotizaciones);
  };

  return (
    <DemoContext.Provider value={{ citas, pagos, proyectos, cotizaciones, canAdd, add, remove, reset }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error('useDemo debe usarse dentro de DemoProvider');
  return ctx;
}
