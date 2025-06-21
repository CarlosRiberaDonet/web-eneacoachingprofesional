import React from "react";

import '../styles/global/ButtonStyles.css';
import "../styles/home/Typing.css";
import '../index.css';


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

        <button
  className="btn-contacto"
  onClick={() => {
    window.open(
      "https://wa.me/34696667110?text=Hola%21%20Quisiera%20solicitar%20informaci%C3%B3n%20para%20una%20sesi%C3%B3n%20gratuita",
      "_blank"
    );
  }}
>
    Consulta una sesión gratuita
      </button>

          {/* Imagen centrada bajo el botón */}
          <div className="image-container">
            <img src="/images/sesiongratuita.png" alt="EneaCoaching Profesional" className="eneacoaching-image" />
          </div>
        </div>
      </section>
    );
};

export default Typing;
