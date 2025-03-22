import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/SocialBar.css"; // Importamos los estilos

const SocialBar = () => {
  return (
    <section className="social-bar">
      <div className="social-container">
        {/*  Redes Sociales */}
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
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
