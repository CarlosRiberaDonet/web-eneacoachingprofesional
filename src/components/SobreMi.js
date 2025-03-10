import React from "react";
import "../styles/SobreMi.css";
import vicente from "../assets/images/vicente.png"; 


const SobreMi = () => {
  return (
    <section className="sobre-mi">
      <div className="sobre-mi-content">
        
        {/* Sección de Texto */}
        <div className="text-content">
          <h1>CONECTA CON TU MÁXIMO POTENCIAL</h1>
          <h2>VICENTE MONTOLÍO IZQUIERDO</h2>
          <p>
            Acompaño a personas y equipos para que conecten con su máximo potencial (esencia) 
            a través del Eneagrama, el Coaching Ontológico y otras herramientas de autoconocimiento 
            y desarrollo personal. Pedagogo de profesión, experto en Eneagrama Aplicado, Coaching 
            y Liderazgo y Conductas Adictivas.
          </p>
          <p>
            Me gustaría acompañaros en vuestro proceso de autoconocimiento y desarrollo potencial 
            para que consigáis vuestros objetivos personales y profesionales, desidentificándoos 
            de vuestro ego y conectando con vuestra verdadera esencia.
          </p>
          <a href="/contacto" className="btn-contacto">Contacta</a>
        </div>

        {/* Sección de Imagen */}
        <div className="image-container">
        <img src={vicente} alt="Vicente Montolío" />
        </div>

      </div>
    </section>
  );
};

export default SobreMi;
