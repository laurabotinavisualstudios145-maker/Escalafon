import React, { useState } from 'react';
import './Postulacion.css';

const pasos = [
  {
    num: 1,
    icon: '💾',
    titulo: '5.1. Descarga oficial de formatos institucionales (Software ISOLUCIÓN)',
    color: '#0057B8',
    descripcion: 'Como paso inicial obligatorio, ingrese a la página web institucional (www.uniajc.edu.co) y descargue los formatos principales y guías complementarias a través de la ruta oficial de calidad:',
    detalles: [
      '1. Dirigirse a la parte inferior de la pantalla, en la columna Servicios en línea.',
      '2. Dar clic en SIGO.',
      '3. Desplazarse hacia la parte media e izquierda de la pantalla y dar clic en Software ISOLUCIÓN.',
      '4. Dar clic al botón azul Ingreso a ISOLUCIÓN e ingresar las credenciales autorizadas (Usuario: Profesores / Contraseña: Pro123).',
      '5. Dar clic en INICIAR SESIÓN.',
      '6. En el menú izquierdo, seleccionar la opción Documentos.',
      '7. En la barra superior izquierda de Filtrar por palabra, escribir el código del documento o formato requerido para su descarga (Formatos principales: DO-F 036, DO-F 039, DE-F-068).',
    ],
    nota: (
      <>
        Nota de apoyo: El profesor dispone de una guía audiovisual técnica para la descarga ingresando al link institucional:{' '}
        <a
          href="https://admonuniajcedu-my.sharepoint.com/:v:/g/personal/desarrolloprofesoral_admon_uniajc_edu_co/IQDytwBCM6IwRKHLy3R0yB44AaPKtAj4KEUTeGEuec2bLOw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=lLyOBo"
          target="_blank"
          rel="noopener noreferrer"
          className="paso-nota-link"
        >
          GRABACION INTRUCTIVO IN-1-003.webm
        </a>
        .
      </>
    ),
  },
  {
    num: 2,
    icon: '🔐',
    titulo: '5.2. Canal de acceso y autenticación en el formulario virtual',
    color: '#7B61FF',
    descripcion: 'El profesor deberá realizar su registro electrónico ingresando obligatoriamente desde su cuenta de correo institucional.',
    detalles: [
      'Ingresar obligatoriamente desde su cuenta de correo institucional con el dominio único de @profesores.uniajc.edu.co.',
      'Acceder al formulario virtual dispuesto de forma oficial en el enlace de Microsoft Forms.',
      'No se aceptan postulaciones desde correos personales.',
    ],
    link: { texto: 'Abrir formulario Microsoft Forms', url: 'https://forms.cloud.microsoft/r/5P51BXaSNW' },
    nota: null,
    nota: (
      <>
        Nota de apoyo: El profesor dispone de una guía audiovisual técnica para diligenciar el link de la convocatoria:{' '}
        <a
          href="https://admonuniajcedu-my.sharepoint.com/:v:/g/personal/desarrolloprofesoral_admon_uniajc_edu_co/IQAf7H0CvafxRqQrla20ZyZwAbMwgCeIcscQvfAl7SC7S8s?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ZNxilu"
          target="_blank"
          rel="noopener noreferrer"
          className="paso-nota-link"
        >
          INSTRUCTIVO-POSTULACION-CONVOCATORIA IN-1-003.webm
        </a>
        .
      </>
    ),
  },
  {
    num: 3,
    icon: '📤',
    titulo: '5.3. Selección de la intención del trámite y cargue de archivos',
    color: '#1A7A4A',
    descripcion: 'Al ingresar al enlace, seleccione la opción del trámite (Ruta A, Ruta B, Ruta C o Ruta D) y cargue los campos y soportes obligatorios:',
    detalles: [
      'Seleccionar la opción del trámite según su ruta (Ruta A, Ruta B, Ruta C o Ruta D).',
      'Registro Individual por Producto (Formato DO-F 039): Por cada producto académico que el profesor pretenda presentar a evaluación, deberá diligenciar y cargar de manera individual un formulario DO-F 039.',
      'Adjuntar los soportes de existencia y calidad correspondientes a cada tipología de producto.',
      'Requisito Especial para la Categoría de Profesor Titular (Acuerdo No. 09 de 2025): Los aspirantes por primera vez a la máxima categoría (Subnivel Titular 1 - D1 o Profesor Titular - D) deberán anexar de forma obligatoria el Informe Final del Proyecto de Investigación en etapa de culminación debidamente avalado por la Decanatura de Investigaciones, utilizando como referencia técnica el Instructivo IN-I-003, junto con su respectiva acta de cierre.',
    ],
    nota: null,
  },
  {
    num: 4,
    icon: '✅',
    titulo: '5.4. Cierre de la postulación y vigencia',
    color: '#E8A020',
    descripcion: 'Diligencie todos los campos del formulario virtual y cargue la totalidad de los soportes antes del cierre automático del sistema.',
    detalles: [
      'Diligenciar todos los campos del formulario virtual y cargar la totalidad de los soportes descritos (incluyendo de forma obligatoria el formato DO-F 036 firmado por el decano).',
      'Cierre automático del sistema: El periodo de postulación estará vigente desde la fecha de su apertura hasta la fecha oficial de cierre establecida en el cronograma institucional (20 de noviembre, 6:00 P.M.).',
      'Una vez vencido el plazo estipulado, el sistema se cerrará automáticamente y no se recibirán documentos ni postulaciones extemporáneas.',
      'No se admitirán nuevas postulaciones ni la incorporación de documentos adicionales, salvo las solicitudes de subsanación que sean expresamente requeridas por el CAP.',
    ],
    nota: '⚠️ El comité podrá modificar el cronograma cuando existan circunstancias justificadas, informando oportunamente a través de los canales institucionales.',
  },
];

export default function Postulacion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="postulacion" className="section post-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">🚀 Postulación</div>
          <h2 className="section-title">¿Cómo realizo mi postulación en la plataforma?</h2>
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
          <h3 className="formatos-titulo">📎 Formatos Principales Requeridos (ISOLUCIÓN)</h3>
          <div className="formatos-grid">
            {[
              { code: 'DO-F 036', name: 'Solicitud de Movimiento de Hoja de Vida', req: 'Obligatorio · Firmado digitalmente por el Decano' },
              { code: 'DO-F 039', name: 'Registro Individual por Producto', req: 'Uno por cada producto académico · Firmado (PDF)' },
              { code: 'DE-F-068', name: 'Autorización de Notificación Electrónica', req: 'Obligatorio · Correo institucional @profesores' },
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
