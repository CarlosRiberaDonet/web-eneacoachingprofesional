import React from "react";
import "../styles/HistoriaPersonal.css";
import claudio from "../assets/images/claudio.png";

const HistoriaPersonal = () => {
  return (
    <section className="historia">
      <div className="historia-content">
        
        {/*  Imagen a la izquierda */}
        <div className="historia-imagen">
        <img src={claudio} alt="Claudio" />
        </div>

        {/*  Texto a la derecha */}
        <div className="historia-texto">
          <h2>SOBRE MÍ</h2>
          <p>
            ¿Os suena eso que llaman <strong>“crisis de los 40”</strong>? Yo sé muy bien lo que es, 
            lo he experimentado en primera persona y le estoy tremendamente agradecido, 
            pues ha abierto la puerta a mi <strong>verdadero propósito de vida</strong>: acompañar a 
            las personas y a equipos para que hagan de su sufrimiento una oportunidad para crecer 
            y para hacer de su vida una auténtica obra de arte.
          </p>

          <p>
            Tras sufrir un <strong>trastorno ansioso-depresivo</strong> con ideaciones suicidas, 
            quise adentrarme de lleno en el mundo del <strong>desarrollo personal y psicoespiritual</strong> 
            para llevar lo mejor posible ese sufrimiento y esa sensación de insatisfacción crónica 
            que me bloqueaba y dificultaba mi acceso a mi propósito personal y profesional.
          </p>

          <p>
            Conecté con un hermoso sentimiento de **amor a mí mismo, amor al otro y amor a la vida**.  
            Me di cuenta de que mi misión era **acompañar a otros en su transformación personal**.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HistoriaPersonal;
