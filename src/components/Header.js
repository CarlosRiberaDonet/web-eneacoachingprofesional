import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Usar Link en lugar de <a>
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Función para alternar el menú en móviles
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para manejar el scroll y agregar la clase sticky
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
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
          <li className="dropdown">
            <Link to="#">Eneagrama ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="#">¿Qué es?</Link></li>
              <li><Link to="#">¿Para qué sirve?</Link></li>
              <li><Link to="#">Los tipos de personalidad</Link></li>
              <li><Link to="#">Curso básico de eneagrama</Link></li>
              <li><Link to="#">Otros talleres/Cursos</Link></li>
            </ul>
          </li>

          {/* Dropdown Coaching */}
          <li className="dropdown">
            <Link to="#">Coaching ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="#">¿Qué es?</Link></li>
              <li><Link to="#">¿Para qué sirve?</Link></li>
              <li><Link to="#">Sesiones Individuales</Link></li>
              <li><Link to="#">Coaching para empresas</Link></li>
              <li><Link to="#">Talleres/Cursos</Link></li>
            </ul>
          </li>

          {/* Dropdown Eneacoaching */}
          <li className="dropdown">
            <Link to="#">EneaCoaching ▾</Link>
            <ul className="dropdown-menu">
              <li><Link to="#">¿Qué es?</Link></li>
              <li><Link to="#">¿Para qué sirve?</Link></li>
              <li><Link to="#">EneaCoaching Profesional</Link></li>
              <li><Link to="#">EneaCoaching Esencial</Link></li>
            </ul>
          </li>
          <li><Link to="/sobre-mi">Sobre mí</Link></li>
          <li><Link to="#">Testimonios</Link></li>
          <li><Link to="/contacto">Blog</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
