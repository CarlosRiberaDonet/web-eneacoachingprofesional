import React from "react";
import "../styles/Formaciones.css";
import eneagrama from "../assets/images/eneagrama.png";
import coaching from "../assets/images/coaching.png";
import eneacoaching from "../assets/images/eneacoaching.png";

const formacionesData = [
  {
    imagen: eneagrama,
    titulo: "Eneagrama Básico",
    fecha: "7 de mayo",
    link: "#",
  },
  {
    imagen: coaching,
    titulo: "Introducción Eneagrama",
    fecha: "10 de septiembre",
    link: "#",
  },
  {
    imagen: eneacoaching,
    titulo: "Experto en Eneagrama",
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
