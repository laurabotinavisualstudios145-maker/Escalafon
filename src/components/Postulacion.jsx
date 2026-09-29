import React, { useState } from 'react';
import './Postulacion.css';

const pasos = [
  {
    num: 1,
    icon: '💾',
    titulo: 'Descarga de formatos (ISOLUCIÓN)',
    color: '#0057B8',
    descripcion: 'Descarga los formatos oficiales desde el Software ISOLUCIÓN en la página web institucional.',
    detalles: [
      'Ir a www.uniajc.edu.co → Servicios en línea → SIGO',
      'Dar clic en Software ISOLUCIÓN',
      'Ingresar con: Usuario: Profesores / Contraseña: Pro123',
      'En el menú izquierdo, seleccionar "Documentos"',
      'Buscar por código: DO-F 036, DO-F 039, DE-F-068',
    ],
    nota: 'Formatos principales requeridos: DO-F 036 (Hoja de Vida), DO-F 039 (Registro por producto), DE-F-068 (Autorización de notificación electrónica)',
  },
  {
    num: 2,
    icon: '🔐',
    titulo: 'Acceso al formulario virtual',
    color: '#7B61FF',
    descripcion: 'Ingrese al formulario en línea exclusivamente desde su correo institucional.',
    detalles: [
      'Usar obligatoriamente el correo @profesores.uniajc.edu.co',
      'Acceder al formulario en Microsoft Forms',
      'No se aceptan postulaciones desde correos personales',
    ],
    link: { texto: 'Abrir formulario Microsoft Forms', url: 'https://forms.cloud.microsoft/r/5P51BXaSNW' },
    nota: null,
  },
  {
    num: 3,
    icon: '📤',
    titulo: 'Selección de ruta y cargue de archivos',
    color: '#1A7A4A',
    descripcion: 'Seleccione su ruta de trámite y cargue todos los soportes requeridos.',
    detalles: [
      'Seleccione la opción de trámite: Ruta A, B, C o D',
      'Por cada producto académico, cargar un formulario DO-F 039 individual',
      'Adjuntar soportes de existencia y calidad de cada producto',
      'Para aspirantes a Titular (primera vez): adjuntar Informe Final de Investigación avalado por Decanatura de Investigaciones',
      'Adjuntar DO-F 036 firmado por el Decano (obligatorio)',
    ],
    nota: null,
  },
  {
    num: 4,
    icon: '✅',
    titulo: 'Cierre de postulación',
    color: '#E8A020',
    descripcion: 'Verifique que todos los campos y soportes estén completos antes del cierre automático del sistema.',
    detalles: [
      'Diligenciar TODOS los campos del formulario virtual',
      'Cargar la totalidad de los soportes requeridos',
      'Incluir obligatoriamente el DO-F 036 firmado por el Decano',
      'El sistema se cerrará automáticamente en la fecha establecida en el cronograma',
      'No se aceptarán documentos extemporáneos, salvo subsanaciones requeridas por el CAP',
    ],
    nota: '⚠️ Una vez vencido el plazo, el sistema cerrará automáticamente y no se recibirán postulaciones ni documentos adicionales.',
  },
];

export default function Postulacion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="postulacion" className="section post-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">🚀 Postulación</div>
          <h2 className="section-title">¿Cómo realizo mi postulación?</h2>
          <p className="section-subtitle">
            Siga estos 4 pasos en orden para completar su postulación correctamente.
          </p>
        </div>

        <div className="pasos-container">
          {pasos.map((paso, idx) => (
            <div key={paso.num} className={`paso-card ${open === idx ? 'open' : ''}`}>
              <button
                className="paso-header"
                onClick={() => setOpen(open === idx ? -1 : idx)}
              >
                <div className="paso-num-wrap">
                  <div className="paso-num" style={{ background: paso.color }}>{paso.num}</div>
                  {idx < pasos.length - 1 && <div className="paso-line" />}
                </div>
                <div className="paso-icon" style={{ background: `${paso.color}15` }}>
                  {paso.icon}
                </div>
                <div className="paso-info">
                  <span className="paso-step-label" style={{ color: paso.color }}>Paso {paso.num}</span>
                  <h3 className="paso-titulo">{paso.titulo}</h3>
                  <p className="paso-desc">{paso.descripcion}</p>
                </div>
                <div className="paso-arrow" style={{ color: paso.color }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points={open === idx ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
                  </svg>
                </div>
              </button>

              {open === idx && (
                <div className="paso-body animate-fade-up">
                  <ul className="paso-items">
                    {paso.detalles.map((d, i) => (
                      <li key={i} style={{ '--step-color': paso.color }}>
                        <span className="paso-bullet" style={{ background: paso.color }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  {paso.link && (
                    <a
                      href={paso.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="paso-link"
                      style={{ background: paso.color }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      {paso.link.texto}
                    </a>
                  )}
                  {paso.nota && (
                    <div className="paso-nota" style={{ borderColor: paso.color, background: `${paso.color}0D` }}>
                      {paso.nota}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Formatos requeridos */}
        <div className="formatos-box">
          <h3 className="formatos-titulo">📎 Formatos Principales Requeridos</h3>
          <div className="formatos-grid">
            {[
              { code: 'DO-F 036', name: 'Solicitud de Movimiento de Hoja de Vida', req: 'Obligatorio · Firmado por Decano' },
              { code: 'DO-F 039', name: 'Registro Individual por Producto', req: 'Uno por cada producto · Firmado' },
              { code: 'DE-F-068', name: 'Autorización de Notificación Electrónica', req: 'Obligatorio · Correo institucional' },
            ].map((f) => (
              <div key={f.code} className="formato-item">
                <span className="formato-code">{f.code}</span>
                <div>
                  <p className="formato-name">{f.name}</p>
                  <p className="formato-req">{f.req}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
