import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cronograma from './components/Cronograma';
import Requisitos from './components/Requisitos';
import Rutas from './components/Rutas';
import Productos from './components/Productos';
import Postulacion from './components/Postulacion';
import DespuesDelEnvio from './components/DespuesDelEnvio';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Cronograma />
        <Requisitos />
        <Rutas />
        <Productos />
        <Postulacion />
        <DespuesDelEnvio />
      </main>
      <Footer />
    </>
  );
}
