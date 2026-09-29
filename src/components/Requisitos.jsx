import React, { useState } from 'react';
import './Requisitos.css';

const requisitos = [
  {
    id: 'hoja-vida',
    icon: '📋',
    color: '#0057B8',
    title: 'Hoja de Vida (DO-F 036)',
    subtitle: 'Requisito habilitante inicial obligatorio',
    badge: 'Excluyente',
    badgeColor: 'danger',
    content: [
      {
        tipo: 'info',
        texto: 'Diligenciar en su totalidad la Solicitud de Movimiento de Hoja de Vida (Formato DO-F 036).'
      },
      {
        tipo: 'warning',
        texto: 'Es obligatorio obtener la firma digital del Decano de su respectiva facultad antes de radicar la solicitud.'
      },
      {
        tipo: 'info',
        texto: 'Adjuntar la autorización de notificación electrónica (Código DE-F-068), indicando el correo institucional.'
      },
      {
        tipo: 'danger',
        texto: 'Sin este soporte debidamente firmado, la postulación no podrá ser procesada ni continuará en el proceso del CAP.'
      },
    ]
  },
  {
    id: 'experiencia',
    icon: '🎓',
    color: '#1A7A4A',
    title: 'Experiencia Docente',
    subtitle: 'Requisitos de permanencia institucional',
    badge: 'Acuerdo 09/2025',
    badgeColor: 'primary',
    content: [
      { tipo: 'check', texto: 'Evaluación de desempeño satisfactoria en la UNIAJC.' },
      { tipo: 'check', texto: 'Tiempo de permanencia en la categoría del escalafón requerida.' },
      { tipo: 'check', texto: 'Experiencia laboral como profesor(a) universitario(a) en una IES.' },
      { tipo: 'check', texto: 'Certificación de experiencia expedida por Gestión Humana con antigüedad no superior a 1 año.' },
    ],
    extra: {
      titulo: 'La certificación de experiencia debe contener:',
      items: [
        'Fecha de ingreso',
        'Tipo de vinculación (tiempo completo, medio tiempo o hora cátedra)',
        'Tiempo de vinculación',
        'Unidad académica de adscripción',
        'Cargo desempeñado',
        'Asignación académica por semestre (número de horas durante todo el período)',
      ]
    }
  },
  {
    id: 'idioma',
    icon: '🌐',
    color: '#7B61FF',
    title: 'Segundo Idioma',
    subtitle: 'Certificación avalada por el MEN',
    badge: 'Resolución 018035/2021',
    badgeColor: 'purple',
    content: [
      { tipo: 'check', texto: 'Examen avalado por el Ministerio de Educación Nacional (MEN).' },
      { tipo: 'check', texto: 'Certificación de propósito general que acredite mínimo 2 habilidades lingüísticas.' },
      { tipo: 'check', texto: 'El examen debe ser mínimo de Tipo EGP (propósito general).' },
    ],
    tabla: {
      headers: ['Casa Evaluadora', 'Examen', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
      rows: [
        ['Berlitz', 'Berlitz Online', '20-39', '40-59', '60-74', '75-89', '90-100', '—'],
        ['CaMLA', 'MET', '—', '< 39', '40-52', '53-63', '64+', '—'],
        ['CaMLA', 'MTELP', '0-35', '36-42', '43-55', '56-64', '65+', '—'],
        ['ETS', 'TOEFL ITP', '—', '337', '460', '543', '627', '—'],
        ['ETS', 'TOEIC', '—', '246-380', '381-540', '541-700', '701-910', '910+'],
        ['British Council', 'APTIS General', '0-10', '11-20', '21-30', '31-40', '41-50', '—'],
        ['British Council', 'APTIS for Teachers', '0-10', '11-20', '21-30', '31-40', '41-50', '—'],
      ]
    }
  },
  {
    id: 'titular',
    icon: '🏆',
    color: '#C0392B',
    title: 'Categoría Profesor Titular',
    subtitle: 'Requisito especial para la máxima categoría',
    badge: 'Acuerdo 09/2025',
    badgeColor: 'danger',
    content: [
      {
        tipo: 'subtitulo',
        texto: 'a) Primera vez en la categoría (D1 o D):'
      },
      {
        tipo: 'info',
        texto: 'Presentar un producto de investigación evaluado por pares externos registrados en MinCiencias, que otorgue crédito institucional a la UNIAJC.'
      },
      {
        tipo: 'info',
        texto: 'Adjuntar Informe Final del Proyecto de Investigación en etapa de culminación, avalado por la Decanatura de Investigaciones (Instructivo IN-I-003) con su acta de cierre.'
      },
      {
        tipo: 'subtitulo',
        texto: 'b) Exención por cumplimiento previo (Movilidad al Subnivel D2):'
      },
      {
        tipo: 'success',
        texto: 'Si ya sustentó y aprobó el producto en una convocatoria anterior, no necesita presentarlo de nuevo. Informe en su radicación el nombre del producto y el año de aprobación.'
      },
    ]
  },
];

const badgeColors = {
  danger: { bg: '#FDECEA', color: '#C0392B', border: '#F5C6C2' },
  primary: { bg: '#E3F2FD', color: '#0057B8', border: '#BBDEFB' },
  purple: { bg: '#F3E8FF', color: '#7B61FF', border: '#DDD6FE' },
};

const tipoColors = {
  check: { icon: '✓', bg: '#E8F5E9', color: '#1A7A4A', border: '#A5D6A7' },
  info: { icon: 'ℹ', bg: '#E3F2FD', color: '#0057B8', border: '#90CAF9' },
  warning: { icon: '⚠', bg: '#FFF8E1', color: '#F57F17', border: '#FFD54F' },
  danger: { icon: '✕', bg: '#FDECEA', color: '#C0392B', border: '#F5C6C2' },
  success: { icon: '✓', bg: '#E8F5E9', color: '#1A7A4A', border: '#A5D6A7' },
  subtitulo: null,
};

export default function Requisitos() {
  const [open, setOpen] = useState(null);

  return (
    <section id="requisitos" className="section req-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">📋 Requisitos Habilitantes</div>
          <h2 className="section-title">¿Qué debo cumplir antes de iniciar?</h2>
          <p className="section-subtitle">
            Todos los requisitos son de carácter obligatorio. Verifique su cumplimiento antes de postularse.
          </p>
        </div>

        <div className="req-grid">
          {requisitos.map((req) => (
            <div key={req.id} className={`req-card ${open === req.id ? 'open' : ''}`}>
              <button className="req-header" onClick={() => setOpen(open === req.id ? null : req.id)}>
                <div className="req-icon" style={{ background: `${req.color}15`, color: req.color }}>
                  {req.icon}
                </div>
                <div className="req-info">
                  <div className="req-badge-row">
                    <span className="req-badge" style={badgeColors[req.badgeColor]}>
                      {req.badge}
                    </span>
                  </div>
                  <h3 className="req-title">{req.title}</h3>
                  <p className="req-subtitle">{req.subtitle}</p>
                </div>
                <div className="req-arrow" style={{ color: req.color }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points={open === req.id ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
                  </svg>
                </div>
              </button>

              {open === req.id && (
                <div className="req-body">
                  <div className="req-items">
                    {req.content.map((c, i) => {
                      if (c.tipo === 'subtitulo') {
                        return <p key={i} className="req-subtitulo">{c.texto}</p>;
                      }
                      const t = tipoColors[c.tipo];
                      return (
                        <div key={i} className="req-item"
                          style={{ background: t.bg, borderColor: t.border, color: t.color }}>
                          <span className="req-item-icon">{t.icon}</span>
                          <span>{c.texto}</span>
                        </div>
                      );
                    })}
                  </div>

                  {req.extra && (
                    <div className="req-extra">
                      <p className="req-extra-title">{req.extra.titulo}</p>
                      <ul>
                        {req.extra.items.map((it, i) => (
                          <li key={i}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {req.tabla && (
                    <div className="req-tabla-wrap">
                      <p className="req-extra-title" style={{marginBottom: 10}}>Puntajes mínimos requeridos (Ejemplo: Inglés)</p>
                      <div style={{overflowX:'auto'}}>
                        <table className="req-tabla">
                          <thead>
                            <tr>{req.tabla.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
                          </thead>
                          <tbody>
                            {req.tabla.rows.map((row, i) => (
                              <tr key={i}>
                                {row.map((cell, j) => <td key={j}>{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p style={{fontSize:11,color:'var(--gray-600)',marginTop:8}}>
                        * Fuente: Resolución 018035 del 21 de septiembre de 2021, pág. 2
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
