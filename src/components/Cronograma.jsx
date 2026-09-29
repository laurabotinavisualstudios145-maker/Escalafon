import React from 'react';
import './Cronograma.css';

const items = [
  {
    num: 1,
    desc: 'Comité de asignación de puntaje – Aprobación de Términos de Referencia (ODP)',
    inicio: '28 septiembre',
    fin: '28 septiembre',
    dias: '1 día',
    resp: 'CAP',
  },
  {
    num: 2,
    desc: 'Radicación a Secretaría',
    inicio: '28 septiembre (lunes)',
    fin: '2 octubre (viernes)',
    dias: '4 calendario',
    resp: 'ODP',
  },
];

export default function Cronograma() {
  return (
    <section id="cronograma" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Cronograma</div>
          <h2 className="section-title">Cronograma Oficial del Proceso</h2>
          <p className="section-subtitle">
            Fechas y responsables del proceso de escalafón profesoral 2026.
          </p>
        </div>

        <div className="cronograma-alert">
          <div className="crono-alert-icon"></div>
          <div>
            <strong>Nota especial sobre fecha de corte (Carácter extraordinario):</strong>
            <p>
              De manera extraordinaria y exclusiva para la presente convocatoria, el
              <strong> 30 de junio de 2026</strong> se establece como la fecha oficial de cierre para
              la contabilización del tiempo de experiencia docente. Esta medida tiene carácter
              atípico y transitorio y no constituye precedente administrativo.
            </p>
          </div>
        </div>

        <div className="crono-table-wrap">
          <table className="crono-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Actividad</th>
                <th>Inicio</th>
                <th>Fin</th>
                <th>Días</th>
                <th>Responsable</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.num}>
                  <td><span className="crono-num">{item.num}</span></td>
                  <td className="crono-desc">{item.desc}</td>
                  <td><span className="crono-date">{item.inicio}</span></td>
                  <td><span className="crono-date">{item.fin}</span></td>
                  <td><span className="crono-days">{item.dias}</span></td>
                  <td><span className="crono-resp">{item.resp}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="crono-note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
          </svg>
          El comité podrá modificar el cronograma cuando existan circunstancias justificadas, informando oportunamente a través de los canales institucionales.
        </div>
      </div>
    </section>
  );
}
