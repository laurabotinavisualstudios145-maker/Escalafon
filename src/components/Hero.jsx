import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="hero-orb orb3" />
      </div>
      <div className="hero-content">
        <div className="hero-badge animate-fade-up">
          <span className="badge-dot" />
          Convocatoria Oficial Vigente · 2026
        </div>
        <h1 className="hero-title animate-fade-up">
          Escalafón Profesoral<br />
          <span className="hero-title-accent">UNIAJC 2026</span>
        </h1>
        <p className="hero-subtitle animate-fade-up">
          Institución Universitaria Antonio José Camacho invita a todos los profesores
          a participar en el proceso de actualización y promoción en las categorías del
          escalafón profesoral — un camino hacia la excelencia académica.
        </p>
        <div className="hero-stats animate-fade-up">
          <div className="stat-card">
            <span className="stat-number">4</span>
            <span className="stat-label">Rutas disponibles</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">5</span>
            <span className="stat-label">Grupos de productos</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">17+</span>
            <span className="stat-label">Tipologías aceptadas</span>
          </div>
        </div>
        <div className="hero-ctas animate-fade-up">
          <button className="btn-primary" onClick={() => scrollTo('postulacion')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>
            </svg>
            Iniciar Postulación
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('requisitos')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
            </svg>
            Ver Requisitos
          </button>
        </div>
        <div className="hero-alert animate-fade-up">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <strong>Fecha de corte extraordinaria:</strong> 30 de junio de 2026 para contabilización de experiencia docente.
        </div>
      </div>
      <div className="hero-scroll" onClick={() => scrollTo('cronograma')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}
