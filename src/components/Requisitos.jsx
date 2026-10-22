import React, { useState } from 'react';
import './Requisitos.css';

const requisitos = [
  {
    id: 'hoja-vida',
    icon: '📋',
    color: '#0057B8',
    title: 'Hoja de Vida (Formato DO-F 036)',
    subtitle: 'Requisito habilitante inicial obligatorio',
    badge: 'Excluyente',
    badgeColor: 'danger',
    content: [
      {
        tipo: 'info',
        texto: 'Como condición indispensable y excluyente para iniciar el proceso, el profesor debe diligenciar en su totalidad la Solicitud de Movimiento de Hoja de Vida (Formato DO-F 036).'
      },
      {
        tipo: 'warning',
        texto: 'Es obligatorio obtener la firma digital del Decano de su respectiva facultad antes de radicar la solicitud.'
      },
      {
        tipo: 'info',
        texto: 'Adicionalmente, se debe diligenciar y adjuntar la autorización de notificación electrónica (Código DE-F-068), indicando como correo en el que recibirá notificaciones, el correo institucional @profesores.'
      },
      {
        tipo: 'danger',
        texto: 'Restricción del sistema: Sin este soporte debidamente firmado, la postulación no podrá ser procesada ni continuará en el proceso del Comité de Asignación de Puntaje.'
      },
    ]
  },
  {
    id: 'experiencia',
    icon: '🎓',
    color: '#1A7A4A',
    title: 'Experiencia Docente y Permanencia Institucional',
    subtitle: 'Requisitos de experiencia profesoral y permanencia en el escalafón',
    badge: 'Acuerdo 09/2025',
    badgeColor: 'primary',
    content: [
      { tipo: 'check', texto: 'Evaluación de desempeño satisfactoria en la UNIAJC, contemplado en el formato DO-F-036.' },
      { tipo: 'check', texto: 'Tiempo de permanencia en la categoría del escalafón requerida para el estudio del ascenso o cambio de nivel salarial, contemplado en el Acuerdo 09 de 2025.' },
      { tipo: 'check', texto: 'Experiencia laboral como profesor(a) universitario(a) en una Institución de Educación Superior (IES).' },
      { tipo: 'check', texto: 'Vigencia de certificaciones: La certificación de experiencia laboral docente deberá haber sido expedida por Gestión Humana con una antigüedad no superior a un (1) año a la fecha de cierre de la convocatoria.' },
      { tipo: 'info', texto: 'Fecha de corte: el 30 de junio de 2026 se establece como la fecha oficial de cierre para la contabilización del tiempo de experiencia docente.' },
    ],
    extra: {
      titulo: 'La certificación de experiencia laboral docente emitida por Gestión Humana deberá contener, como mínimo, los siguientes datos:',
      items: [
        'Fecha de ingreso.',
        'Tipo de vinculación (tiempo completo, medio tiempo o hora cátedra).',
        'Tiempo de vinculación.',
        'Unidad académica de adscripción.',
        'Cargo desempeñado.',
        'Asignación académica por semestre, indicando el número de horas correspondientes durante todo el período certificado.',
      ]
    }
  },
  {
    id: 'idioma',
    icon: '🌐',
    color: '#7B61FF',
    title: 'Requisito Habilitante de Segundo Idioma',
    subtitle: 'Certificación avalada por el Ministerio de Educación Nacional (MEN)',
    badge: 'Resolución 018035/2021',
    badgeColor: 'purple',
    content: [
      { tipo: 'check', texto: 'Para dar cumplimiento al requisito de segunda lengua previsto en el Acuerdo No. 09 de 2025, el examen presentado por el profesor deberá estar avalado por el Ministerio de Educación Nacional (MEN) conforme a la Resolución No. 018035 del 21 de septiembre de 2021 (o la norma que la modifique, sustituya o derogue).' },
      { tipo: 'check', texto: 'Se aceptarán certificaciones de propósito general que acrediten, como mínimo, dos (2) habilidades lingüísticas entre las evaluadas por el examen correspondiente (reading, listening, speaking, writing).' },
      { tipo: 'check', texto: 'El examen por presentar debe ser como mínimo de Tipo EGP (propósito general).' },
    ],
    tabla: {
      headers: [
        'Formato',
        'Tipo',
        'Casa Evaluadora',
        'Examen',
        'Sin Escala',
        'ALTE Nivel 1 (A1)',
        'ALTE Nivel 1 (A2)',
        'ALTE Nivel 2 (B1)',
        'ALTE Nivel 3 (B2)',
        'ALTE Nivel 4 (C1)',
        'ALTE Nivel 5 (C2)'
      ],
      rows: [
        ['EGP', 'Prof', 'Berlitz', 'Berlitz Online Proficiency Test', '—', '80 - 223', '20-39', '40-59', '60-74', '75- 89', '90-100'],
        ['EGP', 'Prof', 'CaMLA', 'MET - Michigan English Test', '—', '—', '< 39', '40-52', '53-63', '64 <', '—'],
        ['EGP', 'Prof', 'CaMLA', 'MTELP - Michigan Test of English Language Proficiency', '—', '0-35', '36 - 42', '43-55', '56-64', '65 <', '—'],
        ['EGP', 'Prof', 'ETS', 'TOEFL ITP', '—', '—', '337', '460', '543', '627', '—'],
        ['EGP', 'Prof', 'ETS', 'TOEIC', '—', '—', '246 - 380', '381 - 540', '541 - 700', '701-910', '910+'],
        ['EGP', 'Prof', 'British Council', 'APTIS General', '—', '0-10', '11-20', '21- 30', '31- 40', '41- 50', '—'],
        ['EGP', 'Prof', 'British Council', 'APTIS for Teachers', '—', '0-10', '11-20', '21- 30', '31- 40', '41- 50', '—'],
      ]
    }
  },
  {
    id: 'titular',
    icon: '🏆',
    color: '#C0392B',
    title: 'Requisito Especial para la Categoría de Profesor Titular',
    subtitle: 'Condiciones documentales específicas para el ascenso a la máxima categoría',
    badge: 'Acuerdo 09/2025',
    badgeColor: 'danger',
    content: [
      {
        tipo: 'subtitulo',
        texto: 'a) Para aspirantes por primera vez a la categoría (Aplica para Profesores de Carrera, Ocasionales Tiempo Completo y Medio Tiempo en el Subnivel Titular 1 - D1, y para Profesores Hora Cátedra en la categoría Profesor Titular - D):'
      },
      {
        tipo: 'info',
        texto: 'El profesor deberá presentar para evaluación ante pares externos reconocidos en el listado de MinCiencias, un producto de investigación que constituya un aporte significativo a la docencia, la ciencia, la técnica, el arte o las humanidades, el cual debe otorgar crédito institucional obligatorio a la UNIAJC.'
      },
      {
        tipo: 'info',
        texto: 'Para tal fin, deberá anexar el Informe Final del Proyecto de Investigación en etapa de culminación debidamente avalado por la Decanatura de Investigaciones, utilizando como referencia técnica el Instructivo IN-I-003, junto con su respectiva acta de cierre.'
      },
      {
        tipo: 'subtitulo',
        texto: 'b) Exención por cumplimiento previo (Movilidad al Subnivel D2):'
      },
      {
        tipo: 'success',
        texto: 'Si el profesor ya sustentó y aprobó un producto de investigación que constituya un aporte significativo a la docencia, la ciencia, la técnica, el arte o las humanidades, el cual debe otorgar crédito institucional obligatorio a la UNIAJC en una convocatoria anterior dentro de la misma categoría de Titular, no será necesario presentar el documento ni realizar la sustentación nuevamente. Para hacer efectiva esta exención, el postulante deberá informar detalladamente en un documento PDF que ya cumplió con el requisito, indicando el nombre completo del producto y el año de la convocatoria donde conste su aprobación.'
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
                      <p className="req-extra-title" style={{marginBottom: 10}}>Tabla N°1: Segundo idioma - Ejemplo Inglés (Puntajes mínimos requeridos)</p>
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
                        * Tabla 1: Resolución 018035 del 21 de septiembre de 2021, pág. 2
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
