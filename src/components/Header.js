import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

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

  // Manejar el scroll para hacer el header sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${isSticky ? "sticky" : ""}`}>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
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
            <Link to="#" onClick={() => toggleDropdown("eneagrama")}>Eneagrama ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="#">¿Qué es?</Link></li>
              <li><Link to="#">¿Para qué sirve?</Link></li>
              <li><Link to="#">Los 9 tipos de personalidad</Link></li>
              <li><Link to="#">Curso básico eneagrama</Link></li>
              <li><Link to="#">Eneagrama para empresas</Link></li>
              <li><Link to="#">Otras aplicaciones</Link></li>
            </ul>
          </li>

          {/* Dropdown Coaching */}
          <li className={`dropdown ${activeDropdown === "coaching" ? "active" : ""}`}>
            <Link to="#" onClick={() => toggleDropdown("coaching")}>Coaching ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="#">¿Qué es?</Link></li>
              <li><Link to="#">¿Para qué sirve?</Link></li>
              <li><Link to="#">Sesiones individuales</Link></li>
              <li><Link to="#">Coaching para empresas</Link></li>
              <li><Link to="#">Otras aplicaciones</Link></li>
            </ul>
          </li>

          {/* Dropdown EneaCoaching */}
          <li className={`dropdown ${activeDropdown === "eneacoaching" ? "active" : ""}`}>
            <Link to="#" onClick={() => toggleDropdown("eneacoaching")}>EneaCoaching ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="#">¿Qué es?</Link></li>
              <li><Link to="#">¿Para qué sirve?</Link></li>
              <li><Link to="#">EneaCoaching Profesional</Link></li>
              <li><Link to="#">EneaCoaching Esencial</Link></li>
              <li><Link to="#">EneaCoaching para parejas</Link></li>
            </ul>
          </li>

          <li><Link to="/sobre-mi">Sobre mí</Link></li>
          <li><Link to="/testimonios">Testimonios</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
