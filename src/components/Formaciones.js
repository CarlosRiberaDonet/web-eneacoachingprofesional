import React from "react";
import "../styles/Formaciones.css";
import eneagrama from "../assets/images/eneagrama.png";
import coaching from "../assets/images/coaching.png";
import eneacoaching from "../assets/images/eneacoaching.png";

const formacionesData = [
  {
    imagen: coaching,
    titulo: "ENEACOACHING PROFESIONAL",
    descripcion: "Conecta con tu esencia y con tu propósito profesional a través del Eneagrama y del Coaching Ontológico",
    fecha: "7 de mayo",
    link: "#",
  },
  {
    imagen: eneacoaching,
    titulo: "ENEACOACHING PARA EMPRESAS",
    descripcion: "Conecta con tu máximo potencial en tu empresa y alinea tus creencias, valores y fortalezas con tu equipo de trabajo",
    fecha: "10 de septiembre",
    link: "#",
  },
  {
    imagen: eneagrama,
    titulo: "CURSO BÁSICO EN ENEAGRAMA",
    descripcion: "iníciate en esta apasionante herramienta de autoconocimiento y desarrollo personal para conectar con tu máximo potencial",
    fecha: "15 de Octubre",
    link: "#",
  },
];

const Formaciones = () => {
  return (
    <section className="formaciones">
      <h2>Próximas Formaciones</h2>
      <div className="formaciones-container">
        {formacionesData.map((formacion, index) => (
          <div key={index} className="formacion-card">
            <img src={formacion.imagen} alt={formacion.titulo} className="formacion-img"/>
            <div className="formacion-info">
              <h3>{formacion.titulo}</h3>
              <p className="formacion-descripcion">{formacion.descripcion}</p>  {/*  Nueva línea con la descripción */}
              <p>{formacion.fecha}</p>
              <a href={formacion.link} className="btn-ver-mas">Ver más</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formaciones;
