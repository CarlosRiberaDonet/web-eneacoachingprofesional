import React from "react";
import "../styles/Footer.css";
import SocialBar from "./SocialBar";
import { FaYoutube, FaInstagram, FaLinkedin, FaTiktok, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* 🔹 Sección Izquierda - Presentación */}
        <div className="footer-left">
         
          <h2>VICENTE MONTOLÍO IZQUIERDO</h2>
          <p>
            esta es la breve descripcion de vicents
          </p>
          <div className="social-icons">
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaFacebook /></a>
          </div>
        </div>

        {/*  Sección Central - Servicios */}
        <div className="footer-center">
          <h3>Mis servicios</h3>
          <ul className="service-list">
            <li>Eneagrama</li>
            <li>Coaching</li>
            <li>EneaCoaching</li>
          </ul>
        </div>

        {/* 🔹 Sección Derecha - Contacto */}
        <div className="footer-right">
          <h3>Contacta</h3>
          <p>📧 hola@eneacoaching.es</p>
          <p>📞 +34 623 14 83 91</p>
        </div>
      </div>

      {/* 🔹 Sección Inferior - Logos y Créditos */}
      <div className="footer-logos">
        <img src="/images/logo.png" alt="eneacoavhingprofesional" />
        <img src="/images/curso.png" alt="International Eneagram Association" />
        <img src="/images/upv.png" alt="IEA España" />
      </div>
      <p className="footer-copyright">© Vicente Montolío Izquierdo 2025</p>
    </footer>
  );
};

export default Footer;

