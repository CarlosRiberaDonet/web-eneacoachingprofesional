import React from "react";
import "../styles/SobreMi.css";
import vicente from "../assets/images/vicente.png";
import '../styles/global/ButtonStyles.css';



const SobreMi = () => {
  return (
    <section className="sobre-mi">
      <div className="sobre-mi-content">

        {/* Sección de Texto */}
        <div className="text-content">
          <h1 className="main-heading">Descubre quién eres realmente y transforma tu vida</h1>
          <p>
            Soy <strong>Vicente Montolío Izquierdo</strong>, pedagogo de profesión y experto en <strong>Eneagrama Aplicado</strong>, 
            <strong> Coaching Ontológico</strong>, <strong>Liderazgo</strong> y <strong>Conductas Adictivas</strong>.
            Acompaño a personas y equipos a conectar con su verdadera esencia, potenciando su desarrollo personal y profesional 
            a través del Eneagrama, el Coaching y otras herramientas de autoconocimiento.
          </p>

          <h2 className="subheading">🚀 ¿Qué lograrás conmigo?</h2>
          <ul className="benefits-list">
            <li>✔ Descubrir y potenciar tus fortalezas.</li>
            <li>✔ Lograr tus objetivos con mayor claridad y propósito.</li>
            <li>✔ Transformar tu vida y alinearte con tus valores más auténticos.</li>
          </ul>

          <p>
            Si sientes que es momento de dar un salto en tu crecimiento personal o profesional, estaré encantado de acompañarte en este proceso.
          </p>
          <p className="cta-message">
            Contáctame ahora y comienza tu transformación.
          </p>
          <button
          className="btn-contacto"
          onClick={() => {
            const section = document.getElementById("contacto");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          >Contacta</button>

        </div>

      {/* Sección de Imagen */}
      <div className="image-container-vicente">
        <img src={vicente} alt="Vicente Montolío" className="sobre-mi-image" />
      </div>

      </div>
    </section>
  );
};

export default SobreMi;
