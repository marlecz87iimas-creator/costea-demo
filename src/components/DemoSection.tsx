import { useState } from 'react';
import Modal from './Modal';
import { DEMO_LIMIT, useDemo, type DemoKind } from '../data/store';

interface SectionProps {
  kind: DemoKind;
  title: string;
  emoji: string;
  hint: string;
  createLabel: string;
  placeholder: string;
}

export default function DemoSection({
  kind, title, emoji, hint, createLabel, placeholder,
}: SectionProps) {
  const demo = useDemo();
  const items = demo[kind];
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const atLimit = !demo.canAdd(kind);

  const create = () => {
    if (!demo.add(kind, name)) {
      window.alert(`Demo: máximo ${DEMO_LIMIT} ${title.toLowerCase()}.`);
      return;
    }
    setOpen(false);
    setName('');
  };

  return (
    <>
      <div className="page-header">
        <div>
          <h1>{title}</h1>
          <p>{hint}</p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          disabled={atLimit}
          onClick={() => setOpen(true)}
        >
          + {createLabel}
        </button>
      </div>

      <div className={`alert ${atLimit ? 'alert-error' : 'alert-info'}`} style={{ marginBottom: '1rem' }}>
        {atLimit
          ? `Máximo ${DEMO_LIMIT}. Elimina uno para crear otro. Nada se guarda.`
          : `Puedes crear ${DEMO_LIMIT - items.length} más (máx. ${DEMO_LIMIT}). Solo visual.`}
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <span>{emoji}</span>
          <h2>Sin {title.toLowerCase()}</h2>
          <p>Crea uno para ver cómo se ve la tarjeta.</p>
        </div>
      ) : (
        <div className="card-grid">
          {items.map((item) => (
            <div key={item.id} className="work-card">
              <div className="work-card-title">{item.title}</div>
              <div className="work-card-meta">{item.subtitle}</div>
              <div className="work-card-actions">
                <button type="button" className="btn btn-secondary btn-sm" disabled>
                  Abrir
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => demo.remove(kind, item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal
        open={open}
        title={createLabel}
        onClose={() => setOpen(false)}
        footer={(
          <>
            <button type="button" className="btn btn-secondary" onClick={() => setOpen(false)}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={create} disabled={!name.trim()}>
              Crear
            </button>
          </>
        )}
      >
        <div className="form-field">
          <label>Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={placeholder}
            autoFocus
          />
        </div>
      </Modal>
    </>
  );
}
