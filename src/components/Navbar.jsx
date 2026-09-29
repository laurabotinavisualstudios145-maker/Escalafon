import React, { useState, useEffect } from 'react';
import './Navbar.css';

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'cronograma', label: 'Cronograma' },
  { id: 'requisitos', label: 'Requisitos' },
  { id: 'rutas', label: 'Rutas' },
  { id: 'productos', label: 'Productos' },
  { id: 'postulacion', label: 'Postulación' },
  { id: 'despues', label: 'Después del envío' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sectionEls = sections.map(s => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        if (window.scrollY >= sectionEls[i].offsetTop - 120) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-brand" onClick={() => scrollTo('inicio')}>
          <div className="brand-logo">UNIAJC</div>
          <div className="brand-text">
            <span className="brand-title">Escalafón Profesoral</span>
            <span className="brand-year">Convocatoria 2026</span>
          </div>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {sections.map(s => (
            <li key={s.id}>
              <button
                className={active === s.id ? 'active' : ''}
                onClick={() => scrollTo(s.id)}
              >{s.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
