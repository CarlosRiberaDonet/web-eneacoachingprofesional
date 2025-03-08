import React from "react";
import "../styles/Contacto.css";

const Contacto = () => {
  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <p>Déjanos tu mensaje y te responderemos lo antes posible.</p>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;