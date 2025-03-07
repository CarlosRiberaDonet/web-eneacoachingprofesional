import React, { useState } from "react";
import "../styles/Header.css"; // Asegúrate de crear este archivo de estilos

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el menú en móviles
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="main-header">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <a href="#">
            <img src="/images/logo.png" alt="Logo" className="logo-img" />
          </a>
        </div>

        {/* Botón de menú para móviles */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
          ☰
        </button>

        {/* Enlaces de navegación */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre mí</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Testimonios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;