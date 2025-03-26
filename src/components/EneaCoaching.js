import React from "react";
import '../styles/EneaCoaching.css';
import '../styles/global/ButtonStyles.css';

const EneaCoaching = () => {
  return (
    <section className="eneacoaching-profesional-section">
      <div className="eneacoaching-profesional-content">
        {/* Texto a la izquierda */}
        <div className="eneacoaching-profesional-text-content">
          <h1 className="eneacoaching-profesional-title">
            EneaCoaching Profesional: Transforma tu Vida y Conéctate con tu Propósito
          </h1>
          <h2 className="eneacoaching-profesional-subtitle">
            🌿 Autoconocimiento, equilibrio y propósito en un solo método
          </h2>
          <p className="eneacoaching-profesional-description">
            En <strong>EneaCoaching Profesional</strong>, integro herramientas poderosas para ayudarte a desbloquear tu potencial y vivir en armonía con quien realmente eres. Mi enfoque holístico combina:
          </p>
          <ul className="eneacoaching-profesional-benefits-list">
            <li>
              ✅ <strong>Eneagrama:</strong> Un mapa profundo de autoconocimiento que te permite comprender tu ego y tu esencia, patrones de comportamiento inconscientes y oportunidades de crecimiento.
            </li>
            <li>
              ✅ <strong>Coaching Ontológico:</strong> Un proceso transformador que te ayuda a cambiar creencias limitantes, mejorar tu comunicación y lograr una vida más alineada con tus valores.
            </li>
            <li>
              ✅ <strong>Ikigai:</strong> Un camino para descubrir tu propósito profesional y conectar con lo que realmente te motiva.
            </li>
          </ul>
          <p className="eneacoaching-profesional-methodology">
            💡 Una metodología única para el desarrollo integral
          </p>
          <p className="eneacoaching-profesional-description">
            Trabajo desde la integración de los tres centros de inteligencia: mente, emociones y cuerpo, creando un equilibrio que potencia tu bienestar y tu éxito. Mi enfoque fusiona la psicopedagogía moderna con la dimensión espiritual, permitiéndote alinear pensamientos, emociones y acciones para una vida más auténtica y plena.
          </p>
          <p className="eneacoaching-profesional-description">
            Si estás listo para transformar tu vida y descubrir tu verdadero propósito, te acompaño en este camino de crecimiento personal y profesional.
          </p>
          <button
            className="btn-contacto"
            onClick={() => {
              const section = document.getElementById("contacto");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          > Descubre más sobre EneaCoaching Profesional
          </button>
        </div>
        
        
        {/* Imagen a la derecha */}
        <div className="eneacoaching-profesional-image-container">
          <img src="/images/eneacoachingprofesional.png" alt="EneaCoaching Profesional" className="eneacoaching-profesional-image" />      
        </div>
        
      </div>
    </section>
  );
};

export default EneaCoaching;
