import React from "react";

const SesionesIndividuales = () => {
  return (
    <section className="section-container">
      <div className="coaching-ontologico-content">
        <div className="coaching-ontologico-text-content">
          <h2>Sesiones Individuales</h2>
          <h3>Transforma Tu Vida con el Coaching Ontológico</h3>
          <p>
            ¿Te sientes estancado o en busca de un propósito más claro en tu vida personal o profesional? Las sesiones individuales de Coaching Ontológico en las que acompaño tu proceso pueden ser el cambio que necesitas para transformar tu visión y alcanzar tus objetivos.
          </p>

          <h3>Lo que conseguirás con mis sesiones:</h3>
          <ul>
            <li>1. Claridad y enfoque para definir y alcanzar tus objetivos.</li>
            <li>2. Desarrollo de nuevas habilidades emocionales para una mejor gestión de tus relaciones y decisiones.</li>
            <li>3. Alivio de bloqueos mentales y emocionales que te impiden avanzar en tu vida.</li>
            <li>4. Herramientas prácticas para aplicar en tu día a día, mejorando tu bienestar y productividad.</li>
          </ul>

          <h3>Tu camino hacia el cambio comienza hoy:</h3>
          <p>
            Las sesiones de Coaching Ontológico son totalmente personalizadas, diseñadas para ti. Ya sea que busques un avance en tu vida personal, profesional o emocional, puedo ayudarte a dar el primer paso.
          </p>
          <p>
            Reserva tu primera sesión hoy mismo y empieza a transformar tu vida.
          </p>

          <h3>Precios:</h3>
          <div className="price-container">
          <div className="tipos-eneagrama-container price-card">
              <h4>Sesión Individual (1 hora):</h4>
              <p>50€</p>
            </div>
          <div className="tipos-eneagrama-container price-card">
              <h4>Paquete de 10 sesiones:</h4>
              <p>400€ (ahorro de 100€)</p>
            </div>
          </div>

          <h3>¿Cómo funcionan las sesiones individuales?</h3>
          <p>
            Cada sesión está diseñada para trabajar en tus necesidades específicas, ya sea que busques más claridad en tu propósito, superar obstáculos emocionales o lograr objetivos personales y profesionales.
          </p>

          <button
            className="btn-contacto"
            onClick={() => {
                window.open(
                "https://wa.me/34696667110?text=Hola. Quiero información de sesiones individuales de Coaching Ontológico.",
                "_blank"
                );
            }}
            >
            Consulta una sesión gratuita
            </button>
        </div>
      </div>
    </section>
  );
};

export default SesionesIndividuales;
