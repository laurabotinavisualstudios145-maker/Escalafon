import React from 'react';
import './DespuesDelEnvio.css';

const fases = [
  {
    icon: '🔍',
    titulo: 'Revisión por el CAP',
    color: '#0057B8',
    pasos: [
      'El CAP revisará y verificará los soportes cargados.',
      'Es responsabilidad del profesor que los soportes cumplan los requisitos de existencia.',
      'La Institución puede verificar la información y adelantar actuaciones administrativas ante inconsistencias.',
      'Los resultados de quienes no presenten reclamaciones quedarán en firme al día hábil siguiente del vencimiento del plazo.',
    ]
  },
  {
    icon: '📬',
    titulo: 'Resultados y Reclamaciones',
    color: '#1A7A4A',
    pasos: [
      'Plazo perentorio: 3 días hábiles desde la publicación de resultados.',
      'Canal exclusivo: correo ecarmenza@admon.uniajc.edu.co (ODP).',
      'La reclamación debe estar debidamente sustentada con los aspectos a revisar y soportes técnicos.',
      'El CAP tendrá hasta 8 días hábiles para analizar y emitir decisión definitiva.',
      'Las reclamaciones extemporáneas o por canales incorrectos serán rechazadas.',
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
            <h3>📧 Canal Oficial de Contacto</h3>
            <p>Oficina de Desarrollo Profesoral (ODP) — Único canal para reclamaciones y consultas:</p>
            <a href="mailto:ecarmenza@admon.uniajc.edu.co" className="contacto-email">
              ecarmenza@admon.uniajc.edu.co
            </a>
          </div>
          <div className="contacto-warn">
            <span>⚠️</span>
            <p>No se recibirán ni tramitarán reclamaciones presentadas por medios diferentes al canal oficial.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
