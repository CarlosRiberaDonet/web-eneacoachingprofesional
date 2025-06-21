import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "../styles/SocialBar.css";
const SocialBar = () => {
  return (
    <section className="social-bar">
      <div className="social-container">
        {/*  Redes Sociales */}
        <div className="social-icons">
          <a href="https://wa.link/f7o11t" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/vicentemontoliocoach/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://es.linkedin.com/in/vicente-montol%C3%ADo-izquierdo-a878111a6" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        {/*  Teléfono */}
        <div className="phone-number">
        <a href="tel:+34696667110" className="phone-number">696 667 110</a>
        </div>
      </div>
    </section>
  );
};

export default SocialBar;
