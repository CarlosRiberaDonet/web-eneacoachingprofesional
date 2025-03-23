import React from "react";
import "../styles/Typing.css";
import '../../../styles/global/ButtonStyles.css';
import '../styles/global/ButtonStyles.css';



const Typing = () => {
  return (
    <section className="typing">
      <div className="typing-content">
        <h2>Typing: Método de Identificación de tu Tipo de Personalidad</h2>
        <p>
          No soy quién ni pretendo decirte quién eres. Conocer tu tipo de personalidad 
          es un arduo camino de auto-observación en el que tú eres el máximo protagonista 
          y responsable.
        </p>
        <p>
          En una entrevista de aproximadamente 60 minutos, te acompañaré para que reflexiones 
          sobre tu forma de pensar, sentir y actuar (eneatipo). Esto puede suponer el inicio 
          de un hermoso camino de transformación personal en el que puedo ayudarte a sacar 
          tu máximo potencial.
        </p>
        <a href="/consulta" className="btn">CONSULTA UNA SESIÓN GRATUITA</a>
      </div>
    </section>
  );
};

export default Typing;
