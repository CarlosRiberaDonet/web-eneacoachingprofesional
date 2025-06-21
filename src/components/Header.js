import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Header.css";
import '../styles/global/ButtonStyles.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMenuOpen(false);
    window.scrollTo(0, 0); // Desplazar al principio de la página
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar") && !event.target.closest(".menu-toggle")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className={`custom-main-header ${isSticky ? "sticky" : ""}`}>
      <nav className="custom-navbar">
        <div className="custom-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/images/logo.png" alt="Logo Eneacoaching" className="custom-logo-img" />
          </Link>
        </div>

        <button className="custom-menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
          ☰
        </button>

        <ul className={`custom-nav-links ${menuOpen ? "active" : ""}`}>
             <li>
              <Link to="/" onClick={handleLinkClick}>Inicio</Link>
            </li>
          <li className={`custom-dropdown ${activeDropdown === "eneagrama" ? "active" : ""}`}>
            <Link to="/eneagrama" onClick={() => {toggleDropdown("eneagrama"); window.scrollTo(0, 0)}}>Eneagrama ▾</Link>
            <ul className="custom-dropdown-menu">
              <li><HashLink smooth to="/eneagrama#que-es-eneagrama" onClick={handleLinkClick}>¿Qué es?</HashLink></li>
              <li><HashLink smooth to="/eneagrama#para-que-eneagrama" onClick={handleLinkClick}>¿Para qué sirve?</HashLink></li>
              <li><HashLink smooth to="/eneagrama#tipos-eneagrama" onClick={handleLinkClick}>Los 9 tipos de personalidad</HashLink></li>
              <li><HashLink smooth to="/eneagrama#curso-basico" onClick={handleLinkClick}>Curso básico eneagrama</HashLink></li>
              <li><HashLink smooth to="/eneagrama#eneagrama-empresas" onClick={handleLinkClick}>Eneagrama para empresas</HashLink></li>
              <li><HashLink smooth to="/eneagrama#otras-aplicaciones" onClick={handleLinkClick}>Otras aplicaciones</HashLink></li>
            </ul>
          </li>

          <li className={`custom-dropdown ${activeDropdown === "coaching" ? "active" : ""}`}>
            <Link to="/coaching" onClick={() => {toggleDropdown("coaching"); window.scrollTo(0, 0)}}>Coaching ▾</Link>
            <ul className="custom-dropdown-menu">
              <li><HashLink smooth to="/coaching#que-es-coaching" onClick={handleLinkClick}>¿Qué es?</HashLink></li>
              <li><HashLink smooth to="/coaching#para-que-coaching" onClick={handleLinkClick}>¿Para qué sirve?</HashLink></li>
              <li><HashLink smooth to="/coaching#sesiones-individuales" onClick={handleLinkClick}>Sesiones individuales</HashLink></li>
              <li><HashLink smooth to="/coaching#coaching-empresas" onClick={handleLinkClick}>Coaching para empresas</HashLink></li>
            </ul>
          </li>

          <li className={`custom-dropdown ${activeDropdown === "eneacoaching" ? "active" : ""}`}>
            <Link to="/eneacoaching" onClick={() => {toggleDropdown("eneacoaching"); window.scrollTo(0, 0)}}>EneaCoaching ▾</Link>
            <ul className="custom-dropdown-menu">
              <li><HashLink smooth to="/eneacoaching#que-es-eneacoaching" onClick={handleLinkClick}>¿Qué es?</HashLink></li>
              <li><HashLink smooth to="/eneacoaching#para-que-eneacoaching" onClick={handleLinkClick}>Beneficios EneaCoaching</HashLink></li>
              <li><HashLink smooth to="/eneacoaching#eneacoaching-profesional" onClick={handleLinkClick}>EneaCoaching Profesional</HashLink></li>
              <li><HashLink smooth to="/eneacoaching#eneacoaching-esencial" onClick={handleLinkClick}>EneaCoaching Esencial</HashLink></li>
              <li><HashLink smooth to="/eneacoaching#eneacoaching-parejas" onClick={handleLinkClick}>EneaCoaching para Parejas</HashLink></li>
            </ul>
          </li>

          <li>
            <Link to="/vicente" onClick={handleLinkClick}>Sobre mí</Link>
          </li>
          <li>
            <Link to="/contacto" onClick={handleLinkClick}>Contacto</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
