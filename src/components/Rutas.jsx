import React, { useState } from 'react';
import './Rutas.css';

const rutas = [
  {
    letra: 'A',
    color: '#0057B8',
    bgGrad: 'linear-gradient(135deg, #0057B8, #003B7A)',
    titulo: 'Solo actualización de Títulos Académicos',
    opcion: '"Actualización de títulos académicos"',
    descripcion: 'Para el profesor(a) que requiere incorporar nuevos títulos obtenidos o actualizar la información de títulos ya reconocidos y registrados, sin la intención de escalafonar.',
    items: [
      'Nuevos títulos de pregrado obtenidos',
      'Nuevos títulos de posgrado',
      'Títulos del exterior con Resolución de Convalidación del MEN',
      'Sin intención de escalafonar',
    ],
    nota: null,
  },
  {
    letra: 'B',
    color: '#1A7A4A',
    bgGrad: 'linear-gradient(135deg, #1A7A4A, #0F5C38)',
    titulo: 'Solo actualización de Productos Académicos',
    opcion: '"Actualización de productos académicos"',
    descripcion: 'Para el profesor(a) que únicamente presentará a evaluación productos de su producción intelectual y científica susceptibles de asignación de puntaje, sin la intención de escalafonar.',
    items: [
      'Artículos de investigación indexados',
      'Libros de investigación y formación',
      'Desarrollos tecnológicos e innovaciones',
      'Apropiación social del conocimiento',
      'Sin intención de escalafonar',
    ],
    nota: null,
  },
  {
    letra: 'C',
    color: '#E8A020',
    bgGrad: 'linear-gradient(135deg, #E8A020, #C07010)',
    titulo: 'Actualización de Experiencia Profesoral',
    opcion: '"Actualización de experiencia profesoral"',
    descripcion: 'Para el profesor(a) que únicamente presentará certificados de docencia académica universitaria, sin la intención de escalafonar.',
    items: [
      'Certificados de docencia universitaria',
      'Experiencia en Instituciones de Educación Superior',
      'Sin intención de escalafonar',
    ],
    nota: null,
  },
  {
    letra: 'D',
    color: '#C0392B',
    bgGrad: 'linear-gradient(135deg, #C0392B, #8B2020)',
    titulo: 'Postulación a escalafonar',
    opcion: '"Solicitud de ascenso profesoral"',
    descripcion: 'Para el profesor que participa en la convocatoria con el propósito expreso de solicitar su ascenso de categoría o cambio de nivel salarial, presentando de manera simultánea tanto títulos académicos como productos académicos.',
    items: [
      'Ascenso de categoría en el escalafón',
      'Cambio de nivel salarial',
      'Presentación simultánea de títulos Y productos',
      'Requiere todos los requisitos habilitantes',
    ],
    nota: 'Si el profesor ya sustentó y aprobó algún producto en una convocatoria anterior dentro de la misma categoría, no será necesario presentarlo nuevamente. Informe en su radicación el nombre completo del producto y el año de aprobación.',
  },
];

export default function Rutas() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="rutas" className="section rutas-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">🗺️ Rutas</div>
          <h2 className="section-title">¿Qué debo registrar en el formulario?</h2>
          <p className="section-subtitle">
            Seleccione la ruta que corresponde a su situación. Cada ruta tiene una opción específica en el formulario de inscripción en línea.
          </p>
        </div>

        <div className="rutas-grid">
          {rutas.map((ruta) => (
            <div
              key={ruta.letra}
              className={`ruta-card ${selected === ruta.letra ? 'selected' : ''}`}
              onClick={() => setSelected(selected === ruta.letra ? null : ruta.letra)}
            >
              <div className="ruta-header" style={{ background: ruta.bgGrad }}>
                <div className="ruta-letra">{ruta.letra}</div>
                <div className="ruta-label">Ruta {ruta.letra}</div>
              </div>
              <div className="ruta-body">
                <h3 className="ruta-title">{ruta.titulo}</h3>
                <p className="ruta-desc">{ruta.descripcion}</p>

                {selected === ruta.letra && (
                  <div className="ruta-detail animate-fade-up">
                    <div className="ruta-opcion">
                      <span className="opcion-label">Opción en el formulario:</span>
                      <span className="opcion-value" style={{ color: ruta.color }}>{ruta.opcion}</span>
                    </div>
                    <ul className="ruta-items">
                      {ruta.items.map((item, i) => (
                        <li key={i} style={{ '--dot-color': ruta.color }}>
                          <span className="ruta-dot" style={{ background: ruta.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {ruta.nota && (
                      <div className="ruta-nota">
                        <span>💡</span>
                        <p>{ruta.nota}</p>
                      </div>
                    )}
                  </div>
                )}

                <button className="ruta-toggle" style={{ color: ruta.color }}>
                  {selected === ruta.letra ? 'Ver menos ↑' : 'Ver detalle ↓'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="rutas-nota-global">
          <div className="nota-icon">📝</div>
          <div>
            <strong>Nota importante:</strong> El formulario de inscripción está disponible exclusivamente desde su correo institucional con dominio
            <strong> @profesores.uniajc.edu.co</strong>. Acceda en:
            <a href="https://forms.cloud.microsoft/r/5P51BXaSNW" target="_blank" rel="noopener noreferrer" className="form-link">
              Formulario Microsoft Forms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
