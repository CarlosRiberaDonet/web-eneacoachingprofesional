import React from "react";
import "../styles/Footer.css";
import SocialBar from "./SocialBar";
import '../styles/global/ButtonStyles.css';

import { FaYoutube, FaInstagram, FaLinkedin, FaTiktok, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/*  Sección Izquierda - Presentación */}
        <div className="footer-left">
          <h2>
            <Link to="/vicente" className="footer-link">VICENTE MONTOLÍO IZQUIERDO</Link>
          </h2>
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
            <li><Link to="/eneagrama" className="footer-link">Eneagrama</Link></li>
            <li><Link to="/coaching" className="footer-link">Coaching</Link></li>
            <li><Link to="/eneacoaching" className="footer-link">EneaCoaching</Link></li>
          </ul>
        </div>

        {/*  Sección Derecha - Contacto */}
        <div className="footer-right">
          <h3>Contacta</h3>
          <p><a href="mailto:hola@eneacoaching.es" className="footer-link">📧 hola@eneacoaching.es</a></p>
          <p><a href="tel:+34623148391" className="footer-link">📞 +34 623 14 83 91</a></p>
        </div>
      </div>

      {/*  Sección Inferior - Logos y Créditos */}
      <div className="footer-logos">
        <img src="/images/logo.png" alt="eneacoachingprofesional" />
        <img src="/images/curso.png" alt="International Eneagram Association" />
        <img src="/images/upv.png" alt="IEA España" />
      </div>
      <p className="footer-copyright">© Vicente Montolío Izquierdo 2025</p>
    </footer>
  );
};

export default Footer;
