import React, { useState } from 'react';
import './Rutas.css';

const rutas = [
  {
    letra: 'A',
    color: '#0057B8',
    bgGrad: 'linear-gradient(135deg, #0057B8, #003B7A)',
    titulo: 'Solo actualización de Títulos Académicos',
    opcion: '"Actualización de títulos académicos"',
    descripcion: 'Aplica para el profesor(a) que requiere incorporar nuevos títulos obtenidos o actualizar la información de títulos que no han sido registrados en la hoja de vida académica, sin la intención de escalafonar.',
    items: [
      'Títulos de Pregrado: relación directa con la actividad académica asignada (copia digital del diploma y acta de grado)',
      'Títulos de Posgrado (Colombia): relación directa con la actividad académica asignada (copia digital del diploma y acta de grado)',
      'Títulos obtenidos en el exterior: diploma acompañado de la Resolución de Convalidación expedida por el MEN',
      'Sin la intención de escalafonar',
    ],
    nota: 'Cuando el profesor posea más de un título de pregrado, la Institución reconocerá aquel que guarde relación directa con la actividad académica asignada (Acuerdo No. 09 de 2025).',
  },
  {
    letra: 'B',
    color: '#1A7A4A',
    bgGrad: 'linear-gradient(135deg, #1A7A4A, #0F5C38)',
    titulo: 'Solo actualización de Productos Académicos',
    opcion: '"Actualización de productos académicos"',
    descripcion: 'Aplica para el profesor(a) que únicamente presentará a evaluación productos de su producción intelectual y científica susceptibles de asignación de puntaje, sin la intención de escalafonar.',
    items: [
      'Generación de Nuevo Conocimiento (GNC)',
      'Desarrollo Tecnológico e Innovación (DTI)',
      'Apropiación Social del Conocimiento (ASC)',
      'Divulgación Pública de la Ciencia (DPC)',
      'Formación del Recurso Humano para CTeI (FRH)',
      'Sin la intención de escalafonar',
    ],
    nota: null,
  },
  {
    letra: 'C',
    color: '#E8A020',
    bgGrad: 'linear-gradient(135deg, #E8A020, #C07010)',
    titulo: 'Actualización de Experiencia profesoral',
    opcion: '"Actualización de experiencia profesoral"',
    descripcion: 'Aplica para el profesor(a) que únicamente presentará certificados de docencia académica universitaria, sin la intención de escalafonar.',
    items: [
      'Certificados de docencia académica universitaria en IES',
      'Certificación expedida por Gestión Humana con antigüedad no superior a un (1) año',
      'Sin la intención de escalafonar',
    ],
    nota: null,
  },
  {
    letra: 'D',
    color: '#C0392B',
    bgGrad: 'linear-gradient(135deg, #C0392B, #8B2020)',
    titulo: 'Postulación a escalafonar',
    opcion: '"Solicitud de ascenso profesoral"',
    descripcion: 'Aplica para el profesor que participa en la convocatoria con el propósito expreso de solicitar su ascenso de categoría o cambio de nivel salarial, presentando títulos académicos y/o experiencia profesoral y/o productos académicos.',
    items: [
      'Propósito expreso de solicitar ascenso de categoría o cambio de nivel salarial',
      'Presentando títulos académicos y/o experiencia profesoral y/o productos académicos',
      'Cumplimiento de los requisitos habilitantes según el Acuerdo No. 09 de 2025',
    ],
    nota: 'Para aspirantes a Profesor Titular: si ya sustentó y aprobó el producto de investigación requerido en una convocatoria anterior dentro de la misma categoría de Titular, informe detalladamente en un documento PDF el nombre completo del producto y el año de la convocatoria donde conste su aprobación.',
  },
];

export default function Rutas() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="rutas" className="section rutas-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">🗺️ Rutas</div>
          <h2 className="section-title">Rutas a Registrar en el Formulario en Línea</h2>
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
            <strong>Nota importante:</strong> El formulario de inscripción está disponible exclusivamente desde su correo institucional con dominio único
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
