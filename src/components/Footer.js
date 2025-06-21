import React from "react";
import "../styles/Footer.css";
import { FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Sección Izquierda - Presentación */}
        <div className="footer-left-section">
          <h2>
            <Link to="/vicente" className="footer-link">VICENTE MONTOLÍO IZQUIERDO</Link>
          </h2>
          <div className="social-icons-footer">
            <a href="https://wa.link/f7o11t" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/vicentemontoliocoach/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="#" className="footer-link"><FaYoutube /></a>
            <a href="https://es.linkedin.com/in/vicente-montol%C3%ADo-izquierdo-a878111a6" className="footer-link"><FaLinkedin /></a>
          </div>
        </div>

        {/* Sección Central - Servicios */}
        <div className="footer-center-section">
          <h3>Mis servicios</h3>
          <ul className="service-list">
            <li><Link to="/eneagrama" className="footer-link">Eneagrama</Link></li>
            <li><Link to="/coaching" className="footer-link">Coaching</Link></li>
            <li><Link to="/eneacoaching" className="footer-link">EneaCoaching</Link></li>
          </ul>
        </div>

        {/* Sección Derecha - Contacto */}
        <div className="footer-right-section">
          <h3>Contacta</h3>
          <p><a href="Vicente@eneacoachingprofesional.es" className="footer-link">📧 Vicente@eneacoachingprofesional.es</a></p>
          <p><a href="tel:+34623148391" className="footer-link">📞 696 667 110</a></p>
        </div>
      </div>

      {/* Sección Inferior - Logos y Créditos */}
      <div className="footer-logos-section">
        <img src="/images/logo.png" alt="eneacoachingprofesional" />
        <img src="/images/curso.png" alt="International Eneagram Association" />
        <img src="/images/upv.png" alt="IEA España" />
      </div>
      <p className="footer-copyright">© Vicente Montolío Izquierdo 2025</p>
    </footer>
  );
};

export default Footer;
