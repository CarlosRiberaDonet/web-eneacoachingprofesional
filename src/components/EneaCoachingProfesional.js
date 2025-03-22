import React from "react";
import "../styles/EneaCoachingProfesional.css";

const EneaCoachingProfesional = () => {
  return (
    <section className="eneacoaching-profesional">
      <div className="content">
        {/* Texto a la izquierda */}
        <div className="text-content">
          <h1>EneaCoaching Profesional: Transforma tu Vida y Conéctate con tu Propósito</h1>
          <h2>🌿 Autoconocimiento, equilibrio y propósito en un solo método</h2>
          <p>
            En <strong>EneaCoaching Profesional</strong>, integro herramientas poderosas para ayudarte a desbloquear tu potencial y vivir en armonía con quien realmente eres. Mi enfoque holístico combina:
          </p>
          <ul className="benefits-list">
            <li>✅ <strong>Eneagrama:</strong> un mapa profundo de autoconocimiento que te permite comprender tu ego y tu esencia, patrones de comportamiento inconscientes y oportunidades de crecimiento.</li>
            <li>✅ <strong>Coaching Ontológico:</strong> un proceso transformador que te ayuda a cambiar creencias limitantes, mejorar tu comunicación y lograr una vida más alineada con tus valores.</li>
            <li>✅ <strong>Ikigai:</strong> un camino para descubrir tu propósito profesional y conectar con lo que realmente te motiva.</li>
          </ul>
          <p>💡 Una metodología única para el desarrollo integral</p>
          <p>
            Trabajo desde la integración de los tres centros de inteligencia: mente, emociones y cuerpo, creando un equilibrio que potencia tu bienestar y tu éxito. Mi enfoque fusiona la psicopedagogía moderna con la dimensión espiritual, permitiéndote alinear pensamientos, emociones y acciones para una vida más auténtica y plena.
          </p>
          <p>
            Si estás listo para transformar tu vida y descubrir tu verdadero propósito, te acompaño en este camino de crecimiento personal y profesional.
          </p>
          <a href="/eneacoaching-profesional" className="btn-descubre-mas">
             Descubre más sobre EneaCoaching Profesional
          </a>
        </div>

        {/* Imagen a la derecha */}
        <div className="image-container">
          <img src="/images/eneacoachingprofesional.png" alt="EneaCoaching Profesional" className="eneacoaching-image" />
        </div>
      </div>
    </section>
  );
};

export default EneaCoachingProfesional;
