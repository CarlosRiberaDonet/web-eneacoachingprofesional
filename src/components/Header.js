import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Header.css";
import '../styles/global/ButtonStyles.css';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  // Alternar menú en móviles
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Alternar dropdowns
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Cerrar el menú después de hacer clic en un enlace
  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMenuOpen(false);
  };

  // Manejar el scroll para hacer el header sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el desplegable al hacer clic fuera del menú
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
    <header className={`main-header ${isSticky ? "sticky" : ""}`}>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/images/logo.png" alt="Logo Eneacoaching" className="logo-img" />
          </Link>
        </div>

        {/* Botón de menú para móviles */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
          ☰
        </button>

        {/* Menú de navegación */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          {/* Dropdown Eneagrama */}
          <li className={`dropdown ${activeDropdown === "eneagrama" ? "active" : ""}`}>
            <Link to="/eneagrama" onClick={() => toggleDropdown("eneagrama")}>Eneagrama ▾</Link>
            <ul className="dropdown-menu">
              <li><HashLink smooth to="/eneagrama#que-es" onClick={handleLinkClick}>¿Qué es?</HashLink></li>
              <li><HashLink smooth to="/eneagrama#para-que-sirve" onClick={handleLinkClick}>¿Para qué sirve?</HashLink></li>
              <li><HashLink smooth to="/eneagrama#tipos-eneagrama" onClick={handleLinkClick}>Los 9 tipos de personalidad</HashLink></li>
              <li><HashLink smooth to="/curso#curso-basico" onClick={handleLinkClick}>Curso básico de Eneagrama</HashLink></li>
              <li><HashLink smooth to="/curso#eneagrama-empresas" onClick={handleLinkClick}>Eneagrama para empresas</HashLink></li>
              <li><HashLink smooth to="/curso#otros" onClick={handleLinkClick}>Otras aplicaciones</HashLink></li>
            </ul>
          </li>

          {/* Dropdown Coaching */}
          <li className={`dropdown ${activeDropdown === "coaching" ? "active" : ""}`}>
            <Link to="/curso" onClick={() => toggleDropdown("coaching")}>Coaching ▾</Link>
            <ul className="dropdown-menu">
              <li><HashLink smooth to="/curso#curso-basico" onClick={handleLinkClick}>¿Qué es?</HashLink></li>
              <li><HashLink smooth to="/curso#eneagrama-empresas" onClick={handleLinkClick}>¿Para qué sirve?</HashLink></li>
              <li><HashLink smooth to="/curso#sesiones-individuales" onClick={handleLinkClick}>Sesiones individuales</HashLink></li>
              <li><HashLink smooth to="/curso#coaching-empresas" onClick={handleLinkClick}>Coaching para empresas</HashLink></li>
              <li><HashLink smooth to="/curso#otros" onClick={handleLinkClick}>Otras aplicaciones</HashLink></li>
            </ul>
          </li>
          {/* Dropdown EneaCoaching */}
          <li className={`dropdown ${activeDropdown === "eneacoaching" ? "active" : ""}`}>
            <Link to="/curso" onClick={() => toggleDropdown("eneacoaching")}>EneaCoaching ▾</Link>
            <ul className="dropdown-menu">
              <li><HashLink smooth to="/curso#curso-basico" onClick={handleLinkClick}>¿Qué es?</HashLink></li>
              <li><HashLink smooth to="/curso#eneagrama-empresas" onClick={handleLinkClick}>¿Para qué sirve?</HashLink></li>
              <li><HashLink smooth to="/curso#eneacoaching-profesional" onClick={handleLinkClick}>EneaCoaching Profesional</HashLink></li>
              <li><HashLink smooth to="/curso#eneacoaching-esencial" onClick={handleLinkClick}>EneaCoaching Esencial</HashLink></li>
              <li><HashLink smooth to="/curso#eneacoaching-parejas" onClick={handleLinkClick}>EneaCoaching para parejas</HashLink></li>
            </ul>
          </li>

          <Link to="/vicente" onClick={handleLinkClick}>Sobre mí</Link>
          <Link to="/contacto" onClick={handleLinkClick}>Contacto</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

