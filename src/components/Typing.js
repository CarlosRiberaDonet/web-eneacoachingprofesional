import React from "react";
import "../styles/Typing.css";

const Typing = () => {
  return (
    <section className="typing">
      <div className="typing-content">
        {/* Encabezado */}
        <h2>TYPING: MÉTODO DE IDENTIFICACIÓN DE TU TIPO DE PERSONALIDAD</h2>
        
        {/* Texto descriptivo */}
        <p>
          No soy quién para decirte quién eres. Conocer tu tipo de personalidad es un arduo camino de auto-observación en el que tú eres el máximo responsable.
          Sin embargo, en una entrevista de aproximadamente 60 minutos, te acompañaré para que reflexiones sobre tu forma de pensar, sentir y actuar (eneatipo);
          para que reflexiones sobre esos comportamientos automáticos que te impiden ser la persona que puedes llegar a ser.
          Esto puede suponer el inicio de un hermoso camino de transformación personal en el que yo puedo acompañarte para que te conozcas mejor y puedas sacar
          tu máximo potencial.
        </p>

        {/* Botón de acción */}
        <a href="/consulta-gratuita" className="btn-sesion">
          Consulta una sesión gratuita
        </a>

        {/* Imagen centrada bajo el botón */}
        <div className="image-container">
          <img src="/images/sesiongratuita.png" alt="EneaCoaching Profesional" className="eneacoaching-image" />
        </div>
      </div>
    </section>
  );
};

export default Typing;
