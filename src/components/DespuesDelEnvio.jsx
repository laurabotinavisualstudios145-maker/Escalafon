import React from 'react';
import './DespuesDelEnvio.css';

const fases = [
  {
    icon: '🔍',
    titulo: '6.1. Proceso de revisión y evaluación por el CAP',
    color: '#0057B8',
    pasos: [
      'Es responsabilidad exclusiva del profesor(a) examinar minuciosamente que los soportes cargados cumplan con los requisitos de existencia y calidad establecidos.',
      'Cada profesor es responsable de la veracidad, autenticidad e integridad de la información aportada.',
      'La Institución podrá verificar la información presentada y adelantar las actuaciones administrativas a que haya lugar cuando se evidencien inconsistencias, falsedad documental o información que no corresponda con la realidad.',
      'Los resultados de los profesores(as) que no presenten reclamaciones dentro del término establecido quedarán en firme al día hábil siguiente del vencimiento del plazo para interponerlas.',
      'Para quienes presenten reclamación, los resultados quedarán en firme una vez sea comunicada la decisión adoptada por el Comité de Asignación de Puntaje (CAP).',
    ]
  },
  {
    icon: '📬',
    titulo: '6.2. Trámite de reclamaciones frente a resultados preliminares',
    color: '#1A7A4A',
    pasos: [
      'Plazo perentorio: Las reclamaciones deberán presentarse formalmente dentro de los tres (3) días hábiles siguientes a la publicación de los resultados de la convocatoria.',
      'Canal oficial exclusivo: La Oficina de Desarrollo Profesoral (ODP) será el único canal oficial para la recepción y trámite de las reclamaciones, únicamente a través del correo electrónico institucional CAP@admon.uniajc.edu.co.',
      'Requisitos del escrito: La reclamación debe estar debidamente sustentada, indicando de manera clara los aspectos objeto de revisión y aportando los soportes técnicos que respalden la solicitud.',
      'Tiempos de respuesta: La ODP verificará los requisitos formales y remitirá las solicitudes al CAP, el cual dispondrá de hasta ocho (8) días hábiles para analizar, resolver y emitir una decisión definitiva.',
      'Rechazo extemporáneo: Las reclamaciones presentadas por fuera del término establecido o por un canal diferente serán rechazadas por extemporaneidad o incumplimiento del procedimiento. Las consultas relacionadas con el estado de la convocatoria deberán presentarse únicamente a través de la ODP.',
    ]
  },
];

export default function DespuesDelEnvio() {
  return (
    <section id="despues" className="section despues-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">📨 Después del envío</div>
          <h2 className="section-title">¿Qué pasa después de enviar mi solicitud?</h2>
          <p className="section-subtitle">
            Conozca el proceso de revisión, evaluación y cómo presentar reclamaciones si es necesario.
          </p>
        </div>

        <div className="despues-grid">
          {fases.map((fase, i) => (
            <div key={i} className="despues-card" style={{ borderTopColor: fase.color }}>
              <div className="despues-icon" style={{ background: `${fase.color}15`, color: fase.color }}>
                {fase.icon}
              </div>
              <h3 className="despues-titulo" style={{ color: fase.color }}>{fase.titulo}</h3>
              <ul className="despues-pasos">
                {fase.pasos.map((p, j) => (
                  <li key={j}>
                    <span className="despues-check" style={{ background: fase.color }}>✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Timeline visual */}
        <div className="timeline-box">
          <h3 className="timeline-titulo">⏱ Tiempos del proceso de reclamaciones</h3>
          <div className="timeline-steps">
            {[
              { evento: 'Publicación de resultados', tiempo: 'Día 0', color: '#0057B8' },
              { evento: 'Plazo para reclamar', tiempo: '3 días hábiles', color: '#E8A020' },
              { evento: 'Análisis por el CAP', tiempo: 'Hasta 8 días hábiles', color: '#7B61FF' },
              { evento: 'Decisión definitiva', tiempo: 'Comunicada por correo', color: '#1A7A4A' },
            ].map((step, i) => (
              <div key={i} className="tl-step">
                <div className="tl-dot" style={{ background: step.color }} />
                <div className="tl-content">
                  <span className="tl-tiempo" style={{ color: step.color }}>{step.tiempo}</span>
                  <span className="tl-evento">{step.evento}</span>
                </div>
                {i < 3 && <div className="tl-line" />}
              </div>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div className="contacto-box">
          <div className="contacto-content">
            <h3>📧 Canal Oficial Exclusivo de Contacto</h3>
            <p>Oficina de Desarrollo Profesoral (ODP) — Único canal oficial para la recepción y trámite de reclamaciones:</p>
            <div className="contacto-actions">
              <a href="mailto:CAP@admon.uniajc.edu.co" className="contacto-email">
                CAP@admon.uniajc.edu.co
              </a>
              <a href="https://www.uniajc.edu.co/wp-content/uploads/2026/10/TÉRMINOS-DE-REFERENCIA-2026-2-1.pdf" target="_blank" rel="noopener noreferrer" className="contacto-email">
                Lee aquí los términos de referencia
              </a>
            </div>
          </div>
          <div className="contacto-warn">
            <span>⚠️</span>
            <p>No se recibirán ni tramitarán reclamaciones presentadas por medios diferentes al canal oficial ni por fuera de los términos establecidos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
