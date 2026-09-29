import React from 'react';
import './Footer.css';

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">UNIAJC</div>
          <p>Institución Universitaria<br/>Antonio José Camacho</p>
          <div className="footer-divider" />
          <p className="footer-convoc">Escalafón Profesoral 2026</p>
        </div>

        <div className="footer-links">
          <h4>Secciones</h4>
          <ul>
            {[
              ['inicio', 'Inicio'],
              ['cronograma', 'Cronograma'],
              ['requisitos', 'Requisitos'],
              ['rutas', 'Rutas'],
              ['productos', 'Productos'],
              ['postulacion', 'Postulación'],
              ['despues', 'Después del envío'],
            ].map(([id, label]) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto Oficial</h4>
          <div className="footer-contact-item">
            <span></span>
            <a href="mailto:ecarmenza@admon.uniajc.edu.co">
              ecarmenza@admon.uniajc.edu.co
            </a>
          </div>
          <div className="footer-contact-item">
            <span></span>
            <a href="https://www.uniajc.edu.co" target="_blank" rel="noopener noreferrer">
              www.uniajc.edu.co
            </a>
          </div>
          <div className="footer-contact-item">
            <span></span>
            <a href="https://forms.cloud.microsoft/r/5P51BXaSNW" target="_blank" rel="noopener noreferrer">
              Formulario de Inscripción
            </a>
          </div>
          <div className="footer-note">
            <strong>ODP:</strong> Oficina de Desarrollo Profesoral
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Institución Universitaria Antonio José Camacho (UNIAJC) · Términos de Referencia Escalafón Profesoral 2026</p>
        <p>Acuerdo No. 09 de 2025 · Resolución MEN 018035/2021 · Anexo 1 MinCiencias 2024</p>
      </div>
    </footer>
  );
}
