import React from "react";
import "../styles/Typing.css";

const Typing = () => {
  return (
    <section className="typing">
      <div className="typing-content">
        <h2>TYPING: MÉTODO DE IDENTIFICACIÓN DE TU TIPO DE PERSONALIDAD</h2>
        <p>
          No soy quién ni pretendo decirte quién eres. Conocer tu tipo de personalidad 
          es un arduo camino de auto-observación en el que tú eres el máximo protagonista 
          y responsable. Sin embargo, en una entrevista de aproximadamente 60 minutos, 
          te acompañaré para que reflexiones sobre tu forma de pensar, sentir y actuar (eneatipo). 
          Esto puede suponer el inicio de un hermoso camino de transformación personal en el que 
          yo puedo acompañarte para que te conozcas mejor y puedas sacar tu máximo potencial.
        </p>
        <a href="/consulta-gratuita" className="btn-sesion">
          Consulta una sesión gratuita
        </a>
      </div>
    </section>
  );
};

export default Typing;