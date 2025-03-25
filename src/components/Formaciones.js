import React from 'react';

import '../index.css';
import '../styles/Formaciones.css';

import eneacoaching from '../assets/images/eneacoaching.png';
import coaching from '../assets/images/coaching.png';
import eneagrama from '../assets/images/eneagrama.png';

const formacionesData = [
  {
    image: coaching,
    title: "ENEACOACHING PARA EMPRESAS",
    description: "Conecta con tu máximo potencial en tu empresa y alinea tus creencias, valores y fortalezas con tu equipo de trabajo",
    link: "#",
  },
  {
    image: eneacoaching,
    title: "ENEACOACHING PROFESIONAL",
    description: "Conecta con tu esencia y con tu propósito profesional a través del Eneagrama y del Coaching Ontológico",
    link: "#",
  },
  {
    image: eneagrama,
    title: "CURSO BÁSICO EN ENEAGRAMA",
    description: "Iníciate en esta apasionante herramienta de autoconocimiento y desarrollo personal para conectar con tu máximo potencial",
    link: "#",
  },
];

const Formaciones = () => {
  return (
    <section className="formacion-seccion">
      <h2 className="formacion-titulo-seccion">Próximas Formaciones</h2>
      <div className="formacion-contenedor">
        {formacionesData.map((item, index) => (
          <div className="formacion-tarjeta" key={index}>
            <div className="formacion-imagen">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="formacion-contenido">
              <h3 className="formacion-titulo">{item.title}</h3>
              <p className="formacion-descripcion">{item.description}</p>
              <a href={item.link} className="formacion-boton">Ver más</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formaciones;
