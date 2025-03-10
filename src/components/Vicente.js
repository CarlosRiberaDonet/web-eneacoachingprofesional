import React from "react";
import "../styles/Vicente.css";
import vicenteImg from "../assets/images/vicente.png"; // Asegúrate de que la ruta es correcta

const Vicente = () => {
  return (
    <section className="vicente">
      <div className="vicente-container">
        
        {/* 🔹 Imagen de Vicente */}
        <div className="vicente-img">
          <img src={vicenteImg} alt="Vicente Montolío" />
        </div>

        {/* 🔹 Contenido textual */}
        <div className="vicente-content">
          <h2>Conoce a Vicente Montolío</h2>
          <p>
            Pedagogo, experto en Eneagrama Aplicado, Coaching y Liderazgo. 
            Acompaño a personas y equipos para conectar con su máximo potencial.
          </p>
          <p>
            A través del Eneagrama y el Coaching Ontológico, te ayudo a 
            comprender mejor tu personalidad y alcanzar tus objetivos.
          </p>
          <a href="/contacto" className="btn-vicente">Saber más</a>
        </div>

      </div>
    </section>
  );
};

export default Vicente;
