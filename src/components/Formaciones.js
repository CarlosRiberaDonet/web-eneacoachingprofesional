import React from 'react';
import { Link } from 'react-router-dom';

import '../index.css';
import '../styles/Formaciones.css';

import eneacoaching from '../assets/images/eneacoaching.png';
import coaching from '../assets/images/coaching.png';
import eneagrama from '../assets/images/eneagrama.png';

const formacionesData = [
  {
    image: eneacoaching,
    title: "ENEACOACHING PROFESIONAL",
    description: "Conecta con tu esencia y con tu propósito profesional a través del Eneagrama y del Coaching Ontológico",
    link: "/eneacoaching#eneacoaching-profesional",
  },
  {
    image: coaching,
    title: "COACHING PARA EMPRESAS",
    description: "Conecta con tu máximo potencial en tu empresa y alinea tus creencias, valores y fortalezas con tu equipo de trabajo",
    link: "/eneagrama#eneagrama-empresas",
  },
  {
    image: eneagrama,
    title: "CURSO BÁSICO EN ENEAGRAMA",
    description: "Iníciate en esta apasionante herramienta de autoconocimiento y desarrollo personal para conectar con tu máximo potencial",
    link: "/eneagrama#curso-basico",
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
              <Link to={item.link} className="formacion-boton">Ver más</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formaciones;

