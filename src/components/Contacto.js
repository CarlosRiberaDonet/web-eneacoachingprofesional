import React from "react";
import "../styles/Contacto.css";

const Contacto = () => {
  return (
    <section id="contacto" className="contacto"> {/* Añadido id="contacto" */}
      <div className="contacto-container">
        
        {/* Información de contacto */}
        <div className="contacto-info">
          <h2>Contacto</h2>
          <p>
            Envíanos un mensaje a través de este formulario. También puedes contactarnos en:
          </p>
          <p><strong>Email:</strong> enea@eneacoachingprofesional.es</p>
          <p><strong>WhatsApp:</strong> +34 696 667 110</p>
        </div>

        {/* Formulario */}
        <div className="contacto-form">
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="tel" placeholder="Teléfono" required />
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit" className="btn-enviar">Enviar</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contacto;
