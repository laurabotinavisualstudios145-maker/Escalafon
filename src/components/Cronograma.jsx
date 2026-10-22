import React from 'react';
import './Cronograma.css';

const items = [
  {
    num: 1,
    desc: 'Apertura y cierre de convocatoria',
    inicio: '21 octubre',
    fin: '20 noviembre (Hora cierre: 6:00 P.M.)',
    resp: 'CAP',
  },
  {
    num: 2,
    desc: 'Validación de requisitos',
    inicio: '23 noviembre',
    fin: '7 diciembre',
    resp: 'ODP',
  },
  {
    num: 3,
    desc: 'Fecha de publicación de resultados preliminares en criterios de la existencia.',
    inicio: '9 diciembre',
    fin: '—',
    resp: 'ODP',
  },
  {
    num: 4,
    desc: 'Fecha de publicación de resultados definitivos',
    inicio: '6 abril 2027',
    fin: '—',
    resp: 'CAP',
  },
  {
    num: 8,
    desc: 'Presentación de reclamaciones',
    inicio: '7 abril 2027',
    fin: '9 abril 2027',
    resp: 'PROFESORES',
  },
  {
    num: 9,
    desc: 'Respuesta a reclamaciones',
    inicio: '—',
    fin: '19 abril 2027',
    resp: 'CAP',
  },
  {
    num: 10,
    desc: 'Reporte de movilidades a la oficina de gestión humana',
    inicio: '—',
    fin: '26 abril 2027',
    resp: 'Oficina de Recursos Humanos para los efectos pertinentes.',
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
            Fechas y responsables del proceso de la convocatoria del escalafón profesoral para el año 2026.
          </p>
        </div>

        <div className="cronograma-alert">
          <div className="crono-alert-icon">📅</div>
          <div>
            <strong>Efectos fiscales y fecha de corte de experiencia:</strong>
            <p>
              La movilidad en el escalafón profesoral que sea formalizada mediante el correspondiente
              acto administrativo tendrá <strong>efectos fiscales a partir del segundo semestre de 2027</strong>,
              de acuerdo con la programación presupuestal de la Institución. Asimismo, el
              <strong> 30 de junio de 2026</strong> se establece como la fecha oficial de cierre para
              la contabilización del tiempo de experiencia docente.
            </p>
          </div>
        </div>

        <div className="crono-table-wrap">
          <table className="crono-table">
            <thead>
              <tr>
                <th>ITEM</th>
                <th>DESCRIPCIÓN DE LA ACTIVIDAD</th>
                <th>FECHA INICIO</th>
                <th>FECHA FIN</th>
                <th>RESPONSABLE</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.num}>
                  <td><span className="crono-num">{item.num}</span></td>
                  <td className="crono-desc">{item.desc}</td>
                  <td><span className="crono-date">{item.inicio}</span></td>
                  <td><span className="crono-date">{item.fin}</span></td>
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
          <div>
            El presente calendario constituye el cronograma establecido para el proceso de la convocatoria del escalafón profesoral para el año 2026. No obstante, en virtud de los principios de eficacia, economía y celeridad que rigen la función administrativa (Art. 209 de la Constitución Política) y en concordancia con las facultades de dirección y evaluación de los trámites de inscripción, actualización y asignación salarial radicados, el Comité de Asignación y Reconocimiento de Puntaje (CAP), en armonía con las competencias previstas en el Decreto 1279 de 2002 y el Acuerdo 009 de 2025, se reserva el derecho de ajustar y modificar las fechas aquí previstas en caso de que el volumen o número de solicitudes de movimiento y radicación de documentos sea inusualmente alto, de manera que se garantice la debida atención y el estudio riguroso de cada uno de los requerimientos. Cualquier modificación al presente cronograma será comunicada y notificada en debida forma a la comunidad académica a través de los canales institucionales oficiales de la UNIAJC.
          </div>
        </div>
      </div>
    </section>
  );
}
