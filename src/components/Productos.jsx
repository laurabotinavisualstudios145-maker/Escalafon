import React, { useState } from 'react';
import './Productos.css';

const grupos = [
  {
    id: 'gnc',
    codigo: 'GNC',
    titulo: 'Generación de Nuevo Conocimiento',
    color: '#0057B8',
    icon: '🔬',
    subgrupos: [
      {
        letra: 'A',
        titulo: 'Artículos de Investigación',
        productos: [
          { codigo: 'ART_A1', pts: '10' }, { codigo: 'ART_OPEN_A1', pts: '10' },
          { codigo: 'ART_A2', pts: '6.65' }, { codigo: 'ART_OPEN_A2', pts: '6.65' },
          { codigo: 'ART_B', pts: '3.29' }, { codigo: 'ART_OPEN_B', pts: '3.29' },
          { codigo: 'ART_C', pts: '1.89' }, { codigo: 'ART_OPEN_C', pts: '1.89' },
          { codigo: 'ART_D', pts: '0.97' }, { codigo: 'ART_OPEN_D', pts: '0.97' },
        ]
      },
      {
        letra: 'B',
        titulo: 'Libros de Investigación y Formación',
        productos: [
          { codigo: 'LIB_A1', pts: '10' },
          { codigo: 'LIB_B', pts: '5.72' },
          { codigo: 'LIB_FOR1', pts: '1.12' },
        ]
      },
      {
        letra: 'C',
        titulo: 'Creación Artística e Investigación-Creación',
        productos: [
          { codigo: 'AAD_A1', pts: '10' }, { codigo: 'AAD_A', pts: '8.37' },
          { codigo: 'AAD_B', pts: '4.55' }, { codigo: 'AAD_C', pts: '0.81' },
          { codigo: 'VV_A1', pts: '10' },
        ]
      },
    ]
  },
  {
    id: 'dti',
    codigo: 'DTI',
    titulo: 'Desarrollo Tecnológico e Innovación',
    color: '#7B61FF',
    icon: '⚙️',
    subgrupos: [
      {
        letra: 'A',
        titulo: 'Empresas de Base Tecnológica (Spin-off / Start-up)',
        productos: [{ codigo: 'EBT_A', pts: '6.17' }, { codigo: 'EBT_B', pts: '1.41' }]
      },
      {
        letra: 'B',
        titulo: 'Innovaciones en Gestión, Procesos y Servicios',
        productos: [
          { codigo: 'IG_A1', pts: '6.17' }, { codigo: 'IG_A2', pts: '4.55' },
          { codigo: 'IPP', pts: '0.97' }, { codigo: 'IG_B1', pts: '0.97' }, { codigo: 'IG_B2', pts: '0.64' },
        ]
      },
      {
        letra: 'C',
        titulo: 'Diseños Industriales',
        productos: [{ codigo: 'DI_A', pts: '2.95' }, { codigo: 'DI_B', pts: '0.42' }]
      },
      {
        letra: 'D',
        titulo: 'Productos de Software',
        productos: [{ codigo: 'SF', pts: '1.41' }]
      },
    ]
  },
  {
    id: 'asc',
    codigo: 'ASC',
    titulo: 'Apropiación Social del Conocimiento',
    color: '#1A7A4A',
    icon: '🤝',
    subgrupos: [
      {
        letra: 'A',
        titulo: 'Fortalecimiento Social y Políticas Públicas',
        productos: [
          { codigo: 'FIS', pts: '4.85' }, { codigo: 'GPP_A', pts: '4.85' },
          { codigo: 'GPP_B', pts: '3.64' }, { codigo: 'GPP_C', pts: '2.78' },
        ]
      },
      {
        letra: 'B',
        titulo: 'Fortalecimiento de Cadenas Productivas',
        productos: [
          { codigo: 'FCP_A', pts: '4.85' }, { codigo: 'FCP_B', pts: '2.78' }, { codigo: 'FCP_C', pts: '1.85' },
        ]
      },
      {
        letra: 'C',
        titulo: 'Trabajo Conjunto con Centros de Ciencia',
        productos: [
          { codigo: 'TCCG_A', pts: '4.85' }, { codigo: 'TCCG_B', pts: '3.64' },
          { codigo: 'TCCG_C', pts: '2.33' }, { codigo: 'TCCG_D', pts: '0.76' },
        ]
      },
    ]
  },
  {
    id: 'dpc',
    codigo: 'DPC',
    titulo: 'Divulgación Pública de la Ciencia',
    color: '#E8A020',
    icon: '📢',
    subgrupos: [
      {
        letra: 'A',
        titulo: 'Producciones de Contenido Digital y Generación de Contenidos',
        productos: [{ codigo: 'PCD_A1', pts: '1.34' }, { codigo: 'GC', pts: '0.56' }]
      },
      {
        letra: 'B',
        titulo: 'Libros de Divulgación o Compilación',
        productos: [{ codigo: 'LIB_DIV', pts: '0.97' }]
      },
      {
        letra: 'C',
        titulo: 'Consultorías Científico-Tecnológicas',
        productos: [{ codigo: 'CON_CT', pts: '0.96' }, { codigo: 'CON_AAD', pts: '0.96' }]
      },
      {
        letra: 'D',
        titulo: 'Eventos Científicos con Componente de Apropiación',
        productos: [
          { codigo: 'EC_A', pts: '0.56' }, { codigo: 'EC_B', pts: '0.38' },
        ]
      },
    ]
  },
  {
    id: 'frh',
    codigo: 'FRH',
    titulo: 'Formación del Recurso Humano para CTeI',
    color: '#C0392B',
    icon: '👨‍🏫',
    subgrupos: [
      {
        letra: 'A',
        titulo: 'Proyectos de I+D+i y Programa Ondas',
        productos: [{ codigo: 'PF_A', pts: '0.54' }, { codigo: 'APO', pts: '0.37' }]
      },
      {
        letra: 'B',
        titulo: 'Direcciones de Trabajos de Grado y Tesis',
        productos: [{ codigo: 'TD_A', pts: '2.70' }, { codigo: 'TM_A', pts: '0.54' }]
      },
      {
        letra: 'C',
        titulo: 'Proyectos de Extensión y Responsabilidad Social',
        productos: [{ codigo: 'PE', pts: '0.54' }]
      },
    ]
  },
];

const excludedItems = [
  'Premios Nacionales e Internacionales',
  'Traducción de libros',
  'Publicaciones impresas Universitarias',
  'Conferencias de clase para un curso completo',
  'Manuales o guías de laboratorio para un curso completo',
  'Materiales para Educación a distancia para un curso completo',
  'Escritos en boletines, periódicos internos, propuestas curriculares',
  'Estudios Post-doctorales',
  'Reseñas Críticas',
  'Traducciones',
  'Dirección de Tesis de especialización y/o maestría',
  'Actividades de Dirección Académico-Administrativas (excepto las del Acuerdo 09)',
  'Otros productos que no cumplan con la naturaleza del escalafón',
];

export default function Productos() {
  const [openGrupo, setOpenGrupo] = useState(null);

  return (
    <section id="productos" className="section prod-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">📚 Productos Académicos</div>
          <h2 className="section-title">Tipologías de Productos Aceptados</h2>
          <p className="section-subtitle">
            Clasificados bajo la codificación oficial de MinCiencias. Haga clic en cada grupo para ver los subgrupos y puntajes.
          </p>
        </div>

        <div className="prod-nota">
          <span>📌</span>
          <p><strong>Nota aclaratoria:</strong> Un producto de investigación, para la UNIAJC, se entiende como aquel que viene acompañado de un <strong>certificado del Decanato de Investigaciones</strong>. La presentación de un producto no implica su reconocimiento automático ni asignación directa de puntaje.</p>
        </div>

        <div className="prod-grupos">
          {grupos.map((g) => (
            <div key={g.id} className={`prod-grupo ${openGrupo === g.id ? 'open' : ''}`}>
              <button
                className="prod-grupo-header"
                style={{ borderLeftColor: g.color }}
                onClick={() => setOpenGrupo(openGrupo === g.id ? null : g.id)}
              >
                <div className="prod-grupo-icon" style={{ background: `${g.color}15`, color: g.color }}>
                  {g.icon}
                </div>
                <div className="prod-grupo-info">
                  <span className="prod-grupo-codigo" style={{ color: g.color }}>{g.codigo}</span>
                  <h3 className="prod-grupo-titulo">{g.titulo}</h3>
                  <span className="prod-grupo-count">
                    {g.subgrupos.reduce((acc, s) => acc + s.productos.length, 0)} tipologías
                  </span>
                </div>
                <div className="prod-arrow" style={{ color: g.color }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points={openGrupo === g.id ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
                  </svg>
                </div>
              </button>

              {openGrupo === g.id && (
                <div className="prod-grupo-body animate-fade-up">
                  {g.subgrupos.map((sub) => (
                    <div key={sub.letra} className="prod-subgrupo">
                      <div className="prod-sub-header">
                        <span className="prod-sub-letra" style={{ background: g.color }}>
                          Subgrupo {sub.letra}
                        </span>
                        <h4 className="prod-sub-titulo">{sub.titulo}</h4>
                      </div>
                      <div className="prod-chips">
                        {sub.productos.map((p) => (
                          <div key={p.codigo} className="prod-chip">
                            <span className="chip-codigo" style={{ color: g.color }}>{p.codigo}</span>
                            <span className="chip-pts">{p.pts} pts</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Exclusiones */}
        <div className="exclusion-box">
          <div className="exclusion-header">
            <span>🚫</span>
            <div>
              <h3>Régimen de exclusión</h3>
              <p>Los siguientes productos o actividades NO serán aceptados bajo ninguna circunstancia:</p>
            </div>
          </div>
          <div className="exclusion-grid">
            {excludedItems.map((item, i) => (
              <div key={i} className="exclusion-item">
                <span>✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* OTROS */}
        <div className="otros-box">
          <div className="otros-icon">❓</div>
          <div>
            <h3>Productos OTROS</h3>
            <p>Los productos no contemplados expresamente en la convocatoria serán evaluados por el CAP según el Acuerdo No. 09 de 2025 y el Anexo 1 de MinCiencias vigente.</p>
            <p style={{marginTop: 8}}>
              El profesor(a) tendrá los <strong>5 primeros días de la convocatoria</strong> para informar las características del producto a:
              <a href="mailto:ecarmenza@admon.uniajc.edu.co" className="otros-email">
                ecarmenza@admon.uniajc.edu.co
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
